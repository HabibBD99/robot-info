
function MyRobot()
{
 var searchText = document.getElementById('search_text').value;
   var textShow = document.getElementById('Text_Show');

 /*-------------------------------
    Storing Data Of Robot Answer
  --------------------------------*/
 var RobotDataStore = [
    {
      'name'         : 'Hi I am Robot. My name is Korim Uddin.',
      'age'          : 'Birth 10 January 2002 Year. That Present 22 Year Old.',
      'work'         : 'I am working with Holy Quran.',
      'discover'     : 'This Robot is Discover 30-11-2024 by The Habib Engineer.',
      'goodbye'      : 'Ok Thanks.',
      'ok'           : 'Good Bye Thanks.',
      'hello'        : 'You Can Tell.',
      'salam'        : 'Assalamualaikum',
      'salamReply'   : 'Oyalaikumussalam Oyarahmatullahy Oyabarkatu.\n\n Assalamualaikum.?',

    }

  ];

 /*------------------------...End...-------------------------*/


 /*--------------------------
     Robot Question Match
  ---------------------------*/
 var RobotQuestionMatch = [
      'name',
      'what is your name',
      'work',
      'what you do'

  ];

 /*------------------------...End...-------------------------*/


 /*---------------------------------------
    Validation And Matching Data Display
  ----------------------------------------*/
/*
   if(searchText === '')
   {
     alert('Please Valid Keyword Search.');
     return false;
   }    

   for (var i=0; i<RobotDataStore.length; i++) 
   {     
          
          for (var j=0; j<RobotQuestionMatch.length; j++) 
          {
              if(searchText == RobotQuestionMatch[j])
              {
                textShow.innerText = RobotDataStore[0][j].name;   
              }
              else{
                textShow.innerHTML = "<P style='color: red;'>The Value is Not Matching.</p>";
 
              }
          } 


*/


/*
    var speaker = new SpeechSynthesisUtterance();
                speaker.lang = "En-United-Us";
                speaker.text = SpeechValue;
                speaker.volume = 10;
                speaker.rate = 1;
                speaker.pitch = 2;
    window.speechSynthesis.speak(speaker);   
*/



   /*------------------------------------
      Robot Data Match And Speek Work
    -------------------------------------*/

   if(searchText === '')
   {
     alert('Please Valid Keyword Search.');
     return false;
   }
   else if (searchText == "name" || searchText == "what your name")
   {
    textShow.innerText = RobotDataStore[0].name; 
       const SpeakSound = new SpeechSynthesisUtterance();
             SpeakSound.lang = "En-United-Kingdom";
             SpeakSound.text = RobotDataStore[0].name;
             SpeakSound.volume = 10;
             SpeakSound.rate = 1;
             SpeakSound.pitch = 2;
       const voices = speechSynthesis.getVoices()
             SpeakSound.voice = voices[0];
      window.speechSynthesis.speak(SpeakSound);  
   }

   else if (searchText == "work" || searchText == "what you do")
   {
     textShow.innerText = RobotDataStore[0].work;
     var Speaker = new SpeechSynthesisUtterance();
                Speaker.lang = "En-United-Us";
                Speaker.text = RobotDataStore[0].work;
                Speaker.volume = 10; 
     window.speechSynthesis.speak(Speaker);  
   }
   else if (searchText == "discover" || searchText == "invented" || searchText == "who is the discover man")
   {
     textShow.innerText = RobotDataStore[0].discover;
       const SpeakSound = new SpeechSynthesisUtterance();
             SpeakSound.lang = "En-United-Kingdom";
             SpeakSound.text = RobotDataStore[0].discover;
             SpeakSound.volume = 10;
       const voices = speechSynthesis.getVoices()
             SpeakSound.voice = voices[1];
      window.speechSynthesis.speak(SpeakSound);    
   }
   else if (searchText == "ok")
   {
     textShow.innerText = RobotDataStore[0].ok;
        const SpeakSound = new SpeechSynthesisUtterance();
             SpeakSound.lang = "En-United-Kingdom";
             SpeakSound.text = RobotDataStore[0].ok;
             SpeakSound.volume = 10;
        const voices = speechSynthesis.getVoices()
            SpeakSound.voice = voices[1];
      window.speechSynthesis.speak(SpeakSound); 

   }
   else if (searchText == "good bye")
   {
     textShow.innerText = RobotDataStore[0].goodbye;
        const SpeakSound = new SpeechSynthesisUtterance();
             SpeakSound.lang = "En-United-Kingdom";
             SpeakSound.text = RobotDataStore[0].goodbye;
             SpeakSound.volume = 10;
        const voices = speechSynthesis.getVoices()
             SpeakSound.voice = voices[1];
      window.speechSynthesis.speak(SpeakSound);    
   }
   else if (searchText == "assalamualaikum")
   {
     textShow.innerText = RobotDataStore[0].salamReply;
        const SpeakSound = new SpeechSynthesisUtterance();
             SpeakSound.lang = "En-United-Kingdom";
             SpeakSound.text = RobotDataStore[0].salamReply;
             SpeakSound.volume = 10;
        const voices = speechSynthesis.getVoices()
             SpeakSound.voice = voices[1];
      window.speechSynthesis.speak(SpeakSound);    
   }
    else if (searchText == "age")
   {
     textShow.innerText = RobotDataStore[0].age;
        const SpeakSound = new SpeechSynthesisUtterance();
             SpeakSound.lang = "En-United-Kingdom";
             SpeakSound.text = RobotDataStore[0].age;
             SpeakSound.volume = 10;
        const voices = speechSynthesis.getVoices()
             SpeakSound.voice = voices[0];
      window.speechSynthesis.speak(SpeakSound);    
   } 
    else if (searchText == "hi" || searchText == "hello")
   {
     textShow.innerText = RobotDataStore[0].hello;
        const SpeakSound = new SpeechSynthesisUtterance();
             SpeakSound.lang = "En-United-Kingdom";
             SpeakSound.text = RobotDataStore[0].hello;
             SpeakSound.volume = 10;
        const voices = speechSynthesis.getVoices()
             SpeakSound.voice = voices[1];
      window.speechSynthesis.speak(SpeakSound);    
   }
        
   else{  
      textShow.innerHTML = "<P style='color: red;'>The Value is Not Matching.</p>";
   }


   
}


/*------------------------------------
      Clearing Display Value Work
 -------------------------------------*/
 function TextClear() {
   var clrText = document.getElementById("search_text");
   var textShow = document.getElementById('Text_Show').innerText='';
 }

/*-------------...Scroll Button End...----------------*/






/*------------------------------------
      Scroll Top Button Working
 -------------------------------------*/

 let myButton = document.getElementById("TopBtn");
    window.onscroll = function()
    {
     ScrollFunction();
    };


    function ScrollFunction() 
    {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
        {
         myButton.style.display="block";
        }
        else{
          myButton.style.display="none";
        }
    }


    function TopFunction()
    {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;

    }

/*-------------...Scroll Button End...----------------*/






