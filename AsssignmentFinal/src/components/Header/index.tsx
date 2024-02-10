import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";

type Props = {
  newAssignment: string;
  setNewAssignment: (value: string) => void;
  arrayList: string[];
  setArrayList: (value: string[]) => void;
}

export function Header({ newAssignment, setNewAssignment, arrayList, setArrayList }: Props) {

  const [ disableButton , setDisableButton ] = useState(true);
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setArrayList([...arrayList, newAssignment]);
    setNewAssignment("");
    setDisableButton(true);
  };

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleSubmit}>
        <input 
          placeholder="Add a new assignment" 
          type="text" 
          value={newAssignment} 
          onChange={(e) => {
            setNewAssignment(e.target.value)
            setDisableButton(!e.target.value)
          }} 
        />
        <button disabled={disableButton}>
          Create <AiOutlinePlusCircle size={20}/>
        </button>
      </form>
    </header>
  );
}

