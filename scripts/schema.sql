/*
 This script is to add all the tables to the database 
 User Table
 Notes Table
 */
CREATE DATABASE Notes;

USE DATABASE Notes;

CREATE TABLE User (
    UserId int NOT NULL AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    Password varchar(255) NOT NULL,
    PRIMARY KEY (UserId)
);

CREATE TABLE Note (
    NoteId int NOT NULL AUTO_INCREMENT,
    CreatedDate DATE,
    isArchived boolean,
    Topic Text,
    Description Text,
    CreatedBy int NOT NULL,
    PRIMARY KEY (NoteId),
    FOREIGN KEY (CreatedBy) REFERENCES User(UserId)
);