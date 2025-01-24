import { Card } from 'antd';
import { ReactNode } from 'react';

type Props = {
  title: string;
  text: string;
  action: ReactNode;
};

export const TaskCard = ({ title, text, action }: Props) => {
  return (
    <Card title={title} extra={action} style={{ width: 300 }}>
      {text}
    </Card>
  );
};

