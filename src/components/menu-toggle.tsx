"use client";

import { useMenu } from "@/lib/context/menu-context";

type MenuToggleProps = {
  openMenuImage?: React.ReactNode;
  closeMenuImage?: React.ReactNode;
};

const MenuToggleButtons = ({
  openMenuImage,
  closeMenuImage,
}: MenuToggleProps) => {
  const { toggleMenu } = useMenu();

  if (openMenuImage) {
    return (
      <button onClick={toggleMenu} className="focus:outline-none sm:hidden">
        {openMenuImage}
      </button>
    );
  }
  return (
    <button
      onClick={toggleMenu}
      className="absolute right-6 top-14 focus:outline-none"
    >
      {closeMenuImage}
    </button>
  );
};

export default MenuToggleButtons;
