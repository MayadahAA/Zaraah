import img from "../assets/logo.svg";

function Footer() {
  return (
    <div>
      <footer className="bg-white border-t-2 py-5">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <a href="/" className="flex items-center justify-center sm:mb-0">
              <img src={img} className="h-20 mr-3" alt="Flowbite Logo" />
            </a>
          <div className="sm:flex sm:items-center sm:justify-between flex items-center justify-between">
              <span className="self-center text-2xl font-semibold whitespace-nowrap items-center">
                Zaraah
              </span>
            <ul className="flex flex-wrap items-center flex-row text-sm font-medium  text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="/" className="mr-4 hover:underline md:mr-6 flex">
                  Home
                </a>
              </li>
              <li> 
                <a href="/" className="mr-4 hover:underline md:mr-6 flex">
                  About
                </a>
                </li>
            </ul>
          </div>
          <div className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
