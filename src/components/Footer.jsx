import { FaGithub, FaLinkedin, FaSuitcase } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="container mx-auto mb-6 flex justify-between px-6">
      <div>
        <Link target="_blank" to={"https://defariadev.vercel.app/es"}>
          <img src="/brand.svg" width={300} />
        </Link>
      </div>
      <div className="flex space-x-6 text-3xl text-accent">
        <Link target="_blank" to={"https://github.com/DeFariaM"}>
          <FaGithub />
        </Link>
        <Link target="_blank" to={"https://www.linkedin.com/in/mariadefaria/"}>
          <FaLinkedin />
        </Link>
        <Link target="_blank" to={"https://defariadev.vercel.app/es"}>
          <FaSuitcase />
        </Link>
      </div>
    </div>
  );
};
