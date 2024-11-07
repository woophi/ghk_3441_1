import { ProgressBar } from '@alfalab/core-components/progress-bar';
import { Typography } from '@alfalab/core-components/typography';
import { useEffect, useRef, useState } from 'react';
import { compSt } from './style.css';
import { useWindowListener } from './useEventListener';

type Props = {
  total: {
    value: number;
  };
  sector?: {
    value: number;
    adjustPosition?: number;
  };
  company: {
    value: number;
    adjustPosition?: number;
    img: string;
  };
  imoex?: {
    value: number;
    adjustPosition?: number;
  };
};

export const CompareProgress = ({ total, sector, company, imoex }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [[sectorPosition, companyPosition, imoexPosition], setDotsPositons] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    if (ref.current) {
      const width = ref.current.clientWidth;
      const sectorDot = sector ? (sector.value * width) / 100 - 6 : 0;
      const companyDot = (company.value * width) / 100 - 8;
      const imoexValue = imoex ? (imoex.value * width) / 100 - 6 : 0;
      const imoexDot =
        (sector?.value ?? 0) - (imoex?.value ?? 0) > 50
          ? imoexValue
          : imoexValue + ((imoex?.value ?? 0) > (sector?.value ?? 0) ? 35 : -20);

      setDotsPositons([sectorDot, companyDot, imoexDot]);
    }
  }, [sector?.value, company.value, imoex?.value]);

  useWindowListener('resize', () => {
    if (ref.current) {
      const width = ref.current.clientWidth;
      const sectorDot = sector ? (sector.value * width) / 100 - 6 : 0;
      const companyDot = (company.value * width) / 100 - 8;
      const imoexValue = imoex ? (imoex.value * width) / 100 - 6 : 0;
      const imoexDot =
        (sector?.value ?? 0) - (imoex?.value ?? 0) > 50
          ? imoexValue
          : imoexValue + ((imoex?.value ?? 0) > (sector?.value ?? 0) ? 35 : -20);
      setDotsPositons([sectorDot, companyDot, imoexDot]);
    }
  });

  const totalColor: 'positive' | 'attention' | 'negative' =
    total.value >= 70 ? 'positive' : total.value >= 40 ? 'attention' : 'negative';
  const totalClassname = totalColor === 'negative' ? compSt.progressRed : compSt.progress;

  const companyColor: 'gray' | 'green' | 'orange' | 'red' =
    company.value >= 70 ? 'green' : company.value >= 40 ? 'orange' : 'red';

  const imoexColor: 'gray' | 'green' | 'orange' | 'red' = !imoex || imoex.value > company.value ? 'gray' : companyColor;
  const sectorColor: 'gray' | 'green' | 'orange' | 'red' = !sector || sector.value > company.value ? 'gray' : companyColor;

  return (
    <div className={compSt.progressContainer} ref={ref}>
      <ProgressBar className={totalClassname} value={total.value} view={totalColor} />
      <Typography.Text view="secondary-medium" color="secondary" className={compSt.se({ position: 'left' })}>
        0
      </Typography.Text>
      <Typography.Text view="secondary-medium" color="secondary" className={compSt.se({ position: 'right' })}>
        10
      </Typography.Text>
      {sector && (
        <div
          className={compSt.dot({ color: sectorColor, size: 's' })}
          style={{ left: sectorPosition + (sector.adjustPosition ?? 0) }}
        />
      )}
      <div
        className={compSt.dot({ color: companyColor, size: 'm' })}
        style={{ left: companyPosition + (company.adjustPosition ?? 0) }}
      />
      {imoex && (
        <div
          className={compSt.dot({ color: imoexColor, size: 's' })}
          style={{ left: imoexPosition + (imoex.adjustPosition ?? 0) }}
        />
      )}

      {sector && (
        <div className={compSt.textBottom} style={{ left: sectorPosition - 12 + (sector.adjustPosition ?? 0) }}>
          <Typography.Text view="secondary-medium">{sector.value / 10}</Typography.Text>
          <Typography.Text view="secondary-small" color="secondary">
            Сектор
          </Typography.Text>
        </div>
      )}
      {imoex && (
        <div className={compSt.textBottom} style={{ left: imoexPosition - 12 + (imoex.adjustPosition ?? 0) }}>
          <Typography.Text view="secondary-medium">{imoex.value / 10}</Typography.Text>
          <Typography.Text view="secondary-small" color="secondary">
            IMOEX
          </Typography.Text>
        </div>
      )}

      <div className={compSt.tagContainer} style={{ left: companyPosition - 22 + (company.adjustPosition ?? 0) }}>
        <div className={compSt.tag({ color: companyColor })}>
          <img src={company.img} width={26} height={26} className={compSt.tagImg} />
          <Typography.Text view="primary-small" color="primary-inverted">
            {company.value.toString().includes('0')
              ? (company.value / 10).toFixed(1).replace('.', ',')
              : (company.value / 10).toLocaleString('ru')}
          </Typography.Text>
        </div>
        <div className={compSt.stick({ color: companyColor })} />
      </div>
    </div>
  );
};
