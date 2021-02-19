import styles from "../styles/Field.module.css";

const Field = (props) => {
  return (
    <div className={styles.field}>
      <h1 className={styles.fieldName}>{props.name}</h1>
      <h2 className={styles.fieldValue}>{props.value}</h2>
    </div>
  );
};

export default Field;
