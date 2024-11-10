
function MyRobot()
{
 var searchText = document.getElementById('search_text').value;
   var textShow = document.getElementById('Text_Show');

 /*-------------------------------
    Storing Data Of Robot Answer
  --------------------------------*/
 var RobotDataStore = [
    {
      'name'         : 'Hi I am Robot. My name is Kori Uddin.',
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
   

   if(searchText === '')
   {
     alert('Please Valid Keyword Search.');
     return false;
   }
   else if (searchText == "name" || searchText == "what your name")
   {
     textShow.innerText = RobotDataStore[0].name;   
   }
   else if (searchText == "work" || searchText == "what you do")
   {
     textShow.innerText = RobotDataStore[0].work;   
   }
   else if (searchText == "discover" || searchText == "invented" || searchText == "who is the discover man")
   {
     textShow.innerText = RobotDataStore[0].discover;   
   }
   else if (searchText == "ok")
   {
     textShow.innerText = RobotDataStore[0].ok;   
   }
   else if (searchText == "good bye")
   {
     textShow.innerText = RobotDataStore[0].goodbye;   
   }
   else if (searchText == "assalamualaikum")
   {
     textShow.innerText = RobotDataStore[0].salamReply;   
   }
    else if (searchText == "age")
   {
     textShow.innerText = RobotDataStore[0].age;   
   } 
    else if (searchText == "hi" || searchText == "hello")
   {
     textShow.innerText = RobotDataStore[0].hello;   
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