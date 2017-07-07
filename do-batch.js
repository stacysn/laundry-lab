var batch_input = [
  [ "pLe*A/tED SKirt", "f*AncY T/Ie" ],
  ["cumber*bund"],
  ["rEd tuX/edo", "red* soCks"]
];


var newBatch = [].concat.apply([], batch_input);

function clean(clothing_item){
    // return clean_clothing_item;
    var splitClothing = clothing_item.split("*").join("");
    return splitClothing;
}

function iron(clothing_item){
    // return ironed_clothing_item;
  return clothing_item.toLowerCase();

};

function mend(clothing_item){
  var splitClothing = clothing_item.split("/").join("");
  return splitClothing;
}

// function cleaner(clothing_item){
//   for (var i = 0; i < clothing_item.length; i++){
//     var splitClothing = clothing_item[i].split("*").join("");
//     return splitClothing;
//   }
// }
//
// var cleanClothes = batch_input.map(clean);
//
//
// function mender(batch_input){
//   for (var i = 0; i < batch_input.length; i++){
//     var splitClothing = batch_input[i].split("/").join("");
//     return splitClothing;
//   }
//   // console.log("current item ", clothing_item);
//   // var splitClothing = clothing_item.split("/");
// }
//
// var mendingLoad = batch_input[0].map(mend);
//
//
// function ironer(clothing_item){
//     // return ironed_clothing_item;
//     // console.log("TESTING", clothing_item);
//   return clothing_item.toLowerCase();
//
// };
//
// var ironingLoad = batch_input.map(iron)
//
//
// /* YOUR CODE HERE */
function doBatch(clothes){
    // your code here
    var cleanClothes = newBatch.map(clean);
    var ironingLoad = cleanClothes.map(iron);
    var mendingLoad = ironingLoad.map(mend);
    // console.log("THISS" ,mendingLoad);
    return mendingLoad

};


// doBatch(newBatch)

/* PRINT RESULT */
console.log("--> Finished running do-batch.js");
