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

export type PetDetails = {
  id: number;
  name: string;
  animal: string;
  city: string;
  state: string;
  description: string;
  breed: string;
  images: string[];
};

export interface DetailAPIResponse {
  pets: PetDetails[];
}
