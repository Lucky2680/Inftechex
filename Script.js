function searchService(){

    let value =
    document.querySelector(".search-box input").value;

    alert("Searching for: " + value);
}
function getLocation(){

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(showPosition);

    }else{

        alert("Geolocation not supported");

    }
}

function showPosition(position){

    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    document.getElementById("location-text").innerHTML =
    latitude + ", " + longitude;
}