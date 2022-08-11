import React, { useState } from "react";

import { Input, Label } from "./custom-checkbox.styles";

interface IProps {
  label: string;
  checked: boolean;
}

const CustomCheckbox: React.FC<IProps> = ({ label, checked }) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleChange = (): void => {
    setIsChecked((current) => !current);
  };

  return (
    <Label>
      <Input checked={isChecked} onChange={handleChange} />
      {label}
    </Label>
  );
};

export default CustomCheckbox;
