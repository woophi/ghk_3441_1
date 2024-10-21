import { BottomSheet } from '@alfalab/core-components/bottom-sheet';
import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { useCallback, useState } from 'react';
import { Shape } from './Shape';
import smile from './assets/smile.png';
import { data } from './data';
import { LongreadLayout } from './longread/LongreadLayout';
import { lrSt } from './longread/style.css';
import { MoreInfoLayout } from './more-info/MoreInfoLayout';
import { appSt } from './style.css';
import { TickDeatil } from './tick-detail/TickDetail';

export const App = () => {
  const [longreadShow, setLongread] = useState(false);
  const [moreInfoShow, setMoreInfoShow] = useState(false);
  const [overallRatingId, setOverallRatingId] = useState('');
  const selectedItem = data.find(v => v.Asset_Main_ID === overallRatingId);

  const howToClick = useCallback(() => {
    setLongread(true);
  }, []);

  const howToClose = useCallback(() => {
    setLongread(false);
  }, []);
  return (
    <>
      <div className={appSt.container}>
        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="medium" font="system" weight="semibold">
          Лидеры Альфа-Рейтинга
        </Typography.TitleResponsive>

        <Typography.Text view="primary-medium">
          В вашем списке избранного сохранены бумаги, которые имеют Альфа-рейтинг выше среднего по рынку.
        </Typography.Text>

        <div className={appSt.banner} onClick={howToClick}>
          <img src={smile} width={40} height={40} />
          <Typography.Text view="component-primary">Как мы оцениваем бумаги</Typography.Text>
        </div>

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h2" view="small" font="system" weight="semibold">
          Акции
        </Typography.TitleResponsive>

        {data.map(v => (
          <div className={appSt.banner} key={v.Asset_Main_ID} onClick={() => setOverallRatingId(v.Asset_Main_ID)}>
            <img src={v.img} width={48} height={48} className={appSt.bannerImg} />

            <div className={appSt.rowText}>
              <Typography.Text view="component-primary">{v.name}</Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                {v.Ticker}
              </Typography.Text>
            </div>

            <div className={appSt.shapeContainer}>
              <Shape color="#0CC44D" className={appSt.shapeBg} />
              <Typography.Text view="primary-small" color="primary-inverted" className={appSt.shapeText}>
                {v.Overall_Rating}
              </Typography.Text>
            </div>
          </div>
        ))}
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile block onClick={() => setMoreInfoShow(true)}>
          Подрообнее
        </ButtonMobile>
        <ButtonMobile block view="primary" href="a-investments://CA?type=instruments&value=stocks">
          В терминал
        </ButtonMobile>
      </div>

      <BottomSheet
        title={
          <Typography.Text tag="p" view="component" weight="medium" defaultMargins={false}>
            Альфа-Рейтинг
          </Typography.Text>
        }
        open={longreadShow}
        onClose={howToClose}
        titleAlign="center"
        stickyHeader
        hasCloser
        contentClassName={lrSt.btmContent}
      >
        <LongreadLayout />
      </BottomSheet>

      <BottomSheet
        title={
          <Typography.Text tag="p" view="component" weight="medium" defaultMargins={false}>
            Лидеры Альфа-Рейтинга
          </Typography.Text>
        }
        open={moreInfoShow}
        onClose={() => setMoreInfoShow(false)}
        titleAlign="center"
        stickyHeader
        hasCloser
        contentClassName={lrSt.btmContent}
      >
        <MoreInfoLayout />
      </BottomSheet>

      <BottomSheet
        title={
          <Typography.Text tag="p" view="component" weight="medium" defaultMargins={false}>
            Оценка {selectedItem?.name}
          </Typography.Text>
        }
        open={!!selectedItem}
        onClose={() => setOverallRatingId('')}
        titleAlign="center"
        stickyHeader
        hasCloser
        contentClassName={lrSt.btmContent}
        actionButton={
          <ButtonMobile
            block
            view="primary"
            href={`a-investments://CA?type=isinFromCurrent&value=${selectedItem?.Asset_Main_ID}`}
          >
            Купить
          </ButtonMobile>
        }
      >
        <TickDeatil selectedItem={selectedItem} />
      </BottomSheet>
    </>
  );
};
