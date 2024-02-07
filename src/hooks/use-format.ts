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

export const useFormatRelativeTime = () => {
  return useCallback((date: Date | string) => {
    const past = new Date(date);
    const current = new Date();
    const difference = current.getTime() - past.getTime();

    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    if (hours > 0) return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    if (minutes > 0) return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    return `Just now`;
  }, []);
};

export const useFormatMinutesUntilNextHour = () => {
  const date = new Date();
  const minutes = date.getMinutes();
  const minutesUntilNextHour = 60 - minutes;
  return String(minutesUntilNextHour).padStart(2, '0'); // ensures it's always two digits
};
