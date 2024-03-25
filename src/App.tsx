import { Title } from "src/components/Title";
import toolsjson from "src/assets/tools.json";
import { ToolDot } from "src/components/ToolDot";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const tools = Object.entries(toolsjson);

gsap.registerPlugin(useGSAP);

function App() {
  useGSAP(() => {
    gsap.from(".toolDot", {
      stagger: 0.1,
      opacity: 0,
      y: 10,
      duration: 0.3,
      ease: "back.inOut",
    });
  });

  return (
    <>
      <div
        style={{
          padding: "2rem",
        }}
      >
        {/* TODO: I strongly want to use full screen, this is a temporal styles */}
        <Title />
        {tools.map(([name, datas]) => (
          <ToolDot key={name} name={name} {...datas} />
        ))}
      </div>
    </>
  );
}

export default App;
