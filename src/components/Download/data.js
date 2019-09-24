import React from 'react';
import {
  Page,
  Text,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export function PdfDocument(props) {
  console.log('pdf props', props.data);
  return (
    <Document>
      <Page style={styles.page}>
        <Text>{Object.entries(props.data)}</Text>
      </Page>
    </Document>
  );
}
