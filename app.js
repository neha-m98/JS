var buttonTranslate=document.querySelector("#btn-translate");
var textInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output-txt");

//var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverUrl="https://api.funtranslations.com/translate/chef.json";
	
function getTranslationUrl(text)
{
    return serverUrl+"?"+"text="+text;
}

function errorHandler(error)
{
    console.log("Error Occured: "+error);
    alert("Something wrong with server,try again after some time");
}

function clickEventHandler() {
    var inputTxt=textInput.value;
    
    //calling server
    fetch(getTranslationUrl(inputTxt))
    .then(response => response.json())
    .then(json => 
        {   var translatedText=json.contents.translated;
            outputDiv.innerText=translatedText;
        })
    .catch(errorHandler);
  }

buttonTranslate.addEventListener("click",clickEventHandler);


