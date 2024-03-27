import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export function Title() {
  const titleContainer = useRef(null);

  useGSAP(() => {
    gsap.from(titleContainer.current, {
      y: 150,
      duration: 2,
      ease: 'expo.out',
    });
  });

  return (
    <div
      ref={titleContainer}
      className="fixed bottom-0 z-10 flex h-20 w-full items-center justify-between overflow-hidden bg-stone-800 px-20"
    >
      <span className="mt-2 align-middle font-site-title text-xl text-stone-300">devweb.tools</span>
      <span className="mt-2 align-middle font-site-title text-base text-stone-300">github</span>
    </div>
  );
}
