function main(workbook: ExcelScript.Workbook, values: string) {
  var wb = workbook.getWorksheet('Data')
  var newData = JSON.parse(values)
  var lastRow = wb.getTable('AssignmentFC').getRowCount()+1
  var currData = wb.getRange('A2:D' + [lastRow]).getValues()
  var array: (boolean | number | string)[][] = []
  for (var i = 0; i < newData.length; i++) {
    var n = false
    for (var j = 0; j < currData.length; j++) {
      if (newData[i][0] == currData[j][0] && newData[i][1] == currData[j][1] && newData[i][2] == currData[j][2]) {
        n = true
        wb.getRange('A' + [j + 2]).setValue(newData[i][0])
        wb.getRange('B' + [j + 2]).setValue(newData[i][1])
        wb.getRange('C' + [j + 2]).setValue(newData[i][2])
        wb.getRange('D' + [j + 2]).setValue(newData[i][3])
      }
    }
    if (n == false && newData[i][0] != '') {
      array.push(newData[i])
    }
  }
  try {
    wb.getRange('A' + [lastRow + 1]).getAbsoluteResizedRange(array.length, array[0].length).setValues(array)
  } catch (e) { }

}
