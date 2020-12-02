function getUrlVars() {
   var vars = {};
   var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
       vars[key] = value;
   });
   return vars;
}

function getUrlParam(parameter, defaultvalue){
   var urlparameter = defaultvalue;
   if(window.location.href.indexOf(parameter) > -1){
       urlparameter = getUrlVars()[parameter];
   }
   return urlparameter;
}

// how to use the function
// Always decode or encode URI if you will use them to make sure you get the correct spaces and special characters in your params
var mytext = getUrlParam('text','Empty');

console.log(mytext)