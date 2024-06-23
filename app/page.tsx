import { Contact } from '@/app/components/Contact/Contact';
import { Layout } from '@/app/components/Layout/Layout';
import { About } from '@/app/components/About/About';
import { Experience } from '@/app/components/Experience/Experience';
import { ProjectAbout } from '@/app/components/ProjectAbout/ProjectAbout';

export default function Page() {
  return (
    <Layout>
      <Layout.Row>
        <Experience />
      </Layout.Row>
      <Layout.Row>
        <ProjectAbout variant="COURSE_CONSTRUCTOR" size="xl" />
      </Layout.Row>
      <Layout.Row flex>
        <ProjectAbout variant="EDU_MARKETPLACE" />
        <ProjectAbout variant="TEACHER_GROWTH" />
      </Layout.Row>
      <Layout.Row>
        <About />
      </Layout.Row>
      <Layout.Row>
        <ProjectAbout variant="IVR_PLATFORM" size="xl" />
      </Layout.Row>
      <Layout.Row>
        <Contact />
      </Layout.Row>
    </Layout>
  );
}
