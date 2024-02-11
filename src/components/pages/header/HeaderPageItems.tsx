import React, { useEffect } from "react";

import Container from "../../UI/Container";
import { useAppDispatch, useAppSelector } from "../../../features/redux-hooks";
import { fetchDailyPhoto } from "../../../features/slices/apodSlice";

const HeaderPageItems = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector((state) => state.new.data);

  useEffect(() => {
    dispatch(fetchDailyPhoto());
  }, []);

  return (
    <div className="  flex flex-col justify-center  md:items-center p-[5%] h-[calc(100vh_-_74px)] mobile">
      {news && (
        <Container>
          <div className="flex flex-col gap-[3rem] ">
            <p className="flex justify-center text-[2.3rem] custom-drop-shadow font-bold">
              Astronomy Picture of the Day
            </p>
            <div className=" md:flex mb:flex-col md:justify-between gap-10 bg-hoverBg rounded-xl hover:custom-drop-shadow  hover:transition p-4 mb:gap-[1-rem]">
              <div className="flex flex-col items-center justify-center gap-8 p-4 text-center md:w-1/2 rounded-xl">
                <p className="text-[2rem] border-b">{news.title}</p>
                <div className="mb-4 ">{news.explanation}</div>
              </div>

              <div className="relative flex flex-col gap-[1rem] mb:mt-5  md:w-1/2 md:ml-4">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={news.hdurl}
                    className="object-fill bg-cover bg-center w-full h-[40rem] rounded-xl"
                    alt={news.title}
                  />
                </div>
                <div className="absolute bottom-0 right-0 p-4 transition bg-white border border-solid text-hoverText rounded-xl hover:text-text :duration-500">
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

export default HeaderPageItems;
