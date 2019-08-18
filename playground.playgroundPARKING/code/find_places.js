module.exports.function = function find_places (the_word) {

  var stuff = "not found";
  var template = {};
  var results = [];

  var loc_name = ["550 Kearny Garage", "Test1_locname"]
  var loc_add = ["665 Sacramento St", "Test2_Addname"]
  var img_go_map = ["images/wut.png", "images/wut.png"] 
 // var img_go_pho = ["550_kearny_parking_photo.png", "550_kearny_parking_photo.png"]
  var loc_des = ["HOURS: \n Mon - Thurs - 6am to 9pm \nFri - 6am - 11pm \nSat - 9am - 11pm \nsun - 9am - 9pm \n\nMax per day(mon - thurs) - 30$ \nMax per day (Fri - Sun) 15$\n",
  "stufff"]

  var go_link = ["https://www.google.com/maps/place/550+Kearny+Parking+Garage/@37.7932696,-122.4043477,15z/data=!4m5!3m4!1s0x808f80b310c61e41:0x3b0d3c7366c7fb1!8m2!3d37.7932696!4d-122.4043477", 
  "https://www.google.com/maps/place/550+Kearny+Parking+Garage/@37.7932696,-122.4043477,15z/data=!4m5!3m4!1s0x808f80b310c61e41:0x3b0d3c7366c7fb1!8m2!3d37.7932696!4d-122.4043477"]


  if (the_word == "parking")
  {
    for (i = 0; i < 2; i++){
    template = ({
      location_name: loc_name[i],
      location_address: loc_add[i],
      location_description: loc_des[i],
      google_link: go_link[i],
      google_map_image: {
        url: img_go_map[i]
        },
        
     });
    results.push(template)
    console.log(results)
    }
  }

/*
     google_photo_image: {
        url: img_go_pho[i]
        }, 
*/

  return results
}
