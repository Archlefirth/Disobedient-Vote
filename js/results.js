/* Disobedient Electronics: Disruptive Ballot
   ---------------------------------------------
    Designing Digital Play (DDP)
    Author: Vikram Kumar
    Version: 1.0
*/


// Builds the results page
//----------------------------------------
function buildResults() {
  // Get the index of the matched candidate from index.html
  // Convert to int because localStorage "stringifys" everything
  var index = parseInt(window.localStorage.getItem('result'));
  // For debugging
  // var index = 5;

  //Display the appropriate candidate
  switch (index) {
    case 1:
        nameContainer.innerHTML = "Carl Christian Ebbesen";
        partyContainer.innerHTML = "Dansk Folkeparti (DF)"
        portraitContainer.innerHTML = "<img src=\"images/CCE.jpg\" style=\"width: 300px; height: 357px; border:4px solid #D93200\"/>​";
        platformContainer.innerHTML = "<li>"+"More security in Copenhagen by fighting crime"+"</li>" +
                                      "<li>"+"Better nursing homes"+"</li>" +
                                      "<li>"+"Increase the influence of Danish norms and values"+"</li>" +
                                      "<li>"+"Fight radical muslim communities"+"</li>";
        break;
    case 2:
        nameContainer.innerHTML = "Cecilia Lonning-Skovgaard";
        partyContainer.innerHTML = "Venstre"
        portraitContainer.innerHTML = "<img src=\"images/CLS.jpg\" style=\"width: 300px; height: 357px; border:4px solid #D93200\"/>​";
        platformContainer.innerHTML = "<li>"+"More workplaces"+"</li>" +
                                      "<li>"+"Secure and clean Copenhagen"+"</li>" +
                                      "<li>"+"Make Copenhagen greener"+"</li>";
        break;
    case 3:
        nameContainer.innerHTML = "Alex Vanopslagh";
        partyContainer.innerHTML = "Liberal Alliance"
        portraitContainer.innerHTML = "<img src=\"images/AV.jpg\" style=\"width: 300px; height: 357px; border:4px solid #D93200\"/>​";
        platformContainer.innerHTML = "<li>"+"Reduce taxes"+"</li>" +
                                      "<li>"+"More parking spots and stop disenfranching drivers"+"</li>" +
                                      "<li>"+"Shorter days for school pupils and give them more freedom"+"</li>" +
                                      "<li>"+"Boosting socially vulnerable communities with container housing"+"</li>";
        break;
    case 4:
        nameContainer.innerHTML = "Niko Grünfeld";
        partyContainer.innerHTML = "Alternativet"
        portraitContainer.innerHTML = "<img src=\"images/NG.jpg\" style=\"width: 300px; height: 357px; border:4px solid #D93200\"/>​";
        platformContainer.innerHTML = "<li>"+"A greener Copenhagen"+"</li>" +
                                      "<li>"+"Give more to the socially vulnerable and expand the <br /> welfare system"+"</li>" +
                                      "<li>"+"Make Copenhagen more creative and innovative"+"</li>";
        break;
    case 5:
        nameContainer.innerHTML = "Frank Jensen";
        partyContainer.innerHTML = "Social Demokratiet"
        portraitContainer.innerHTML = "<img src=\"images/FJ.jpg\" style=\"width: 300px; height: 357px; border:4px solid #D93200\"/>​";
        platformContainer.innerHTML = "<li>"+"Keep bikes and bike riders in focus"+"</li>" +
                                      "<li>"+"Make the housing market modern and affordable"+"</li>" +
                                      "<li>"+"Create a greener Copenhagen by reducing diesel cars"+"</li>" +
                                      "<li>"+"Make children happier and more intelligent"+"</li>";
        break;
  }
}

// function onBack() {
//   window.open('index.html', '_top');
// }

/*
 The "main" or "run" section of the code
 where we execute commands and receive 
 the HTML elements and store references to them
 ------------------------------------- */

// window.localStorage.removeItem("totalPoints");

const nameContainer = document.getElementById('name');
const partyContainer = document.getElementById('party');
const portraitContainer = document.getElementById('portrait');
const platformContainer = document.getElementById('platform');
const returnButton = document.getElementById("back");

buildResults();

// returnButton.addEventListener('click', onBack);