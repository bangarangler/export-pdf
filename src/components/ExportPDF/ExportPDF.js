import React, {useState} from 'react';
import {
  fetchData,
  financialIncomeStatementURL,
  stockOverviewURL,
} from '../../utils/fetchData.js';
import {PDFExport} from '@progress/kendo-react-pdf';

import styles from './ExportPDF.module.scss'

const ExportPDF = () => {
  const [data, setData] = useState(null);
  const [dataTest] = useState(null)

  const exportPDF = () => {
    dataTest.save()
  }
  return (
    <div>
      <p>pdf</p>
      <button onClick={async () => setData(await fetchData(financialIncomeStatementURL))}>
        Get Data
      </button>
      <PDFExport
        paperSize={'Letter'}
        fileName="test.pdf"
        title="test"
        subject="test subject"
        keywords="pdf export"
        ref={(r) => dataTest = r}
        >
        <div className={styles.testDoc}>{data && ((Object.entries(data)))}</div>
      </PDFExport>
      <button onClick={exportPDF}>Save PDF</button>
    </div>
  );
};

export default ExportPDF;
