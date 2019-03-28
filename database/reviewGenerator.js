const mongoose = require('mongoose');
const db = require('./index.js');
const Model = require('./models.js');


let ratings = [];
for (let i = 0; i < 100; i++) {
  let ratingObj = {
    accuracy: Math.random() * 6,
    communication: Math.random() * 6,
    cleanliness: Math.random() * 6,
    location: Math.random() * 6,
    checkIn: Math.random() * 6,
    value: Math.random() * 6
  }
  for (let key in ratingObj) {
    let val = ratingObj[key];
    let valRound = Math.floor(val);
    let check = val - valRound;
    if (check >= 0.5 && val < 5) {
      ratingObj[key] = valRound + 0.5;
    } else {
      ratingObj[key] = valRound;
    }
  }
  let average = (ratingObj.accuracy + ratingObj.communication + ratingObj.cleanliness 
    + ratingObj.location + ratingObj.checkIn + ratingObj.value) / 6;
  let averageRound = Math.floor(average);
  let check = average - averageRound;
  if (check >= 0.5 && average < 5) {
    ratingObj.average = averageRound + 0.5;
  } else {
    ratingObj.average = averageRound;
  }

  ratings.push(ratingObj);
}

// console.log(ratings)


Model.Rating.create(ratings)
  .then(() => {
    console.log('Ratings seeded');
    db.close();
  })


let reviews = [];
let nouns = [];
let verbs = ['Loved', 'Enjoyed'];
let adjectives = [];
let users = ['Rachael', 'Susan', 'Britney', 'Whitney', 'Jessica', 'Thinh', 'Katie', 'Tiffany', 'David', 'Marie', 'Sahar', 'Angela', 'Joe', 'Derrin', 'Michael', 'Alanna', 'Brian', 'Gina', 'Faris', 'Patricia', 'Ladonna', 'Brett', 'Nicole', 'Ben', 'Abby', 'Nessrin', 'Sheree'];
let imageURls = [];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let years = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];
let dates = [];
/*
~280 count
Good blend: 1/3 3-word reviews
            1/3 longer, under 270-280 character reviews
            1/3 over 270-280 character reviews
*/

let longest = [
  `This place is absolutely amazing. You know it's a good place when you don't want to do anything but be in the place or go anywhere else. 
  This was the absolute perfect place for what we were wanting for our honeymoon. 
  We were able to decompress with the fresh air and view and the sound of birds every morning. 
  Obviously the view is enough to stand on its own, but we also loved the little things like picking of fresh fruit from the trees 
  and just the overall feel of the property. We cannot wait to go back!`


]
