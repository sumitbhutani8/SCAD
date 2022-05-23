import React from "react";
//To use below imports at later stage. Commented for now
import { css } from "@emotion/react";
import { Workbook } from "exceljs";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class ExcelReader {
  public readExcel() {


    //var url = "http://localhost:3000/resources/dataFile.xlsx";

    var workbook = new Workbook();
    workbook.xlsx.readFile("http://localhost:3000/resources/dataFile.xlsx").then(function () {
      var worksheet = workbook.getWorksheet("Introduction");
      worksheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
        console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));
      });
    });



  }
}

export const excelReader = new ExcelReader();
