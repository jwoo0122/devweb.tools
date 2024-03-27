import toolsjson from 'src/assets/tools.json';
import { StackSpec } from 'src/components/StackSpec';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Fragment } from 'react/jsx-runtime';

const tools = Object.entries(toolsjson);

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
      <div className="relative mt-[50vh] w-full" />
      {tools.map(([name, datas], index) => (
        <Fragment key={`${name}-${index}`}>
          <StackSpec key={name} name={name} {...datas} />
          {index + 1 === tools.length ? null : <div className="h-20 w-full" />}
        </Fragment>
      ))}
      <div className="relative mb-[50vh] w-full" />
    </div>
  );
}
