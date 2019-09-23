import React, { useState } from 'react'
import {
  fetchData,
  financialIncomeStatementURL,
  stockOverviewURL,
} from '../../utils/fetchData.js';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer'


const ExportPDF = () => {
  const [data, setData] = useState(null);
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row"
    },
    section: {
      flexGrow: 1
    }
  })

  const MyDocument = (
    <Document>
       <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Hello World!</Text>
        </View>
        <View style={styles.section}>
          <Text>{data && Object.entries(data)}</Text>
        </View>
      </Page>
    </Document>
  )

  return (
    <div>
      <p>pdf</p>
      <button onClick={async () => setData(await fetchData(financialIncomeStatementURL))}>Fetch Data
      </button>
      {data && <PDFViewer>
        {MyDocument}
    </PDFViewer>}
    </div>
  );
};


export default ExportPDF;
