import { Title } from 'src/components/Title';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { StackTree } from 'src/components/StackTree';
import { TreeBranch } from 'src/components/TreeBranch';

gsap.registerPlugin(useGSAP);

function App() {
  return (
    <>
      <div className="relative mt-0 w-screen">
        <Title />
        <StackTree />
        <TreeBranch />
      </div>
    </>
  );
}

export default App;
