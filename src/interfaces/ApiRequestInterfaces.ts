export interface Pet {
  id: number;
  name: string;
  animal: string;
  description: string;
  breed: string;
  images: string[];
}

export interface PetAPIResponse {
  numberOfResults: number;
  startIndex: number;
  endIndex: number;
  hasNext: boolean;
  pets: Pet[];
}

export interface BreedListAPIResponse {
  animal: string;
  breeds: string[];
}
