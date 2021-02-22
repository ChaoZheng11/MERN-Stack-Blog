import React from 'react';
import { Document, Page,pdfjs } from 'react-pdf';

import {Button} from 'antd'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
class pdfviewer extends React.Component {
    state = {
      numPages: null,
      pageNumber: 1,
    }
  
    onDocumentLoadSuccess = ({ numPages }) => {
      this.setState({ numPages:numPages });
    }

    goToPrevPage = () => {
       
        this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
    }


    goToNextPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber + 1 }));
  
    render() {
      const { pageNumber, numPages } = this.state;
  
      return (
        <div>
          

        <div style={{ width: 600 }}>
          <Document
            file="../assets/Chao-Zheng-Resume.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600}></Page>

            
            
            <nav style={{textAlign:'center'}}>
                <p style={{marginTop:'-25px'}}>Page {pageNumber} of {numPages}</p>
                <Button onClick={this.goToPrevPage} size='middle' style={{marginRight:'10px',marginTop:'-25px'}}>Prev</Button>
                <Button onClick={this.goToNextPage} type='primary' size='middle' style={{marginTop:'-25px'}}>Next</Button>
            </nav>
          </Document>

        </div>

        </div>
      );
    }
  }
export default pdfviewer;