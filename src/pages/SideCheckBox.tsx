import React, { Component } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import _ from "lodash";

const padding = {
  padding: "10px",
};

type Props = {
  data: any;
  callBack: (filteredValues: any) => void;
  attributesObj: any;
};

type State = {};

export default class SideCheckBox extends Component<Props, State> {
  state = {
    filteredVariables: { shift: [], terminal: [], secLane: [] },
  };

  updateFilterVariable = (selectedValue: any, filteredItem: string) => {
    let updatedFilter: any = {};
    updatedFilter = { ...this.state.filteredVariables };
    if (updatedFilter.shift == undefined) {
      updatedFilter[filteredItem] = [];
      updatedFilter[filteredItem].push(selectedValue);
    } else {
      if (!_.includes(updatedFilter[filteredItem], selectedValue))
      updatedFilter[filteredItem].push(selectedValue);
      else
        _.remove(updatedFilter[filteredItem], function (x: any) {
          return x === selectedValue;
        });
    }
    this.setState({ filteredVariables: updatedFilter });
    this.props.callBack(this.state.filteredVariables);
  }
  shiftChangeListener = (event: any) => {
    this.updateFilterVariable(event.target.value, "shift");
  };
  terminalChangeListener = (event: any) => {
    this.updateFilterVariable(event.target.value, "terminal");
  };
  secLaneChangeListener = (event: any) => {
    this.updateFilterVariable(event.target.value, "secLane");
  };
  render() {
    return (
      <Card    style={{height: this.props.attributesObj.height + "px"}}>
        <CardContent>
          <div style={padding}>
            <FormGroup style={{ fontSize: "12px" }}>
              <b>Type</b>
              <FormControlLabel
                control={<Checkbox className="small-size-chkbox" />}
                onChange={this.shiftChangeListener}
                value="Shift"
                label={
                  <Box component="div" fontSize={13}>
                    {" "}
                    Shift
                  </Box>
                }
              ></FormControlLabel>
              <FormControlLabel
                control={<Checkbox className="small-size-chkbox" />}
                onChange={this.shiftChangeListener}
                value="Absence"
                label={
                  <Box component="div" fontSize={13}>
                    {" "}
                    Absence
                  </Box>
                }
              ></FormControlLabel>
            </FormGroup>
          </div>

          <div style={padding}>
            <FormGroup style={{ fontSize: "12px" }}>
              <b>Terminal</b>

              <FormControlLabel
                control={<Checkbox className="small-size-chkbox" />}
                onChange={this.terminalChangeListener}
                value="A"
                label={
                  <Box component="div" fontSize={13}>
                    {" "}
                    A
                  </Box>
                }
              ></FormControlLabel>
              <FormControlLabel
                control={<Checkbox className="small-size-chkbox" />}
                onChange={this.terminalChangeListener}
                value="B"
                label={
                  <Box component="div" fontSize={13}>
                    {" "}
                    B
                  </Box>
                }
              ></FormControlLabel>
              <FormControlLabel
                control={<Checkbox className="small-size-chkbox" />}
                onChange={this.terminalChangeListener}
                value="C"
                label={
                  <Box component="div" fontSize={13}>
                    {" "}
                    C
                  </Box>
                }
              ></FormControlLabel>
            </FormGroup>
          </div>

          <div style={padding}>
            <FormGroup style={{ fontSize: "12px" }}>
              <b>Sec lane</b>
              <FormControlLabel
                control={<Checkbox className="small-size-chkbox" />}
                onChange={this.secLaneChangeListener}
                value="1"
                label={
                  <Box component="div" fontSize={13}>
                    {" "}
                    1
                  </Box>
                }
              ></FormControlLabel>
              <FormControlLabel
                control={<Checkbox className="small-size-chkbox" />}
                onChange={this.secLaneChangeListener}
                value="2"
                label={
                  <Box component="div" fontSize={13}>
                    {" "}
                    2
                  </Box>
                }
              ></FormControlLabel>
              <FormControlLabel
                control={<Checkbox className="small-size-chkbox" />}
                onChange={this.secLaneChangeListener}
                value="3"
                label={
                  <Box component="div" fontSize={13}>
                    {" "}
                    3
                  </Box>
                }
              ></FormControlLabel>
              <FormControlLabel
                control={<Checkbox className="small-size-chkbox" />}
                onChange={this.secLaneChangeListener}
                value="4"
                label={
                  <Box component="div" fontSize={13}>
                    {" "}
                    4
                  </Box>
                }
              ></FormControlLabel>
            </FormGroup>
          </div>
        </CardContent>
      </Card>
    );
  }
}
