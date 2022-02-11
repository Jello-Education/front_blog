import { useState } from "react";

import { Checkbox } from "./stlyes";

function CheckBoxInput() {
  const [checked, setChecked] = useState(false);

  return (
    <form>
      <Checkbox>
        <div className="container">
          <label className="student">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <span className="checkmark"></span>
          </label>
        </div>
      </Checkbox>
    </form>
  );
}

export default CheckBoxInput;
