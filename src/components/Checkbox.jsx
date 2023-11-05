/* eslint-disable react/display-name */
import { forwardRef } from "react";

const Checkbox = forwardRef(
  ({ id, name, handleClick, isChecked }, ref) => {
    return (
      <>
        <input
          className={`${
            name === "selectAll"
              ? "relative float-left  mr-[6px] mt-[0.15rem] h-4 w-4"
              : "absolute top-3 left-3 z-10 w-3 h-3"
          }
            accent-blue-600 border rounded
            `}
          id={id}
          name={name}
          type="checkbox"
          onChange={handleClick}
          checked={isChecked}
          ref={ref}
        />
      </>
    );
  }
);

export default Checkbox;