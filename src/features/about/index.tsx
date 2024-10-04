import { TwitterLogo, LinkedinLogo, GithubLogo } from "@phosphor-icons/react";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 mx-auto">
      <div className="container">
        <div className="p-6 mx-auto">
          <h3 className="mb-2 text-xl font-semibold text-center">
            Doug Silkstone
          </h3>
          <p className="mb-4 text-center">
            Full Stack Developer and Professional Corner Cutter
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://x.com/dougsilkston0"
              target="_blank"
              className="hover:opacity-70"
            >
              <TwitterLogo size={24} />
            </a>
            <a
              href="https://linkedin.com/in/dougsilkstone"
              target="_blank"
              className="hover:opacity-70"
            >
              <LinkedinLogo size={24} />
            </a>
            <a
              href="https://github.com/dougwithseismic/framer-plugin-tw"
              target="_blank"
              className="hover:opacity-70"
            >
              <GithubLogo size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
