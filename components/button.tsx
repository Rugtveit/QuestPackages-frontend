import styles from "../styles/Button.module.css";
const Button = (props) => {
  return (
    <a href={props.link} className={styles.button}>
      {props.name}
    </a>
  );
};

export default Button;
