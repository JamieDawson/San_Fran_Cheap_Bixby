module.exports.function = function find_places (the_word) {

  var stuff = "not found";
  var template = {};
  var results = [];

  var loc_name = [
  "550 Kearny Garage", //1
  "801 Bryant St Lot",//2
  "150 Division St. Lot", //3
  "Post Street Towers Garage", //4
  "24 Florida St. Lot", //5
  "1355 Fulton Street Garage", //6
  "Hills Plaza Garage", //7
  "Sp+ Pier 29.5 Garage", //8
  ] 

  var loc_add = [
  "665 Sacramento St", //1
  "801 Bryant St", //2
  "150 Division St", //3
  "644 Geary St", //4 
  "24 Florida St", //5 
  "1355 Fulton St", //6
  "25 Folson St", //7
  "Pier 29.5 Embarcadero", //8
  ]

  var loc_near = [
  "Chinatown", //1
  "South of Market",  //2
  "Financial District", //3
  "Tenderloin", //4
  "West Soma", //5
  "Western Addition", //6
  "South Beach", //7
  "Fishermans Wharf", //8
  ]

  var price = [
  "$6 - $9", //1
  "$7 - $9", //2
  "$8 - $10", //3
  "$9", //4
  "$6", //5
  "$6",  //6
  "$10", //7
  "15", //8
  ]

  var img_go_map = [
  "images/550_go.png", //1
  "images/801_go.png", //2
  "images/150_go.png", //3
  "images/644_go.png", //4
  "images/24_go.png", //5
  "images/1355_go.png", //6
  "images/25_go.png", //7
  "images/29_5_go.png", //8
  ]  

  var img_go_pho = [
  "images/550_photo.png", //1
 "images/801_photo.png", //2
 "images/150_photo.png", //3
 "images/644_photo.png", //4
 "images/24_photo.png",  //5
 "images/1355_photo.png", //6
 "images/25_photo.png",  //7
 "images/29_5_photo.png", //8
 ]

  var loc_des = [
  "HOURS: \n Mon - Thurs - 6am to 9pm \nFri - 6am - 11pm \nSat - 9am - 11pm \nsun - 9am - 9pm \n\nMax per day(mon - thurs) - 30$ \nMax per day (Fri - Sun) 15$\n",
  "A convenient surface lot in South Of Market. Just a short walk to AT&T Park, Hall of Justice and 4th and King St Station.",
  "Convenient and affordable valet parking in downtown San Francisco. Just a few minutes to the Mission Bay Conference Center, Public Works, and a variety of shops.",
  "Secure, indoor garage with valet parking in San Francisco, close to the Theater District, the Cable Car Museum and the Union Square.\n If parking overnight, you must drop off and pick up your vehicle within the following hours: \n Mon-Thu 6am-12am / Fri-Sat 6am-2am / Sun 8am-10pm",
  "Convenient and affordable open-air lot in downtown San Francisco. Just a short walk to the Brick & Mortar Music Hall, Franklin Square, and Z Space.",
  "Affordable valet parking in Western Addition. Very convenient to The Independent, The Fillmore, nearby parks, shops, and restaurants.",
  "Secure and affordable parking at the Hills Plaza in downtown San Francisco. Just a few minutes to the Ferry Building, Rincon Park, and Emerald Park.",
  "Secure and affordable indoor garage in the Embarcadero neighborhood. Perfect parking for Exploratorium, Alcatraz Tours, and Fisherman's Wharf.", // 8
  ]

  var go_link = [
  "https://www.google.com/maps/place/550+Kearny+Parking+Garage/@37.7932696,-122.4043477,15z/data=!4m5!3m4!1s0x808f80b310c61e41:0x3b0d3c7366c7fb1!8m2!3d37.7932696!4d-122.4043477", 
  "https://www.google.com/maps/place/California+Parking/@37.775715,-122.4048188,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7e2ac0c0d275:0x84f234d63bcd973a!8m2!3d37.775715!4d-122.4026301",
  "https://www.google.com/maps/place/150+Division+St,+San+Francisco,+CA+94103/@37.7698695,-122.4083001,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7e2c109d2c81:0x6dfd14e2f3064b99!8m2!3d37.7698695!4d-122.4061114",
  "https://www.google.com/maps/place/Post+Street+Tower+Garage/@37.7868002,-122.4161319,17z/data=!3m1!4b1!4m5!3m4!1s0x80858091c0536e99:0xab98ebdc8238967f!8m2!3d37.7868002!4d-122.4139432",
  "https://www.google.com/maps/place/24+Florida+St./@37.7678606,-122.4208668,15z/data=!4m5!3m4!1s0x808f7e2f6f49e799:0x603b5ea0f94b0677!8m2!3d37.7678605!4d-122.4121121",
  "https://www.google.com/maps/place/1355+Fulton+St,+San+Francisco,+CA+94117/@37.7764169,-122.4412157,17z/data=!3m1!4b1!4m5!3m4!1s0x808580b1c5db9151:0x3138b5836d563c5b!8m2!3d37.7764169!4d-122.439027",
  "https://www.google.com/maps?q=hills+plaza+garage+san+francisco&um=1&ie=UTF-8&sa=X&ved=0ahUKEwjhmfHcso3kAhVGip4KHW-RAEQQ_AUIESgB",
  "https://www.google.com/maps/search/pier+29.5+embarcadero/@37.7977988,-122.4154186,14z/data=!3m1!4b1", 
  ]

//CHANGE NUMBER IN FOR LOOP!!!

  if (the_word == "parking")
  {
    for (i = 0; i < 8; i++){
    template = ({
      location_name: loc_name[i],
      location_address: loc_add[i],
      location_description: loc_des[i],
      google_link: go_link[i],
      location_near: loc_near[i],
      location_price: price[i],
      google_map_image: {
        url: img_go_map[i]
        },
      google_photo_image: {
        url: img_go_pho[i]
        },        
     });
    results.push(template)
    console.log(results)
    }
  }

  return results
}
