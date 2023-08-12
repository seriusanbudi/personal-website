"use client";

import HackerText from "components/HackerText";
import { IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";
import { motion } from "framer-motion";

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

const HomePage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-[295px] md:max-w-[520px]">
        <div className="text-4xl md:text-7xl font-bold mb-4 w-full">
          {["BUDIHARTA", "FRONTEND", "WEB", "DEV3LOPER"].map((text, i) => (
            <div className="overflow-hidden" key={i}>
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: (0.2 * i) / 5, duration: 0.2 }}
              >
                <HackerText>{text}</HackerText>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <div className="flex items-center w-full">
            <div className="w-full h-[4px] bg-black mr-2" />
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
