CREATE TABLE reviews (
id SERIAL NOT NULL,
propertyid INT NOT NULL,
accuracy FLOAT NOT NULL,
communication FLOAT NOT NULL,
cleanliness FLOAT NOT NULL,
location FLOAT NOT NULL,
checkin FLOAT NOT NULL,
value FLOAT NOT NULL,
average FLOAT NOT NULL,
username TEXT NOT NULL,
date TEXT NOT NULL,
textbody TEXT NOT NULL,
userimage TEXT NOT NULL
);

\COPY reviews(propertyid,accuracy,communication,cleanliness,location,checkin,value,average,username,date,textbody,userimage) from '/Users/danielsu/Hack Reactor/SDC/reviewsData.csv' delimiter ',' csv;
