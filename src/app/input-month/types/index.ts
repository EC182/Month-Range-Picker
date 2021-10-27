import LocalizationLocal from "./localization";

export { LocalizationLocal as Localization }; 

export type MonthData = {
  year: number | -1;
  month: number | -1;
};

export type Preset =
  'thisMonth' |
  'lastMonth' |
  'last3Months' |
  'last6Months' |
  'last9Months' |
  'last12Months' |
  'nextMonth' |
  'next3Months' |
  'next6Months' |
  'next9Months' |
  'next12Months' |
  CustomPreset;

export type CustomPreset = {
  name: string;
  onClick: () => OnChangeRangeEvent,
};

export type OnChangeEvent = MonthData;

export type OnChangeRangeEvent = {
  from: MonthData;
  to: MonthData;
};