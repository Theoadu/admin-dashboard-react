import { Link } from 'react-router-dom';
import './chartBox.scss';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBox = ({
  color,
  icon,
  title,
  dataKey,
  number,
  percentage,
  chartData,
}: Props) => {
  return (
    <div className='chartBox'>
      <div className='boxInfo'>
        <div className='title'>
          <img src={icon} alt='' />
          <span>{title}</span>
        </div>
        <h1>{number}</h1>
        <Link to='/'>View all</Link>
      </div>
      <div className='chartInfo'>
        <div className='chart'>
          <ResponsiveContainer width='99%' height='100%'>
            <LineChart width={300} height={100} data={chartData}>
              <Tooltip
                contentStyle={{ background: 'transparent', border: 'none' }}
                labelStyle={{ display: 'none' }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type='monotone'
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className='texts'>
          <div
            className='percentage'
            style={{ color: percentage < 0 ? 'tomato' : 'limegreen' }}
          >
            {percentage}%
          </div>
          <div className='duration'>this month</div>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
