function insertExpense() {
 /*   var k = "";
    
        var input = document.getElementsByName('Name[]');

        for (var i = 0; i < input.length; i++) {
            var a = input[i];
            k = k + ""
                +  a.value +"\n";
        }
    console.log(k);
    */
    var dName1 = document.getElementById("dataName1").value;
    var dDate1 = document.getElementById("dataDate1").value;
    var dPaid1 = document.getElementById("dataPaid1").value;
      // (C1) DUMMY DATA
    var data =
        [
            ["Name", "Date", "Paid"],
            [dName1, dDate1, dPaid1]
        ];
      // (C2) CREATE NEW EXCEL "FILE"
      var workbook = XLSX.utils.book_new(),
          worksheet = XLSX.utils.aoa_to_sheet(data);
      workbook.SheetNames.push("data");
      workbook.Sheets["data"] = worksheet;
      // (C3) "FORCE DOWNLOAD" XLSX FILE
      XLSX.writeFile(workbook, "Expenses File.xlsx");
       // (C4)  DEBUG
}