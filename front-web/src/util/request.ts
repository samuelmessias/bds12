import axios from "axios";
import { FilterData } from "../types";

const baseURL = "http://localhost:8080";

export const makeRequest = axios.create({
  baseURL,
});

export const buildFilterParams = (
  filterData?: FilterData,
  extraParms?: Record<string, unknown>
) => {
  return {
    storeId: filterData?.store?.id,
    ...extraParms,
  };
};
