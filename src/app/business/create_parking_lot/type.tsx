type SurfaceType =
  | "Grass"
  | "Concrete"
  | "Asphalt"
  | "Gravel"
  | "Dirt"
  | undefined;

export type ParkingLotFormData = {
  name: string;
  postcode: string;
  state: string;
  city: string;
  latitude: number | null;
  longitude: number | null;
  total_spots: number;
  security_features: string;
  surface_types: SurfaceType;
  max_height: number;
  grouped: boolean;
  vehicle_allow_type: string;
  login_status: number;
  login_pin: string;
  confirm_login_pin: string;
};

export type FormError = {
  name: string;
  postcode: string | null;
  state: string;
  city: string;
  latitude: number | null;
  longitude: number | null;
  total_spots: number;
  security_features: string;
  surface_types: SurfaceType;
  max_height: number;
  grouped: boolean;
  vehicle_allow_type: string;
};

export const InitialCreateParkingForm: ParkingLotFormData = {
  name: "",
  postcode: "",
  state: "",
  city: "",
  latitude: 0,
  longitude: 0,
  total_spots: 0,
  security_features: "testing",
  surface_types: undefined,
  max_height: 0,
  grouped: false,
  vehicle_allow_type: "car",
  login_status: 0,
  login_pin: "",
  confirm_login_pin: "",
};
