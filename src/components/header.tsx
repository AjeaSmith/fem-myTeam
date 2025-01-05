"use client";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "./ui/buttons/primary-button";
import MenuToggleButtons from "./menu-toggle";
import { useMenu } from "@/lib/context/menu-context";
import Overlay from "./overlay";

const Header = () => {
  const { isMenuOpen } = useMenu();
  return (
    <header>
      <Overlay />

      <div className="container flex items-center justify-between px-6 pt-12 sm:justify-start sm:space-x-[48px] sm:px-[40px] xl:px-0">
        <Image src="/assets/logo.svg" alt="logo" width={128} height={48} />

        {/* Regular Menu for Tablet and Larger Screens */}
        <nav className="hidden items-center sm:flex sm:w-full sm:justify-between">
          <div className="space-x-10">
            <Link href="/" className="text-white hover:text-primary-coral">
              home
            </Link>
            <Link href="/about" className="text-white hover:text-primary-coral">
              about
            </Link>
          </div>
          <Link href="/contact">
            <PrimaryButton mode="light" title="Contact Us" state="hover" />
          </Link>
        </nav>

        {/* Hamburger Menu for Mobile Screens */}
        <MenuToggleButtons
          openMenuImage={
            <Image
              src="/assets/icon-hamburger.svg"
              alt="hamburger menu"
              width={20}
              height={17}
            />
          }
        />
      </div>

      {/* Slide-In Menu for Mobile Screens */}
      <div
        className={`fixed right-0 top-0 z-10 h-full w-[255px] transform bg-secondary-green-500 text-white transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } sm:hidden`}
      >
        <MenuToggleButtons
          closeMenuImage={
            <Image
              src="/assets/icon-close.svg"
              alt="close"
              width={20}
              height={17}
            />
          }
        />

        <nav className="flex flex-col items-start space-y-6 px-10 pt-32">
          <Link href="/" className="text-white">
            home
          </Link>
          <Link href="/about" className="mb-8 text-white">
            about
          </Link>
          <Link href="/contact">
            <PrimaryButton mode="light" title="Contact Us" />
          </Link>
        </nav>

        <Image
          src="/assets/bg-pattern-about-1-mobile-nav-1.svg"
          alt="hero image"
          width={255}
          height={255}
          className="absolute bottom-0 left-[8rem]"
        />
      </div>
    </header>
  );
};

export default Header;
