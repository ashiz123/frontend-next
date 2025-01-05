export interface sectionProps {
  parking_lot_id : number;
  section_name: string;
  total_spots: number;
  max_height: number;
  vehicle_allow_type: string | null;
}

export const initialSectionForm: sectionProps = {
  parking_lot_id : 0,
  section_name: "",
  total_spots: 0,
  max_height: 0,
  vehicle_allow_type: "",
};