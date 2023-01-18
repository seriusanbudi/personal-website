import useTime from "@/hooks/useTime";

import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMoonOutline,
  IoSunnyOutline,
} from "react-icons/io5";

const socials = [
  {
    key: "github",
    link: "https://github.com/seriusanbudi",
    icon: <IoLogoGithub />,
  },
  {
    key: "linkedin",
    link: "https://www.linkedin.com/in/budiharta/",
    icon: <IoLogoLinkedin />,
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

const SplitAndSpread = (props: { children: string }) => {
  const { children } = props;
  const words = children.split("");

  return (
    <div className="w-full flex justify-between">
      {words.map((word, i) => (
        <span key={`word-${word}-${i}`}>{word}</span>
      ))}
    </div>
  );
};

const HomePage = () => {
  const { date, time, isNight } = useTime();

  return (
    <div className="h-screen w-full flex flex-col md:flex-row items-center justify-between p-10 md:p-20">
      <div className="w-full flex justify-center md:hidden">
        <div className="w-full max-w-[295px] h-[40px] flex items-center">
          <div className="bg-black flex-1 h-full text-white mr-1 p-2 text-sm flex items-center justify-center">
            {date}
          </div>
          <div className="bg-black flex-none w-[80px] h-full text-white mr-1 p-2 text-sm flex items-center justify-center">
            {time}
          </div>
          <div className="bg-black text-white h-[40px] w-[40px] flex items-center justify-center">
            {isNight ? <IoMoonOutline /> : <IoSunnyOutline />}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row justify-center md:justify-between md:items-center">
        <div className="w-full max-w-[295px] md:max-w-[520px]">
          <div className="text-4xl md:text-7xl font-bold mb-4 w-full">
            <SplitAndSpread>BUDIHARTA</SplitAndSpread>
            <SplitAndSpread>FRONTEND</SplitAndSpread>
            <div className="flex justify-between items-center">
              <div className="w-[35%] md:w-[180px] mr-6">
                <SplitAndSpread>WEB</SplitAndSpread>
              </div>
              <div className="h-[10px] md:h-[20px] flex-1 bg-black" />
            </div>
            <SplitAndSpread>DEV3LOPER</SplitAndSpread>
          </div>
          <div className="flex justify-end md:justify-start">
            {socials.map((social) => (
              <a
                key={social.key}
                href={social.link}
                target="_blank"
                className="p-2 hover:bg-black hover:text-white text-lg md:text-2xl"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <a
            href="mailto:budiharta_21@live.com"
            className="text-xl border-4 w-full max-w-[295px] border-black py-4 px-20 text-center font-bold hover:bg-black hover:text-white"
          >
            CONTACT
          </a>
        </div>
      </div>

      <div className="flex w-full justify-center md:hidden">
        <a
          href="mailto:budiharta_21@live.com"
          className="text-xl border-4 w-full max-w-[295px] border-black py-4 text-center font-bold hover:bg-black hover:text-white"
        >
          CONTACT
        </a>
      </div>
    </div>
  );
};

export default HomePage;
