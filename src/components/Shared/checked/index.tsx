import { useState } from "react";

import { Checkbox } from "./stlyes";

interface CheckBoxInputProps {
  title: string;
  selected: boolean;
  onChange: () => null;
}

function CheckBoxInput({ selected, title, onChange }: CheckBoxInputProps) {
  return (
    <form>
      <Checkbox>
        <div className="container">
          <label className="student">
            {title}
            <input type="checkbox" checked={selected} onChange={onChange} />
            <span className="checkmark"></span>
          </label>
        </div>
      </Checkbox>
    </form>
  );
}

export default CheckBoxInput;
