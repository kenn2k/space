import { useEffect } from "react";

import Container from "../../UI/Container";
import { useAppDispatch, useAppSelector } from "../../../features/redux-hooks";
import { fetchDailyPhoto } from "../../../features/slices/apodSlice";

const HeaderPageItems = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector((state) => state.new.data);
  const error = useAppSelector((state) => state.new.error);
  const isLoading = useAppSelector((state) => state.new.loading);

  useEffect(() => {
    dispatch(fetchDailyPhoto());
  }, [dispatch]);

  if (isLoading) {
    return (
      <p className="flex items-center justify-center h-screen text-xl bg-pageBg">
        Loading...
      </p>
    );
  }

  if (error) {
    return <p>Error fetching data: {error}</p>;
  }

  return (
    <div className="  flex flex-col justify-center  md:items-center p-[5%] h-[calc(100vh_-_74px)] mobile">
      {news && (
        <Container>
          <div className="flex flex-col gap-4 ">
            <p className="flex justify-center text-[2.3rem] custom-drop-shadow font-bold">
              Astronomy Picture of the Day
            </p>
            <div className="md:flex md:justify-between gap-4 bg-hoverBg rounded-xl hover:custom-drop-shadow hover:transition p-4 mb:gap-[1-rem]">
              <div className="flex flex-col items-center justify-center gap-8 p-4 text-center md:gap-4 md:w-1/2 rounded-xl md:flex-col md:items-start">
                <p className="text-xl ">{news.title}</p>
                <div className="mb-4 mobileText">{news.explanation}</div>
              </div>

              <div className="relative flex flex-col items-center justify-end gap-4 md:w-1/2 md:flex-col">
                <div className="aspect-w-16 aspect-h-9 ">
                  <img
                    src={news.hdurl}
                    className="object-cover w-[700px]  h-[500px] rounded-xl "
                    alt={news.title}
                  />
                </div>
                <div className="absolute bottom-0 right-auto p-4 transition duration-500 bg-white border border-solid mobileText text-hoverText rounded-xl hover:text-text">
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
