export type Gender = "MALE" | "FEMALE" | "OTHER";

export type Store = {
  id: number;
  name: string;
};

export type SalesByGenre = {
  gender: string;
  sum: number;
};

export type SalesSummaryData = {
  sum: number;
};

export type FilterData = {
  store?: Store;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};
