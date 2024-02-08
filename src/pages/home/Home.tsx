import './home.scss';
import ChartBox from '../../components/chartBox/ChartBox';
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  bigChartAnalysis,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
  pieChartDevices,
} from '../../data';
import BarChartBox from '../../components/barChartBox/BarChartBox';
import PieChartBox from '../../components/pieChartBox/PieChartBox';
import BigChartBox from '../../components/bigChartBox/BigChartBox';
import TopBox from '../../components/topBox/TopBox';

const Home = () => {
  return (
    <div className='home'>
      <div className='box box1'>
        <TopBox />
      </div>
      <div className='box box2'>
        <ChartBox {...chartBoxUser} />
      </div>
      <div className='box box3'>
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className='box box4'>
        <PieChartBox data={pieChartDevices} />
      </div>
      <div className='box box5'>
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className='box box6'>
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className='box box7'>
        <BigChartBox data={bigChartAnalysis} />
      </div>
      <div className='box box8'>
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className='box box9'>
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
