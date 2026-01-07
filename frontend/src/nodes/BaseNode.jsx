import { Handle, Position } from "reactflow";
import "./baseNode.css";


export const BaseNode = ({
  title,
  inputs = [],
  outputs = [],
  children,
}) => {
  return (
    <div style={{ width: 200, border: "1px solid #c6b0b0", padding: 8 }}>
      <div style={{ fontWeight: "bold", marginBottom: 6 }}>
        {title}
      </div>

      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{ top: 30 + index * 20 }}
        />
      ))}

      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{ top: 30 + index * 20 }}
        />
      ))}

      {children}
    </div>
  );
};
