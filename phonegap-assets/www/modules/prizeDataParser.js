var PrizeDataParser = Class.extend({
  init: function(){
  },

  parseData: function(callback) {
	  this.callback = callback;
	  if (!this.data) {
		  $.getJSON("data/document.json", $.proxy(this.onDataLoaded, this));
	  } else {
		  callback(this.data);
	  } 
  },
   
  onDataLoaded: function(json) {
	  this.data = json;
	  this.callback(this.data);
  }
});