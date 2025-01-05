

type SurfaceType =
  | "Grass"
  | "Concrete"
  | "Asphalt"
  | "Gravel"
  | "Dirt"
  | undefined;


export interface SectionInterface {
  id: number;
  section_name: string;
  total_spots: number;
  occupied_spaces: number;
  security_features: string;
  vehicle_allow_type: string;
  max_height : number;
}

export type LotInterface = {
  id : number;
  name: string;
  postcode: string;
  state: string;
  city: string;
  latitude: number | null;
  longitude: number | null;
  total_spots: number;
  occupied_spaces : number;
  security_features: string;
  surface_types: SurfaceType;
  max_height: number;
  grouped: boolean;
  vehicle_allow_type: string;
};

export type ParkingResult = {
    id : number;
    lot_id : number;
    name : string;
    type : string;
    total_spaces : number;
    occupied_spaces : number;
    vehicle_allow_type : string;
}