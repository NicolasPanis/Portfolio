DROP TABLE IF EXISTS works;
CREATE TABLE works (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  date varchar(255) NOT NULL,
  description LONGTEXT NOT NULL,
  image_url1 varchar(255) NOT NULL, 
  image_url2 varchar(255) NOT NULL, 
  image_url3 varchar(255) NOT NULL 
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO works (title, date, description, image_url1, image_url2, image_url3) 

VALUES ("Stardust", "2023", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin fermentum leo vel orci porta. Dignissim convallis aenean et tortor at. Sed elementum tempus egestas sed sed risus.", "stardust1.jpg", "stardust2.jpg", "stardust3.jpg"), 
("Aromalt", "2023", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin fermentum leo vel orci porta. Dignissim convallis aenean et tortor at. Sed elementum tempus egestas sed sed risus.", "aromalt1.jpg", "aromalt2.jpg", "aromalt3.jpg"),
("Hackatong", "2023", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin fermentum leo vel orci porta. Dignissim convallis aenean et tortor at. Sed elementum tempus egestas sed sed risus.", "hackatong1.jpg", "hackatong2.jpg", "hackatong3.jpg"),
("Afac 974", "2023", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin fermentum leo vel orci porta. Dignissim convallis aenean et tortor at. Sed elementum tempus egestas sed sed risus.", "afa1.jpg", "afa2.jpg", "afa3.jpg"),
("Afac 974", "2023", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin fermentum leo vel orci porta. Dignissim convallis aenean et tortor at. Sed elementum tempus egestas sed sed risus.", "emmaeus1.jpg", "emmaeus2.jpg", "emmaeus3.jpg");
