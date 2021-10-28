export const displayMonth = (lang: any, month: string | number, oneBased = false) : string => {
  month = month ?? -1;
  if (month === -1) return '';
  
  if (typeof month === 'number') {
    if (oneBased) {
      return month >= 1 && month <= 12 ? lang.monthNames[month - 1] : '';
    }

    return month >= 0 && month < 12 ? lang.monthNames[month] : '';
  }

  // string number
  try {
    const intMonth = parseInt(month.toString());
    
    if (oneBased && !isNaN(intMonth) && intMonth >= 1 && intMonth <= 12) return lang.monthNames[intMonth - 1];
    if (!oneBased && !isNaN(intMonth) && intMonth >= 0 && intMonth < 12) return lang.monthNames[intMonth];
  } catch {
    // do nothing
  }
  
  const _month = month.toLowerCase();
  const monthName = lang.monthNames.find(x => x.toLowerCase() === _month);

  if (!monthName) return monthName;

  const index = lang.monthAbbreviations.findIndex(x => x.toLowerCase() === _month);
  return index >= 0 ? lang.monthNames[index] : '';
};

export const displayYear = (year: string | number) : string => {
  year = year ?? -1;
  if (year === -1) return '';

  if (typeof year === 'string') {
    year = parseInt(year.toString().replace(/\D/, ''));

    if (isNaN(year) || year === -1) {
      return '';
    }
  }

  if (year > 9999) return '9999';

  return year.toString();
};

export function toMonthSequence({ month, year }): number {
   return (year * 100) + month;
}  