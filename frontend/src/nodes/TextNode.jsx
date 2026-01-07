import { useEffect, useMemo, useRef, useState } from "react";
import { BaseNode } from "./BaseNode";

const VARIABLE_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "{{input}}");
  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height =
      textareaRef.current.scrollHeight + "px";
  }, [text]);

  const variables = useMemo(() => {
    const set = new Set();
    let match;
    while ((match = VARIABLE_REGEX.exec(text))) {
      set.add(match[1]);
    }
    return [...set];
  }, [text]);

  return (
    <BaseNode
      title="Text"
      inputs={variables.map(v => ({ id: `${id}-${v}` }))}
      outputs={[{ id: `${id}-output` }]}
    >
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%", resize: "none" }}
      />
    </BaseNode>
  );
};
