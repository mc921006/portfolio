import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer/SiteFooter";
import { SiteHeader } from "@/components/layout/site-header/SiteHeader";
import { ProjectList } from "@/features/projects/components/project-list/ProjectList";
import { projects } from "@/features/projects/data/mock";
import styles from "./style.module.scss";

export const metadata: Metadata = {
  title: "Projects",
  description: "프론트엔드 프로젝트 목록입니다.",
  openGraph: {
    title: "Projects",
    description: "프론트엔드 프로젝트 목록입니다.",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <section className={styles.content}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>Projects</p>
            <h1 className={styles.title}>프로젝트 목록</h1>
            <p className={styles.description}>
              실무 프로젝트와 개인 프로젝트를 중심으로 기술적 경험과 문제 해결
              과정을 정리했습니다.
            </p>
          </div>
          <ProjectList projects={projects} />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
