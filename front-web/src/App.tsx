import { useEffect, useMemo, useState } from 'react';
import './App.css';
import CardSum from './components/card-sum';
import Filter, { FormSearchData } from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import { buildSalesByGender } from './helpers';
import { FilterData, PieChartConfig, SalesByGenre, SalesSummaryData } from './types';
import { buildFilterParams, makeRequest } from './util/request';


const initialSummary = {
  sum: 0
};


function App() {

  const [filterData, setFilterData] = useState<FilterData>();

  const handleSubmitFilter = (data: FilterData) => {
    setFilterData(data);
  };

  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();


  const [summary, setSummary] = useState<SalesSummaryData>(initialSummary);

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesSummaryData>('/sales/summary', { params })
      .then((response) => {
        setSummary(response.data);

      })
      .catch(() => {
        console.log('Error to fetch sales by date');
      });
  }, [params]);

  useEffect(() => {
    makeRequest
      .get<SalesByGenre[]>('/sales/by-gender', { params })
      .then((response) => {
        const newSalesByPaymentMethod = buildSalesByGender(response.data);
        setSalesByGender(newSalesByPaymentMethod);
      })
      .catch(() => {
        console.log('Error to fetch sales by date');
      });
  }, [params]);

  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <Filter onSubmitFilter={handleSubmitFilter} />
        <div className="app-container-card base-card">

          <div className="row">
            <div className="app-container-card-sum col-sm-12 col-md-12 col-lg-6">
              <CardSum salesSummaryData={summary} />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <PieChartCard
                name=""
                labels={salesByGender?.labels}
                series={salesByGender?.series} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
