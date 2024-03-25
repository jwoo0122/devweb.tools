import { useRef } from "react";
import { tool } from "../types/tool";

interface ToolDotProps extends tool {}

export function ToolDot({ name, created, description, related }: ToolDotProps) {
  const dotRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={dotRef} className="toolDot">
      <div>{name}</div>
      <div>created at: {created}</div>
      <div>{description}</div>
      <div>Related tools: {related}</div>
    </div>
  );
}
