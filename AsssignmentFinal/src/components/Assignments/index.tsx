import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { useState } from "react";

type Props = {
  arrayList: string[];
}

export function Assignments({ arrayList }: Props) {
  const [assignments, setAssignments] = useState(arrayList);

  const [checkedCount, setCheckedCount] = useState(0);

  const handleCheckToggle = (isChecked: boolean) => {
    setCheckedCount(prevCount => isChecked ? prevCount + 1 : prevCount - 1);
  };
  

  const handleDelete = (index: number) => {
    const newAssignments = [...assignments];
    arrayList.splice(index, 1);
    setAssignments(newAssignments);
  };
  return (

    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{arrayList.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{checkedCount} of {arrayList.length}</span>
        </div>
      </header>
      
      {arrayList.map((assignment, index) => (
        <div key={index} className={styles.list}>
          <Assignment
           newAssignment={assignment}
           onDelete={() => handleDelete(index)}
           onCheckToggle={handleCheckToggle}
           />
        </div>
      ))}
    </section>
  );
}
