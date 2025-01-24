import { Card } from 'antd';
import { ReactNode } from 'react';

type Props = {
  loading: boolean;
  title: string;
  text: string;
  actions?: ReactNode[];
};

export const TaskCard = ({ title, text, actions, loading }: Props) => {
  return (
    <Card loading={loading} title={title} extra={actions} style={{ width: 500 }}>
      {text}
    </Card>
  );
};
