import heroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen pt-20 w-full bg-gradient-to-b from-black
     via-black to-gray-900"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center
        justify-center  px-4 md:flex-row"
      >
        <div className="flex flex-col my-auto h-full">
          <h2 className="text-4xl sm:text-7xl sm:pt-8 font-bold text-white">
            I am a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am an ALX SE Program graduate, passionate about learning and
            building software. I have a strong foundation in HTML, CSS,
            JavaScript, React, Vue, Tailwind CSS, C, Python. I am also a quick
            learner and I am always eager to take on new challenges.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 
              flex items-center rounded-md bg-gradient-to-r from-gray-500 to-blue-500
              cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:shadow-lg rounded-2xl md:shadow-gray-400">
          <img
            src={heroImage}
            alt="hero profile"
            className="rounded-2xl
            mx-auto w-2/3 h-72 md:w-full md:h-full bg-gradient-to-br from-blue-600
            to-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
