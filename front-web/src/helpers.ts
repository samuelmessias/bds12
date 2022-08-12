import { Gender, SalesByGenre } from "./types";

const formatGender = (gender: Gender) => {
  const textByGender = {
    MALE: "Masculino",
    FEMALE: "Feminino",
    OTHER: "Outros",
  };

  return textByGender[gender];
};

export const buildSalesByGender = (sales: SalesByGenre[]) => {
  const labels = sales.map((sale) => sale.gender);
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series,
  };
};
