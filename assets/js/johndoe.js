/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});


// google maps
function initMap() {
// Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.674, lng: -73.945},
        zoom: 12,
        scrollwheel:  false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });
}

// form validation
var nameError =document.getElementById('name-error');
var phoneError =document.getElementById('phone-error');
var emailError =document.getElementById('email-error');
var messageError =document.getElementById('message-error');
var submitError =document.getElementById('submit-error');

function  validateName(){
  var name=document.getElementById('condact-name').value;
  if(name.length == 0){
    nameError.innerHTML ='Name is required';
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML ='write full name';
    return false;
  }
  nameError.innerHTML= '<i class="fa-solid fa-circle-check" style="color: #2c511f;"></i>';
  return true;
}

function  validatePhone(){
  var phone=document.getElementById('condact-phone').value;
  if(phone.length ==0 ){
    phoneError.innerHTML ='Phone number is required';
    return false;
  }
  if(phone.length!==10){
    phoneError.innerHTML ='Phone number should be 10 digits';
    return false;
  }
  if(!phone.match(/^[0-9]{10}$/)){
  phoneError.innerHTML='Only digit please';
  return false;
  }
  phoneError.innerHTML= '<i class="fa-solid fa-circle-check" style="color: #2c511f;"></i>';
  return true;
}

function  validateEmail(){
  var email=document.getElementById('condact-email').value;
  if(email.length ==0 ){
    emailError.innerHTML='Email is required';
    return false;
  }
  if(!email.match(/^[A-za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML='Email invalid';
    return false;
  }
  emailError.innerHTML= '<i class="fa-solid fa-circle-check" style="color: #2c511f;"></i>';
  return true;
}
function validateMessage(){
  var message=document.getElementById('condact-message').value;
  var required=30;
  var left= required - message.length;
  if(left>0){
    messageError.innerHTML=left +'more characters required';
    return false;
  }
  messageError.innerHTML= '<i class="fa-solid fa-circle-check" style="color: #2c511f;"></i>';
  return true;

}

function validateForm(){
 if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
  submitError.style.display='block';
  submitError.innerHTML='please fix error to submit';
  setTimeout(function(){submitError.style.display='none'},3000);
  return false;
 }

}