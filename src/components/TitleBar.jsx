import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import Checkbox from "./Checkbox";

export default function TitleBar({
  isCheckAll,
  isCheck,
  handleSelectAll,
  checkIsIntermediate,
  handleDelete,
}) {
  const isFileSelected = isCheck.length > 0;

  return (
    <div className="flex flex-col sm:flex-row justify-between">
      {isFileSelected ? (
        <div className="mb-[0.125rem] block min-h-[1.5rem]">
          <Checkbox
            id="selectAll"
            className="relative float-left mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] accent-blue-500"
            type="checkbox"
            name="selectAll"
            handleClick={handleSelectAll}
            isChecked={isCheckAll}
            ref={(input) => input && (input.indeterminate = checkIsIntermediate())}
          />
          <label
            className="font-semibold inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="selectAll"
          >
            {isCheck.length} Files found
          </label>
        </div>
      ) : (
        <div className="font-semibold inline-block pl-[0.15rem] hover:cursor-pointer">
          File Manager
        </div>
      )}

      <div className="flex flex-row-reverse sm:flex-row items-center justify-end gap-2 text-sm text-gray-500">
        {isFileSelected ? (
          <button onClick={handleDelete} className="bg-white border-0 text-red-600">
            Delete Files
          </button>
        ) : (
          <>
            Upload images to your gallery
            <span><ExclamationCircleIcon className="h-4 w-4" /></span>
          </>
        )}
      </div>
    </div>
  );
}
