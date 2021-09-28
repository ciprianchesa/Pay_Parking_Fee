var cars = [];

//new car registration
function carPark() {
  var intrare;
  intrare = cars.push(document.getElementById("newcar").value);
  cars = cars.filter(function(entry) { return entry.trim() != ''; });
  
  intrare = "<ol start='0'>";
      
  for (i = 0; i < cars.length; i++) {
    if (i === 10) { break; }
      intrare += "<li>" + cars[i] + "</li>";
      }
      intrare += "</ol>";

    if (cars.length > 10) {
      cars.length = 10; 
        alert ("Parking is full!")
      }
    document.getElementById("carIn").innerHTML = "You entered the car number: " + intrare;

    eraseText();
}

//ticket preview before exit
function beforeOut() {
  var iesire;

  iesire = cars.filter(function(entry) { return entry.trim() != ''; });
  cars.splice(document.getElementById("oldcar").value, 0);
  iesire = cars.indexOf(document.getElementById("oldcar").value);
    
  iesire += "<br>";
    if (iesire > -1) {
      cars.splice(iesire, 0);
    }
  document.getElementById("beforeOut").innerHTML = "You have selected the car from the position: " + "<b>" + iesire + "</b>";
  
  eraseText();
}

//Query the list of cars in the parking lot
function check() {
    var lista;
    cars.splice(document.getElementById("carscheck").value, 0);
    lista = "<ol start='0'>";
  
    for (i = 0; i < cars.length; i++) {
      if (i === 10) { break; }
        lista += "<li>" + cars[i] + "</li>";
          }
        lista += "</ol>";
  
    document.getElementById("carscheck").innerHTML = lista;
}

//Number of places available in the parking lot
function locuriDisponibile() {
    document.getElementById("spot").innerHTML = "Total parking spot available : " + "<b>" + (10-cars.length) + "</b>";
}
  
//CAR TICKET AND PRICE CALCULATION DEPENDING ON TIME
function calcCharge() {
  var iesire;
  var total=0;
  var d = new Date();
  d.setFullYear(2020);

  var hour = document.getElementById("quantity1").value;
  var minute = document.getElementById("quantity2").value;

  iesire = cars.filter(function(entry) { return entry.trim() != ''; });
  iesire = cars.splice(document.getElementById("confirm").value, 1);
  
    iesire += "<br>";

      if (hour==1 && minute==0) {
            total=10;
            } 
        else if (hour==0 && minute>1 && minute<=60) {
              total=10;
              }
          else if (hour>1 && hour<=30 && minute==0) {
                total=10+(5*(hour-1));
                }
            else if (hour>1 && hour<=30 || minute!=0) {
                  total=10+(5*(hour));
                  }
              else 
                total=0;

      document.getElementById("carOut").innerHTML = "DONE" + "<br>" + "The car that left the parking lot is: " + "<b>" + iesire + "</b>" 
      + "Parking time: " + hour + "h: " + minute +  "min" + "<br>" + "Total parking fee: " + total + " Ron" + "<br>" + "Date: " + d;      

  eraseText()
}

function eraseText() {
    document.getElementById("newcar").value = "";
    document.getElementById("oldcar").value = "";
    document.getElementById("confirm").value = "";
}

//ENTER A NEW CAR JUST PRESSING ENTER ON THE KEYBOARD
window.onload=function(){

  var input = document.getElementById("newcar");
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
      document.getElementById("myBtn1").click();
      }
  });
  
  var beforeout = document.getElementById("oldcar");
  beforeout.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
     document.getElementById("myBtn2").click();
    } 
  });
  
  var output = document.getElementById("confirm");
  output.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
     document.getElementById("myBtn3").click();
    } 
  });
  }