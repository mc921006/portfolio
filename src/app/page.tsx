import { SiteFooter } from "@/components/layout/site-footer/SiteFooter";
import { SiteHeader } from "@/components/layout/site-header/SiteHeader";
import { Button } from "@/components/ui/button/Button";
import { Section } from "@/components/ui/section/Section";
import { ExperienceList } from "@/features/experience/components/experience-list/ExperienceList";
import { ProjectList } from "@/features/projects/components/project-list/ProjectList";
import { projects } from "@/features/projects/data/mock";
import styles from "./style.module.scss";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Frontend Developer</p>
            <div className={styles.title}>Mincheol Jeon</div>
            <p className={styles.description}>
              유지보수하기 쉬운 구조와
              <br />
              확장 가능한 프론트엔드를 고민합니다.
              <br />
              <br />
              새로운 기술을 배우고 적용하며
              <br />더 나은 서비스를 만들기 위해 꾸준히 개발하고 있습니다.
            </p>
            <div className={styles.actions}>
              <Button href="/projects">프로젝트 보기</Button>
              <Button href="https://github.com/" variant="secondary">
                GitHub
              </Button>
            </div>
          </div>

          <aside className={styles.snapshot} aria-label="개발자 정보 요약">
            <h2 className={styles.snapshotTitle}>WHOAMI</h2>
            <dl className={styles.whoamiList}>
              <div className={styles.whoamiRow}>
                <dt>Role</dt>
                <dd>Frontend Developer</dd>
              </div>
              <div className={styles.whoamiRow}>
                <dt>Stack</dt>
                <dd>Next.js · React · TypeScript</dd>
              </div>
              <div className={styles.whoamiRow}>
                <dt>Focus</dt>
                <dd>Blockchain · AI</dd>
              </div>
              <div className={styles.whoamiRow}>
                <dt>Status</dt>
                <dd>Learning &amp; Building</dd>
              </div>
            </dl>
          </aside>
        </section>

        <div id="featured-projects">
          <Section
            eyebrow="Selected Work"
            title="대표 프로젝트"
            description="실무 경험과 개인 프로젝트를 통해 개발한 대표 작업"
          >
            <div className={styles.featuredActions}>
              <Button href="/projects" variant="secondary">
                전체보기
              </Button>
            </div>
            <ProjectList projects={projects.slice(0, 3)} />
          </Section>
        </div>

        <div id="experience">
          <Section
            eyebrow="Experience"
            title="경험"
            description="다양한 프로젝트를 통해 쌓아온 실무 경험"
          >
            <ExperienceList />
          </Section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
