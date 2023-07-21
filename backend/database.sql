DROP TABLE IF EXISTS works;

DROP TABLE IF EXISTS tags;
CREATE TABLE
    tags (
        id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;


CREATE TABLE works (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  date varchar(255) NOT NULL,
  description LONGTEXT NOT NULL,
  image_url1 varchar(255) , 
  image_url2 varchar(255) , 
  image_url3 varchar(255) ,
  path varchar(255) NOT NULL,
  ref varchar(255) NOT NULL,
  tags_id INT,
  CONSTRAINT tags_id_fk FOREIGN KEY (tags_id) REFERENCES tags(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO tags (name)
VALUES ('Ecommerce'), ('Webdesign'), ('Backoffice'), ('Frontend'), ('Backend');
INSERT INTO works (title, date, description, image_url1, image_url2, image_url3, path, ref, tags_id) 
VALUES
    ("Aromalt",
    "2023",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin fermentum leo vel orci porta. Dignissim convallis aenean et tortor at. Sed elementum tempus egestas sed sed risus.",
    "A1.jpg",
    "A2.jpg",
    "A3.png",
    "https://aromalt.remote-fr-3.wilders.dev/",
    ".01",
    2),
    ("Afac 974",
    "2023", 
    "Virtual gallery of the exhibition which aims to present works by Mr. Mortier de Treviso made during the decade 1861-1871 during his stay in the Reunion Island",
    "91.jpg",
    "92.jpg",
    "93.png",
    "/Afac 974",
    ".02",
    3),
    ("Emmaüs",
    "2023",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin fermentum leo vel orci porta. Dignissim convallis aenean et tortor at. Sed elementum tempus egestas sed sed risus.",
    "E1.jpg",
    "E2.jpg",
    "E3.png",
    "/Emmaeüs",
    ".03",
    4);

