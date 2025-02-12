'use client';

import { useState } from 'react';
import Card from '../../components/main/Card';
import IntervalTab from '../../components/main/IntervalTab';
import FourGridLayout from '../../components/layout/FourGridLayout';
import MktDropdown from '../../components/main/MktDropdown';
import ControlsLayout from '../../components/layout/ControlsLayout';
import { PerpValues } from './PerpValues';

export default function Perps() {
  const [active, setActive] = useState('7');
  const [market, setMarket] = useState('all-perp');

  return (
    <>
      <FourGridLayout>
        <Card title="Total Perpetual Volume" stat={2.21} daily={14.08} />
        <Card title="Perpetual Volume (24h)" stat={2.21} daily={14.08} />
        <Card title="Total Open Interest" stat={1023} daily={14.08} />
        <Card title="Perpetual Trades (24h)" stat={2.21} daily={14.08} />
      </FourGridLayout>
      <ControlsLayout justify="between">
        <MktDropdown
          market={market}
          setMarket={setMarket}
          values={PerpValues}
        />
        <IntervalTab active={active} setActive={setActive} />
      </ControlsLayout>
    </>
  );
}
