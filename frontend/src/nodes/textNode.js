import { useState, useMemo } from "react";
import { BaseNode } from "../components/baseNode.js";
import { Textarea } from "../components/textarea.js";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "{{input}}");

  // Extract variables like {{input}}
  const variables = useMemo(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...text.matchAll(regex)];

    // Removes the duplicates
    return [...new Set(matches.map((match) => match[1]))];
  }, [text]);

  return (
    <BaseNode
      title="Text"
      inputs={variables.map((v) => `${id}-${v}`)}
      outputs={[`${id}-output`]}
      style={{
        minHeight: 240 + variables.length * 20,
        width: Math.max(220, text.length * 6),
      }}
    >
      <Textarea
        label="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text with {{variables}}"
      />


      {variables.length > 0 && (
        <div className="block mb-2.5 text-sm font-medium text-heading">
          Variables:
          <div className="flex flex-wrap gap-1 mt-1">
            {variables.map((variable) => (
              <button className="bg-pink-500 hover:bg-pink-600 text-white py-1 px-2 rounded-md text-sm">
                {variable}
              </button>
            ))}
          </div>
        </div>
      )}
    </BaseNode>
  );
};
