import SectionHeading from "@/components/section-heading";
import { HOMELIST, TESTIMONIALS } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        className="absolute -inset-24 top-16 hidden xl:top-[13rem] xl:block"
        src="/assets/bg-pattern-home-1.svg"
        alt="presentation"
        width={200}
        height={200}
      />

      <div className="container grid place-items-center gap-[97px] md:gap-[157px]">
        <SectionHeading>
          <h1 className="h1 | mx-auto sm:leading-[56px] md:max-w-[10ch] xl:max-w-[170ch] xl:leading-[100px]">
            Find the best <span className="text-primary-coral">talent</span>
          </h1>

          <div className="xl:grid xl:gap-[79px] xl:place-self-center">
            <div className="hidden xl:block xl:w-[40px] xl:border-b-4 xl:border-secondary-green-400" />
            <p className="body-font2 xl:body-font opacity-80 xl:max-w-[375px]">
              Finding the right people and building high performing teams can be
              hard. Most companies aren’t tapping into the abundance of global
              talent. We’re about to change that.
            </p>
          </div>
        </SectionHeading>
        <Image
          className="xl:place-self-end"
          src="/assets/bg-pattern-home-2.svg"
          alt="presentation"
          width={358}
          height={100}
          priority={true}
        />
      </div>

      <section className="relative overflow-hidden bg-secondary-green-700">
        <Image
          className="absolute -right-[98px] xl:bottom-0 xl:place-self-end"
          src="/assets/bg-pattern-home-3.svg"
          alt="presentation"
          width={200}
          height={244}
        />
        <div className="container grid gap-[56px] py-[64px] md:gap-[64px] md:py-[100px] xl:grid-cols-[.90fr_,auto] xl:place-content-between xl:place-items-start xl:gap-8">
          <div className="grid gap-8">
            <div className="w-[40px] border-b-4 border-primary-coral" />
            <h3 className="h3 max-w-[11ch] md:max-w-[25ch] md:text-[32px] xl:text-[48px] xl:leading-[48px]">
              Build & manage distributed teams like no one else.
            </h3>
          </div>

          <div>
            <ul className="grid gap-12">
              {HOMELIST.map((item) => (
                <li
                  key={item.id}
                  className="grid place-items-center gap-4 text-center md:grid-cols-[auto_,1fr] md:place-items-start md:gap-[23px] md:text-left"
                >
                  <Image
                    src={item.url}
                    alt="presentation"
                    width={72}
                    height={72}
                  />
                  <div className="space-y-2 md:max-w-[44ch] xl:max-w-[42ch]">
                    <p className="text-primary-coral">{item.title}</p>
                    <p className="body-font2 opacity-75">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary-green-600">
        <Image
          src="/assets/bg-pattern-home-4-about-3.svg"
          alt="presentation"
          width="147"
          height="100"
          priority={false}
        />
        <div className="container grid gap-12 mb-[8rem]">
          <h3 className="h3 mx-auto mb-12 mt-10 text-center lg:max-w-[30ch] lg:leading-[48px] xl:max-w-[32ch]">
            Delivering real results for top companies. Some of our
            <span className="text-secondary-green-400"> success stories.</span>
          </h3>

          <div className="z-10">
            <ul className="grid gap-[5.5rem] xl:grid-cols-3 xl:gap-[30px]">
              {TESTIMONIALS.map((item) => (
                <li className="grid gap-4 xl:gap-6" key={item.id}>
                  <div className="relative grid place-items-center text-center">
                    <Image
                      className="pointer-events-none absolute inset-x-0 -top-9 left-[40%] md:left-[44%] lg:left-[46%]"
                      src="/assets/icon-quotes.svg"
                      alt="quotes icon"
                      width="67"
                      height="56"
                      priority={false}
                    />
                    <p className="body-font2 z-10 md:max-w-[60ch]">
                      {item.quote}
                    </p>
                  </div>
                  <div className="grid place-items-center gap-4 xl:gap-6">
                    <div className="text-center">
                      <p className="text-secondary-green-400">{item.name}</p>
                      <small className="mb-2 font-normal italic">
                        {item.position}
                      </small>
                    </div>
                    <div>
                      <Image
                        className="rounded-full border-2 border-[#C4FFFE]"
                        src={item.avatar}
                        width={62}
                        height={62}
                        priority={false}
                        alt={item.name}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Image
        className="absolute bottom-0 right-0"
          src="/assets/bg-pattern-home-5.svg"
          alt="presentation"
          width="147"
          height="100"
          priority={false}
        />
      </section>

      {/* TODO: CTA and Footer components */}
      {/* 


  Ready to get started?

  contact us



  home
  about

  987  Hillcrest Lane
  Irvine, CA
  California 92714
  Call Us : 949-833-7432

  Copyright 2020. All Rights Reserved</> */}
    </>
  );
}
