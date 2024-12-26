import hotelwebsite from "../assets/portfolio/hotel.jpg";
import urlShortener from "../assets/portfolio/url.jpg";
import neemaCollections from "../assets/portfolio/neemacollections.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: hotelwebsite,
      demohref: "https://rayal-park-livid.vercel.app/",
      codefref: "https://github.com/CodeLordGh/RayalPark",
    },
    {
      id: 2,
      src: urlShortener,
      demohref: "https://url-shortener-navy-seven.vercel.app/",
      codefref: "https://github.com/CodeLordGh/url-shortener",
    },
    {
      id: 3,
      src: neemaCollections,
      demohref: "https://neemacollections.vercel.app/",
      codefref: "https://github.com/CodeLordGh/neemacollections",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black
    to-gray-500 w-full text-white md:h-screen"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col 
      justify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
            border-gray-500"
          >
            Portfolio
          </p>
          <p className="py-6">Checkout some of my work right here</p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3
        gap-8 px-12 sm:px-0"
        >
          {portfolios.map(({ id, src, codefref, demohref }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt="reactWeather"
                  className="rounded-md
                                duration-300 hover:scale-105 h-80"
                />
                <div className="flex items-center justify-center">
                  <button
                    className="w12 px-6 py-3 m-4 duration-200 
                                    hover:scale-150"
                  >
                    <a target="_blank" rel="noreferrer" href={demohref}>
                      Demo
                    </a>
                  </button>
                  <button
                    className="w12 px-6 py-3 m-4 duration-200 
                                    hover:scale-150"
                  >
                    <a href={codefref} rel="noreferrer" target="_blank">
                      Code
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
