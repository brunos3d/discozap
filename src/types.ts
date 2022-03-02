export type HostDevice = {
  id: {
    server: string;
    user: string;
    _serialized: string;
  };
  email: string | null;
  description: string | null;
  statusConnection: string | 'CONNECTED';
  businessHours: { timezone: Date | null };
  pushname: string | null;
  website: string | null;
  formattedTitle: string;
  categories: string | null;
  displayName: string;
  isBusiness: string | null;
  imgUrl: string;
  imgFull: string;
  previewEurl: string | null;
  binVersion: number;
  allLocales: string[];
  battery: number;
  phone: {
    device_manufacturer: string;
    device_model: string;
    os_build_number: string;
    os_version: string;
    wa_version: string;
  };
};
