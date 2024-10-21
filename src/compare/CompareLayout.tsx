import { ProgressBar } from '@alfalab/core-components/progress-bar';
import { Typography } from '@alfalab/core-components/typography';
import { useEffect, useRef, useState } from 'react';
import { compSt } from './style.css';
import { useWindowListener } from './useEventListener';

type Props = {
  total: {
    value: number;
    color: 'positive' | 'attention' | 'negative';
  };
  sector: {
    value: number;
    color: 'gray' | 'green' | 'orange' | 'red';
    adjustPosition?: number;
  };
  company: {
    value: number;
    color: 'gray' | 'green' | 'orange' | 'red';
    adjustPosition?: number;
    img: string;
  };
  imoex: {
    value: number;
    color: 'gray' | 'green' | 'orange' | 'red';
    adjustPosition?: number;
  };
};

export const CompareProgress = ({ total, sector, company, imoex }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [[sectorPosition, companyPosition, imoexPosition], setDotsPositons] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    if (ref.current) {
      const width = ref.current.clientWidth;
      const sectorDot = (sector.value * width) / 100 - 6;
      const companyDot = (company.value * width) / 100 - 8;
      const imoexDot = (imoex.value * width) / 100 - 6;
      setDotsPositons([sectorDot, companyDot, imoexDot]);
    }
  }, [sector.value, company.value, imoex.value]);

  useWindowListener('resize', () => {
    if (ref.current) {
      const width = ref.current.clientWidth;
      const sectorDot = (sector.value * width) / 100 - 6;
      const companyDot = (company.value * width) / 100 - 8;
      const imoexDot = (imoex.value * width) / 100 - 6;
      setDotsPositons([sectorDot, companyDot, imoexDot]);
    }
  });
  return (
    <div className={compSt.progressContainer} ref={ref}>
      <ProgressBar
        className={total.color === 'negative' ? compSt.progressRed : compSt.progress}
        value={total.value}
        view={total.color}
      />
      <Typography.Text view="secondary-medium" color="secondary" className={compSt.se({ position: 'left' })}>
        0
      </Typography.Text>
      <Typography.Text view="secondary-medium" color="secondary" className={compSt.se({ position: 'right' })}>
        10
      </Typography.Text>
      <div
        className={compSt.dot({ color: sector.color, size: 's' })}
        style={{ left: sectorPosition + (sector.adjustPosition ?? 0) }}
      />
      <div
        className={compSt.dot({ color: company.color, size: 'm' })}
        style={{ left: companyPosition + (company.adjustPosition ?? 0) }}
      />
      <div
        className={compSt.dot({ color: imoex.color, size: 's' })}
        style={{ left: imoexPosition + (imoex.adjustPosition ?? 0) }}
      />

      <div className={compSt.textBottom} style={{ left: sectorPosition - 12 + (sector.adjustPosition ?? 0) }}>
        <Typography.Text view="secondary-medium">{sector.value / 10}</Typography.Text>
        <Typography.Text view="secondary-small" color="secondary">
          Сектор
        </Typography.Text>
      </div>
      <div className={compSt.textBottom} style={{ left: imoexPosition - 12 + (imoex.adjustPosition ?? 0) }}>
        <Typography.Text view="secondary-medium">{imoex.value / 10}</Typography.Text>
        <Typography.Text view="secondary-small" color="secondary">
          IMOEX
        </Typography.Text>
      </div>

      <div className={compSt.tagContainer} style={{ left: companyPosition - 22 + (company.adjustPosition ?? 0) }}>
        <div className={compSt.tag({ color: company.color })}>
          <img src={company.img} width={26} height={26} className={compSt.tagImg} />
          <Typography.Text view="primary-small" color="primary-inverted">
            {company.value.toString().includes('0')
              ? (company.value / 10).toFixed(1).replace('.', ',')
              : (company.value / 10).toLocaleString('ru')}
          </Typography.Text>
        </div>
        <div className={compSt.stick({ color: company.color })} />
      </div>
    </div>
  );
};
