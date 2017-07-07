var torn_clothes = [
  "knit swe/ater",
  "tu/be socks",
  "blue je/ans",
  "whit/e blouse"
];

/* YOUR CODE HERE */

function mend(clothing_item){
  var splitClothing = clothing_item.split("/");
  return ((splitClothing[0] + splitClothing[1]));
}

var mendingLoad = torn_clothes.map(mend);



/* PRINT RESULT */
console.log("--> Finished running mend.js");
