import React, {Component} from 'react';

import PdfViewer from '../components/PdfViewer.js'

import {Row} from 'antd'

class Pdf extends Component {
  render() {
    return (
      <div>
          <Row justify='center'>
            <PdfViewer/>
          </Row>
      </div>
    );
  }
}

export default Pdf