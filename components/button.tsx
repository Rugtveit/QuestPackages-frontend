import Styles from "styles/Button.module.css";

class buttonProp 
{
  link: string;
  name: string;
  displayStyle?: string;
}

const Button = (props: buttonProp) => {
  return (
    <a href={props.link} className={Styles.button} style={{display: props.displayStyle}}>
      {props.name}
    </a>
  );
};

export default Button;
