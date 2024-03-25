import "./App.css";
import { Title } from "./components/Title";
import toolsjson from "./assets/tools.json";
import { ToolDot } from "./components/ToolDot";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const tools = Object.entries(toolsjson);

gsap.registerPlugin(useGSAP);

function App() {
  useGSAP(() => {
    gsap.from(".toolDot", {
      stagger: 0.1,
      opacity: 0,
      x: -100,
      duration: 0.5,
      ease: "expo.inOut",
    });
  });

  return (
    <>
      <Title />
      {tools.map(([name, datas]) => (
        <ToolDot key={name} name={name} {...datas} />
      ))}
    </>
  );
}

export default App;
