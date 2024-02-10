import React, { useState, useEffect } from "react";
import axios from "axios";
import { HomePage } from "../../../types/types";
import Container from "../../UI/Container";

const HeaderPageItems = () => {
  const [news, setNews] = useState<HomePage | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=LirPG4ppwxd5ggDpviIYbPx1aHl0j158MFgGJDZM"
        );
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="  flex flex-col justify-center  md:items-center p-[5%] h-[calc(100vh_-_74px)] mobile">
      {news && (
        <Container>
          <div className="flex flex-col gap-[3rem] ">
            <p className="flex justify-center text-[2.3rem] custom-drop-shadow font-bold">
              {news.title}
            </p>
            <div className=" md:flex mb:flex-col md:justify-between mb:gap-[1-rem]">
              <div className="flex items-center justify-center md:w-1/2 rounded-xl">
                <div className="mb-4 ">{news.explanation}</div>
              </div>

              <div className="relative flex flex-col gap-[1rem] mb:mt-5  md:w-1/2 md:ml-4">
                <img
                  src={news.hdurl}
                  className="w-full rounded-xl"
                  alt={news.title}
                />
                <div className="absolute bottom-0 right-0 p-4 transition bg-white border border-solid  text-hoverText rounded-xl hover:text-text :duration-500">
                  <p className="">{news.copyright}</p>
                  <p className="">{news.date}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

// return (
//   <div className="">
//     {news && (
//       <Container>
//         <div className="lg:flex lg:items-center h-[calc(100vh-_72px)]">
//           {/* Компонент с описанием */}
//           <div className="p-4 lg:w-1/2 lg:text-[1.3rem] sm:text-[0.5rem]">
//             <div className="">{news.explanation}</div>
//           </div>
//           {/* Компонент с изображением, авторским правом и датой */}
//           <div className="items-center p-4 sm:flex sm:flex-col lg:w-1/2">
//             <img
//               src={news.hdurl}
//               className="object-cover object-center w-full h-auto sm:w-1/2 sm:flex "
//               alt={news.title}
//             />
//             <div className="mt-4">
//               <p className="">{news.copyright}</p>
//               <p className="">{news.date}</p>
//             </div>
//           </div>
//         </div>
//       </Container>
//     )}
//   </div>
// );

export default HeaderPageItems;
