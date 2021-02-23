import Styles from "styles/Button.module.css";
import Link from 'next/link'

class ButtonProp 
{
  link: string;
  name: string;
  displayStyle?: string;
}

const Button = (props: ButtonProp) => {
  return (
    
      <Link href={props.link ?? 'a'}>
        <a className={Styles.button} style={{display: props.displayStyle}}>
          {props.name}
        </a>
      </Link>
  );
};

export default Button;
