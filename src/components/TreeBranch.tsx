import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export function TreeBranch() {
  const branch = useRef(null);

  useGSAP(() => {
    gsap.from(branch.current, {
      opacity: 0,
      scaleY: 0,
      duration: 1.2,
      delay: 0.3,
      ease: 'expo.out',
      transformOrigin: '50% 50%',
    });
  });

  return (
    <div
      ref={branch}
      className="fixed top-1/2 -z-10 ml-[8.9rem] h-[80vh] w-1 -translate-y-1/2 bg-gradient-to-t from-stone-200 via-stone-400 to-stone-200"
    />
  );
}
