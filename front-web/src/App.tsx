import React from 'react';
import './App.css';
import CardSum from './components/card-sum';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <Filter />
        <div className="app-container-card base-card">

          <div className="row">
            <div className="app-container-card-sum col-sm-12 col-md-12 col-lg-6">
              <CardSum />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <PieChartCard
                name=""
                labels={["teste", "tesd"]}
                series={[45, 65]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
