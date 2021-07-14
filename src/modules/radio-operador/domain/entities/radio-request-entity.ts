export type RadioRequestEntity = {
  id: string;
  createAt: Date;
  images: [
    {
      name: string;
      url: string;
    }
  ];
  videos: [
    {
      name: string;
      url: string;
    }
  ];
  location: {
    lat: number;
    lng: number;
  };
};