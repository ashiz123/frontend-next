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
 security_features : string;
 surface_types : SurfaceType;
 max_height : number;
 grouped : boolean;
 vehicle_allow_type : string;
 created_at : string;
 updated_at : string;
}