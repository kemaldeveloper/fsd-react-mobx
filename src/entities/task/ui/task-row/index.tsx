import {Card, Checkbox} from "antd";
import {Link} from "react-router-dom";

type Props = {
  title: string;
  id: string;
}

export const TaskRow = ({title, id}: Props) => {
  return (
    <Card>
      <Checkbox>open</Checkbox>
      <Link to={id}>{title}</Link>
    </Card>
  )
}