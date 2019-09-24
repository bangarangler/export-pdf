import React, {useState, useEffect} from 'react';
import {PDFDownloadLink} from '@react-pdf/renderer';
import {
  fetchData,
  financialIncomeStatementURL,
  //stockOverviewURL,
} from '../../utils/fetchData.js';
import {PdfDocument} from './data';
import styles from './Download.module.scss';

const Download = () => {
  const [data, setData] = useState(null);
  const run = async () => {
    setData(await fetchData(financialIncomeStatementURL));
  };
  useEffect(() => {
    // FETCH DATA ON MOUNT
    run();
  }, []);

  return (
    data && (
      <div className={styles.test}>
        <PDFDownloadLink
          document={<PdfDocument data={data} />}
          fileName="datalist.pdf">
          {({blob, url, loading, error}) =>
            loading ? 'Loading document...' : 'Download Pdf'
          }
        </PDFDownloadLink>
      </div>
    )
  );
};

export default Download;
