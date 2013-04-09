if (Meteor.isClient) {


Template.accordion.rendered = function(){

    

    
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
	     
	    

	    
	    console.log("calling loadData");
	    loadData(rows);
	},
	error : function() {
	    console.log("Are you sure you are connected to the internet?");
	}

	
    });
    
    

    $(function(){
	$('#accordion').multiOpenAccordion({
	    active: [1, 2],
	    click: function(event, ui) {
		//console.log('clicked')
	    },
	    init: function(event, ui) {
		//console.log('whoooooha')
	    },
	    tabShown: function(event, ui) {
		//console.log('shown')
	    },
	    tabHidden: function(event, ui) {
		//console.log('hidden')
	    }
	    
	});
	
	$('#accordion').multiOpenAccordion("option", "active", [0, 3]);
    });



    function loadData(rows)
    {
//	console.log("rows")
//	console.log(rows);

	var finalHTML = '';

	for (var k=0; k<rows.length; k++)
	{
	    

	var firstRow = rows[k];
	

	var firstHTML = '<h3 class="ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"><span class="ui-icon ui-icon-triangle-1-e"></span><a name="unique_id"<table><tbody><tr><td class="start_date">' + firstRow.start_date + ' </td><td class="heading">' + firstRow.header + ' </td></tr><tr><td class="end_date">' + firstRow.end_date + ' </td></tr></tbody></table></a></h3>';
	    

//var statementNames = [firstRow.stat1_name,firstRow.stat2_name,firstRow.stat3_name,firstRow.stat4_name,firstRow.stat5_name,firstRow.stat6_name,firstRow.stat7_name,firstRow.stat8_name,firstRow.stat9_name,firstRow.stat10_name,firstRow.stat11_name,firstRow.stat12_name,firstRow.stat13_name,firstRow.stat14_name,firstRow.stat15_name];


var statementHTML = '';
for (var i=1; i<=15; i++){
    
    var currentName = "stat" + i + "_title";

    
    if (firstRow[currentName])
    {
	var currentQuote = "stat" + i + " _quote";
	var currentTitle = "stat" + i + "_title";
	var currentAgency = "stat" + i + "_agency";
	var currentConcerning = "stat" + i + "_concerning";
	var currentURL = "stat" + i + "_URL";
	var currentArchive = "stat" + i + "_archive";

	var currentStatementHTML = '<div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" style="display: block;"> <table class="statement"><tbody><tr><td class="stat1_name"> Statement (1) Name(s)</td><td class="stat1_quote">' + firstRow[currentQuote] + '</td></tr><tr><td class="stat1_title"> Statement (1) Title</td><td>' + firstRow[currentTitle] + '</td></tr> <tr><td class="stat1_agency"> Statement (1) Agency(ies)</td><td>' + firstRow[currentAgency] + '</td></tr><tr><td></td><td class="stat1_concerning">' + firstRow[currentConcerning] + '</td></tr><tr><td></td><td class="stat1_URL"><a href="stat2_URL">' + firstRow[currentURL] + '</a></td></tr><tr><td></td><td class="stat1_archive"><a href="stat1_archive" target="_blank">' + firstRow[currentArchive] + '</a></td></tr></tbody></table>';

	statementHTML += currentStatementHTML;
    }
    
}


var recordHTML = '';
for (var j=1; j<=15; j++){
    
    var currentName = "rec" + j + "_title";

    console.log(currentName);
    
    if (firstRow[currentName])
    {

	var currentTitle = "rec" + j + "_title";
	var currentClass = "rec" + j + "_class";
	var currentAuth = "rec" + j + "_auth";
	var currentAuthTitle = "rec" + j + "_authtitle";
	var currentAuthAgency = "rec" + j + "_authagency";
	var currentAud = "rec" + j + "_aud";
	var currentConcern = "rec" + j + "_concern";
	var currentNotes = "rec" + j + "_notes";
	var currentURL = "rec" + j + "_url";
	var currentArchive = "rec" + j + "_archive";



var currentRecordHTML = 

'<table class="record"><tbody><tr><td>Title:</td><td class="rec1_title">' + firstRow[currentTitle] + '</td></tr><tr><td>Classification:</td><td class="rec1_class">' + firstRow[currentClass] + '</td></tr><tr><td>Author:</td><td class="rec1_authtitle">' + firstRow[currentAuth] + '</td></tr><tr><td>Title:</td><td class="rec1_authtitle">' + firstRow[currentAuthTitle] + '</td></tr><tr><td>Authoring or Creator Agency:</td><td class="rec1_authagency">' + firstRow[currentAuthAgency] + '</td></tr><tr><td>Audience:</td><td class="rec1_aud">' + firstRow[currentAud] + '</td></tr><tr><td>Concerning:</td><td class="rec1_concern">' + firstRow[currentConcern] + '</td></tr><tr><td>Notes:</td><td class="rec1_notes">' + firstRow[currentNotes] + '</td></tr><tr><td></td><td class="rec1_url"><a href="' + firstRow[currentURL] + '" target="_blank">' + firstRow[currentTitle] + '</a></td></tr><tr><td></td><td class="rec1_archive"><a href="rec1_archive" target="_blank">' + firstRow[currentArchive] + '</a></td></tr></tbody></table> </div>';
	
	recordHTML += currentRecordHTML;

    }
}


	console.log("firstHTML: " + firstHTML);
	console.log("recordHTML:" + recordHTML);

	var newHTML = firstHTML + statementHTML + recordHTML;
	 
	    finalHTML += newHTML;

	}
	    

	$("#accordion").html(finalHTML);

    }



    



}

}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
