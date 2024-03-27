import { tool } from 'src/types/tool';
// import NextIcon from 'src/assets/next-js-icon.svg';
// import './ToolDot.css';

interface StackSpecProps extends tool {}

export function StackSpec({ name, created, description, icon }: StackSpecProps) {
  return (
    <div className="toolDot my-8 flex flex-row items-center font-paragraph">
      <div className="justify-centerh-40 flex w-40 shrink-0 grow-0 items-center pr-10">
        <img src={new URL(`../assets/${icon}`, import.meta.url).href} />
      </div>
      <div className="grow">
        <div className="text-lg">{created}</div>
        <div className="mb-6 font-site-title text-4xl">{name}</div>
        <div className="text-base text-stone-600">{description}</div>
      </div>
    </div>
  );
}
