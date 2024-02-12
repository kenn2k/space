import clsx from "clsx";
import { useState } from "react";

import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Container from "../../UI/Container";

const Header = () => {
  const [isSideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    {
      labe: "Home",
      link: "/",
    },
    {
      labe: "Exploring the Cosmos",
      link: "/space",
    },
    {
      labe: "About",
      link: "/about",
    },
    {
      labe: "Sign In",
      link: "/register",
    },
  ];
  return (
    <nav className="relative z-10 p-4 bg-bg text-text px-[5%] ">
      <Container>
        <div className="flex items-center justify-between gap-8">
          <div className="flex">
            <section className="flex items-center gap-4">
              <FiMenu
                onClick={() => setMenu(true)}
                className="text-3xl cursor-pointer lg:hidden"
              />

              <Link to={"/"} className="hidden font-mono text-2xl md:block">
                someName
              </Link>
            </section>
          </div>
          <div className="flex gap-4">
            {navlinks.map((d, i) => (
              <Link
                key={i}
                className="hidden p-2 font-bold transition border border-solid lg:block rounded-xl hover:ease-in hover:bg-hoverBg hover:text-hoverText "
                to={d.link}
              >
                {d.labe}
              </Link>
            ))}
          </div>
        </div>

        <div
          className={clsx(
            " fixed h-1/3 w-full lg:hidden bg-bg  backdrop-blur-sm top-0 right-0  -translate-y-full  transition-all ",
            isSideMenuOpen && "translate-y-0"
          )}
        >
          <section className=" absolute top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-full gap-[0.5rem] p-4 px-[5%] text-black bg-white">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="self-start mt-0 mb-8 text-3xl cursor-pointer"
            />

            {navlinks.map((d, i) => (
              <Link
                key={i}
                className="w-full p-2 mx-auto font-bold text-center border border-solid rounded-xl hover:ease-in hover:bg-hoverBg hover:text-hoverText"
                to={d.link}
              >
                {d.labe}
              </Link>
            ))}
          </section>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
