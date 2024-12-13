
function MyRobot()
{
 let searchText = document.getElementById('search_text').value;
   let textShow = document.getElementById('Text_Show');

 /*-------------------------------
    Storing Data Of Robot Answer
  --------------------------------*/
 const RobotQuestionAndAnswer = [

       {
        'question' : 'name',
        'answer'   : 'Korim Uddin.'
       },
       {
        'question' : 'what is your name?',
        'answer'   : 'Hi I am Robot. My name is Korim Uddin.'
       },
       {
        'question' : 'what you do?', 
        'answer'   : 'I am working with Holy Quran.'
       },
       {
        'question' : 'work', 
        'answer'   : 'Working with Holy Quran.'
       },
       {
        'question' : 'who is the discover man?',
        'answer'   : 'This Robot is Discover 30-11-2024 by The Habib Engineer.'
       },
       {
        'question' : 'ok',
        'answer'   : 'Ok Thanks.'
       },
       {
        'question' : 'good bye', 
        'answer'   : 'Good Bye Thanks.'
       },
       {
        'question' : 'hi',  
        'answer'   : 'You Can Tell ?'
       },
       {
        'question' : 'hello',  
        'answer'   : 'Hi You Can Tell Me?'
       },
       {
        'question' : 'assalamualaikum', 
        'answer'   : 'Oyalaikumussalam Oyarahmatullahy Oyabarkatu. Assalamualaikum.?'
       },

       {
        'question' : 'age', 
        'answer'   : '23 year old.'
       },

       {
        'question' : 'profession', 
        'answer'   : 'I am Teacher of The World.'
       },

       {
        'question' : 'When was discover this robot?', 
        'answer'   : 'This Robot is Discover 30-11-2024 by The Habib Engineer.'
       },

       {
        'question' : '', 
        'answer'   : ''
       },

       {
        'question' : '', 
        'answer'   : ''
       }

  ];

 /*------------------------...End...-------------------------*/



 /*---------------------------------------
    Validation And Matching Data Display
  ----------------------------------------*/

        if(searchText=="") 
        {
         return alert('Field is Empty.');
        }
        else
        {
         textShow.innerHTML ="<span style='color:red;'>"+ 'Question Does Not Match.' +"</span>";
        }

 /*-------------------...Validation END...--------------------*/



   /*------------------------------------
      Robot Data Match And Speak Work
    -------------------------------------*/
     for (let i=0; i<RobotQuestionAndAnswer.length; i++) 
     {

        if (searchText == RobotQuestionAndAnswer[i].question) 
        {
         
         const SpeakSound = new SpeechSynthesisUtterance();
              SpeakSound.lang = "Bangla-BD";
              SpeakSound.text = RobotQuestionAndAnswer[i].answer;
              SpeakSound.volume = 10;
              SpeakSound.rate = 1;
              SpeakSound.pitch = 2;

         const voices = speechSynthesis.getVoices()
              SpeakSound.voice = voices[3];
              window.speechSynthesis.speak(SpeakSound);

         return textShow.innerText = RobotQuestionAndAnswer[i].answer;   
              
        }
     }
    

}



/*----------------Robot Data Match Speak Work End-------------*/




/*------------------------------------
      Clearing Display Value Work
 -------------------------------------*/
 function TextClear() {
   var clrText = document.getElementById("search_text");
   var textShow = document.getElementById('Text_Show').innerText='';
 }

/*-------------...Clearing Button End...----------------*/






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






  