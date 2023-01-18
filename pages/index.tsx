import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
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
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-full px-20 h-fit flex justify-between">
        <div>
          <div className="text-7xl font-bold mb-8">
            <SplitAndSpread>BUDIHARTA</SplitAndSpread>
            <SplitAndSpread>FRONTEND</SplitAndSpread>
            <div className="flex justify-between items-center">
              <div className="w-[180px] mr-6">
                <SplitAndSpread>WEB</SplitAndSpread>
              </div>
              <div className="h-[20px] flex-1 bg-black" />
            </div>
            <SplitAndSpread>DEV3LOPER</SplitAndSpread>
          </div>
          <div className="grid grid-cols-4 gap-2 w-[200px]">
            {socials.map((social) => (
              <a
                key={social.key}
                href={social.link}
                target="_blank"
                className="p-2 hover:bg-black hover:text-white text-2xl"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <a
              href="mailto:budiharta_21@live.com"
              className="text-4xl border-4 border-black py-6 px-20 font-bold hover:bg-black hover:text-white"
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
