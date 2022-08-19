USE e_books;
SET FOREIGN_KEY_CHECKS=0;

insert into user ( first_name, last_name, email, password, image) values ( 'Nefen', 'Peplay', 'npeplay0@answers.com', 'ULdPKutPsfU', 'http://dummyimage.com/174x100.png/ff4444/ffffff');
insert into user ( first_name, last_name, email, password, image) values ( 'Saxon', 'Josefson', 'sjosefson1@de.vu', 'SniRl6Qy', 'http://dummyimage.com/139x100.png/dddddd/000000');
insert into user ( first_name, last_name, email, password, image) values ( 'Nanete', 'Tompion', 'ntompion2@abc.net.au', 'kbURDLb1ibG', 'http://dummyimage.com/105x100.png/cc0000/ffffff');
insert into user ( first_name, last_name, email, password, image) values ( 'Charisse', 'Bettenay', 'cbettenay3@cpanel.net', 'HQSsIauB', 'http://dummyimage.com/231x100.png/dddddd/000000');
insert into user ( first_name, last_name, email, password, image) values ( 'Felic', 'Probetts', 'fprobetts4@wunderground.com', 'UHDZqEj0Nmj0', 'http://dummyimage.com/154x100.png/ff4444/ffffff');
insert into user ( first_name, last_name, email, password, image) values ( 'Kenny', 'Cracknall', 'kcracknall5@theatlantic.com', 'f0rDIS2D4sgO', 'http://dummyimage.com/228x100.png/ff4444/ffffff');
insert into user ( first_name, last_name, email, password, image) values ( 'Elisha', 'Vida', 'evida6@imdb.com', 'Mlrwpzc9J', 'http://dummyimage.com/194x100.png/cc0000/ffffff');
insert into user ( first_name, last_name, email, password, image) values ( 'Lil', 'Vittore', 'lvittore7@yandex.ru', '38WWVpm', 'http://dummyimage.com/149x100.png/dddddd/000000');
insert into user ( first_name, last_name, email, password, image) values ( 'Obediah', 'Rushbrook', 'orushbrook8@pagesperso-orange.fr', 'D2cZDai', 'http://dummyimage.com/209x100.png/ff4444/ffffff');
insert into user ( first_name, last_name, email, password, image) values ( 'Ellis', 'Eade', 'eeade9@bluehost.com', '9gAoca', 'http://dummyimage.com/105x100.png/ff4444/ffffff');






insert into category ( name) values ('Casework');
insert into category ( name) values ('Framing (Wood)');
insert into category ( name) values ('Prefabricated Aluminum Metal Canopies');
insert into category ( name) values ('Plumbing & Medical Gas');
insert into category ( name) values ('Casework');
insert into category ( name) values ('Drywall & Acoustical (FED)');
insert into category ( name) values ('Structural & Misc Steel Erection');
insert into category ( name) values ('Glass & Glazing');
insert into category ( name) values ('Prefabricated Aluminum Metal Canopies');
insert into category ( name) values ('Elevator');



insert into genres ( name) values ('Drama|Musical|Romance');
insert into genres ( name) values ('Drama|Thriller');
insert into genres ( name) values ('Action|Drama|Thriller');
insert into genres ( name) values ('Drama');
insert into genres ( name) values ('Comedy|Drama');
insert into genres ( name) values ('Drama|War');
insert into genres ( name) values ('Comedy');
insert into genres ( name) values ('Drama|Romance');
insert into genres ( name) values ('Comedy');
insert into genres ( name) values ('Drama');



insert into format (name) values ('Digita');
insert into format (name) values ('Tapa Dura');
insert into format (name) values ('Tapa Blanda');




insert into purchase (active) values (1);
insert into purchase (active) values (0);
insert into purchase (active) values (0);
insert into purchase (active) values (1);
insert into purchase (active) values (0);
insert into purchase (active) values (1);
insert into purchase (active) values (1);
insert into purchase (active) values (0);
insert into purchase (active) values (0);
insert into purchase (active) values (1);

insert into product (title, price, description, image, genre_id, category_id) values ('Night Train to Munich', 56.47, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'http://dummyimage.com/148x100.png/cc0000/ffffff', 7, 5);
insert into product (title, price, description, image, genre_id, category_id) values ('Brother Bear', 21.05, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 'http://dummyimage.com/100x100.png/ff4444/ffffff', 5, 10);
insert into product (title, price, description, image, genre_id, category_id) values ('Comin'' at Ya!', 50.46, 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 'http://dummyimage.com/182x100.png/ff4444/ffffff', 1, 6);
insert into product (title, price, description, image, genre_id, category_id) values ('Nanny, The', 29.43, 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'http://dummyimage.com/147x100.png/5fa2dd/ffffff', 1, 3);
insert into product (title, price, description, image, genre_id, category_id) values ('St. Valentine''s Day Massacre, The', 10.27, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 'http://dummyimage.com/196x100.png/ff4444/ffffff', 6, 2);
insert into product (title, price, description, image, genre_id, category_iD) values ('Werewolves on Wheels', 17.61, 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 'http://dummyimage.com/229x100.png/cc0000/ffffff', 4, 5);
insert into product (title, price, description, image, genre_id, category_id) values ('This Is My Father', 65.47, 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'http://dummyimage.com/213x100.png/cc0000/ffffff', 8, 10, 1);
insert into product (title, price, description, image, genre_id, category_id) values ('Atlantis: The Lost Empire', 1.12, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 'http://dummyimage.com/131x100.png/ff4444/ffffff', 1, 3);
insert into product (title, price, description, image, genre_id, category_id) values ('Trio', 56.0, 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 'http://dummyimage.com/189x100.png/dddddd/000000', 5, 7, 6);
insert into product (title, price, description, image, genre_id, category_id) values ('Dead Men Walk', 54.67, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 'http://dummyimage.com/139x100.png/5fa2dd/ffffff', 10, 1);

insert into product_format (product_id, format_id) values (4, 2);
insert into product_format (product_id, format_id) values (2, 1);
insert into product_format (product_id, format_id) values (8, 2);
insert into product_format (product_id, format_id) values (2, 3);
insert into product_format (product_id, format_id) values (5, 1);
insert into product_format (product_id, format_id) values (2, 3);
insert into product_format (product_id, format_id) values (6, 3);
insert into product_format (product_id, format_id) values (6, 1);
insert into product_format (product_id, format_id) values (4, 3);
insert into product_format (product_id, format_id) values (1, 3);

select * from format;
select * from category;
select * from genres;
select * from product;
select * from product_format;
select * from purchase;
select * from user;
