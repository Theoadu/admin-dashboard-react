import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';
import './barChartBox.scss';

type Props = {
  title: string;
  dataKey: string;
  color: string;
  chartData: object[];
};

const BarChartBox = ({ title, chartData, color, dataKey }: Props) => {
  return (
    <div className='barChartBox'>
      <h1>{title}</h1>
      <div className='chart'>
        <ResponsiveContainer width='100%' height={150}>
          <BarChart width={150} height={40} data={chartData}>
            <Tooltip
              contentStyle={{ background: '#2a3447', borderRadius: '5px' }}
              labelStyle={{ display: 'none' }}
              cursor={{ fill: 'none' }}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
