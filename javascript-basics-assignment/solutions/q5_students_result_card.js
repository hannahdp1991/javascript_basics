// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


function DisplayResults()
{

    var  result="";  //declare a variable for result

    //read the marks
    var grammarMarks = document.getElementById('txtGrammar').value;
    var accountMarks = document.getElementById('txtAccount').value;
    var physicsMarks = document.getElementById('txtPhysics').value;
    
     var totalMarks = grammarMarks +accountMarks+physicsMarks;
                   
     var percentage = (totalMarks / 200) * 100;

     if(percentage > 40)
     {
         result = 'Pass';
     }
     else{
     result = 'Fail';
     }
        
    //display the results   
    document.getElementById('txtStudentName').value = document.getElementById('txtName').value;
    document.getElementById('txtTotalMarks').value = totalMarks;
    document.getElementById('txtPerMarks').value = percentage;
    document.getElementById('txtResult').value = result;

}



