// EVERY WAY I TRY THIS GETTING A TYPE MISMATCH ERROR. NOT SURE WHAT THE
// DIFFERENCE IS. STILL LOOKING INTO IT
import React, { useState, useEffect } from 'react'
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer'
import {
  fetchData,
  financialIncomeStatementURL,
  stockOverviewURL,
} from '../../utils/fetchData.js';



const Download = () => {
  const [data, setData] = useState(null)
  const run = async () => {
    setData(await fetchData(financialIncomeStatementURL))
  }
  useEffect(() => {
    run()
  }, [])

  const MyDoc = () => {
    return (
    <Document>
      <Page size="A4">
        {data ? Object.entries(data) : null}}
      </Page>
    </Document>
    )
  }
  return (
  <div>
    {data ? Object.entries(data) : <p>Loading...</p>}
    {data && <PDFDownloadLink document={<MyDoc />} fileName="test.pdf">
    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now')}
    </PDFDownloadLink>}
    </div>
  )
}

export default Download;
