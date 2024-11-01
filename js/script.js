
function TextDisplay()
{
 var searchText = document.getElementById('search_text').value;
   var textShow = document.getElementById('Text_Show');

 /*------------------------
    Storing Data Of Robot
  -------------------------*/
 var dataStore = [
    {
      'name' : 'Hi I am Robot. My name is Kori Uddin.',
      'work' : 'I am working with Holy Quran.'

    }

  ];


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
   else{  
      textShow.innerHTML = "<P style='color: red;'>The Value is Not Matching.</p>";
   }





}
