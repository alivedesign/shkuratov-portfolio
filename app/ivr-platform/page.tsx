import { Layout } from '@/app/components/Layout/Layout';
import { Contact } from '@/app/components/Contact/Contact';
import { Typewriter } from '@/app/components/Typewriter/Typewriter';
import { LayoutLink } from '@/app/components/LayoutLink/LayoutLink';
import { ProjectAbout } from '@/app/components/ProjectAbout/ProjectAbout';
import { Paragraph } from '@/app/components/Paragraph/Paragraph';
import { Inference } from '@/app/components/Inference/Inference';
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
              <mark>IVR Platform</mark> that Generated <mark>$500K+ Revenue</mark> in its First Year
            </>
          }
          vimeoID="6yoCtv5jol4"
        />
      </Layout.Row>
      <Layout.Row>
        <Paragraph maxWidth={542}>
          <p>
            My&nbsp;client had IVR technology, and my&nbsp;task was to{' '}
            <mark>design a&nbsp;platform for users to&nbsp;interact with&nbsp;AI robots</mark>
          </p>
          <p>
            IVR involves <mark>complicated logic</mark>, and there were almost no&nbsp;competitors in&nbsp;the market
          </p>
          <p>
            Additionally, the client had a&nbsp;<mark>limited budget and a&nbsp;tight deadline</mark> for this project
          </p>
        </Paragraph>
      </Layout.Row>
      <Layout.Row></Layout.Row>
      <Layout.Row>
        <Paragraph maxWidth={542}>
          <p>
            Begin by&nbsp;collecting information and designing the <mark>information architecture</mark>
          </p>
        </Paragraph>
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <Image src="/images/ivr-platform/block-1-1.png" width={900} height={1512} alt="" />
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <Paragraph maxWidth={542}>
          <p>
            Due to&nbsp;budget constraints and a&nbsp;tight deadline, I&nbsp;conducted only{' '}
            <mark>corridor tests in&nbsp;the office</mark>
          </p>
        </Paragraph>
      </Layout.Row>
      <Layout.Row></Layout.Row>
      <Layout.Row>
        <Paragraph maxWidth={542}>
          <p>
            Considering all constraints, <mark>I&nbsp;created a&nbsp;roadmap</mark> for my&nbsp;design process
          </p>
        </Paragraph>
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <Image src="/images/ivr-platform/block-2-1.png" width={900} height={392} alt="" />
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
            <Image src="/images/ivr-platform/block-3-1.png" width={900} height={740} alt="" />
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <LayoutGallery.Cell>
              <Image src="/images/ivr-platform/block-3-2.png" width={438} height={461} alt="" />
            </LayoutGallery.Cell>
            <LayoutGallery.Cell>
              <Image src="/images/ivr-platform/block-3-3.png" width={438} height={461} alt="" />
            </LayoutGallery.Cell>
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <Paragraph maxWidth={542}>
          <p>
            <mark>The most challenging</mark> aspect was the interface of&nbsp;the <mark>call constructor</mark>
          </p>
        </Paragraph>
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <Image src="/images/ivr-platform/block-4-1.png" width={900} height={436} alt="" />
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <LayoutGallery.Cell>
              <Image src="/images/ivr-platform/block-4-2.png" width={438} height={507} alt="" />
            </LayoutGallery.Cell>
            <LayoutGallery.Cell>
              <Image src="/images/ivr-platform/block-4-3.png" width={438} height={507} alt="" />
            </LayoutGallery.Cell>
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <Image src="/images/ivr-platform/block-4-4.png" width={900} height={438} alt="" />
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <Paragraph maxWidth={542}>
          <p>
            I&#39;ve developed a&nbsp; <mark>design system</mark> comprising over 800 components to{' '}
            <mark>facilitate future growth</mark> and accelerate frontend development
          </p>
        </Paragraph>
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <Image src="/images/ivr-platform/block-5-1.png" width={900} height={1002} alt="" />
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <Image src="/images/ivr-platform/block-5-2.png" width={900} height={1226} alt="" />
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <Typewriter Component="h3">
          <mark>Final Design</mark>
        </Typewriter>
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <Image src="/images/ivr-platform/block-6-1.png" width={900} height={715} alt="" />
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <LayoutGallery.Cell>
              <Image src="/images/ivr-platform/block-6-2.png" width={438} height={256} alt="" />
            </LayoutGallery.Cell>
            <LayoutGallery.Cell>
              <Image src="/images/ivr-platform/block-6-3.png" width={438} height={256} alt="" />
            </LayoutGallery.Cell>
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <Image src="/images/ivr-platform/block-7-1.png" width={900} height={528} alt="" />
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <Image src="/images/ivr-platform/block-8-1.png" width={900} height={436} alt="" />
          </LayoutGallery.Row>
          <LayoutGallery.Row>
            <LayoutGallery.Cell>
              <Image src="/images/ivr-platform/block-8-2.png" width={438} height={212} alt="" />
            </LayoutGallery.Cell>
            <LayoutGallery.Cell>
              <Image src="/images/ivr-platform/block-8-3.png" width={438} height={212} alt="" />
            </LayoutGallery.Cell>
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <LayoutGallery>
          <LayoutGallery.Row>
            <Image src="/images/ivr-platform/block-9-1.png" width={900} height={534} alt="" />
          </LayoutGallery.Row>
        </LayoutGallery>
      </Layout.Row>
      <Layout.Row>
        <Inference textSize="lg">
          In&nbsp;just <mark>38&nbsp;days</mark>, I&nbsp;designed an&nbsp;IVR platform that generated over{' '}
          <mark>$500K in&nbsp;revenue</mark> during its first year. Thanks to&nbsp;a&nbsp;robust{' '}
          <mark>design system</mark>, we&rsquo;ve been able to&nbsp;sustain growth and successfully test new hypotheses
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
            <ProjectAbout variant="TEACHER_GROWTH" />
          </LayoutLink.Row>
        </LayoutLink>
      </Layout.Row>
      <Layout.Row>
        <Contact />
      </Layout.Row>
    </Layout>
  );
}
