import { Typography } from '@alfalab/core-components/typography';
import { Chart as ChartJS, Filler, Legend, LineElement, PointElement, RadialLinearScale, Tooltip } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { CompareProgress } from '../compare/CompareLayout';
import { data } from '../data';
import { tdSt } from './style.css';

// Register necessary components with Chart.js
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

type Props = {
  selectedItem?: (typeof data)[0];
};
const options = {
  scales: {
    r: {
      beginAtZero: true,
      pointLabels: {
        font: {
          size: 12, // Increase the label font size here
        },
      },
      ticks: {
        backdropColor: 'transparent', // Makes tick background transparent if you need cleaner look
      },
    },
  },
  plugins: {
    legend: {
      display: false, // Disable the legend here
    },
  },
};

export const TickDeatil = ({ selectedItem }: Props) => {
  const dataChart = {
    labels: [['Бизнес', 'показатели'], ['Устойчивость'], ['Дивиденды'], ['История', 'торгов'], ['Потенциал', 'роста']],
    datasets: [
      {
        label: 'Indicators',
        data: [
          selectedItem?.Business_Performance_Score ?? 0,
          selectedItem?.Sustainability_Score ?? 0,
          selectedItem?.Dividend_Score ?? 0,
          selectedItem?.Trading_History_Score ?? 0,
          selectedItem?.Growth_Potential_Score ?? 0,
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  if (!selectedItem) {
    return null;
  }

  return (
    <div className={tdSt.container}>
      <div style={{ marginTop: '-3rem' }}>
        <Radar data={dataChart} options={options} />
      </div>

      <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="small" font="system" weight="semibold">
        Потенциал роста
      </Typography.TitleResponsive>
      <CompareProgress
        company={{ value: selectedItem.Growth_Potential_Score * 10, img: selectedItem.img }}
        imoex={{
          value: (selectedItem.sectors?.Type.find(t => t.Type === 'imoex')?.Growth_Potential ?? 0) * 10,
        }}
        sector={{
          value: (selectedItem.sectors?.Type.find(t => t.Type === 'Сектор')?.Growth_Potential ?? 0) * 10,
        }}
        total={{
          value: selectedItem.Growth_Potential_Score * 10,
        }}
      />
      <Typography.Text view="primary-medium">{selectedItem.Growth_Potential_Comment}</Typography.Text>

      <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="small" font="system" weight="semibold">
        История торгов
      </Typography.TitleResponsive>
      <CompareProgress
        company={{ value: selectedItem.Trading_History_Score * 10, img: selectedItem.img }}
        imoex={{
          value: (selectedItem.sectors?.Type.find(t => t.Type === 'imoex')?.Trading_History ?? 0) * 10,
        }}
        sector={{
          value: (selectedItem.sectors?.Type.find(t => t.Type === 'Сектор')?.Trading_History ?? 0) * 10,
        }}
        total={{
          value: selectedItem.Trading_History_Score * 10,
        }}
      />
      <Typography.Text view="primary-medium">{selectedItem.Trading_History_Comment}</Typography.Text>

      <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="small" font="system" weight="semibold">
        Дивиденды
      </Typography.TitleResponsive>
      <CompareProgress
        company={{ value: selectedItem.Dividend_Score * 10, img: selectedItem.img }}
        imoex={{ value: (selectedItem.sectors?.Type.find(t => t.Type === 'imoex')?.Dividends ?? 0) * 10 }}
        sector={{ value: (selectedItem.sectors?.Type.find(t => t.Type === 'Сектор')?.Dividends ?? 0) * 10 }}
        total={{
          value: selectedItem.Dividend_Score * 10,
        }}
      />
      <Typography.Text view="primary-medium">{selectedItem.Dividend_Comment}</Typography.Text>

      <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="small" font="system" weight="semibold">
        Устойчивость
      </Typography.TitleResponsive>
      <CompareProgress
        company={{
          value: selectedItem.Sustainability_Score * 10,

          img: selectedItem.img,
        }}
        imoex={{ value: (selectedItem.sectors?.Type.find(t => t.Type === 'imoex')?.Stability ?? 0) * 10 }}
        sector={{ value: (selectedItem.sectors?.Type.find(t => t.Type === 'Сектор')?.Stability ?? 0) * 10 }}
        total={{
          value: selectedItem.Sustainability_Score * 10,
        }}
      />
      <Typography.Text view="primary-medium">{selectedItem.Sustainability_Comment}</Typography.Text>

      <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="small" font="system" weight="semibold">
        Бизнес показатели
      </Typography.TitleResponsive>
      <CompareProgress
        company={{
          value: selectedItem.Business_Performance_Score * 10,

          img: selectedItem.img,
        }}
        imoex={{
          value: (selectedItem.sectors?.Type.find(t => t.Type === 'imoex')?.Business_Indicators ?? 0) * 10,
        }}
        sector={{
          value: (selectedItem.sectors?.Type.find(t => t.Type === 'Сектор')?.Business_Indicators ?? 0) * 10,
        }}
        total={{
          value: selectedItem.Business_Performance_Score * 10,
        }}
      />
      <Typography.Text view="primary-medium">{selectedItem.Business_Performance_Comment}</Typography.Text>
    </div>
  );
};
