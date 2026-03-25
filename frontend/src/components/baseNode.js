import { Handle, Position } from "reactflow";

const nodeStyles = {
  container:
    "w-56 h-full bg-pink-300 text-white rounded-2xl shadow-lg  border-3 border-gray-500 p-3 relative transition hover:shadow-xl",
  title:
    "text-sm font-semibold mb-2 text-white text-center w-full border-b-2 border-pink-200 pb-2",
  description: "text-sm text-gray-100 leading-relaxed mt-1",
};

export const BaseNode = ({
  title,
  description = "",
  inputs = [],
  outputs = [],
  children,
}) => {
  return (
    <div className={nodeStyles.container}>
      <div className={nodeStyles.title}>{title}</div>
      <div className={nodeStyles.description}>{description}</div>
      {inputs.map((input, i) => (
        <Handle
          key={input}
          type="target"
          position={Position.Left}
          id={input}
          className="!bg-green-500 !w-3 !h-3"
          style={{ top: (100 * (i + 1)) / 3 }}
        />
      ))}
      <div className="flex  flex-col gap-2 space-y-2 text-xs">{children}</div>
      {outputs.map((output, i) => (
        <Handle
          key={output}
          type="source"
          position={Position.Right}
          id={output}
          className="!bg-green-500 !w-3 !h-3"
          style={{ top: (100 * (i + 1)) / 3 }}
        />
      ))}
    </div>
  );
};
