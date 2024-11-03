
function MyRobot()
{
 var searchText = document.getElementById('search_text').value;
   var textShow = document.getElementById('Text_Show');

 /*------------------------
    Storing Data Of Robot
  -------------------------*/
 var dataStore = [
    {
      'name'         : 'Hi I am Robot. My name is Kori Uddin.',
      'age'          : 'Birth 10 January 2002 Year. That Present 22 Year Old.',
      'work'         : 'I am working with Holy Quran.',
      'discover'     : 'This Robot is Discover 30-11-2024 by The Habib Engineer.',
      'goodbye'      : 'Ok Thanks.',
      'ok'           : 'Good Bye Thanks.',
      'hello'       : 'You Can Tell.',
      'salam'        : 'Assalamualaikum',
      'salamReply'   : 'Oyalaikumussalam Oyarahmatullahy Oyabarkatu.\n\n Assalamualaikum.?',

    }

  ];

 /*------------------------...End...-------------------------*/




//document.write("<br/> <a href='index.html' class='Back'>back</a>");

 /*---------------------------------------
     Validation And Matching Data Display
  ----------------------------------------*/
   if(searchText === '')
   {
     alert('Please Valid Keyword Search.');
     return false;
   }
   else if (searchText == "name" || searchText == "what is your name") 
   {
     textShow.innerText = dataStore[0].name;
   }
   else if (searchText == "work" || searchText == "what you do")
   {
     textShow.innerText = dataStore[0].work;   
   }
   else if (searchText == "discover" || searchText == "invented" || searchText == "who is the discover man")
   {
     textShow.innerText = dataStore[0].discover;   
   }
   else if (searchText == "ok")
   {
     textShow.innerText = dataStore[0].ok;   
   }
   else if (searchText == "good bye")
   {
     textShow.innerText = dataStore[0].goodbye;   
   }
   else if (searchText == "assalamualaikum")
   {
     textShow.innerText = dataStore[0].salamReply;   
   }
    else if (searchText == "age")
   {
     textShow.innerText = dataStore[0].age;   
   } 
    else if (searchText == "hi" || searchText == "hello")
   {
     textShow.innerText = dataStore[0].hello;   
   }         
   else{  
      textShow.innerHTML = "<P style='color: red;'>The Value is Not Matching.</p>";
   }



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