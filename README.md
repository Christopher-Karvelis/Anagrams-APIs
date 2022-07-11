# Technical-Assignment

## How to run the project locally 
  First clone the repository.
  
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
  Endpoint B identifies and returns all unique single word anagrams of string1 in string2. So in order to test it:

   - Create a new POST request to localhost:8080/B.
   - Click on "body" and select "JSON" from the dropdown menu.
   - Add to the body two one word and one sentence with keys "string1" and "string2" as shown below and click "Send".
   - You can check the outcome in the body of the response.

  ![3](https://user-images.githubusercontent.com/25777650/178105896-cc4a36fe-9b8d-42c1-8e26-0d6086665f2e.png)


### Testing endpoint C
  Endpoint C identifies and returns all anagram groups present in the string1. So in order to test it:

   - Create a new POST request to localhost:8080/C.
   - Click on "body" and select "JSON" from the dropdown menu.
   - Add to the body one sentence with key "string1" as shown below and click "Send".
   - You can check the outcome in the body of the response.
  
  ![4](https://user-images.githubusercontent.com/25777650/178106058-ae13cf1c-65a6-4ac9-acfd-a5b21f5e5c8a.png)

