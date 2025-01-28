type SurfaceType = 'Grass' | 'Concrete' | 'Asphalt' | 'Gravel' | 'Dirt' | undefined;

export type ParkingLot= {
 id: number;
 user_id : number;
 name: string;
 postcode : string;
 state : string;
 city : string;
 latitude : number | null;
 longitude : number | null;
 total_spots : number;
 occupied_spaces : number;
 reserverd_spaces : number;
 security_features : string;
 surface_types : SurfaceType;
 max_height : number;
 grouped : number;
 vehicle_allow_type : string;
 login_status : number;
 login_pin : string;
 created_at : string;
 updated_at : string;
}