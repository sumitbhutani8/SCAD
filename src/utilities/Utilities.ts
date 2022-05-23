import _ from "lodash";
class Utilities {
  public getManipulatedData = (data: any, filteredValues: any) => {
    if (filteredValues != null) {
      if (filteredValues["shift"].length > 0) {
        data = data.filter(function (x: any) {
          if (filteredValues["shift"].indexOf(x.type) != -1) return x;
        });
      }
      if (filteredValues["terminal"].length > 0) {
        data = data.filter(function (x: any) {
          if (filteredValues["terminal"].indexOf(x.terminal) != -1) return x;
        });
      }
      if (filteredValues["secLane"].length > 0) {
        data = data.filter(function (x: any) {
          if (filteredValues["secLane"].indexOf(x.secLane) != -1) return x;
        });
      }
    }

    var groupedModel: any = [];

    groupedModel = _(data)
      .groupBy((item: any) => `${item.startDate} ${item.empAirport}`)
      .map((groupedData: any, key: any) => ({
        count: groupedData.length,
        id: key,
        empid: _.map(groupedData, "empid").join(","),
        //title: _.map(groupedData, "title").join(","),
        title: groupedData.length + " Shifts",
        members: _.map(groupedData, "empid"),
        empName: _.map(groupedData, "empName").join(","),
        startDate: groupedData[0].startDate,
        endDate: groupedData[0].endDate,
        day_shift: _.map(groupedData, "dayShift").join(","),
        empAirport: groupedData[0].empAirport,
        gender: _.map(groupedData, "gender").join(","),
        secLane: _.map(groupedData, "secLane").join(","),
        terminal: _.map(groupedData, "terminal").join(","),
        type: _.map(groupedData, "type").join(","),
      }))
      .value();

    for (var m = 0; m < groupedModel.length; m++) {
      if (groupedModel[m].count < 20) {
        groupedModel[m].capacity = "low";
      } else if (groupedModel[m].count > 20 && groupedModel[m].count < 80) {
        groupedModel[m].capacity = "medium";
      } else {
        groupedModel[m].capacity = "high";
      }
    }
    return groupedModel;
  };
}

export const utilities = new Utilities();
