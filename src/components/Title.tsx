import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function Title() {
  const titleContainer = useRef(null);

  useGSAP(() => {
    gsap.from(titleContainer.current, {
      rotation: Math.floor((Math.random() - 0.5) * 10),
      y: -100,
      duration: 0.7,
      ease: "expo.out",
    });
  });

  return (
    <div
      ref={titleContainer}
      className="relative flex justify-center items-center border border-zinc-900 rounded-full h-12 max-w-2xl mx-auto top-10 overflow-hidden shadow-xl backdrop-blur-xl z-10"
    >
      <span className="font-site-title text-2xl align-middle mt-2 text-zinc-600">
        devweb.tools
      </span>
    </div>
  );
}
