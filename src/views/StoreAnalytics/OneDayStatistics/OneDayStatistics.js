import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import Select from 'react-select';
import {Card, CardBody, CardHeader, Col, Row} from 'reactstrap';
import {SingleDatePicker} from 'react-dates';
import moment from 'moment';
import 'react-dates/initialize';
import '../../../scss/vendors/react-dates/_datepicker.css';

const line = {
  labels: ['1:00 - 1:59', '2:00 - 2:59', '3:00 - 3:59', '4:00 - 4:59', '5:00 - 5:59', '6:00 - 6:59', '7:00 - 7:59'],
  datasets: [
    {
      label: 'Total Visitors',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};


class OneDayStatistics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parameters: {
        camera: {value: 'ALL_CAMERAS', label: 'All'},
        date: moment(),
      },
      focused: false
    };

    this.cameraList = [
      {value: 'ALL_CAMERAS', label: 'All'},
      {value: '1', label: '1'},
      {value: '2', label: '2'}
    ]
  }

  handleCameraChange = (camera) => {
    let parameters = this.state.parameters;
    parameters.camera = camera;
    this.setState({parameters});
  };

  handleDateChange = (startDate, endDate) => {
    let parameters = this.state.parameters;
    parameters.startDate = startDate;
    parameters.endDate = endDate;
    this.setState({parameters});
  };

  render() {
    return (
      <Col className="animated fadeIn" sm="12" md="12">
        <Card>
          <CardHeader>
            Total Visitors / Hour
          </CardHeader>
          <CardBody>
            <Row className="row-wrapper">
              <Col xs="12" sm="12" md="4" lg="4">
                <div className="label-wrapper">
                  <label>Camera</label>
                </div>
                <Select
                  options={this.cameraList}
                  value={this.state.parameters.camera}
                  onChange={value => this.handleCameraChange(value)}
                />
              </Col>
              <Col xs="12" sm="12" md="2" lg="2">
                <div className="label-wrapper">
                  <label>Date</label>
                </div>
                <div className="date-picker-wrapper">
                  <SingleDatePicker
                    date={this.state.parameters.date}
                    onDateChange={date => this.handleDateChange(date)}
                    focused={this.state.focused}
                    onFocusChange={({focused}) => this.setState({focused})}
                    id="date"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="12" md="12" lg="12">
                <div className="chart-wrapper">
                  <Line
                    data={line}
                    options={{
                      legend: {
                        display: true,
                        position: 'bottom'
                      }
                    }}
                  />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default OneDayStatistics;
