# REST API backend for managing personal notes

### Steps to use API

* Install nodejs. You can download it from https://nodejs.org/en/.

* Install MySQL Server (https://dev.mysql.com/downloads/mysql/). If you already have the mysql on your computer jump to step * Start the MySQL server.

* Run the script schema.sql located inside of scripts diretory.

The schema.sql creates a database called notes.
The dummy-data.sql comes with a sample of notes and users.

* Setup the .env, it have to be located inside of main directory. 

first create file with .env as name. Then add following details according your machine. Sample values have been added below.
```
PORT = 8080

HOST=localhost
USER=root
PASSWORD=""
DATABASE=Notes
```
* Open nodeJs console and go to the main directory of project.
```
cd /path-to-project-directory
```
* Start the application server using the command.
```
node index.js
```
### Instructions 
* Here it is assumed that one note can be created and edited by only one user.

* Both archived notes and unarchieved notes can not be accessed at same time.

Unarchived notes are displayed seperately from archived notes.

* parameter "isArchived" can be used to make note archive and unarchive
```
    0 - set archive false
    1 - set archive true
```
* When creating a new note it is always an unarchived note. Both archived and unarchived notes can be edited.

### Following are APIs. More descriptions have been added in swagger file.
* Save a new note - POST request
```
localhost:8080/notes/[userId]
```

* Update a previously saved note - PUT request
```
localhost:8080/notes/[noteId]
```

* Delete a saved note - DELETE request
```
localhost:8080/notes/[noteId]
```

* Archive a note - PATCH request 
```
localhost:8080/notes/[noteId]?isArchived=1
```

* Unarchive a previously archived note - PATCH request 
```
localhost:8080/notes/[noteId]?isArchived=0
```

* List saved notes that aren't archived - GET request 
```
localhost:8080/notes/[userId]?isArchived=0
```

* List notes that are archived - GET request 
```
localhost:8080/notes/[userId]?isArchived=1
```

### Usage of technologies
Nodejs - It has better efficiency and overall developer productivity. Speed and performance is much greater in nodejs. Among all these node is easy to learn.

MySQL - As this is small application with less number of attributes I have used MySQL. 

### Installed dependancies
* For environmental configurations
```
npm i dotenv
```
* For connecting with mySQL database
```
npm i mysql
```
* Create node project
```
npm install 
```

### Further Implementation
* User authetication have to be carried out. There new API called Auth can be designed.
* Tags for each note can be added.
* Option to share one person's note with other can be implmented. 
* Validations have to carried out.
* In case of callbackHell promises have to be used.
* Error handeling have to be done more precisely.
    * eg:- Here if DB connection gets error server stops.
* For scalability it is good to use non relational database