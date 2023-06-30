import axios from "axios";

// Type
import { CarCardType, FilterPropType } from "@/types";

export const fetchCars = async (filters: FilterPropType["searchParams"]) => {
  let data;

  let { manufacture, model, year, fuel, limit } = filters;

  try {
    let options = {
      params: {
        // manufacture: manufacture ? manufacture : "",
        model: model ? model : "corolla",
        // year: year ? year : "",
        // fuel: fuel ? fuel : "",
        // limit: limit ? limit : 5,
      },
      headers: {
        "X-RapidAPI-Key": "a14e181740mshf977f0e9a88d618p1ab718jsn272805141265",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
      },
    };

    console.log(options);

    let res = await axios.get(
      "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
      options
    );

    console.log(res);

    data = res.data;
  } catch (err) {
    console.log(err);

    data = err;
  }

  return data;
};

export const generateCarImageUrl = (
  car: CarCardType["car"],
  angle?: string
) => {
  // const url = new URL(
  //   `http://api.carsxe.com/images?key=${process.env.NEXT_PUBLIC_API_KEY}`
  // );

  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = car;

  url.searchParams.append("customer", <string>process.env.NEXT_PUBLIC_API_KEY);
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  const searchparams = new URLSearchParams(window.location.search);

  searchparams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchparams.toString()}`;

  return newPathname;
};
