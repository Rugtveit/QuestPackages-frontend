import Styles from "styles/Field.module.css";

class FieldProp
{
  name: string;
  value: string;
}

const Field = (props: FieldProp) => {
  return (
    <div className={Styles.field}>
      <h1 className={Styles.fieldName}>{props.name}</h1>
      <h2 className={Styles.fieldValue}>{props.value}</h2>
    </div>
  );
};

export default Field;
