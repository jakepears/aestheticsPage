import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'
import SmoothScroll from '@/components/SmoothScroll'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            I&apos;ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro title="Why Bray" className="mt-24 sm:mt-32 lg:mt-40">
        <p>
          I am a highly trained and experienced professional that&apos;s
          dedicated to providing you with the utmost care and attention.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Here to help you identify and explore new forms of beauty."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>Facials, Waxing, Lashes, and Eyebrow Care.</p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src="https://images.unsplash.com/photo-1643185450492-6ba77dea00f6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height="2880"
                width="1920"
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Facials">
              Indulge in a luxurious facial experience tailored to your unique
              skin concerns and aspirations. This meticulous approach ensures
              that every treatment is crafted with precision, using premium
              products and expert techniques. Whether you seek rejuvenation,
              hydration, or a radiant glow, my facials promise to leave you
              feeling refreshed, renewed, and utterly radiant.
            </ListItem>
            <ListItem title="Waxing">
              Experience the epitome of smoothness with professional waxing
              services. Skilled estheticians utilizes the latest techniques and
              highest quality products to deliver impeccable results. From brows
              to toes, we ensure a comfortable and efficient waxing experience,
              leaving your skin silky, smooth, and irresistibly touchable.
            </ListItem>
            <ListItem title="Eyelash Care">
              Elevate your natural beauty with comprehensive eyelash care
              services. From classic extensions to volume lashes, expert
              technicians are dedicated to enhancing your eyes with precision
              and care. Using premium products and meticulous attention to
              detail, we create stunning lash looks that captivate and
              mesmerize.
            </ListItem>
            <ListItem title="Eyebrow Treatment">
              Discover the power of perfectly shaped brows with tailored eyebrow
              treatments. Experienced estheticians understand that well-groomed
              brows can transform your entire look, which is why we offer
              personalized services to suit your unique preferences. Whether you
              desire shaping, tinting, or grooming, we&apos;ll sculpt your brows
              to perfection, leaving you with confidence and charisma.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description: 'I am a liscensed a.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <SmoothScroll />
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Where beauty meets expertise
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            From rejuvenating facials to advanced skin treatments, I offer a
            wide range of services tailored to your unique needs and desires
          </p>
        </FadeIn>
      </Container>

      {/* <Clients /> */}

      {/* <CaseStudies caseStudies={caseStudies} /> */}

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Noelle', logo: logoPhobiaDark }}
      >
        I&apos;ve never felt so beautiful
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
