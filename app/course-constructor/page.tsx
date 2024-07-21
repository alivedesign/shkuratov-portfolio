import { Layout } from '@/app/components/Layout/Layout';
import { Contact } from '@/app/components/Contact/Contact';
import { Typewriter } from '@/app/components/Typewriter/Typewriter';
import { LayoutLink } from '@/app/components/LayoutLink/LayoutLink';
import { ProjectAbout } from '@/app/components/ProjectAbout/ProjectAbout';
import { Paragraph } from '@/app/components/Paragraph/Paragraph';
import { Conclusion } from '@/app/components/Conclusion/Conclusion';
import { Inference } from '@/app/components/Inference/Inference';
import { HeroLanding } from '@/app/components/HeroLanding/HeroLanding';
import { ImageWithDescription } from '@/app/components/ImageWithDescription/ImageWithDescription';
import { LayoutGallery } from '@/app/components/LayoutGallery/LayoutGallery';
import Image from 'next/image';
import { StatisticsResult } from '@/app/components/StatisticsResult/StatisticsResult';
import { Stats } from '@/app/course-constructor/components/Stats/Stats';

export default function Page() {
  return (
    <Layout>
      <Layout.Row>
        <HeroLanding
          title={
            <>
              The Online Course Constructor <mark>for 6M Teachers</mark>
            </>
          }
          ytID="pUnE73ij0oc"
          statistics={[
            { count: '1 000 000+', text: 'Graduated students' },
            { count: '6 000 000+', text: 'Active teachers' },
            { count: '30 days', text: 'Project Time' },
          ]}
        />
      </Layout.Row>
      <Layout.Row>
        <Paragraph maxWidth={542}>
          <p>
            Teachers on&nbsp;our platform found it&nbsp;
            <mark>difficult to&nbsp;create and share their online courses.</mark>
          </p>
          <p>
            Imagine <mark>ten&rsquo;s thousands of&nbsp;teachers struggle</mark> with creating their online courses and
            company <mark>lose more than a&nbsp;million dollars</mark> each quarter in&nbsp;revenue
          </p>
          <p>Let me&nbsp;show you how&nbsp;I solved this problem with our Online Course Constructor</p>
        </Paragraph>
      </Layout.Row>
      <Layout.Row>
        <ImageWithDescription
          imagePath="/images/course-constructor/block-1-1.png"
          imageWidth={900}
          imageHeight={620}
          text={
            <>
              During <mark>3&nbsp;workshop sessions with stakeholders</mark>, I&nbsp;prioritized goals and tasks for the
              business
            </>
          }
        />
      </Layout.Row>
      <Layout.Row>
        <Conclusion
          title="Key insights after workshops"
          content={[
            <>
              <mark>Monetization</mark> based on commissions charged to&nbsp;teachers who generate revenue{' '}
              by&nbsp;selling their courses
            </>,
            <>
              <mark>Further monetizing</mark> our 21&nbsp;million monthly active users through new courses
            </>,
            <>
              Paid <mark>course promotion</mark> tools within our platform
            </>,
            <>
              Expanding our <mark>ecosystem</mark> of&nbsp;educational products
            </>,
          ]}
        />
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <Image src="/images/course-constructor/block-2-1.png" width={900} height={1231} alt="" />
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <Paragraph maxWidth={516}>
          <p>
            Design the <mark>information architecture</mark> and build high-fidelity prototypes
          </p>
        </Paragraph>
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <Image src="/images/course-constructor/block-3-1.png" width={900} height={535} alt="" />
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <LayoutGallery.Cell>
              <Image src="/images/course-constructor/block-3-2.png" width={286} height={102} alt="" />
            </LayoutGallery.Cell>
            <LayoutGallery.Cell>
              <Image src="/images/course-constructor/block-3-3.png" width={286} height={102} alt="" />
            </LayoutGallery.Cell>
            <LayoutGallery.Cell>
              <Image src="/images/course-constructor/block-3-4.png" width={286} height={102} alt="" />
            </LayoutGallery.Cell>
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <LayoutGallery.Cell>
              <Image src="/images/course-constructor/block-3-5.png" width={438} height={349} alt="" />
            </LayoutGallery.Cell>
            <LayoutGallery.Cell>
              <Image src="/images/course-constructor/block-3-6.png" width={438} height={349} alt="" />
            </LayoutGallery.Cell>
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <Paragraph maxWidth={571}>
          <p>
            After conducting usability testing on&nbsp;our newly created flows, we&nbsp;discovered that the card-view{' '}
            structure had a&nbsp;task{' '}
            <mark>success rate of&nbsp;under&nbsp;50% and teachers experienced difficulties</mark>
          </p>
        </Paragraph>
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <LayoutGallery.Cell>
              <Image src="/images/course-constructor/block-4-1.png" width={438} height={584} alt="" />
            </LayoutGallery.Cell>
            <LayoutGallery.Cell>
              <Image src="/images/course-constructor/block-4-2.png" width={438} height={584} alt="" />
            </LayoutGallery.Cell>
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <Paragraph maxWidth={575}>
          <p>
            I&rsquo;ve decided to&nbsp;<mark>conduct further research</mark> based on&nbsp;the pain points identified{' '}
            during usability testing
          </p>
        </Paragraph>
      </Layout.Row>
      <Layout.Row>
        <Conclusion
          title="Key insights after research"
          content={[
            <>
              During the pandemic, teachers shifted to&nbsp;digital platforms and began{' '}
              <mark>using services such as&nbsp;Interacty and Google Slides</mark>
            </>,
            <>
              Teachers are <mark>used to&nbsp;working with tables</mark>, school documents, class registers, and{' '}
              preparing lesson plans in table view
            </>,
          ]}
        />
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <Image src="/images/course-constructor/block-5-1.png" width={900} height={394} alt="" />
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <LayoutGallery.Cell>
              <Image src="/images/course-constructor/block-5-2.png" width={438} height={225} alt="" />
            </LayoutGallery.Cell>
            <LayoutGallery.Cell>
              <Image src="/images/course-constructor/block-5-3.png" width={438} height={225} alt="" />
            </LayoutGallery.Cell>
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <Paragraph maxWidth={494}>
          <p>
            Based on&nbsp;this data, I&nbsp;created <mark>new iterations of&nbsp;prototypes</mark>
          </p>
        </Paragraph>
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <Image src="/images/course-constructor/block-6-1.png" width={900} height={498} alt="" />
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <Image src="/images/course-constructor/block-6-2.png" width={900} height={103} alt="" />
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <LayoutGallery.Cell>
              <Image src="/images/course-constructor/block-6-3.png" width={438} height={364} alt="" />
            </LayoutGallery.Cell>
            <LayoutGallery.Cell>
              <Image src="/images/course-constructor/block-6-4.png" width={438} height={364} alt="" />
            </LayoutGallery.Cell>
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <Image src="/images/course-constructor/block-6-5.png" width={900} height={511} alt="" />
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <StatisticsResult
          title={
            <>
              <span>50%</span> <mark>-&gt; 75%</mark>
            </>
          }
          text={
            <>
              <mark>Task success rate</mark> after the new usability tests
            </>
          }
        />
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <Typewriter Component="h3">
              <mark>Final Design</mark>
            </Typewriter>
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <Image src="/images/course-constructor/block-7-1.png" width={900} height={643} alt="" />
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <Image src="/images/course-constructor/block-7-2.png" width={900} height={198} alt="" />
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <LayoutGallery.Cell>
              <Image src="/images/course-constructor/block-7-3.png" width={438} height={327} alt="" />
            </LayoutGallery.Cell>
            <LayoutGallery.Cell>
              <Image src="/images/course-constructor/block-7-4.png" width={438} height={327} alt="" />
            </LayoutGallery.Cell>
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <Stats />
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <Image src="/images/course-constructor/block-8-1.png" width={900} height={903} alt="" />
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <Image src="/images/course-constructor/block-8-2.png" width={900} height={157} alt="" />
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <LayoutGallery.Cell>
              <Image src="/images/course-constructor/block-8-3.png" width={438} height={444} alt="" />
            </LayoutGallery.Cell>
            <LayoutGallery.Cell>
              <Image src="/images/course-constructor/block-8-4.png" width={438} height={444} alt="" />
            </LayoutGallery.Cell>
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <Image src="/images/course-constructor/block-8-5.png" width={900} height={548} alt="" />
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <Inference>
          The <mark>key lesson</mark>&nbsp;I personally learned from this case is&nbsp;that{' '}
          <mark>&rsquo;WE ARE NOT THE USER&rsquo;</mark> Even if&nbsp;everyone on&nbsp;the team likes the design,{' '}
          we&nbsp;still need to&nbsp;test it&nbsp;with REAL users
        </Inference>
      </Layout.Row>
      <Layout.Row>
        <Typewriter>
          <mark>Other works</mark>
        </Typewriter>
        <Layout.Gap size={40} />
        <LayoutLink>
          <LayoutLink.Row>
            <ProjectAbout variant="EDU_MARKETPLACE" />
            <ProjectAbout variant="TEACHER_GROWTH" />
          </LayoutLink.Row>
          <LayoutLink.Row>
            <ProjectAbout variant="IVR_PLATFORM" size="xl" />
          </LayoutLink.Row>
        </LayoutLink>
      </Layout.Row>
      <Layout.Row>
        <Contact />
      </Layout.Row>
    </Layout>
  );
}
