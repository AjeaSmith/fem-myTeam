import Image from "next/image";
import PrimaryButton from "../ui/buttons/primary-button";

const FooterCTA = () => {
  return (
    <div className="relative overflow-hidden bg-primary-coral">
      <section className="container grid place-content-center place-items-center gap-6 py-[83px] text-center text-secondary-green-700 md:grid-cols-[2fr_,.90fr]">
        <h3 className="h3 md:text-[32px] xl:text-[48px]">
          Ready to get started?
        </h3>
        <PrimaryButton
          title="Contact us"
          mode="dark"
          className="max-w-[160px] border-secondary-green-700"
        />
        <Image
          className="absolute -bottom-5 -left-2"
          src="/assets/bg-pattern-home-6-about-5.svg"
          alt="presentation"
          width={200}
          height={144}
        />
      </section>
    </div>
  );
};

export default FooterCTA;
