import Styles from "../styles/Button.module.css";

const Button = (props) => {
  return (
    <a href={props.link} className={Styles.button}>
      {props.name}
    </a>
  );
};

export default Button;
