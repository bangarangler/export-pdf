# Research Generating pdf documents

---

- generating pdf documents for data fetch from api
- try finding best solutions for generating pdf in javascript online and decide on best next step.

![](image_(1)-a33c46f5-514e-4244-a31f-4f85992013b4.png)

![](image-d14e7701-7dc6-4d47-932e-a4d9141712b4.png)

Try to replicate these mockups in the pdf file and skip the charts for now.

[http://unicorn.nowigence.ai/quandl_overview_page?ticker=AAPL&stock_freq_period=quarter&stock_len_period=one_year&rev_freq_period=quarter&rev_len_period=one_year](http://unicorn.nowigence.ai/quandl_overview_page?ticker=AAPL&stock_freq_period=quarter&stock_len_period=one_year&rev_freq_period=quarter&rev_len_period=one_year)

[](http://unicorn.nowigence.ai/quandl_financial_income_statement?ticker=TTL&year_or_quarter=year&n_periods=4)

Nowigence has many dashboard components with financial and textual data and we would like user to be able to download them in pdf files.

## Research

[How to create PDFs from React components [client side solution]](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=2ahUKEwiRpPvqp-fkAhUCcq0KHaoPCpoQFjACegQIARAB&url=https%3A%2F%2Fmedium.com%2F%40shivekkhurana%2Fhow-to-create-pdfs-from-react-components-client-side-solution-7f506d9dfa6d&usg=AOvVaw19V0uHahT8zYvsRbtnP6ls)

[Download API Files With React & Fetch](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwj38YXmwOfkAhVJ-6wKHaVxCSMQFjAAegQIARAB&url=https%3A%2F%2Fmedium.com%2Fyellowcode%2Fdownload-api-files-with-react-fetch-393e4dae0d9e&usg=AOvVaw0IuCTqdy0CdazIs5Ho1SWo)

[Create PDFs with React | Inside PSPDFKit](https://pspdfkit.com/blog/2019/create-pdfs-with-react/)

[Generating Pdf documents in React Using React-pdf](https://dev.to/finallynero/generating-pdf-documents-in-react-using-react-pdf-4ka7)

    <Document> // PDF Doc itself. Must be the root
    	<Page> // Single page inside PDF Doc or subset of them. Only render in <Document> Tags
    		<View> // can be nested inside other <View> tags
    			<Text> // Supports nesting of other Text or Link Components
    				
    			</Text>
    		</View>
    	</Page>
    </Document>
    // PRETTY SOLID DOCS LINKED BELOW!

    <PDFViewer> //(web-only) 
    </PDFViewer>
    
    <PDFDownloadLink> // (web-only) - generate & download on the fly
    </PDFDownloadLink>
    
    <BlobProvider> // (web-only) - document blob data without showing on screen
    </BlobProvider>
    // PRETTY SOLID DOCS LINKED BELOW!

[React-pdf](https://react-pdf.org/)