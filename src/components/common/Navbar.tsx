import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "admin",
      link: "/admin",
    },
    {
      title: "Login",
      link: "/login",
    },
  ];
  return (
    <nav className="  dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            className="w-8 h-8 mr-2 rounded-full"
            src="https://png.pngtree.com/png-vector/20201212/ourmid/pngtree-hello-world-quote-lettering-typography-png-image_2553040.jpg"
            alt="logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Hello World
          </span>
        </NavLink>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button>
        </div>
        <div className="flex gap-4 ">
          {navLinks.map((item, index) => (
            <ul key={index}>
              <li>
                <NavLink className={"text-decor"} to={item.link}>
                  {item.title}
                </NavLink>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
