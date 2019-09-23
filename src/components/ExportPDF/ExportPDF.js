import React from 'react';
import { fetchData, financialIncomeStatementURL, stockOverviewURL } from '../../utils/fetchData.js';

const ExportPDF = () => {
  return (
    <div>
      <p>pdf</p>
      <button onClick={() => fetchData(financialIncomeStatementURL)}>Get Data</button>
    </div>
  );
};

export default ExportPDF;
