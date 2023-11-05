import { PhotoIcon } from "@heroicons/react/24/outline";

export function Grid({  handleFileChange, children }) {
  return (
    <div className="p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 auto-rows-fr ">
        {children}
        <div>
          <input className="hidden" type="file" id="file" onChange={handleFileChange} />
          <label
            className="flex flex-col gap-2 h-[142px] items-center place-content-center border-2 border-dashed rounded-md bg-gray-50 hover:bg-blue-50 hover:border-blue-400 cursor-pointer"
            htmlFor="file"
            accept="image/*"
          >
            <PhotoIcon className="h-6 w-6" />
            <div>Upload Images</div>
          </label>
        </div>
      </div>
    </div>
  );
}
