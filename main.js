var SpeechRecognition=window.webkitSpeechRecognition;
var rec=new SpeechRecognition();

function start(){
    document.getElementById("text_box").innerHTML="";
    rec.start();
}

rec.onresult=function(event){

console.log(event);
var content=event.results[0][0].transcript;
console.log(content);
document.getElementById("text_box").innerHTML=content;
speak();
}


function speak(){
    var synth=window.speechSynthesis;
    text=document.getElementById("text_box").value;
    var utter=new SpeechSynthesisUtterance(text);
    synth.speak(utter);
    
    Webcam.attach(camera);
    
    
    }
    
    camera=document.getElementById("camera");
    Webcam.set({
        width:320,
        height:250,
         image_format:'png',
        png_quatlity:100
    });