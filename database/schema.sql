DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db DEFAULT CHARACTER SET utf8;
USE burgers_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOL DEFAULT false,
	PRIMARY KEY (id)
);