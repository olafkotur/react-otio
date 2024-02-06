import { useCallback } from 'react';

export const useFormatCurrency = () => {
  return useCallback((input: number, currencySymbol = true) => {
    let options: Intl.NumberFormatOptions = { style: 'currency', currency: 'USD' };
    if (currencySymbol === false) {
      options = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
    }
    const formatter = new Intl.NumberFormat('en-US', options);
    return formatter.format(input);
  }, []);
};

export const useFormatPercent = () => {
  return useCallback((value: number) => {
    let val = value;
    if (value >= 1) {
      val = value - 1;
    }
    return `${Math.floor(val * 100)}%`;
  }, []);
};

export const useFormatDate = (format = 'DD/MM/YYYY') => {
  return useCallback(
    (value: Date) => {
      const day = value.getDate().toString().padStart(2, '0');
      const month = (value.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based in JS
      const year = value.getFullYear();

      switch (format) {
        case 'MM/DD/YYYY':
          return `${month}/${day}/${year}`;
        case 'YYYY/MM/DD':
          return `${year}/${month}/${day}`;
        default:
          return `${day}/${month}/${year}`;
      }
    },
    [format],
  );
};
