import { Layout } from '@/app/components/Layout/Layout';
import { Contact } from '@/app/components/Contact/Contact';
import { Typewriter } from '@/app/components/Typewriter/Typewriter';
import { LayoutLink } from '@/app/components/LayoutLink/LayoutLink';
import { ProjectAbout } from '@/app/components/ProjectAbout/ProjectAbout';
import { Paragraph } from '@/app/components/Paragraph/Paragraph';
import { Conclusion } from '@/app/components/Conclusion/Conclusion';
import { Inference } from '@/app/components/Inference/Inference';

import styles from './page.module.scss';
import { LayoutGallery } from '@/app/components/LayoutGallery/LayoutGallery';
import Image from 'next/image';
import { YTInfo } from '@/app/teacher-growth/components/YTInfo/YTInfo';
import { DesignImprovement } from '@/app/teacher-growth/components/DesignImprovement/DesignImprovement';

export default function Page() {
  return (
    <Layout>
      <Layout.Row>
        <Typewriter Component="h1" className={styles.title}>
          <mark>A Mobile App Concept</mark> Featuring Online Courses Created by Teachers
        </Typewriter>
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <Image src="/images/teacher-growth/block-1-1.png" width={900} height={580} alt="" />
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <Paragraph maxWidth={532}>
          <p>
            Many teachers have <mark>knowledge and materials</mark> that are very <mark>useful and interesting</mark>{' '}
            for a&nbsp;large number of&nbsp;people
          </p>
        </Paragraph>
      </Layout.Row>
      <Layout.Row>
        <YTInfo />
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <Image src="/images/teacher-growth/block-2-1.png" width={900} height={503} alt="" />
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <Image src="/images/teacher-growth/block-2-2.png" width={900} height={474} alt="" />
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <Paragraph maxWidth={532}>
          <p>
            <mark>At&nbsp;first, I&nbsp;planned</mark> to&nbsp;design a&nbsp;mobile app concept where teachers can share{' '}
            <mark>courses with students</mark>
          </p>
        </Paragraph>
      </Layout.Row>
      <Layout.Row>
        <Conclusion
          title="But after researching, I found that:"
          content={[
            <>100% teachers learn online courses by&nbsp;themselves</>,
            <>80% want to&nbsp;learn new skills to&nbsp;improve their classes</>,
          ]}
        />
      </Layout.Row>
      <Layout.Row>
        <Paragraph maxWidth={496}>
          <p>
            Based on&nbsp;this data, <mark> I&nbsp;enhanced the concept</mark> to&nbsp;include courses not only for{' '}
            students
          </p>
        </Paragraph>
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <LayoutGallery.Cell onDesktop>
              <Image src="/images/teacher-growth/block-3-1-desktop.png" width={900} height={682} alt="" />
            </LayoutGallery.Cell>
            <LayoutGallery.Cell onMobile>
              <Image src="/images/teacher-growth/block-3-1-mobile.png" width={320} height={363} alt="" />
            </LayoutGallery.Cell>
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <Paragraph maxWidth={496}>
          <p>
            <mark>Designed prototypes</mark> where&nbsp;I quickly tested my&nbsp;ideas and different logics
          </p>
        </Paragraph>
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <LayoutGallery.Cell onDesktop>
              <Image src="/images/teacher-growth/block-4-1-desktop.png" width={900} height={682} alt="" />
            </LayoutGallery.Cell>
            <LayoutGallery.Cell onMobile>
              <Image src="/images/teacher-growth/block-4-1-mobile.png" width={340} height={367} alt="" />
            </LayoutGallery.Cell>
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <Paragraph maxWidth={522}>
          <p>
            In&nbsp;the design process, I&nbsp;discovered that&nbsp;I could{' '}
            <mark>integrate&nbsp;AI to&nbsp;enhance the efficiency</mark> of&nbsp;the learning process
          </p>
        </Paragraph>
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row onDesktop>
            <LayoutGallery.Cell>
              <Image src="/images/teacher-growth/block-8-1-desktop.png" width={900} height={160} alt="" />
            </LayoutGallery.Cell>
          </LayoutGallery.Row>
          <LayoutGallery.Row onDesktop>
            <LayoutGallery.Cell>
              <Image src="/images/teacher-growth/block-8-2-desktop.png" width={900} height={160} alt="" />
            </LayoutGallery.Cell>
          </LayoutGallery.Row>
          <LayoutGallery.Row onMobile>
            <LayoutGallery.Cell>
              <Image src="/images/teacher-growth/block-8-1-mobile.png" width={641} height={958} alt="" />
            </LayoutGallery.Cell>
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <Paragraph maxWidth={483}>
          <p>
            I&nbsp;had <mark>several ideas</mark> for this&nbsp;AI notification widget, so&nbsp;I decided to&nbsp;
            <mark>test</mark> these ideas <mark>with users</mark> to&nbsp;choose the best one
          </p>
        </Paragraph>
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <LayoutGallery.Cell onDesktop>
              <Image src="/images/teacher-growth/block-5-1-desktop.png" width={900} height={798} alt="" />
            </LayoutGallery.Cell>
            <LayoutGallery.Cell onMobile>
              <Image src="/images/teacher-growth/block-5-1-mobile.png" width={335} height={399} alt="" />
            </LayoutGallery.Cell>
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <Paragraph maxWidth={483}>
          <p>
            In&nbsp;the app, we&nbsp;can choose <mark>regular courses</mark> and also select{' '}
            <mark>specific teachers</mark> that we&nbsp;are searching for
          </p>
        </Paragraph>
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <LayoutGallery.Cell onDesktop>
              <Image src="/images/teacher-growth/block-6-1-desktop.png" width={900} height={1494} alt="" />
            </LayoutGallery.Cell>
            <LayoutGallery.Cell onMobile>
              <Image src="/images/teacher-growth/block-6-1-mobile.png" width={340} height={689} alt="" />
            </LayoutGallery.Cell>
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <Paragraph maxWidth={463}>
          <p>
            After completing the general user flows, I&nbsp;conduct additional,{' '}
            <mark>non-moderated usability tests</mark>
          </p>
        </Paragraph>
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <LayoutGallery.Cell onDesktop>
              <Image src="/images/teacher-growth/block-7-1-desktop.png" width={900} height={704} alt="" />
            </LayoutGallery.Cell>
            <LayoutGallery.Cell onMobile>
              <Image src="/images/teacher-growth/block-7-1-mobile.png" width={320} height={300} alt="" />
            </LayoutGallery.Cell>
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <DesignImprovement />
      </Layout.Row>
      <Layout.Row>
        <Inference>
          <mark>I&nbsp;noticed a&nbsp;problem</mark> in&nbsp;the market and couldn&rsquo;t find a&nbsp;solution.{' '}
          That&rsquo;s why&nbsp;I decided to&nbsp;create{' '}
          <mark>my&nbsp;own concept version to&nbsp;address this issue</mark>
        </Inference>
      </Layout.Row>
      <Layout.Row>
        <Typewriter>
          <mark>Other works</mark>
        </Typewriter>
        <Layout.Gap size={40} />
        <LayoutLink>
          <LayoutLink.Row>
            <ProjectAbout variant="COURSE_CONSTRUCTOR" size="xl" />
          </LayoutLink.Row>
          <LayoutLink.Row>
            <ProjectAbout variant="EDU_MARKETPLACE" />
            <ProjectAbout variant="IVR_PLATFORM" size="sm" />
          </LayoutLink.Row>
        </LayoutLink>
      </Layout.Row>
      <Layout.Row>
        <Contact />
      </Layout.Row>
    </Layout>
  );
}
