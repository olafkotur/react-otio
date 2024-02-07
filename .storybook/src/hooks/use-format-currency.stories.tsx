import React, { useState } from 'react';
import { useFormatCurrency, useFormatDate, useFormatPercent } from '../../../src';

export default {
  title: 'Hooks/useFormat',
};

export const Default = () => {
  const formatCurrency = useFormatCurrency();
  const formatPercent = useFormatPercent();
  const formatDate = useFormatDate();

  const [value, setValue] = useState(1234.56);
  const [percent, setPercent] = useState(0.25);
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <div>
        <label>Value: </label>
        <input type="number" value={value} onChange={(e) => setValue(parseFloat(e.target.value))} />
        <p>Formatted: {formatCurrency(value)}</p>
      </div>
      <div>
        <label>Percent: </label>
        <input type="number" value={percent} onChange={(e) => setPercent(parseFloat(e.target.value))} />
        <p>Formatted: {formatPercent(percent)}</p>
      </div>
      <div>
        <label>Date: </label>
        <input
          type="date"
          value={date.toISOString().substr(0, 10)}
          onChange={(e) => setDate(new Date(e.target.value))}
        />
        <p>Formatted: {formatDate(date)}</p>
      </div>
    </div>
  );
};
