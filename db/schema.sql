-- DROP DTATABASE IF EXISTS burgers_db;

CREATE DATABASE  burgers_db;

USE burgers_db;

CREATE TABLE burgers (
   id iNTEGER (10) AUTO_INCREMENT NOT NULL
  , burger_name VARCHAR (100) NOT NULL
  , devoured BOOLEAN
  , PRIMARY KEY (id)
);