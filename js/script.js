// map code

function initMap() {
  const myLoc = new google.maps.LatLng(41.532076, -8.615683)
  const mapOptions = {
  zoom: 17,
  center: myLoc,
  mapTypeId: google.maps.MapTypeId.HYBRID,
  styles:[]
  }
  const map = new google.maps.Map(
    document.getElementById("map"), 
    mapOptions)

  var marker = new google.maps.Marker({
    position:myLoc,
    animation:google.maps.Animation.BOUNCE
  });
    
  marker.setMap(map);
}


//email setup
function sendEmail(){

  //obter valores do formulario no html
  const name = document.querySelector("#form31").value
  const message = document.querySelector("#form32").value

  //inicializar o componente EmailJS
  emailjs.init("user_Zni2vc8JG9QRLWFsFRAJ5")

  //valores a alterar pelas variáveis do formulário
  const template_params = {
      "reply_to": "reply_to_value",
      "from_name": name,
      "to_name": "to_name_value",
      "message_html": message
   }
   
   const service_id = "default_service"
   const template_id = "template_x508AHEY"
   emailjs.send(service_id,template_id,template_params)
   alert ("Mensagem enviada!")
}



//filter gallery

filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
