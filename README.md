# Technical-Assignment

## How to run the project locally 
  This project requires Node.js so you can download and istall it from [here](https://nodejs.org/en/download/).
  
  Open a terminal and make sure the installation was done correctly by typing:
  
      node --version
      
  It should return something like this:
  
      v14.17.3
      
  Install express by typing:
  
      npm i express
      
  Run server by typing:
  
      node index.js 

## How to test the endpoints using Postman.
  - Sign in to post man, if you dont have an account create one its free!
  - Download postman desktop
  - Open postman using Chrome (Brave and Opera have issues)
  - Create a workspace and click on the "+" icon as shown below:
 
    ![2](https://user-images.githubusercontent.com/25777650/178105004-cf1f8d22-5434-498f-a042-6b7d90d989a0.png)

  
### Testing endpoint A
   Endpoint A tells us whether or not the two words sent in the body areanagrams. So in order to test it:

   - Create a new POST request to localhost:8080/A.
   - Click on "body" and select "JSON" from the dropdown menu.
   - Add to the body two words with keys "string1" and "string2" as shown below and click "Send".
   - You can check the outcome in the body of the response.
   
    ![1](https://user-images.githubusercontent.com/25777650/178105551-a31197aa-46ad-4d08-bd23-d8b7d7da53eb.png)



### Testing endpoint B

### Testing endpoint C
