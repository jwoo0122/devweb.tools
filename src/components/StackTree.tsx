import stacksjson from 'src/assets/stacks.json';
import { StackSpec } from 'src/components/StackSpec';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Fragment } from 'react/jsx-runtime';

const stacks = Object.entries(stacksjson);

export function StackTree() {
  useGSAP(() => {
    gsap.from(['.toolDot', '.toolDot-branch'], {
      stagger: 0.1,
      scale: 0.9,
      transformOrigin: 'left 50%',
      opacity: 0,
      duration: 0.5,
    });
  });

  return (
    <div className="relative min-h-full w-full px-20">
      <div className="relative -bottom-1/2 mt-[50vh] w-full" />
      {stacks.map(([name, stackInfo], index) => (
        <Fragment key={`${name}-${index}`}>
          <StackSpec key={name} stack={{ name, ...stackInfo }} />
          {index + 1 === stacks.length ? null : <div className="h-20 w-full" />}
        </Fragment>
      ))}
      <div className="relative mb-[50vh] w-full" />
    </div>
  );
}
