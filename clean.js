var dirty_clothes = [
  "*blue shirt",
  "argyle s*ocks",
  "u*gly sweater",
  "brown plaid pa*nts",
  "paisl*ey dress shirt"
];

/* YOUR CODE HERE */
function clean(clothing_item){
    // return clean_clothing_item;
    var splitClothing = clothing_item.split("*").join("");
    return splitClothing;
}


var cleanClothes = dirty_clothes.map(clean);


/* PRINT RESULT */
console.log("--> Finished running clean.js");
