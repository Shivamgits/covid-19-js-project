updateMap();


function updateMap() {
  console.log("updating");

  fetch("https://covid-19-statistics.p.rapidapi.com/reports", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
      "x-rapidapi-key": "85a6b871b7msh718fc23c1cee63ap1fa9d9jsn12a19c223281",
    },
  })
    .then((response) => response.json())
    .then((rsp) => {
      // console.log(rsp.data);
      rsp.data.forEach((element) => {
        latitude = element.region.lat;
        longitude = element.region.long;
        cases = element.active;
        if (cases > 10000) {
          color = "red";
        }
        else if(cases < 10000 && cases > 5000) {
          color = "yellow";
        }
        else {
          color = "green";
        }

        //Mark on the map
        new mapboxgl.Marker({
          draggable: false,
          color: color,
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}

// setInterval(() => {
//   updateMap();
// }, 20000);
