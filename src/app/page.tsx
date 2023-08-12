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

const SplitAndSpread = (props: { children: string }) => {
  const { children } = props;
  const words = children.split("");

  return (
    <div className="w-full flex justify-between cursor-default select-none">
      {words.map((word, i) => (
        <span key={`word-${word}-${i}`}>{word}</span>
      ))}
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
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
        <div className="flex justify-end">
          <div className="flex items-center w-full">
            <div className="w-full h-[4px] bg-black"></div>
          </div>
          <div className="flex flex-none w-fit">
            {socials.map((social) => (
              <a
                key={social.key}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="p-2 hover:bg-black hover:text-white text-lg md:text-2xl"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
