import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer/SiteFooter";
import { SiteHeader } from "@/components/layout/site-header/SiteHeader";
import { ProjectContent } from "@/features/projects/components/project-content/ProjectContent";
import {
  getProjectBySlug,
  projects,
} from "@/features/projects/data/mock";
import { getProjectContent } from "@/features/projects/lib/project-content";
import styles from "./style.module.scss";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const content = await getProjectContent(project.slug).catch(() => undefined);

  if (!content) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <article className={styles.article}>
          <Link className={styles.backLink} href="/projects">
            프로젝트 목록으로
          </Link>
          <header className={styles.header}>
            <div className={styles.meta}>
              <span>{project.period}</span>
              <span>{project.role}</span>
            </div>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.summary}>{project.summary}</p>
            <ul className={styles.tags} aria-label={`${project.title} 기술 스택`}>
              {project.tags.map((tag) => (
                <li className={styles.tag} key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </header>

          <div className={styles.contentLayout}>
            <div className={styles.contentColumn}>
              <ProjectContent blocks={content} />
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
