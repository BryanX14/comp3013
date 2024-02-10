import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useState } from "react";

type Props = {
  newAssignment: string;
  onDelete: () => void; 
  onCheckToggle: (checked: boolean) => void;
}

export function Assignment( { newAssignment, onDelete, onCheckToggle }: Props ) {
  const [isChecked, setIsChecked] = useState(false);
  const [pClass, setPClass] = useState('');

  const handleClick = () => {
    setIsChecked(!isChecked);
    setPClass(isChecked ? '' : styles.textCompleted);
    onCheckToggle(!isChecked);
  };

  const handleDelete = () => {
    onDelete();
  }

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={handleClick}>
        {isChecked ? <AiOutlineCheckCircle size={20}/> : <div />}
      </button>

      <p className={pClass}>{newAssignment}</p>

      <button className={styles.deleteButton} onClick={handleDelete}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
