import { tool } from 'src/types/tool';
// import './ToolDot.css';

interface ToolDotProps extends tool {}

export function ToolDot({ name, created, description }: ToolDotProps) {
  return (
    <div className="toolDot my-8 flex flex-col font-paragraph">
      <div className="text-4xl">{name}</div>
      <div className="text-lg">Created at {created}</div>
      <div className="text-base text-stone-600">{description}</div>
    </div>
  );
}
