import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  AppointmentModel,
  SchedulerDateTime,
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";
import {
  Scheduler,
  WeekView,
  Appointments,
  Toolbar,
  ViewSwitcher,
  MonthView,
  DayView,
  AllDayPanel,
  DateNavigator,
  AppointmentTooltip,
  AppointmentForm,
  TodayButton,
  ConfirmationDialog,
  Resources,
  CurrentTimeIndicator,
} from "@devexpress/dx-react-scheduler-material-ui";
import {empList} from "./Data/EmpList";
import Tooltip from "@mui/material/Tooltip";
import TooltipContent from "./AppointmentTooltip";


const TextEditor = (props) => {

  if (props.type === "multilineTextEditor") {
    return null;
  }
  return <AppointmentForm.TextEditor {...props} />;
};



const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
  const onCustomFieldChange = (nextValue) => {
    onFieldChange({ customField: nextValue });
  };

  const avalue = [
    {
      id: 1,
      text: "Vaibhav",
    },
    {
      id: 2,
      text: "Sumit",
    },
  ];

  return (
    <AppointmentForm.BasicLayout
      appointmentData={appointmentData}
      onFieldChange={onFieldChange}
      {...restProps}
    >
      <AppointmentForm.Label
        text="Name"
        //type="title"
      />
      <AppointmentForm.Select
        value={appointmentData.customField}
        onValueChange={onCustomFieldChange}
        availableOptions={avalue}
        placeholder="Name"
        type="filledSelect"
      />
    </AppointmentForm.BasicLayout>
  );
};

export default class CalendarScheduler extends React.PureComponent {
  state = {
    data: this.props.data,

    currentViewName: "work-week",
    resources: [
      {
        fieldName: "capacity",
        title: "Capacity",
        instances: [
          { id: "low", text: "Low", color: "skyblue" },
          { id: "medium", text: "Medium", color: "#046B99" },
          { id: "high", text: "High", color: "#1976d2" },
        ],
      },
      {
        fieldName: "members",
        title: "Members",
        allowMultiple: true,
        instances: empList,
      },
    ],
  };
  currentViewNameChange = (currentViewName) => {
    this.setState({ currentViewName });
  };
  commitChanges = this.commitChanges.bind(this);

  componentDidUpdate = (prevProps, prevState) => {
    this.setState({ data: this.props.data });
  };

  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        );
      }
      if (deleted !== undefined) {
        data = data.filter((appointment) => appointment.id !== deleted);
      }
      return { data };
    });
  }

  maximizeCalendar = (event) => {
    this.props.maximizeCalendar();
  };

  render() {
    const { data, resources, currentViewName } = this.state;
    return (
      <Paper>
        <Scheduler data={data} height={this.props.attributesObj.height}>
          <ViewState
            defaultCurrentDate="2022-05-17"
            currentViewName={currentViewName}
            onCurrentViewNameChange={this.currentViewNameChange}
          />

          <WeekView startDayHour={10} endDayHour={19} />
          <WeekView
            name="work-week"
            displayName="Work Week"
            excludedDays={[0, 6]}
            startDayHour={9}
            endDayHour={19}
          />
          <MonthView />
          <DayView />
          <EditingState onCommitChanges={this.commitChanges} />
          <IntegratedEditing />
          <ConfirmationDialog />

          <Toolbar />
          <ViewSwitcher />
          <Appointments />
          <Resources data={resources} />

          <AllDayPanel />
          <DateNavigator></DateNavigator>
          <div style={{ paddingLeft: "24px", paddingTop: "20px" }} className={this.props.attributesObj.showButton ? "": "hidden"}>
            <Tooltip title="Maximize / Minimize">
              <Button
                onClick={this.maximizeCalendar}
                variant="outlined"
                size="small"
              >
                Show/Hide Preferences
              </Button>
            </Tooltip>
          </div>

          <TodayButton></TodayButton>

          <AppointmentTooltip
            contentComponent={TooltipContent}
            showOpenButton
            showCloseButton
          />
          <AppointmentForm
            basicLayoutComponent={BasicLayout}
            textEditorComponent={TextEditor}
          />
          <CurrentTimeIndicator />
        </Scheduler>
      </Paper>
    );
  }
}
