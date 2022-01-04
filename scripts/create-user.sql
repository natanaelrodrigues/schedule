CREATE TABLE public."user" (
	id serial NOT NULL,
	name varchar(200) NOT NULL,
	email varchar(250) NOT NULL,
	"password" varchar(250) NOT NULL,
	"admin" int NULL
);
