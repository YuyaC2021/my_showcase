import { MouseEventHandler } from "react";

export interface CustomButtonType {
  disabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
  className_buton?: string;
  onClickHandler?: MouseEventHandler<HTMLButtonElement>;
  className_span?: string;
  title: string;
  rightIcon?: string;
}

export interface SearchManufacturerType {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarCardType {
  car: {
    city_mpg: number;
    class?: string;
    combination_mpg?: number;
    cylinders?: number;
    displacement?: number;
    drive: string;
    fuel_type?: string;
    highway_mpg?: number;
    make: string;
    model: string;
    transmission?: string;
    year: number;
  };
}

export interface CarDetailType {
  isOpen: boolean;
  closeModal: () => void;
}

export interface EnvPropType {
  NEXT_PUBLIC_API_KEY: string;
}

export interface SearchButtonType {
  otherClasses: string;
}

export interface FilterPropType {
  searchParams: {
    manufacture: string;
    model: string;
    year: number;
    fuel: string;
    limit: number;
  };
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilerType {
  title: string;
  options: OptionProps[];
}

export interface showMoreType {
  pageNumber: number;
  isNext: boolean;
}
