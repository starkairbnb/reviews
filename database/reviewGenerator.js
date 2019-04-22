// universal imports
const { performance } = require('perf_hooks');
const fs = require('fs');
const faker = require('faker');

// MongoDB setup
const mongoose = require('mongoose');
const db = require('./MongoDB/index.js');
const Model = require('./MongoDB/index.js');
const wstream = fs.createWriteStream('./MongoDB/reviewsData.json');

// Postgresql setup

// Datasets
const place = ['place', 'home', 'house', 'apartment', 'location', 'property'];
const area = ['entrance', 'doorway', 'bedroom', 'bathroom', 'study', 'living room', 'basement', 'attic', 'closet', 'library', 'porch', 'yard', 'roof', 'kitchen', 'dining room', 'garage', 'backdoor', 'sidedoor'];
const verbs = ['loved', 'enjoyed', 'adored', 'hated', 'liked', 'digged'];
const adjectives = ['amazing', 'remarkable', 'the best', 'spectacular', 'outstanding', 'lovely', 'great', 'incomparable', 'pleasant', 'wonderful', 'incredible', 'marvelous', 'perfect'];
const users = ['Rachael', 'Susan', 'Britney', 'Whitney', 'Jessica', 'Thinh', 'Katie', 'Tiffany', 'David', 'Marie', 'Sahar', 'Angela', 'Joe', 'Derrin', 'Michael', 'Alanna', 'Brian', 'Gina', 'Faris', 'Patricia', 'Ladonna', 'Brett', 'Nicole', 'Ben', 'Abby', 'Nessrin', 'Sheree', 'Billie', 'Lily', 'May', 'Mac', 'Katie', 'Tom', 'Seth', 'Russell', 'Paul'];
const endingBlurb = ['Would recommend!', 'Very disappointed.', 'We loved our stay!', 'Charming!', 'I\'ll be back!', 'Thoroughly enjoyed every bit!', 'We cannot wait to go back!']
const imageURls = ['https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(1).png',
  'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(10).png',
  'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(11).png',
  'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(12).png',
  'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(13).png',
  'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(2).png',
  'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(3).png',
  'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(4).png',
  'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(5).png',
  'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(6).png',
  'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(7).png',
  'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(8).png',
  'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack(9).png',
  'https://s3-us-west-1.amazonaws.com/sharebnbprofiles/Screenshot_2019-04-09+hrla28+Hack+Reactor+LA+-+Students+Slack.png',];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const years = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];

// random text body generator
const generateBody = () => {
  let chance = Math.random();
  if (chance > 0.7) {
    return `This ${place[Math.floor(Math.random() * place.length)]} is absolutely ${adjectives[Math.floor(Math.random() * adjectives.length)]}! \
You know it's a ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${place[Math.floor(Math.random() * place.length)]} \
when you don't want to do anything but be in the ${place[Math.floor(Math.random() * place.length)]} or go anywhere else. \
This was the absolute ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${place[Math.floor(Math.random() * place.length)]} \
for what we were wanting. Obviously the view is enough to stand on its own, but we also ${verbs[Math.floor(Math.random() * verbs.length)]} \
the little things like the ${area[Math.floor(Math.random() * area.length)]} \
and just the overall feel of the ${place[Math.floor(Math.random() * place.length)]}. ${endingBlurb[Math.floor(Math.random() * endingBlurb.length)]}`;
  } else {
    return `This ${place[Math.floor(Math.random() * place.length)]} is ${adjectives[Math.floor(Math.random() * adjectives.length)]}! \
${endingBlurb[Math.floor(Math.random() * endingBlurb.length)]}`;
  }
}

// seed file generator. creates new object and immediately writes to file
(async () => {
  for (let i = 1; i <= 5e7; i += 1) {
    reviewObj = {
      propertyId: Math.random() * 1e7,
      accuracy: Math.random() * 6,
      communication: Math.random() * 6,
      cleanliness: Math.random() * 6,
      location: Math.random() * 6,
      checkIn: Math.random() * 6,
      value: Math.random() * 6,
    }
    
    for (let key in reviewObj) {
      let val = reviewObj[key];
      let valRound = Math.floor(val);
      let check = val - valRound;
      if (check >= 0.5 && val < 5) {
        reviewObj[key] = valRound + 0.5;
      } else {
        reviewObj[key] = valRound;
      }
    }
    
    let average = (reviewObj.accuracy + reviewObj.communication + reviewObj.cleanliness
      + reviewObj.location + reviewObj.checkIn + reviewObj.value) / 6;
      let averageRound = Math.floor(average);
      let check = average - averageRound;
      if (check >= 0.5 && average < 5) {
        reviewObj.average = averageRound + 0.5;
      } else {
        reviewObj.average = averageRound;
      }

      reviewObj.user = users[Math.floor(Math.random() * users.length)];
      reviewObj.date = `${months[Math.floor(Math.random() * months.length)]} ${years[Math.floor(Math.random() * years.length)]}`;
      reviewObj.text = generateBody();
      reviewObj.userImage = `${imageURls[Math.floor(Math.random() * imageURls.length)]}`;
      
    const able = wstream.write(JSON.stringify(reviewObj) + '\r\n');
    if (!able) {
      await new Promise(resolve => {
        wstream.once('drain', resolve);
      });
    }
  }
})();

mongoose.connection.close('done');
