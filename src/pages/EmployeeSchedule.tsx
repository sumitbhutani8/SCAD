import React, { Component } from "react";
import CalendarScheduler from "../components/common/Calendar/CalendarScheduler";
import SideCheckBox from "./SideCheckBox";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TopBarCalender from "./TopBarCalender";
import { appointments } from "../components/common/Calendar/Data/ExcelData";

import { utilities } from "../utilities/Utilities";
import _ from "lodash";
type Props = {};

type State = {};

const paddingCheckBox = {
  padding: "0  !important",
  margin: "0 !important",
};

export default class EmployeeSchedule extends Component<Props, State> {
  state = {
    originalData: appointments,
    filteredData: appointments,
    showTopBarCalendar: false,
    attributesObj: {
      width: window.innerWidth,
      height: window.innerHeight - 100,
      showButton: false,
    },
  };

  componentDidMount = () => {
    var employeeData = [...appointments];
    employeeData = employeeData.filter(function (x: any) {
      if (x.empName == "Mark Perez") return x;
    });
    //  const response = utilities.getManipulatedData(employeeData, null);
    const employeeShiftData = _.map(employeeData, (x: any) => _.pick(x, [
        "empAirport",
        "empName",
        "empid",
        "endDate",
        "startDate",
        "secLane",
        "type",
        "gender",
        "members",
        "terminal"
      ]));
    this.setState({ filteredData: employeeShiftData });
  };

  returnValue = {
    data: "",
  };

  callBack = (filteredValues: any) => {
    let temp = [...appointments];
    const response = utilities.getManipulatedData(temp, filteredValues);
    this.setState({ filteredData: response });
  };

  maximizeCalendar = () => {
    var tempObj = { width: 0, height: 0, showButton: false };
    if (this.state.showTopBarCalendar) {
      tempObj.height = window.innerHeight - 150;
    } else {
      tempObj.height = window.innerHeight - 300;
    }

    this.setState({
      showTopBarCalendar: !this.state.showTopBarCalendar,
      attributesObj: tempObj,
    });
  };

  render() {
    return (
      <div>
        <div className="row" style={{ margin: "15px 0px 15px 0px" }}>
          <div className="col-lg-12 page-header">Schedule</div>
        </div>
        <div
          className="row"
          style={{ padding: 0, borderTop: "1px solid #ccc" }}
        >
          <div className="col-lg-12">
            <CalendarScheduler
              data={this.state.filteredData}
              maximizeCalendar={this.maximizeCalendar}
              attributesObj={this.state.attributesObj}
            ></CalendarScheduler>
          </div>
        </div>
      </div>
    );
  }
}
