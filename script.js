/* Dropdown */

var i=0;
var leftF = document.getElementsByClassName("left");
var rightF = document.getElementsByClassName("right");


function dropdownFunction() {
  

  var buttonID = ['b1', 'b2','b3', 'b4','b5', 'b6','b7', 'b8'];
  var dropdownID = ['d1', 'd2','d3', 'd4','d5', 'd6','d7', 'd8'];

  var targetButton = event.target.id;
  

  for (var i=0; i<buttonID.length; i++) {
    var idButton = buttonID[i];
    var idDropdown = dropdownID[i];
    if (targetButton === idButton) {
      var targetDropDown = document.getElementById(idDropdown);
      targetDropDown.classList.add("show");
      leftF[i].style.backgroundColor = '#55aacc';
      leftF[i].style.color = 'white';
    
      rightF[i].style.backgroundColor = 'rgb(40, 40, 40)';
      rightF[i].style.color = 'white';
      idButton=buttonID.length;
    }
  }



}


window.onclick = function(event) {
  
  if (!event.target.matches('.btn-dropdown')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show"))  {
        openDropdown.classList.remove("show");


        leftF[i].style.backgroundColor = '#B2EBEF';
        leftF[i].style.color = '#666666';
      
        rightF[i].style.backgroundColor = '#B2EBEF';
        rightF[i].style.color = '#666666';
             
      }
    }

  
  }
}

/* Grid - List */
function addClassFunction() {
  var listGrid = ['view_list', 'view_comfy'];
  i++;
  var element = document.getElementById("icon");
  element.innerHTML = listGrid[i];
  if (i == listGrid.length -1) {
    i = -1;
  }


  var elementList = document.getElementsByClassName("col-3");
  for (j = 0; j < elementList.length; j++) {
    elementList[j].classList.toggle("list");
  }
}




