import { Layout } from '@/app/components/Layout/Layout';
import { Contact } from '@/app/components/Contact/Contact';
import { Typewriter } from '@/app/components/Typewriter/Typewriter';
import { LayoutLink } from '@/app/components/LayoutLink/LayoutLink';
import { ProjectAbout } from '@/app/components/ProjectAbout/ProjectAbout';
import { Paragraph } from '@/app/components/Paragraph/Paragraph';
import { Conclusion } from '@/app/components/Conclusion/Conclusion';
import { HeroLanding } from '@/app/components/HeroLanding/HeroLanding';
import { LayoutGallery } from '@/app/components/LayoutGallery/LayoutGallery';
import Image from 'next/image';

export default function Page() {
  return (
    <Layout>
      <Layout.Row>
        <HeroLanding
          title={
            <>
              <mark>The Largest Marketplace in the CIS</mark> for educational resources created by teachers
            </>
          }
          ytID="EQ1toGGIWhM"
          statistics={[
            { count: '70 000+', text: 'Educational resources' },
            { count: '4 000+', text: 'Active publishers' },
            { count: '45 000+', text: 'Sales per month' },
          ]}
        />
      </Layout.Row>
      <Layout.Row>
        <Paragraph maxWidth={552}>
          <p>
            In&nbsp;2023, the number of&nbsp;<mark>unemployed teachers</mark> in&nbsp;Russian-speaking countries reached{' '}
            <mark>a&nbsp;record high of&nbsp;193,000 people</mark>
          </p>
          <p>
            All these teachers needed to&nbsp;find a&nbsp;<mark>way&nbsp;to&nbsp;support themselves </mark>
          </p>
          <p>
            <mark>Marketplace</mark> offers a&nbsp;<mark>solution</mark>. It&rsquo;s a&nbsp;platform where{' '}
            <mark>teachers can earn money</mark> by&nbsp;sharing their educational resources
          </p>
        </Paragraph>
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <Image src="/images/edu-marketplace/block-1-1.png" width={900} height={976} alt="" />
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <Image src="/images/edu-marketplace/block-1-2.png" width={900} height={510} alt="" />
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <Paragraph maxWidth={552}>
          <p>
            We&nbsp;made a&nbsp;successful release. The number of&nbsp;active users in&nbsp;the first month{' '}
            <mark>exceeded our expectations by&nbsp;30%.</mark>
          </p>
        </Paragraph>
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <Image src="/images/edu-marketplace/block-2-1.png" width={900} height={916} alt="" />
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <Paragraph maxWidth={552}>
          <p>
            I&nbsp;continued to&nbsp;enhance <mark>features so&nbsp;our creators can improve the quality</mark> and{' '}
            quantity of&nbsp;resources on&nbsp;the marketplace
          </p>
        </Paragraph>
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <Image src="/images/edu-marketplace/block-3-1.png" width={900} height={1731} alt="" />
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <LayoutGallery.Cell>
              <Image src="/images/edu-marketplace/block-3-2.png" width={438} height={245} alt="" />
            </LayoutGallery.Cell>
            <LayoutGallery.Cell>
              <Image src="/images/edu-marketplace/block-3-3.png" width={438} height={245} alt="" />
            </LayoutGallery.Cell>
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <Image src="/images/edu-marketplace/block-3-4.png" width={900} height={264} alt="" />
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <Conclusion
          content={[
            <>
              Added a&nbsp;<mark>statistics section</mark> for teachers to&nbsp;analyze their results
            </>,
            <>
              Implemented <mark>gamification mechanics</mark> to&nbsp;enhance engagement
            </>,
            <>
              Introduced a&nbsp;<mark>section with freelance</mark> job opportunities
            </>,
            <>
              Developed a&nbsp;<mark>rating system</mark> with various categories
            </>,
          ]}
        />
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <Image src="/images/edu-marketplace/block-4-1.png" width={900} height={1419} alt="" />
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <LayoutGallery.Cell>
              <Image src="/images/edu-marketplace/block-4-2.png" width={438} height={331} alt="" />
            </LayoutGallery.Cell>
            <LayoutGallery.Cell>
              <Image src="/images/edu-marketplace/block-4-3.png" width={438} height={331} alt="" />
            </LayoutGallery.Cell>
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <Image src="/images/edu-marketplace/block-4-4.png" width={900} height={392} alt="" />
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row></Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <LayoutGallery.Cell>
              <Image src="/images/edu-marketplace/block-5-1.png" width={438} height={421} alt="" />
            </LayoutGallery.Cell>
            <LayoutGallery.Cell>
              <Image src="/images/edu-marketplace/block-5-2.png" width={438} height={421} alt="" />
            </LayoutGallery.Cell>
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <Image src="/images/edu-marketplace/block-5-3.png" width={900} height={1196} alt="" />
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <LayoutGallery.Cell>
              <Image src="/images/edu-marketplace/block-5-4.png" width={438} height={438} alt="" />
            </LayoutGallery.Cell>
            <LayoutGallery.Cell>
              <Image src="/images/edu-marketplace/block-5-5.png" width={438} height={438} alt="" />
            </LayoutGallery.Cell>
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <Paragraph maxWidth={534}>
          <p>
            Our north star metric is&nbsp;<mark>revenue per page view</mark>
          </p>
          <p>
            Based on&nbsp;this, I&nbsp;created hypotheses and&nbsp;<mark>conducted usability tests</mark>
          </p>
        </Paragraph>
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <Image src="/images/edu-marketplace/block-6-1.png" width={900} height={435} alt="" />
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <LayoutGallery.Cell>
              <Image src="/images/edu-marketplace/block-6-2.png" width={438} height={211} alt="" />
            </LayoutGallery.Cell>
            <LayoutGallery.Cell>
              <Image src="/images/edu-marketplace/block-6-3.png" width={438} height={211} alt="" />
            </LayoutGallery.Cell>
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <Conclusion
          title="Key insights after usability tests"
          content={[
            <>
              <mark>75% of&nbsp;respondents</mark> indicated that they pay extra attention to&nbsp;<mark>authors</mark>{' '}
              who have published the resource
            </>,
            <>
              <mark>100% of&nbsp;respondents</mark> utilized the <mark>search functionality</mark> by&nbsp;the name{' '}
              or&nbsp;topic of&nbsp;the resource.
            </>,
            <>
              The <mark>estimated time</mark> for working with the resource and its <mark>volume</mark> was very{' '}
              important <mark>for&nbsp;75% of&nbsp;respondents</mark>
            </>,
            <>
              All of&nbsp;our buyers faced <mark>difficulties with previewing the content</mark> of&nbsp;resources{' '}
              created by&nbsp;teachers.
            </>,
          ]}
        />
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <Image src="/images/edu-marketplace/block-7-1.png" width={900} height={545} alt="" />
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <LayoutGallery.Cell>
              <Image src="/images/edu-marketplace/block-7-2.png" width={438} height={266} alt="" />
            </LayoutGallery.Cell>
            <LayoutGallery.Cell>
              <Image src="/images/edu-marketplace/block-7-3.png" width={438} height={266} alt="" />
            </LayoutGallery.Cell>
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <Paragraph maxWidth={571}>
          <p>
            <mark>The main challenge</mark> with the fourth insight was that we&nbsp;couldn&rsquo;t simply display all{' '}
            the material, as&nbsp;doing so&nbsp;might deter people from purchasing; instead, they might{' '}
            <mark>opt to&nbsp;steal it</mark>
          </p>
          <p>
            When hovering, <mark>we&nbsp;zoom in&nbsp;on&nbsp;the area around the cursor</mark>, while also{' '}
            <mark>blocking copying</mark> and downloading of&nbsp;the picture
          </p>
        </Paragraph>
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <Image src="/images/edu-marketplace/block-8-1.png" width={900} height={623} alt="" />
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row></Layout.Row>
      <Layout.Row>
        <Paragraph maxWidth={560}>
          <p>
            All these actions enabled&nbsp;us to&nbsp;become the{' '}
            <mark>largest marketplace with educational resources</mark> in&nbsp;the Commonwealth of&nbsp;Independent{' '}
            States.
          </p>
        </Paragraph>
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
            <ProjectAbout variant="TEACHER_GROWTH" />
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
