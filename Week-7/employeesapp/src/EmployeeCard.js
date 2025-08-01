import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import styles from "./EmployeeCard.module.css";

function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext);

  return (
    <div className={`${styles.card} ${styles[theme]}`}>
      <h3>{employee.name}</h3>
      <p>{employee.role}</p>
      <button className={`${styles.btn} ${styles[theme]}`}>View Details</button>
    </div>
  );
}

export default EmployeeCard;
