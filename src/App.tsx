import { Title } from 'src/components/Title';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { StackTree } from 'src/components/StackTree';

gsap.registerPlugin(useGSAP);

function App() {
  return (
    <>
      <div className="relative mt-0 w-screen">
        <Title />
        <StackTree />
      </div>
    </>
  );
}

export default App;
