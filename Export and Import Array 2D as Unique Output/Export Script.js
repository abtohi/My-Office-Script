function main(workbook: ExcelScript.Workbook) {
    var wb      = workbook.getWorksheet('Data')
    var lastRow = workbook.getTable('DB_Assigment').getRowCount()
    var data    = wb.getRange('B2:N'+[lastRow+1]).getValues()
                  .map(a=>[a[0]+' # '+a[1],a[9],a[10],a[12]])
    
    //Syntax to convert array 2d to unique
    var temp = ''
    var unique = data.sort().filter(r => {
        if (r.join("") !== temp) {
            temp = r.join("")
            return true
        }
    })
    
    return JSON.stringify(unique)
}
