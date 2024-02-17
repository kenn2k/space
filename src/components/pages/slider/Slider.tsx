import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../features/redux-hooks";
import { fetchPhoto } from "../../../features/slices/photoSlice";

interface ISlider {
  id: string;
  img_src: string;
  earth_date: string;
}

const Slider = () => {
  const dispatch = useAppDispatch();
  const photos = useAppSelector((state) => state.photo.data);
  const loading = useAppSelector((state) => state.photo.loading);
  const error = useAppSelector((state) => state.photo.error);

  useEffect(() => {
    dispatch(fetchPhoto());
  }, []);

  const limitedPhotos = photos?.slice(0, 10);

  if (loading) {
    return (
      <p className="flex items-center justify-center h-screen text-xl bg-pageBg text-text">
        Loading...
      </p>
    ); // Можете заменить на свою индикацию загрузки
  }

  if (error) {
    return <p>Error: {error}</p>; // Отображение ошибки
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5 h-screen bg-pageBg text-text justify-center items-center mobile md:px-3">
      {limitedPhotos?.map((photo: ISlider) => (
        <div className="md:col-span-1" key={photo.id}>
          <img
            className="object-cover w-full h-48 md:h-96"
            src={photo.img_src}
            alt={`Slide ${photo.id}`}
          />
          <p>{photo.earth_date}</p>
        </div>
      ))}
    </div>
  );
};

export default Slider;
