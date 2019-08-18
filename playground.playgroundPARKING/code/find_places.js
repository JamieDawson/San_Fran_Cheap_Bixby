module.exports.function = function find_places (the_word) {

  var stuff = "not found";
  var template = {};
  results = [];

  if (the_word == "parking")
  {

    for (i = 0; i < 2; i++){
    template = ({
      location_name: "665 Sacramento St",
      image_URL: {
        url: "/images/wut.png"
        },
      google_link: "https://www.google.com/"
     });
    results.push(template)
    console.log(results)
    }
  }



  return results
}
