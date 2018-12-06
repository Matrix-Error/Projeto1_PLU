// map function
function initMap() {
  const myLoc = new google.maps.LatLng(41.532076, -8.615683)
  const mapOptions = {
  zoom: 16,
  center: myLoc,
  mapTypeId: google.maps.MapTypeId.HYBRID,
  styles:[ { "elementType": "geometry", "stylers": [ { "color": "#242f3e" } ] }, { "elementType": "labels.text.fill", "stylers": [ { "color": "#746855" } ] }, { "elementType": "labels.text.stroke", "stylers": [ { "color": "#242f3e" } ] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [ { "color": "#d59563" } ] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [ { "color": "#d59563" } ] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [ { "color": "#263c3f" } ] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [ { "color": "#6b9a76" } ] }, { "featureType": "road", "elementType": "geometry", "stylers": [ { "color": "#38414e" } ] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [ { "color": "#212a37" } ] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [ { "color": "#9ca5b3" } ] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [ { "color": "#746855" } ] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [ { "color": "#1f2835" } ] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [ { "color": "#f3d19c" } ] }, { "featureType": "transit", "elementType": "geometry", "stylers": [ { "color": "#2f3948" } ] }, { "featureType": "transit.station", "elementType": "labels.text.fill", "stylers": [ { "color": "#d59563" } ] }, { "featureType": "water", "elementType": "geometry", "stylers": [ { "color": "#17263c" } ] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [ { "color": "#515c6d" } ] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [ { "color": "#17263c" } ] } ]
  }
  const map = new google.maps.Map(document.getElementById("map"), mapOptions)

  let contentInfo='<br/><p>Cidade onde nasci e resido atualmente</p>' + '<p><img style="width:200px" src="../img/barcelos.jpg"/></p>'
  const infowindow = new google.maps.InfoWindow({
    content:contentInfo
  })

  const marker = new google.maps.Marker({
    position:myLoc,
    animation:google.maps.Animation.BOUNCE,
    map:map
  })
  
  marker.addListener('click',function(){
    infowindow.open(map,marker)
  })

  //marker.setMap(map)
}

//email setup
function sendEmail(){

  //get values from html form
  const name = document.querySelector("#form31").value
  const message = document.querySelector("#form32").value

  //initiate EmailJS
  emailjs.init("user_Zni2vc8JG9QRLWFsFRAJ5")

  //values to chabge with info from form
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
  let x, i
  x = document.getElementsByClassName("column")
  if (c == "all") c = ""
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show")
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show")
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  let i, arr1, arr2
  arr1 = element.className.split(" ")
  arr2 = name.split(" ")
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i]
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  let i, arr1, arr2
  arr1 = element.className.split(" ")
  arr2 = name.split(" ")
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1)
    }
  }
  element.className = arr1.join(" ")
}

// Add active class to the current button (highlight it)
let btnContainer = document.getElementById("myBtnContainer")
let btns = btnContainer.getElementsByClassName("btn")
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("active")
    current[0].className = current[0].className.replace(" active", "")
    this.className += " active"
  })
}
