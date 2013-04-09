/*console.log("test");

var ds = new Miso.Dataset({
  importer : Miso.Dataset.Importers.GoogleSpreadsheet,
  parser : Miso.Dataset.Parsers.GoogleSpreadsheet,
  key : "0AtpZKXly5yU0dDM0U3YzcVV0SUpEeFAzbmQ4WmZnakE",
  worksheet : "1"
});

var rows = [];

ds.fetch({ 
  success : function() {
//    console.log(this.toJSON());

    rows = this.toJSON();





    loadData(rows);
  },
  error : function() {
    console.log("Are you sure you are connected to the internet?");
  }
});

   function loadData(rows){

    var firstRow = rows[0];       

   console.log(firstRow);

    var firstHTML = '<h2 class="accordion_toggle">' + firstRow.start_date + ' --- ' +  firstRow.end_date + ": " + firstRow.header + '</h2><div class="accordion_content"></div><h2 class="accordion_toggle">Title Bar</h2><div class="accordion_content"></div>';

   console.log(firstHTML);

   }

$(document).ready(function(){
    var verticalAccordion = new accordion('#table');
});
 

$("#table").html(firstHTML);      

$(document).ready(function() {
   console.log($("#table"));
 });
*/
