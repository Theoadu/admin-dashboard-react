import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import './pieChartBox.scss';

interface GadgetSource {
  name: string;
  value: number | string;
  color: string;
}

interface Props {
  data: GadgetSource[];
}

const PieChartBox = ({ data }: Props) => {
  return (
    <div className='pieChartBox'>
      <h1>Leads by Source</h1>
      <div className='chart'>
        <ResponsiveContainer width='99%' height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: 'white', borderRadius: '5px' }}
            />
            <Pie
              data={data}
              innerRadius={'70%'}
              outerRadius={'90%'}
              paddingAngle={5}
              dataKey='value'
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className='options'>
        {data.map((item) => (
          <div className='option' key={item.name}>
            <div className='title'>
              <div className='dot' style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
