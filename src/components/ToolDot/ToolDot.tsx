import { tool } from "src/types/tool";
import "./ToolDot.css";

interface ToolDotProps extends tool {}

export function ToolDot({ name, created, description }: ToolDotProps) {
  return (
    <div className="toolDot">
      <div className="toolName">{name}</div>
      <div className="toolCreatedAt">Created at {created}</div>
      <div className="toolDescription">{description}</div>
    </div>
  );
}
