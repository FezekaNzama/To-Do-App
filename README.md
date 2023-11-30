# To-Do-App

![Screenshot (302)](https://github.com/FezekaNzama/To-Do-App/assets/55462056/97c46b36-5169-4d75-8176-dffa4229a9f7)

## Project Description
This To Do App Project was built with the intention of helping me practice my newly acquired Spring Boot knowledge. It allows user to create, read, edit and delete any note. Each note consists of a title and a description. 

## Project Tech Stack & Reasoning
- Spring Boot Framework / Java: The goal of this project was to practice my API building with Spring Boot, thus the use of the Spring Boot Framework was a central part of this project. Additionally, Spring Boot serves as a powerful framework for building web applications. 
- Next.js: I chose Next.js because of how quickly it is possible to build beautiful frontend single web apps using react components.  


### Additonal Technologies Utilised 
- VS Code

## How to Run the Application 

### How to run the backend system
#### Pre-requisites
- Java 17
- Maven

#### Run instructions
- Navigate to the backend directory and run: ``` mvn clean spring-boot:run ```
- The application will launch at localhost:8080

### How to run the frontend system
#### Pre-requisites
- Node.js

#### Run instructions
- Navigate to the frontend directory and run: ``` npx next dev ```
- The application will launch at localhost:3000

### Areas of Development 
Whilst this project allowed me to practice the skills I was aiming for it could be improved in the following ways:
1. Slow loading: From entering inputs to saving and displaying in the list of to dos there is a time delay in the app. This warrants more investigation to determine how to reduce that lag although I suspect the issue is caused by the frontend and backend apps being on different ports
2. Consistent DB: Currently the H2 Database engine is used for this application. H2 is not a persistent DB therefore to make this project production ready we would need to add a persistent DB
3. Design: The frontend design whilst sleek and intuitive could use some work, especially with regards to the item description section, namely allowing for descriptions to be entered as bullet points
