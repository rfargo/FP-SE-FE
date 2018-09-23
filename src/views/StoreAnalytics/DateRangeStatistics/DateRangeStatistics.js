import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import Select from 'react-select'
import {Card, CardBody, CardHeader, Col, Row} from 'reactstrap';
import {DateRangePicker} from 'react-dates';
import moment from 'moment';
import 'react-dates/initialize';
import '../../../../src/scss/vendors/react-dates/_datepicker.css';


const line = {
  labels: ['09/17/2018', '09/18/2018', '09/19/2018', '09/20/2018', '09/21/2018', '09/22/2018', '09/23/2018',],
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


class DateRangeStatistics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parameters: {
        camera: {value: 'ALL_CAMERAS', label: 'All'},
        startDate: moment().subtract(6, "days"),
        endDate: moment(),
      },
      focusedInput: null
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

  handleDatesChange = (startDate, endDate) => {
    let parameters = this.state.parameters;
    parameters.startDate = startDate;
    parameters.endDate = endDate;
    this.setState({parameters});
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            Total Visitors / Day
          </CardHeader>
          <CardBody>
            <Row className="row-wrapper">
              <Col xs="12" sm="12" md="4" lg="4">
                <div className="label-wrapper">
                  <label className="centered-label">Camera</label>
                </div>
                <Select
                  options={this.cameraList}
                  value={this.state.parameters.camera}
                  onChange={value => this.handleCameraChange(value)}
                />
              </Col>
              <Col xs="12" sm="12" md="4" lg="4">
                <div className="label-wrapper">
                  <label className="left-label">Start Date</label>
                  <label className="right-label">End Date</label>
                </div>
                <div className="date-picker-wrapper">
                  <DateRangePicker
                    startDate={this.state.parameters.startDate}
                    startDateId="startDate"
                    endDate={this.state.parameters.endDate}
                    endDateId="endDate"
                    onDatesChange={({startDate, endDate}) => this.handleDatesChange(startDate, endDate)}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput => this.setState({focusedInput})}
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
      </div>
    );
  }
}

export default DateRangeStatistics;
