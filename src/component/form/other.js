import React from 'react';
import DatePicker from './DatePicker';
import FormSpecific from './FormSpecific';
import { Row, Col ,Card} from 'antd';
export default function () {
    return(
        <Row gutter={2}>
            <Col className="gutter-row" span={10}>    <DatePicker/>   </Col>
            <Col className="gutter-row" span={10}>   <Card> <FormSpecific/> </Card>    </Col>
        </Row>
    )
}