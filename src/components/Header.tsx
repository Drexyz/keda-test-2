import { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isPassHidden, setIsPassHidden] = useState(true);

  const navigations = [
    {
      id: 1,
      name: "About",
      link: "#about",
    },
    {
      id: 2,
      name: "Services",
      link: "#services",
    },
    {
      id: 3,
      name: "Contact",
      link: "#contact",
    },
  ]

  const sidebarClass = isSidebarOpen ? "translate-x-0" : "-translate-x-full";
  const loginClass = isLoginOpen ? "block" : "hidden";

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openLogin = () => {
    setIsLoginOpen(true);
  };
  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  const toggleHidePass = () => {
    setIsPassHidden(!isPassHidden);
  };

  return (
    <>
      <header className="z-10 absolute top-0 inset-x-0">
        <nav className="flex items-center justify-between px-10 py-6 md:px-20 md:py-12">
          <button
            className="md:hidden"
            onClick={openSidebar}
          >
            <img src="svg/burger-menu.svg" className="w-10 h-10" alt="burger-menu" />
          </button>

          <button className="hidden md:block bg-transparent">
            <a href="#" className="hover:text-blue-100">
              <span className="font-bold text-2xl lg:text-3xl">Home</span>
            </a>
          </button>

          <div className="flex items-center gap-8 lg:gap-16">
            <ul className="hidden md:flex items-center gap-8 lg:gap-16">
              {navigations.map((nav) => (
                <li key={nav.id}>
                  <a href={nav.link} className="text-black hover:text-gray-700">
                    <span className="font-bold text-2xl lg:text-3xl">{nav.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            <button
              className="py-3 px-8 lg:px-16 border bg-white hover:bg-blue-500 border-blue-500 text-blue-500 hover:text-white rounded-lg"
              onClick={openLogin}
            >
              <span className="font-bold">LOGIN</span>
            </button>
          </div>
        </nav>

        <div
          className={`z-50 absolute md:hidden top-0 left-0 w-screen h-screen bg-white px-10 py-6 transition duration-300 ${sidebarClass}`}
        >
          <button
            className="md:hidden"
            onClick={closeSidebar}
          >
            <img src="svg/close.svg" className="w-10 h-10" alt="burger-menu" />
          </button>

          <ul className="flex flex-col items-center h-full gap-16 py-24">
            <li>
              <a href="#" className="text-black hover:text-gray-700">
                <span onClick={closeSidebar} className="font-bold text-2xl lg:text-3xl">Home</span>
              </a>
            </li>

            {navigations.map((nav) => (
              <li key={nav.id}>
                <a href={nav.link} className="text-black hover:text-gray-700">
                  <span onClick={closeSidebar} className="font-bold text-2xl lg:text-3xl">{nav.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <div
        className={`fixed w-screen h-screen flex items-center justify-center z-50 ${loginClass}`}
      >
        <div className="w-full h-full bg-black/50 absolute inset-0" onClick={closeLogin} />

        <div className="flex flex-col gap-16 bg-gray-50 rounded-lg z-[60] px-8 py-6 min-w-96">
          <div className="flex justify-between items-center">
            <h3 className="text-4xl font-bold text-black">Login</h3>
            <button onClick={closeLogin}>
              <img src="svg/close.svg" className="w-6 h-6" alt="close-login" />
            </button>
          </div>

          <div className="flex flex-col gap-6 md:w-[535px]">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="border border-blue-300"
                required
              />
            </div>

            <div className="relative">
              <input
                type={isPassHidden ? "password" : "text"}
                placeholder="Password"
                className="border border-blue-300"
                required
              />

              <button className="absolute right-4 top-3 lg:top-5" onClick={toggleHidePass} type="button">
                <img src="svg/eye.svg" className={`w-6 h-6 ${isPassHidden ? "" : "hidden"}`} alt="unhide-icon" />
                <img src="svg/eye-off.svg" className={`w-6 h-6 ${isPassHidden ? "hidden" : ""}`} alt="hide-icon" />
              </button>
            </div>

            <button className="w-fit self-end">
              <p className="text-blue-500 hover:text-blue-600 text-sm">Forgot Password?</p>
            </button>

            <button className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors duration-300">
              <span className="font-bold">LOGIN</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;