import { useState } from "react";
import { BaseNode } from "../components/baseNode.js";
import { SelectInput, selectinput } from "../components/selectinput.js";
import { TextInput } from "../components/textinput.js";
export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_"),
  );
  const [inputType, setInputType] = useState(data?.inputType || "Text");

  return (
    <BaseNode title="Input" outputs={[`${id}-value`]}>
      <TextInput
        value={currName}
        onChange={(e) => setCurrName(e.target.value)}
        label="Name"
        placeholder="Enter name..."
      />

      <SelectInput
        value={inputType}
        onChange={(e) => setInputType(e.target.value)}
        options={["Text", "File"]}
      />
    </BaseNode>
  );
};
