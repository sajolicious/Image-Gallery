import { useState } from "react";
import GridCanvas from "./GridCanvas";
import photos from "./photos.json";
import TitleBar from "./TitleBar";

export default function GridContainer() {
  const [items, setItems] = useState(photos);
  const [activeId, setActiveId] = useState(null);

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  function handleFileChange(e) {
    const fileURL = URL.createObjectURL(e.target.files[0]);
    setItems([...items, fileURL]);
  }

  function handleSelectAll() {
    setIsCheckAll(!isCheckAll);
    setIsCheck(items.map((_, index) => index));
    if (isCheckAll) {
      setIsCheck([]);
    }
  }

  function handleCheck(check) {
    isCheck.includes(check)
      ? setIsCheck(isCheck.filter((item) => item !== check))
      : setIsCheck([...isCheck, check]);
  }

  function handleDelete() {
    const checkedItems = items.filter((_, index) => !isCheck.includes(index));
    setItems(checkedItems);
    setIsCheck([]);
    setIsCheckAll(false);
  }

  function checkIsIntermediate() {
    return isCheck.length >= 1 && isCheck.length < items.length;
  }

  return (
    <main className="bg-slate-100 min-h-[85vh]">
      <div className="mx-auto max-w-4xl py-6 sm:px-6 lg:px-8">
        <div className="mx-2 bg-white border rounded-lg min-h-[500px]">
          <div className="py-4 px-6 border-b">
            <TitleBar
              isCheckAll={isCheckAll}
              isCheck={isCheck}
              handleSelectAll={handleSelectAll}
              handleDelete={handleDelete}
              checkIsIntermediate={checkIsIntermediate}
            />
          </div>

          <div>
            <GridCanvas
              items={items}
              setItems={setItems}
              activeId={activeId}
              setActiveId={setActiveId}
              handleCheck={handleCheck}
              isCheck={isCheck}
              handleFileChange={handleFileChange}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
