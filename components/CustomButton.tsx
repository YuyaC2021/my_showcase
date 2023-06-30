import Image from "next/image";

// Type
import { CustomButtonType } from "@/types";

const CustomButton = ({
  disabled,
  type,
  className_buton,
  onClickHandler,
  className_span,
  title,
  rightIcon,
}: CustomButtonType) => {
  return (
    <button
      disabled={disabled}
      type={type || "button"}
      className={`custom-btn ${className_buton}`}
      onClick={onClickHandler}
    >
      <span className={`flex-1 ${className_span}`}>{title}</span>

      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
