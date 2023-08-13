import HackerText from "components/HackerText";
import { IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";

const socials = [
  {
    key: "github",
    link: "https://github.com/seriusanbudi",
    icon: <IoLogoGithub />,
  },
  {
    key: "instagram",
    link: "https://www.instagram.com/seriusanbudi/",
    icon: <IoLogoInstagram />,
  },
  {
    key: "twitter",
    link: "https://twitter.com/seriusanbudi",
    icon: <IoLogoTwitter />,
  },
];

const contactCopy = [
  "Get in touch",
  "Let's work together",
  "Let's build something cool",
];

const HomePage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-[220px] md:max-w-[420px]">
        <div className="text-4xl md:text-7xl font-bold mb-4 w-full">
          {["BUDIHARTA", "FRONTEND", "WEB", "DEV3LOPER"].map((text, i) => (
            <HackerText key={i}>{text}</HackerText>
          ))}
        </div>
        <div className="flex justify-end">
          <button className="relative whitespace-nowrap py-2 px-4 border-2 border-white mr-4 group overflow-hidden flex-none">
            <span className="text-white group-hover:text-black font-bold">
              {contactCopy[Math.floor(Math.random() * contactCopy.length)]}
            </span>
            <div className="absolute top-[100%] left-0 right-0 h-full bg-white z-[-1] group-hover:top-0 transition-all" />
          </button>
          <div className="flex items-center w-full">
            <div className="w-full h-[4px] bg-white mr-2" />
          </div>
          <div className="flex flex-none w-fit">
            {socials.map((social) => (
              <a
                key={social.key}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="p-2 relative group text-lg md:text-2xl overflow-hidden"
              >
                <span className="group-hover:text-black">{social.icon}</span>
                <div className="absolute top-[100%] left-0 right-0 h-full bg-white z-[-1] group-hover:top-0 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
