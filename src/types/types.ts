export type HomePage = {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  title: string;
};

export type Spacecraft = {
  img_src: string;
  earth_date: string;
  id: number;
  rover: {
    id: number;
    name: string;
    status: number;
    total_photos: number;
  };
};
