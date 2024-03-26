import { Title } from "src/components/Title";
import toolsjson from "src/assets/tools.json";
import { ToolDot } from "src/components/ToolDot";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const tools = Object.entries(toolsjson);

gsap.registerPlugin(useGSAP);

function App() {
  const blue = useRef(null);
  const red = useRef(null);

  useGSAP(() => {
    gsap.from(blue.current, {
      opacity: 0,
      y: -Math.floor(Math.random() * 200),
      duration: 1,
      ease: "back.inOut",
    });
    gsap.from(red.current, {
      opacity: 0,
      y: 10,
      duration: 0.3,
      ease: "back.inOut",
    });
  });

  return (
    <div className="relative w-screen h-screen max-w-screen max-h-screen mt-0 bg-zinc-800">
      <Title />
      <div
        ref={blue}
        className="rounded-full absolute w-80 h-80 bg-blue-800/10 blur-2xl m-auto"
      />
      {/* <div ref={red} className="absolute w-80 h-80 bg-red-800/10 blur-3xl" /> */}
      <div className="absolute">
        {tools.map(([name, datas]) => (
          <ToolDot key={name} name={name} {...datas} />
        ))}
      </div>
    </div>
  );
}

export default App;
