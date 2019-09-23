// EVERY WAY I TRY THIS GETTING A TYPE MISMATCH ERROR. NOT SURE WHAT THE
// DIFFERENCE IS. STILL LOOKING INTO IT
import React, {useState, useEffect} from 'react';
import {PDFDownloadLink} from '@react-pdf/renderer';
import {
  fetchData,
  financialIncomeStatementURL,
  //stockOverviewURL,
} from '../../utils/fetchData.js';
import { PdfDocument } from './data'

const Download = () => {
  const [data, setData] = useState(null);
  const run = async () => {
    setData(await fetchData(financialIncomeStatementURL));
  };
  useEffect(() => {
    run();
  }, []);

    return data && (
      <PDFDownloadLink
        document={<PdfDocument data={data} />}
        fileName="datalist.pdf"
        style={{
          textDecoration: 'none',
          padding: '10px',
          color: '#4a4a4a',
          backgroundColor: '#f2f2f2',
          border: '1px solid #4a4a4a',
        }}
      >
            {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : "Download Pdf"}
          </PDFDownloadLink>
    );
};

export default Download;
