import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

function App() {
  const [ newAssignment, setNewAssignment ] = useState('');
  const [arrayList, setArrayList] = useState<string[]>([]);
  return (
    <>
      <Header 
      newAssignment={newAssignment}
      setNewAssignment={setNewAssignment}
      arrayList={arrayList}
      setArrayList={setArrayList}
      />
      <Assignments
      arrayList={arrayList}
      />
    </>
  );
}

export default App;
