export type RadioRequestEntity = {
  id: string;
  notes: string;
  createAt: Date;
  TARMDate: Date;
  MedicoReguladorDate: Date;
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
