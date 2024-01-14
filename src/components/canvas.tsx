import { useEffect, useState } from "react";
import Button from "./button";

function Canvas() {
  const [splitter, setSplitter] = useState(false);
  const verticalSplitting = () => {
    setSplitter(true);
  };
  const horizontalSplitting = () => {
    console.log("h");
  };
  return (
    <div
      className="h-screen
      flex items-center border justify-center bg-red-400"
    >
      <Button title="V" onClick={verticalSplitting} />
      <Button title="H" onClick={horizontalSplitting} />
      <div>{splitter && <Canvas />}</div>
    </div>
  );
}
export default Canvas;
