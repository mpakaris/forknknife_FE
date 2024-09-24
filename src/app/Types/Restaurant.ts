export interface Restaurant {
  name: string;
  address: string;
  gps: [number, number]; // Tuple with latitude and longitude
  pictures: {
  exterior: string;
  interior: string;
  };
  ratings: Rating[]; 
}

export interface Rating {
  reviewer: string;
  score: number;
  comment: string;
}