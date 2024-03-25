import "./App.css";
import { Title } from "./components/Title";
import toolsjson from "./assets/tools.json";

const tools = Object.entries(toolsjson);

function App() {
  return (
    <>
      <Title />
      {tools.map(([name, { created, description, related }]) => (
        <div key={name}>
          <div>{name}</div>
          <div>created at: {created}</div>
          <div>{description}</div>
          <div>Related tools: {related}</div>
        </div>
      ))}
    </>
  );
}

export default App;
