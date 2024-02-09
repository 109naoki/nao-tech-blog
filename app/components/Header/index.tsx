"use client";
import Link from "next/link";
import { FC, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

type Category = {
  categoryId: string;
  categoryName: string;
  count: number;
};

type HeaderProps = {
  categories: Category[];
};

export const Header: FC<HeaderProps> = ({ categories }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <header>
      <div>
        <Link href="/">
          <Image src="/icon.png" width={80} height={60} alt="アイコン画像" />
        </Link>

        {/* <MenuIcon
          fontSize="large"
          onClick={openMenu}
          className="white-menu-icon"
          tabIndex={0}
        />
        {menuOpen && (
          <div className="menu-content">
            {categories.map((category) => (
              <div key={category.categoryName}>
                <Link href={category.categoryId}>
                  {category.categoryName} ({category.count})
                </Link>
              </div>
            ))}
          </div>
        )} */}
      </div>
    </header>
  );
};
