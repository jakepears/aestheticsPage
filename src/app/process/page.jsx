import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section
      title="Discover"
      image={{
        src: 'https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: '1920',
        height: '2876',
      }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Treat yourself to the journey of discovery with our personalized
          esthetician services. I begin by intimately understanding your
          skin&apos;s unique needs and aspirations, delving deep into what makes
          your complexion thrive.
        </p>
        <p>
          The process involves meticulous observation and analysis, akin to a
          detective unraveling clues. I closely examine your skin&apos;s
          condition, lifestyle factors, and preferences to craft a tailored plan
          that&apos;s as unique as you are.
        </p>
        <p>
          With my expert guidance, you&apos;ll embark on a transformative
          experience, uncovering the secrets to radiant, healthy skin that truly
          reflects your inner beauty.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Personalized skin analysis</TagListItem>
        <TagListItem>Customized treatment plan</TagListItem>
        <TagListItem>Expert skincare recommendations</TagListItem>
        <TagListItem>Professional guidance and support</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section
      title="Build"
      image={{
        src: 'https://images.unsplash.com/photo-1597143722151-6c041d7b2901?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: '1920',
        height: '2400',
        shape: 1,
      }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Building upon the insights gained during the discovery phase, we
          embark on a journey of transformation, crafting a bespoke skincare
          regimen tailored to your unique needs.
        </p>
        <p>
          Our skilled estheticians meticulously select the finest ingredients
          and techniques, blending science with artistry to create formulations
          that nourish, repair, and rejuvenate your skin.
        </p>
        <p>
          With our personalized approach, you&apos;ll witness the gradual
          unfolding of radiant, healthy skin, as we guide you through each step
          of your skincare journey with care and expertise.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Studio were so regular with their progress updates we almost began to
        think they were automated!
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section
      title="Deliver"
      image={{
        src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: '1920',
        height: '1280',
        shape: 2,
      }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          As we approach the final stage of your skincare journey, we prepare to
          deliver results that exceed your expectations, transforming your skin
          and boosting your confidence.
        </p>
        <p>
          Our commitment to excellence drives us to meticulously refine and
          perfect every aspect of your skincare experience, ensuring that you
          receive nothing but the finest treatments and outcomes.
        </p>
        <p>
          With our dedicated support and guidance, you&apos;ll emerge from our
          studio with a newfound radiance and vitality, ready to face the world
          with confidence and grace.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Final skincare treatment">
          Experience the culmination of our efforts with a luxurious,
          rejuvenating skincare treatment tailored to your unique needs.
        </ListItem>
        <ListItem title="Personalized skincare regimen">
          Receive a customized skincare regimen designed to maintain and enhance
          your results, ensuring long-lasting radiance and vitality.
        </ListItem>
        <ListItem title="Ongoing support and guidance">
          Benefit from our continued support and guidance as you integrate your
          new skincare routine into your daily life, empowering you to maintain
          your radiant complexion.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro eyebrow="Our values" title="Guiding Principles">
        <p>
          Our values serve as the compass guiding every aspect of my esthetician
          services. I am committed to upholding these principles in everything
          we do, ensuring that my clients receive the highest level of care and
          satisfaction.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            Approach every skincare treatment with meticulous attention to
            detail, ensuring that each step is executed with precision and care
            to achieve optimal results.
          </GridListItem>
          <GridListItem title="Efficient">
            Efficiency is key to my operations, allowing me to deliver timely
            and effective skincare solutions without compromising on quality.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every client is unique, which is why I adapt my treatments and
            techniques to accommodate individual preferences and skin types.
          </GridListItem>
          <GridListItem title="Honest">
            Transparency is the foundation of my client relationships. I believe
            in open communication and honesty, providing clear explanations and
            recommendations for every skincare concern.
          </GridListItem>
          <GridListItem title="Loyal">
            Dedication to client satisfaction goes beyond the initial treatment.
            I strive to build long-term relationships based on trust, loyalty,
            and exceptional service.
          </GridListItem>
          <GridListItem title="Innovative">
            Innovation drives my quest for excellence. I stay abreast of the
            latest skincare advancements and techniques, constantly seeking new
            ways to enhance and improve my services.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How it works">
        <p>
          My commitment to efficiency and value drives every aspect of our
          esthetician services. I strive to optimize resources and streamline
          processes to ensure that my clients receive the highest quality
          treatments and results. One core strategy involves leveraging
          expertise and experience to refine and perfect a select portfolio of
          treatments, honed over years of dedication and refinement.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
