/* eslint-disable react/display-name */
import { forwardRef } from "react";
import Checkbox from "./Checkbox";

export const Photo = forwardRef(
  ({ position, url, index, handleCheck, isCheck, ...props }, ref) => {
    return (
      <div
        className={`${
          index === 0 ? "col-span-2 row-span-2" : "col-span-1 h-[142px]"
        } relative`}

      >
          <Checkbox
            id={index}
            name={url}
            handleClick={() => handleCheck(position)}
            isChecked={
              isCheck &&
              Array.isArray(isCheck) &&
              (position ? isCheck.includes(position) : isCheck.includes(0))
            }
          />
            <img
              src={url}
              alt={`Image ${index + 1}`}
              className={`${
                index === 0 ? "h-[300px]" : "h-[142px]"
              } w-full border rounded-md bg-gray-50 hover:brightness-95  object-cover`}
              ref={ref}
              {...props}
              onClick={() => handleCheck(position)}
              />
        </div>
    );
  }
);
