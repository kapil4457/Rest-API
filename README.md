This is a REST API build using node js and Express js......
You can do the following operations with it : 


1. Add data to the Database : 
 ==> To do this go to start the server and go to postman and paste in your localhost address.....
 ==> Choose the POST request and type in the details in the form of Objects and click on the send button

2. Get a Single User data : 
 ==> To do this go to start the server and go to postman and paste in your localhost address.....
 ==> after the url type in "/users/${id}"
  ==> You can get that id by a GET request
 ==> Each user that you have created has been assigned a unique id..Enter that id in place of ${id} above and send in the request 


2. Get the whole data :
 ==> To do this go to start the server and go to postman and paste in your localhost address.....
 ==> after the url type in "/users"
 ==> Each user that you have created will be shown to you

 
4.Update already existing data : 
 ==> To do this go to start the server and go to postman and paste in your localhost address.....
 ==> go to the PATCH request in postman 
 ==> after the url above type in "/users/${id}"
 ==> The id above is the unique id given to each entry you make
 ==> You can get that id by a GET request

Note : You can find the tutorial images in the tut-images folder
 
