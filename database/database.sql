CREATE DATABASE video_club_db;

USE video_club_db;

CREATE TABLE movies
(
mov_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
mov_title char(50),
mov_year int,
mov_time int,
mov_lang char(50),
mov_dt_rel date,
mov_rel_country char(5),
mov_image_url varchar(70),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE movies;

CREATE TABLE actors
(
act_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
act_fname char(20),
act_lname char (20),
act_gender char(1)
);

CREATE TABLE directors
(
dir_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
dir_fname char(20),
dir_lname char(20)
);

CREATE TABLE movies_direction
(
dir_id int,
mov_id int
);

CREATE TABLE movies_cast
(
act_id int,
mov_id int,
mov_role char(30) 
);



CREATE TABLE reviews
(
rev_id int,
rev_name char(30)
);

CREATE TABLE genres
(
gen_id int,
gen_title char(20)
);

CREATE TABLE movie_genres
(
mov_id int,
gen_id int
);

CREATE TABLE ratings
(
mov_id int,
rev_id int,
rev_stars int,
num_o_ratings int
);

