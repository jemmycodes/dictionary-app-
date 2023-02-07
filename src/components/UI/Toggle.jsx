import { ToggleSwitch } from "flowbite-react";
import { useState } from "react";

function Toggle() {
  const [checked, setChecked] = useState(false);

  const toggleEventHandler = () => {
    setChecked((prevState) => !prevState);
    console.log(checked);
  };

  return (
    <div className="flex flex-col gap-4" id="toggle">
      <ToggleSwitch checked={checked} onChange={toggleEventHandler} />
    </div>
  );
}

export default Toggle;
