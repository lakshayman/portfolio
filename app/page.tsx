export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#201C1C] scroll-smooth">
      <div id="home" className="h-[100vh] w-[100%]">
        <nav className="border-gray-200 bg-[#201C1C] fixed w-full z-50">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="/"
              className="flex items-center space-x-4 rtl:space-x-reverse"
            >
              <img src="LM.gif" className="h-10" alt="Flowbite Logo" />
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-[#201C1C] border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 rounded md:bg-transparent md:p-0 text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#8B34E1] md:p-0 text-white"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#8B34E1] md:p-0 text-white"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#8B34E1] md:p-0 text-white"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/14csrloprWvnnj9b42dk8iUSxIt-maOKr/view?usp=sharing"
                    target="_blank"
                    className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#8B34E1] md:p-0 text-white"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="w-full h-[calc(100vh-72px)] relative flex justify-center items-center flex-col max-sm:text-2xl sm:text-5xl font-commissioner not-italic font-normal gap-3">
          <span>Hello, I am</span>
          <span className="animated-text"></span>
          <span>Always Learning!</span>
        </div>
      </div>
      <div
        id="about"
        className="w-[100%] h-[calc(628px+374px)] flex items-center flex-col relative mt-32"
      >
        <div className="w-[90%] bg-[#631DA8] h-[628px] rounded-2xl py-20 flex justify-center">
          <div className="max-w-[70%] text-justify font-commissioner not-italic font-normal max-sm:text-xs max-md:text-base max-lg:text-lg max-xl:text-xl xl:text-2xl">
            A passionate software developer based in Delhi. I graduated with a
            B.Tech in IT from Bharati Vidyapeeth College of Engineering in 2023.
            During my college years, I co-founded Blissful Minds, a mental
            health awareness club, and developed several web projects, including
            a website for our college fest, Xtasy. These experiences honed my
            technical skills and deepened my commitment to using technology to
            solve real-world problems.
          </div>
        </div>
        <div className="w-[80%] bg-[#201D1D] h-[688px] rounded-2xl py-20 flex flex-col items-center absolute top-[314px] shadow-container">
          <div className="font-commissioner font-medium not-italic max-sm:text-xl sm:text-3xl text-center">
            Technologies & Tools
          </div>
          <div className="flex flex-wrap w-[100%] font-commissioner font-normal not-italic max-sm:text-lg sm:text-2xl text-justify">
            <div className="gap-2 grow-0 shrink-0 max-md:basis-1/2 md:basis-1/3 flex flex-col justify-center items-center max-md:mt-8 md:mt-32">
              <img src="ember.svg" />
              <span>Ember JS</span>
            </div>
            <div className="gap-2 grow-0 shrink-0 max-md:basis-1/2 md:basis-1/3 flex flex-col justify-center items-center max-md:mt-8 md:mt-32">
              <img src="react.svg" />
              <span>React JS</span>
            </div>
            <div className="gap-2 grow-0 shrink-0 max-md:basis-1/2 md:basis-1/3 flex flex-col justify-center items-center max-md:mt-8 md:mt-32">
              <img src="node.svg" />
              <span>Node JS</span>
            </div>
            <div className="gap-2 grow-0 shrink-0 max-md:basis-1/2 md:basis-1/3 flex flex-col justify-center items-center max-md:mt-8 md:mt-32">
              <img src="express.svg" />
              <span>Express JS</span>
            </div>
            {/* <div className="gap-2 grow-0 shrink-0 max-md:basis-1/3 md:basis-1/4 flex flex-col justify-center items-center max-md:mt-8 md:mt-32">
              <img src="mongo.svg" />
              <span>Mongo</span>
            </div> */}
            <div className="gap-2 grow-0 shrink-0 max-md:basis-1/2 md:basis-1/3 flex flex-col justify-center items-center max-md:mt-8 md:mt-32">
              <img src="aws.svg" />
              <span>AWS</span>
            </div>
            {/* <div className="gap-2 grow-0 shrink-0 max-md:basis-1/3 md:basis-1/4 flex flex-col justify-center items-center max-md:mt-8 md:mt-32">
              <img src="netbeans.svg" />
              <span>Netbeans</span>
            </div> */}
            <div className="gap-2 grow-0 shrink-0 max-md:basis-1/2 md:basis-1/3 flex flex-col justify-center items-center max-md:mt-8 md:mt-32">
              <img src="git.svg" />
              <span>Git</span>
            </div>
          </div>
        </div>
      </div>
      <div
        id="about"
        className="w-[100%] h-[calc(628px+374px)] flex items-center flex-col relative mt-32"
      >
        <div className="w-[90%] bg-[#631DA8] h-[628px] rounded-2xl py-20 flex justify-center">
          <div className="max-w-[70%] text-justify font-commissioner not-italic font-normal max-sm:text-xs max-md:text-base max-lg:text-lg max-xl:text-xl xl:text-2xl">
            Professionally, I have worked at YUDEK, starting as an intern during
            my third year of college and being promoted to SDE after my last
            year. Outside of work, I am an active member of RealDevSquad, where
            I lead the development of the Identity Service project, and I
            participate in the Ember.js community. I also organize meetups and
            workshops for the JSLovers community in Delhi, fostering learning
            and collaboration among developers.
          </div>
        </div>
        <div className="w-[80%] bg-[#201D1D] h-[688px] rounded-2xl py-20 flex flex-col items-center absolute top-[314px] shadow-container">
          <div className="font-commissioner font-medium not-italic max-sm:text-xl sm:text-3xl text-center">
            Languages
          </div>
          <div className="flex flex-wrap w-[100%] font-commissioner font-normal not-italic max-sm:text-lg sm:text-2xl text-justify">
            <div className="gap-2 grow-0 shrink-0 max-md:basis-1/2 md:basis-1/3 flex flex-col justify-center items-center max-md:mt-8 md:mt-32">
              <img src="html.svg" />
              <span>HTML</span>
            </div>
            <div className="gap-2 grow-0 shrink-0 max-md:basis-1/2 md:basis-1/3 flex flex-col justify-center items-center max-md:mt-8 md:mt-32">
              <img src="javascript.svg" />
              <span>Javascript</span>
            </div>
            <div className="gap-2 grow-0 shrink-0 max-md:basis-1/2 md:basis-1/3 flex flex-col justify-center items-center max-md:mt-8 md:mt-32">
              <img src="cpp.svg" />
              <span>C++</span>
            </div>
            <div className="gap-2 grow-0 shrink-0 max-md:basis-1/2 md:basis-1/3 flex flex-col justify-center items-center max-md:mt-8 md:mt-32">
              <img src="go.svg" />
              <span>Golang</span>
            </div>
            <div className="gap-2 grow-0 shrink-0 max-md:basis-1/2 md:basis-1/3 flex flex-col justify-center items-center max-md:mt-8 md:mt-32">
              <img src="java.svg" />
              <span>Java</span>
            </div>
            <div className="gap-2 grow-0 shrink-0 max-md:basis-1/2 md:basis-1/3 flex flex-col justify-center items-center max-md:mt-8 md:mt-32">
              <img className="hover:scale-110" src="css.svg" />
              <span>CSS</span>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="w-[80%] flex flex-col items-center">
        <div className="font-commissioner font-medium not-italic text-3xl mt-32">
          Projects
        </div>
        <div className="h-[688px] w-full shadow-container rounded-2xl mt-8 flex flex-wrap max-md:justify-center md:justify-around items-center">
          <a
            href="https://xtasy.bvcoe.in/"
            target="_blank"
            className="max-w-[90%] cursor-pointer"
          >
            <img
              className="ease-in-out duration-500 hover:scale-105"
              src="xtasy.svg"
            />
          </a>
          <div className="w-[600px] max-w-[90%] flex flex-col gap-4">
            <span className="font-commissioner font-normal text-lg text-justify">
              Developed the official website for the college fest named Xtasy using
              React.js, providing a user-friendly platform for event
              information, schedules, and updates. Implemented a registration
              system with unique QR codes for participants, integrated with a
              mobile app for security to manage campus access efficiently.
            </span>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://xtasy.bvcoe.in/"
                target="_blank"
                className="w-max cursor-pointer bg-[#6B1DB9] font-commissioner font-normal text-2xl py-1 px-4 rounded-2xl"
              >
                Live Link
              </a>
            </div>
          </div>
        </div>
        <div className="h-[688px] w-full shadow-container rounded-2xl flex flex-wrap max-md:justify-center md:justify-around items-center">
          <a
            href="https://www.thefuelmedia.co/"
            target="_blank"
            className="max-w-[90%] cursor-pointer"
          >
            <img
              className="ease-in-out duration-500 hover:scale-105"
              src="fuelmedia.svg"
            />
          </a>
          <div className="w-[600px] max-w-[90%] flex flex-col gap-4">
            <span className="font-commissioner font-normal text-lg text-justify">
              Developed the website for The Fuel Media, a digital marketing
              agency, using React.js. The site highlights the agency's services,
              portfolio, and client testimonials with a sleek, modern design and
              responsive layout. The website effectively promotes the agency's
              digital marketing solutions.
            </span>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.thefuelmedia.co/"
                target="_blank"
                className="w-max bg-[#6B1DB9] font-commissioner font-normal text-2xl py-1 px-4 rounded-2xl"
              >
                Live Link
              </a>
            </div>
          </div>
        </div>
        <div className="h-[688px] w-full shadow-container rounded-2xl flex flex-wrap max-md:justify-center md:justify-around items-center">
          <a
            href="https://www.wallpaperworld.co.in/"
            target="_blank"
            className="max-w-[90%] cursor-pointer"
          >
            <img
              className="ease-in-out duration-500 hover:scale-105"
              src="ww.svg"
            />
          </a>
          <div className="w-[600px] max-w-[90%] flex flex-col gap-4">
            <span className="font-commissioner font-normal text-lg text-justify">
              Developed the website for Wallpaper World using React.js, creating
              an engaging and user-friendly platform for showcasing and selling
              wallpapers. The site features a modern design, intuitive
              navigation, and a comprehensive product catalog, enhancing the
              online presence and sales capabilities of the wallpaper seller.
            </span>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.wallpaperworld.co.in/"
                target="_blank"
                className="w-max bg-[#6B1DB9] font-commissioner font-normal text-2xl py-1 px-4 rounded-2xl"
              >
                Live Link
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="w-[100%] flex flex-col items-center">
        <div className="font-commissioner font-medium not-italic text-3xl mt-32">
          Contact
        </div>
        <p className="font-commissioner font-medium not-italic text-2xl text-center text-[#D0C4C4] max-w-[90%] mt-6">
          Feel free to Contact me here
        </p>
        <div className="flex flex-wrap justify-center gap-10 mt-12">
          <a href="mailto:lakshay73lakshay@gmail.com" target="_blank" className="w-max bg-[#6B1DB9] font-commissioner font-normal text-2xl py-1 px-4 rounded-2xl">
            E-Mail
          </a>
          <a href="https://x.com/lakshayman2000" target="_blank" className="w-max bg-[#6B1DB9] font-commissioner font-normal text-2xl py-1 px-4 rounded-2xl">
            Twitter
          </a>
          <a href="https://www.linkedin.com/in/lakshayman/" target="_blank" className="w-max bg-[#6B1DB9] font-commissioner font-normal text-2xl py-1 px-4 rounded-2xl">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="bg-[#631DA8] mt-32 flex justify-evenly items-center flex-wrap w-full">
        {/* <img
          src="lakshay.jpg"
          width="40%"
          className="mt-6 rounded-2xl shadow-container"
        /> */}
        <div className="h-[411px] flex py-12 flex-col justify-center items-center gap-5">
          <div className="font-commissioner font-semibold text-5xl text-[#EEEBF2]">
            LM
          </div>
          <div className="font-commissioner font-normal text-2xl text-[#FFFFFF] text-justify">
            Lakshay Manchanda
          </div>
          <div className="flex gap-10">
            <a href="https://www.instagram.com/liciouslifeoflakshay/" target="_blank"><img src="instagram.svg" /></a>
            <a href="https://www.linkedin.com/in/lakshayman/" target="_blank"><img src="linkedin.svg" /></a>
            <a href="https://github.com/lakshayman" target="_blank"><img src="github.svg" /></a>
          </div>
        </div>
      </div>
    </main>
  );
}
