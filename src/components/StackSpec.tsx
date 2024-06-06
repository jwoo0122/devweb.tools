import { stack } from 'src/types/tool';

interface StackSpecProps {
  stack: stack;
}

export function StackSpec({ stack }: StackSpecProps) {
  const { name, created, description, icon } = stack;

  return (
    <div className="toolDot my-8 flex flex-row items-center font-paragraph">
      <div className="justify-centerh-40 mr-10 flex w-32 shrink-0 grow-0 items-center">
        <img src={new URL(`../assets/${icon}`, import.meta.url).href} className="drop-shadow-lg" />
      </div>
      <div className="grow">
        <div className="mb-4 text-lg text-stone-600">{created}</div>
        <div className="mb-5 font-stack-name text-4xl text-stone-700">{name}</div>
        <div className="whitespace-pre-line text-lg text-stone-600">{description}</div>
      </div>
    </div>
  );
}
