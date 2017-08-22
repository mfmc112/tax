var Excel = require('exceljs');
var BusinessCode = require('../core/schemas/business-code-schema');
var BusinessCodeApi = require('../api/business-code.api');
var _ = require("lodash");

var ImportBusinessCodes = function() {
  return  {
    load: function() {
      var self = this;
      var businesses = [];

      var workbook = new Excel.Workbook();
      workbook.xlsx.readFile('./server/tools/business-codes.xlsx').then(function() {
        var ws = workbook.getWorksheet(1)
        var row = ws.getRow(1).values[1];
        console.log('Loading table');
        self.readRows(ws);
      });
    },
    isNumber: function(value) {
      return !_.isNaN(_.toNumber(value));
    },
    isRowMain: function(currentRow, nextRow) {
      if (_.isObject(nextRow)) nextRow = nextRow.text;
      if (
        !this.isNumber(currentRow.substring(0,6)) &&
        !this.isNumber(nextRow.substring(0,6))
      ) {
        console.log("Main: " + currentRow);
        return true;
      }
      return false;
    },
    isRowPrimary: function(currentRow, nextRow) {
      if (_.isObject(nextRow)) nextRow = nextRow.text;
      if (
        !this.isNumber(currentRow.substring(0,6)) &&
        (this.isNumber(nextRow.substring(0,6)) || !nextRow)
      ) {
        console.log("Primary: " + currentRow);
        return true;
      }
      return false;
    },
    isRowSecondary: function(currentRow) {
      if (_.toNumber(currentRow.substring(0,6))) return true;
      return false;
    },
    saveMain: function(businessCode) {
      console.log("SAVING----------"+ businessCode.name);
      BusinessCode.create(businessCode, function(err, response){
        console.log(businessCode.name + "saved successfully");
      });
    },
    readRows: function(ws) {
      var maxRows = 383;
      var main;
      var primaryIndex = -1;
      for (var i = 1; i < maxRows; i++) {
        if (ws.getRow(i).values[1] === undefined) break;

        var row = ws.getRow(i).values[1];
        if (_.isObject(row)) row = row.text;

        // console.log("current: "+ ws.getRow(i).values[1].text + " - next: " + ws.getRow((i+1)).values[1]);
        if (this.isRowMain(row, ws.getRow((i+1)).values[1])){
          primaryIndex = -1;
          if (main) {
            this.saveMain(main);
          }
          main = new BusinessCode();
          main.name = row;
          main.primary = [];
        } else if (this.isRowPrimary(row, ws.getRow((i+1)).values[1])) {
          primaryIndex++;
          main.primary.push({name: row, secondary: []});
        } else if (this.isRowSecondary(row)) {
          console.log("Secondary: " + row);
          main.primary[primaryIndex].secondary.push({ code: row.substring(0,6), name: row.split(/-/)[1] });
        }
      }
      this.saveMain(main);
    }
  };
}

module.exports = ImportBusinessCodes;
