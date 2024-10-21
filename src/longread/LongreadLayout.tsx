import { List } from '@alfalab/core-components/list';
import { Typography } from '@alfalab/core-components/typography';
import longread from '../assets/longread.jpg';
import { lrSt } from './style.css';

export const LongreadLayout = () => {
  return (
    <>
      <img src={longread} />
      <div className={lrSt.container}>
        <Typography.TitleResponsive tag="h1" view="medium" font="system" weight="semibold">
          Как работает Альфа-Рейтинг
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium">
          Система рейтингования активов учитывает всю совокупность влияющих на котировки факторов, включая фундаментальные
          показатели компании-эмитента и рыночную ситуацию. Мы собираем подробную информацию об истории торгов, дивидендных
          выплатах, текущих и прогнозных бизнес-показателях компании. Затем оцениваем риски и потенциал роста, а также
          анализируем активы с помощью технических индикаторов. После обработки данных алгоритмом каждая бумага получает
          оценку от 1 до 10 баллов. Чем выше балл, тем выше вероятность, что динамика актива будет лучше рынка.
        </Typography.Text>
        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h2" view="small" font="system" weight="semibold">
          Критерии оценки ценной бумаги
        </Typography.TitleResponsive>
        <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="semibold">
          История торгов и наличие тренда
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium">
          Оцениваем динамику цены актива за 30 и 365 дней. Определяем силу тренда и его направление: восходящий или
          нисходящий.
        </Typography.Text>

        <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="semibold">
          Дивиденды
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium">
          Выявляем сильные активы по ряду признаков: дивидендная доходность за последний год и прогнозное значение на
          следующий, значение индекса стабильности дивидендов DSI (показывает, насколько стабильно компания выплачивает
          дивиденды и увеличивает их размер из года в год).
        </Typography.Text>

        <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="semibold">
          Бизнес показатели
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium">
          Находим недооценённые акции по ключевым мультипликаторам P/E, P/S и EV/EBITDA, которые помогают оценить стоимость
          актива по отношению к прибыли, выручке и операционной эффективности. Также анализируем динамику роста выручки и
          прибыли.
        </Typography.Text>

        <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="semibold">
          Потенциал роста
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium">
          Находим бумаги с наибольшим потенциалом роста от текущей цены к прогнозной. Учитываем прогнозы аналитиков
          Альфа-Банка и консенсус-прогнозы российских инвестдомов.
        </Typography.Text>

        <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="semibold">
          Устойчивость и потенциальные риски
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium">
          Чтобы найти бумаги с меньшим риском падения, изучаем волатильность за предыдущие 12 месяцев, долговую нагрузку —
          через показатель NetDebt/EBITDA и ликвидность — через обороты в прошлом.
        </Typography.Text>

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h2" view="small" font="system" weight="semibold">
          Результаты оценки
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium">
          В результате расчётов каждая ценная бумага получает оценку по 10-ти бальной шкале. Бумаги с оценкой 1–3 могут
          выглядеть слабее остальных из-за высоких рисков. Активы, получившие 7 баллов и выше, — лидеры рынка с высоким
          потенциалом роста. Раз в неделю рейтинг пересчитывается, и итоговая оценка меняется.
        </Typography.Text>

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h2" view="small" font="system" weight="semibold">
          Какие задачи поможет решить Альфа-Рейтинг
        </Typography.TitleResponsive>
        <List tag="ul">
          <List.Item>
            <Typography.Text view="primary-medium">
              Получить всю ключевую информацию о компании в одном месте
            </Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text view="primary-medium">Сравнить компании из одного сектора</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text view="primary-medium">Найти перспективные ценные бумаги с потенциалом роста</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text view="primary-medium">Получить аргументы в пользу покупки или продажи актива</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text view="primary-medium">Быстро найти лидеров и аутсайдеров рынка</Typography.Text>
          </List.Item>
        </List>
      </div>
    </>
  );
};
