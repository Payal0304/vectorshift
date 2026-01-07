// toolbar.js
import { DraggableNode } from "./draggableNode";
import { submitPipeline } from "./submit";

export const PipelineToolbar = () => {
  return (
    <div
      style={{
        padding: "25px 30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // ⬅ key line
        borderBottom: "1px solid #334155",
        background: "#020617",
      }}
    >
      {/* LEFT: draggable nodes */}
      <div style={{ display: "flex", gap: "50px" }}>
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
      </div>

      <span
  style={{
    marginLeft: "auto",
    marginRight: "12px",
    color: "#94a3b8",
    fontSize: "15px",
  }}
>
  Build pipeline →
</span>

  
      {/* RIGHT: submit button */}
      <button
        onClick={submitPipeline}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          background: "#38bdf8",
          color: "#020617",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </div>
  );
};
