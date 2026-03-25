import { useState } from "react";
import { BaseNode } from "../components/baseNode.js";
import { SelectInput } from "../components/selectinput.js";
import { TextInput } from "../components/textinput.js";
export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_"),
  );
  const [outputType, setOutputType] = useState(data?.outputType || "Text");

  return (
    <BaseNode title="Output" inputs={[`${id}-value`]}>
      <TextInput
        value={currName}
        onChange={(e) => setCurrName(e.target.value)}
        label="Name"
      ></TextInput>

      <SelectInput
        label="Type:"
        value={outputType}
        onChange={(e) => setOutputType(e.target.value)}
        options={["Text", "File"]}
      />
    </BaseNode>
  );
};
