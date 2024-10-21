import { Typography } from '@alfalab/core-components/typography';
import { CompareProgress } from '../compare/CompareLayout';
import { data } from '../data';
import { lrSt } from '../longread/style.css';

const selectByNameItem = (
  name: 'Лукойл' | 'МКПАО ТКС Холдинг' | 'МКПАО “Хэдхантер”' | 'Роснефть' | 'Сбербанк России' | 'МКПАО Яндекс а.о.',
) => data.find(d => d.name === name)!;
export const MoreInfoLayout = () => {
  return (
    <div className={lrSt.container}>
      <Typography.Text view="primary-medium">
        Клиентам Альфа-Инвестиций стал доступен Альфа-Рейтинг Клиентам Альфа-Инвестиций стал доступен Альфа-Рейтинг — сервис
        для комплексной оценки российских акций на основе уникальной методологии и автоматизированных расчётов. Он помогает
        инвесторам определить перспективные активы, способные опережать рынок, и избегать тех бумаг, которые, вероятно, будут
        отставать. Альфа-Рейтинг помогает инвесторам: Быстро находить акции с хорошим потенциалом роста. Избегать инвестиций
        в акции с повышенными рисками. Получать всю ключевую информацию об акциях в одном месте. Легко сравнивать компании из
        одного сектора. Принимать более обоснованные решения о покупке или продаже активов. Эффективность системы
        подтверждается статистическими наблюдениями за портфелями лидеров и аутсайдеров рейтинга. Она была протестирована на
        исторических данных с начала 2023 года по май 2024 года. После запуска рейтинга мы продолжаем наблюдение.  Сейчас
        рейтинг доступен клиентам, использующим Android-приложение Альфа-Инвестиций, в будущем такой функционал появится на
        IOS-устройствах.  Рассказываем о лидерах предыдущей недели и тех, кто лидирует уже долгое время. 
      </Typography.Text>

      <div className={lrSt.row}>
        <img src={selectByNameItem('Лукойл').img} width={48} height={48} />
        <Typography.TitleResponsive tag="h1" view="small" font="system" weight="semibold">
          Лукойл
        </Typography.TitleResponsive>
      </div>
      <CompareProgress
        company={{
          value: selectByNameItem('Лукойл').Overall_Rating_n * 10,
          color: 'green',
          img: selectByNameItem('Лукойл').img,
        }}
        imoex={{ color: 'green', value: 65 }}
        sector={{ color: 'green', value: 51 }}
        total={{
          color: 'positive',
          value: selectByNameItem('Лукойл').Overall_Rating_n * 10,
        }}
      />
      <Typography.Text view="primary-medium">
        Количество баллов — {selectByNameItem('Лукойл').Overall_Rating}. Одна из крупнейших нефтедобывающих компаний в стране
        продолжает увеличивать прибыль благодаря высокой стоимости нефти. Рост стоимости нефти или ослабление рубля до конца
        года станут позитивными драйверами для компании. Дивидендные выплаты по итогам 2024 года по доходности могут
        превысить 15%.
      </Typography.Text>

      <div className={lrSt.row}>
        <img src={selectByNameItem('Сбербанк России').img} width={48} height={48} />
        <Typography.TitleResponsive tag="h1" view="small" font="system" weight="semibold">
          Сбербанк-ао
        </Typography.TitleResponsive>
      </div>
      <CompareProgress
        company={{
          value: selectByNameItem('Сбербанк России').Overall_Rating_n * 10,
          color: 'green',
          img: selectByNameItem('Сбербанк России').img,
        }}
        imoex={{ color: 'green', value: 65 }}
        sector={{ color: 'green', value: 51 }}
        total={{
          color: 'positive',
          value: selectByNameItem('Сбербанк России').Overall_Rating_n * 10,
        }}
      />
      <Typography.Text view="primary-medium">
        Количество баллов — {selectByNameItem('Сбербанк России').Overall_Rating}. Акции крупнейшего банка страны находятся в
        списке лидеров практически на постоянной основе. Это не удивительно, банк обладает высокой рентабельностью, и
        последние финансовые отчёты подтверждают это. Сбербанк прогнозирует рост прибыли по итогам всего 2024 года, что также
        приведёт к увеличению дивидендов. После коррекции прогнозная дивидендная доходность составляет более 14%.
      </Typography.Text>

      <div className={lrSt.row}>
        <img src={selectByNameItem('Роснефть').img} width={48} height={48} />
        <Typography.TitleResponsive tag="h1" view="small" font="system" weight="semibold">
          Роснефть
        </Typography.TitleResponsive>
      </div>
      <CompareProgress
        company={{
          value: selectByNameItem('Роснефть').Overall_Rating_n * 10,
          color: 'green',
          img: selectByNameItem('Роснефть').img,
        }}
        imoex={{ color: 'green', value: 65 }}
        sector={{ color: 'green', value: 51 }}
        total={{
          color: 'positive',
          value: selectByNameItem('Роснефть').Overall_Rating_n * 10,
        }}
      />
      <Typography.Text view="primary-medium">
        Количество баллов — {selectByNameItem('Роснефть').Overall_Rating}. Ещё одна нефтедобывающая компания, которая
        получает выгоду от высокой стоимости нефти и слабого рубля. По итогам 2024 года ожидается высокая дивидендная
        доходность. Бизнес продолжает расти, текущим драйвером выступает реализация масштабного проекта «Восток Ойл».
      </Typography.Text>

      <div className={lrSt.row}>
        <img src={selectByNameItem('МКПАО Яндекс а.о.').img} width={48} height={48} />
        <Typography.TitleResponsive tag="h1" view="small" font="system" weight="semibold">
          Яндекс
        </Typography.TitleResponsive>
      </div>
      <CompareProgress
        company={{
          value: selectByNameItem('МКПАО Яндекс а.о.').Overall_Rating_n * 10,
          color: 'green',
          img: selectByNameItem('МКПАО Яндекс а.о.').img,
        }}
        imoex={{ color: 'green', value: 65 }}
        sector={{ color: 'green', value: 51 }}
        total={{
          color: 'positive',
          value: selectByNameItem('МКПАО Яндекс а.о.').Overall_Rating_n * 10,
        }}
      />
      <Typography.Text view="primary-medium">
        Количество баллов — {selectByNameItem('МКПАО Яндекс а.о.').Overall_Rating}. Крупнейшая IT-компания на рынке,
        завершившая этим летом реорганизацию и теперь у акционеров нет инфраструктурных рисков. Ожидается продолжение высоких
        темпов роста доходов. Также компания впервые в своей истории выплатила дивиденды, сами выплаты невысокие, но для
        акционеров важен сам факт начала такой практики.
      </Typography.Text>

      <div className={lrSt.row}>
        <img src={selectByNameItem('МКПАО ТКС Холдинг').img} width={48} height={48} />
        <Typography.TitleResponsive tag="h1" view="small" font="system" weight="semibold">
          ТКС Холдинг
        </Typography.TitleResponsive>
      </div>
      <CompareProgress
        company={{
          value: selectByNameItem('МКПАО ТКС Холдинг').Overall_Rating_n * 10,
          color: 'green',
          img: selectByNameItem('МКПАО ТКС Холдинг').img,
        }}
        imoex={{ color: 'green', value: 65 }}
        sector={{ color: 'green', value: 51 }}
        total={{
          color: 'positive',
          value: selectByNameItem('МКПАО ТКС Холдинг').Overall_Rating_n * 10,
        }}
      />
      <Typography.Text view="primary-medium">
        Количество баллов — {selectByNameItem('МКПАО ТКС Холдинг').Overall_Rating}. Холдинг завершил редомициляцию в РФ и
        продолжает наращивать финансовые показатели и увеличивать клиентскую базу. Также ТКС интегрирует Росбанк. Интеграцию
        планируют завершить в I квартале 2025 года. Ждём возвращения холдинга к выплате дивидендов, по прогнозам доходность
        составит 6,6%.
      </Typography.Text>

      <div className={lrSt.row}>
        <img src={selectByNameItem('МКПАО “Хэдхантер”').img} width={48} height={48} />
        <Typography.TitleResponsive tag="h1" view="small" font="system" weight="semibold">
          Хэдхантер
        </Typography.TitleResponsive>
      </div>
      <CompareProgress
        company={{
          value: selectByNameItem('МКПАО “Хэдхантер”').Overall_Rating_n * 10,
          color: 'green',
          img: selectByNameItem('МКПАО “Хэдхантер”').img,
        }}
        imoex={{ color: 'green', value: 65 }}
        sector={{ color: 'green', value: 51 }}
        total={{
          color: 'positive',
          value: selectByNameItem('МКПАО “Хэдхантер”').Overall_Rating_n * 10,
        }}
      />
      <Typography.Text view="primary-medium">
        Количество баллов — {selectByNameItem('МКПАО “Хэдхантер”').Overall_Rating}. Компания завершила редомициляцию и в
        первые дни после старта торгов реализовала навес продавцов. Были объявлены особые дивиденды и началась программа
        обратного выкупа акций. У Хэдхантера остаётся крупная денежная позиция, что позитивно в период высоких процентных
        ставок.
      </Typography.Text>
    </div>
  );
};
