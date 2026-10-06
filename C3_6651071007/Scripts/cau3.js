let table=document.getElementById("sampleTable");
$("#insertBtn").click(function(){
    let row=table.insertRow(table.rows.length);
    let rowNumber=table.rows.length;
    let cell1=row.insertCell(0);
    let cell2=row.insertCell(1);
    cell1.innerHTML="Row" + rowNumber + " cell1";
    cell2.innerHTML="Row" + rowNumber + " cell2";
});