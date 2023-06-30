"use client";

import { useRouter } from "next/navigation";

// Type
import { showMoreType } from "@/types";

// Component
import CustomButton from "./CustomButton";
import { updateLanguageServiceSourceFile } from "typescript";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext, setLimit }: showMoreType) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 2;

    setLimit(newLimit);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          type="button"
          className_buton="bg-primary-blue rounded-full text-white"
          onClickHandler={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
