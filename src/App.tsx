import { Title } from "src/components/Title";
// import toolsjson from "src/assets/tools.json";
// import { ToolDot } from "src/components/ToolDot";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

// const tools = Object.entries(toolsjson);

gsap.registerPlugin(useGSAP);

function App() {
  const blue = useRef(null);

  useGSAP(() => {
    gsap.from(blue.current, {
      opacity: 0,
      y: -200,
      duration: 3,
      ease: "expo.out",
    });
  });

  return (
    <div className="relative w-screen h-screen max-w-screen max-h-screen mt-0 bg-zinc-800">
      <Title />
      <div
        ref={blue}
        className="rounded-full absolute w-80 h-80 bg-blue-800/10 blur-2xl m-auto right-1/2 z-0"
      />
      {/* <div className="absolute">
        {tools.map(([name, datas]) => (
          <ToolDot key={name} name={name} {...datas} />
        ))}
      </div> */}
    </div>
  );
}

export default App;
