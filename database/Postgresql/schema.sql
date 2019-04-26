CREATE TABLE reviews (
id SERIAL NOT NULL,
propertyId INT NOT NULL,
accuracy FLOAT NOT NULL,
communication FLOAT NOT NULL,
cleanliness FLOAT NOT NULL,
location FLOAT NOT NULL,
checkIn FLOAT NOT NULL,
value FLOAT NOT NULL,
average FLOAT NOT NULL,
username TEXT NOT NULL,
date TEXT NOT NULL,
textbody TEXT NOT NULL,
userImage TEXT NOT NULL
);

COPY reviews(propertyId,accuracy,communication,cleanliness,location,checkIn,value,average,username,date,textbody,userImage) from '/Users/danielsu/Hack Reactor/SDC/reviews/database/reviewsData.csv' delimiter ',' csv;