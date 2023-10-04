import React, { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6 "
      } fixed w-full z-10 transition-all shadow-md`}
    >
      <div>
        <Link href={"/"}>
          <h1 className="text-3xl font-bold text-center">Modern Walk</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
