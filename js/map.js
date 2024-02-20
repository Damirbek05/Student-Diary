let marker; 
function initMap() { 
    const map = new google.maps.Map(document.getElementById("map-canvas"), { 
        zoom: 12, 
        center: { lat: 51.155102, lng: 71.431470}, 
    });

    setMarkers(map);
    const newinfowindow = new google.maps.InfoWindow({
      content: contentString,
    });
}

const places = [ 
    ["Alma-ata Coworking", 51.164684, 71.442583, "Amangeldy Imanov street, 19"], 
    ["Аффари", 51.165811, 71.423481, "st. Azerbaijan Mambetov, 24"], 
    ["For Jastar", 51.142950, 71.412603, "Ave. Turan, 14"], 
    ["IQ coworking", 51.128777, 71.423050, "st. Dostyk, 5"], 
    ["Коворкинг Team", 51.127037, 71.468886, "Rakhimzhan Koshkarbaev Avenue, 10/1"], 
]; 
 
var activeInfoWindow; 
function setMarkers(map) {   
  const image = "../img/map.png";   
  for (let i = 0; i < places.length; i++) {   

      const place = places[i];   
      var contentData = ('<strong>' + place[0] + '</strong><p>' + place[3]);   
      const infowindow = new google.maps.InfoWindow({   
          content: contentData   
      });

      const marker = new google.maps.Marker({   
          position: { lat: place[1], lng: place[2] },   
          map,   
          icon: image,   
          title: place[0],   
      });   

      marker.addListener("click", () => {   
          if (activeInfoWindow) { activeInfoWindow.close();} 
          infowindow.open({   
              anchor: marker,   
              map,   
              shouldFocus: true,   
          });   
         activeInfoWindow = infowindow; 
      })
  }   
}

