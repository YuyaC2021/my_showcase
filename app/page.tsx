"use client";

import Image from "next/image";

// Type
import { FilterPropType } from "@/types";

// Utils
import { fetchCars } from "@/utils";

import { useEffect, useState } from "react";

// Component
import { CarCard, CustomFiler, Hero, SearchBar, ShowMore } from "@/components";

// Constant
import { fuels, yearsOfProduction } from "@/constants";

export default () => {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [manufacture, setManufacture] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const [fuel, setFuel] = useState<string>("");
  const [year, setYear] = useState<number>(2022);
  const [limit, setLimit] = useState<number>(2);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacture: manufacture,
        model: model,
        year: year,
        fuel: fuel,
        limit: limit,
      });

      setAllCars(result);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacture, model]);

  // set flag show if allCars are empty
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar setManufacturer={setManufacture} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFiler title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFiler
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, idx) => (
                <CarCard key={idx} car={car} />
              ))}
            </div>

            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/loader.svg"
                  alt="loader"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}

            <ShowMore
              pageNumber={limit / 2}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Ooops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
};
