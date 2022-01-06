DROP TABLE public."users";
CREATE TABLE public."users" (
	id serial NOT NULL,
	name varchar(200) NOT NULL,
	email varchar(250) NOT NULL,
	"password" varchar(250) NOT NULL,
	"admin" int NULL default 0,
	"active" int default 1,
	"createdAt" timestamp,
	"updatedAt" timestamp
);