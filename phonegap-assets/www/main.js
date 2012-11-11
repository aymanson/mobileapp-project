function init() {
    document.addEventListener("deviceready", onDeviceReady, true);
}

var onDeviceReady = function() {
    console.log("deviceready event fired");
};

$(document).ready(function() {
    $('#quit_button').click(function() {
    	navigator.app.exitApp();
    });
    
    var onPrizeDataLoaded = function(data) {
    	jQuery.each(data.contests, function(index) {
    		$('#prizeCategory').append('<li><a href="#page-winner?index=' + index + '">' + this.tcName + '</a></li>');
    	});
    };
    
    var parser = new PrizeDataParser();
    parser.parseData($.proxy(onPrizeDataLoaded, this));

});