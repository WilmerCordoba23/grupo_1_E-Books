USE e_books;
SET FOREIGN_KEY_CHECKS=0;

insert into user ( first_name, last_name, email, password, image) values ( 'Wilmer ', 'Cordoba', 'alexandercordoba2003@hotmail.com', '$2a$10$s./KXxSv1hN6Sz1xug36FeQme3kogSVC3TaF4ziZx.cWfeD51beYa', '1659411449513_img_.jpg');
insert into user ( first_name, last_name, email, password, image) values ( 'Kervin', 'Cordoba', 'kervincordoba33@gmail.com','$2a$10$GL/Q7FoiJlCp99xG95mD8e2NUr4nzC6vBQyqw/.9Tr9TrtnV1bHEq', null);
insert into user ( first_name, last_name, email, password, image) values ( 'Sergio', 'Cordoba', 'sergioandrestorrez@gmail.com', '$2a$10$Udn2d/luAy6tH0.B9b8/xuRxjkNpDQVuOwcDfdmv92kFrfjKEccVe', null);
insert into user ( first_name, last_name, email, password, image) values ( 'Hoid', 'Worldhopper', 'frost@gmail.com', '$2a$10$89/NFyhMoNv6cWDrkeIMeO65T0pe2jG5NdGn50FkJB2RaiLu8nAMu', '1659546383560_img_.jpg');






insert into category ( name) values ('Mas vendidos');
insert into category ( name) values ('Novedades');
insert into category ( name) values ('Recomendados');




insert into genres ( name) values ('Fantasia');
insert into genres ( name) values ('Economia');
insert into genres ( name) values ('Literatura');
insert into genres ( name) values ('Autoayuda');
insert into genres ( name) values ('Accion');
insert into genres ( name) values ('Liderazgo');
insert into genres ( name) values ('Ficcion');
insert into genres ( name) values ('Aventura');
insert into genres ( name) values ('Romance');
insert into genres ( name) values ('Drama');



insert into format (name) values ('Digital');
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

insert into product (title, price, description, image, genre_id, category_id) values ('El Camino de Los Reyes', 21.05, 'Anhelo los días previos a la Última Desolación. Los días en que los Heraldos nos abandonaron y los Caballeros Radiantes se giraron en nuestra contra. Un tiempo en que aún había magia en el mundo y honor en el corazón de los hombres. El mundo fue nuestro, pero lo perdimos. Probablemente no hay nada más estimulante para las almas de los hombres que la victoria. ¿O tal vez fue la victoria una ilusión durante todo ese tiempo? ¿Comprendieron nuestros enemigos que cuanto más duramente luchaban, más resistíamos nosotros? Quizá vieron que el fuego y el martillo tan solo producían mejores espadas. Pero ignoraron el acero durante el tiempo suficiente para oxidarse. Hay cuatro personas a las que observamos. La primera es el médico, quien dejó de curar para convertirse en soldado durante la guerra más brutal de nuestro tiempo. La segunda es el asesino, un homicida que llora siempre que mata. La tercera es la mentirosa, una joven que viste un manto de erudita sobre un corazón de ladrona. Por último está el alto príncipe, un guerrero que mira al pasado mientras languidece su sed de guerra. El mundo puede cambiar. La potenciación y el uso de las esquirlas pueden aparecer de nuevo, la magia de los días pasados puede volver a ser nuestra. Esas cuatro personas son la clave. Una de ellas nos redimirá. Y una de ellas nos destruirá.', 'Way_of_Kings.jpg', 1, 3);
insert into product (title, price, description, image, genre_id, category_id) values ('Palabras Radiantes', 50.46, 'Los Caballeros Radiantes deben volver a alzarse. Los antiguos juramentos por fin se han pronunciado. Los hombres buscan lo que se perdió. Temo que la búsqueda los destruya. Es la naturaleza de la magia. Un alma rota tiene grietas donde puede colarse algo más. Las potencias, los poderes de la creación misma, pueden abrazar un alma rota, pero también pueden ampliar sus fisuras. El Corredor del Viento está perdido en una tierra quebrada, en equilibro entre la venganza y el honor. La Tejedora de Luz, lentamente consumida por su pasado, busca la mentira en la que debe convertirse. El Forjador de Vínculos, nacido en la sangre y la muerte, se esfuerza ahora por reconstruir lo que fue destruido. La Exploradora, a caballo entre los destinos de dos pueblos, se ve obligada a elegir entre una muerte lenta y una terrible traición a todo en lo que cree. Ya es hora de despertarlos, pues acecha la eterna tormenta. Y el asesino ha llegado.', 'Palabras radiantes.jpg', 1, 3);
insert into product (title, price, description, image, genre_id, category_id) values ('Juramentada', 56.47, 'La humanidad se enfrenta a una nueva Desolación con el regreso de los Portadores del Vacío, un enemigo tan grande en número como en sed de venganza. La victoria fugaz de los ejércitos alezi de Dalinar Kholin ha tenido consecuencias: el enemigo parshendi ha convocado la violenta tormenta eterna, que arrasa el mundo y hace que los hasta ahora pacíficos parshmenios descubran con horror que llevan un milenio esclavizados por los humanos. Al mismo tiempo, en una desesperada huida para alertar a su familia de la amenaza, Kaladin se pregunta si la repentina ira de los parshmenios está justificada. Entretanto, en la torre de la ciudad de Urithiru, a salvo de la tormenta, Shallan Davar investiga las maravillas de la antigua fortaleza de los Caballeros Radiantes y desentierra oscuros secretos que acechan en las profundidades. Dalinar descubre entonces que su sagrada misión de unificar su tierra natal de Alezkar era corta de miras. A menos que todas las naciones sean capaces de unirse y dejar de lado el pasado sangriento de Dalinar, ni siquiera la restauración de los Caballeros Radiantes conseguirá impedir el fin de la civilización.', 'Juramentada.jpg', 1, 1);
insert into product (title, price, description, image, genre_id, category_id) values ('El Ritmo de La Guerra', 29.43, 'Hay secretos que hemos guardado mucho tiempo. Vigilantes. Insomnes. Eternos. Y pronto dejarán de ser nuestros. La Una que es Tres busca, sin saberlo, el alma capturada. El spren aprisionado, olvidado hace mucho tiempo. ¿Puede liberar su propia alma a tiempo de hallar el conocimiento que condena a todos los pueblos de Roshar? El Soldado Caído acaricia y ama la lanza, incluso mientras el arma hiende su propia carne. Camina siempre hacia delante, siempre hacia la oscuridad, sin luz. No puede llevar consigo a nadie, salvo aquello que él mismo puede avivar. La Hermana Derrumbada comprende sus errores y piensa que ella misma es un error. Parece muy alejada de sus antepasados, pero no comprende que son quienes la llevan a hombros. Hacia la victoria, y hacia ese silencio, el más importante de todos. Y la Madre de Máquinas, la más crucial de todos ellos, danza con mentirosos en un gran baile. Debe desenmascararlos, alcanzar sus verdades ocultas y entregarlas al mundo. Tiene que reconocer que las peores mentiras son las que se cuenta a sí misma. Si lo hace, nuestros secretos por fin se convertirán en verdades', 'Ritmo de la guerra.jpg', 1, 2);
insert into product (title, price, description, image, genre_id, category_id) values ('El Pozo de la Acension', 10.27, 'Durante mil años nada ha cambiado: han caído las cenizas, los skaa han sido esclavizados y el Lord Legislador ha dominado el mundo. Pero lo imposible ha sucedido. El Lord Legislador ha muerto. Sin embargo, vencer y matarlo fue la parte sencilla. El verdadero desafío será sobrevivir a las consecuencias de su caída. Tomar el poder tal vez resultó fácil, pero ¿qué ocurre después?, ¿cómo se utiliza? La tarea de reconstruir el mundo, ahora que Kelsier no está, ha quedado en manos de Vin. Y las brumas, desde que el Lord Legislador cayó, se han vuelto cada vez más impredecibles... A medida que el asedio se intensifica, la antigua leyenda del Pozo de la Ascensión ofrece un único rayo de esperanza. En ese mundo de aventura épica, la estrategia política y religiosa debe lidiar con los siempre misteriosos poderes de la alomancia...', 'pozo de la acension.jpg', 5, 2);
insert into product (title, price, description, image, genre_id, category_iD) values ('Detective Comics', 17.61, 'Con la pérdida de su fortuna y su mansión, la elección del alcalde Nakano y el creciente sentimiento anti-vigilante en Ciudad Gótica, Bruce Wayne debe repensar cómo ser Batman... o arriesgarse a quedarse atrás en su propia ciudad. ¡Presentamos al Sr. Worth! Cuando su hija es asesinada durante la brutal ola de crímenes que se apodera de Gotham City, Roland Worth, un montón de músculos y dinero de dos metros y medio de altura, emprende un camino de venganza hacia el principal sospechoso del crimen: ¡Batman! El Caballero Oscuro ha sido incriminado por asesinato y, para empeorar las cosas, este espeluznante acto parece estar conectado con otra fuerza malvada emergente en el horizonte. ¡Es una explosión de galería de pícaros, y esta vez no hay una mansión en la colina desde la que Bruce Wayne pueda montar su contraataque! La escritora ganadora del premio Eisner, Mariko Tamaki, y el artista superestrella Dan Mora comienzan una nueva historia emocionante, sorprendente y que desafía a la muerte para el detective más grande del mundo.', 'Detective Comics.jpg', 7, 1);
insert into product (title, price, description, image, genre_id, category_id) values ('Dissonance', 65.47, 'Un nuevo mundo. Mil Amenazas. Bienvenidos al Continente. La vida de Félix en la Tierra se había convertido en una serie de trabajos sin salida, relaciones arruinadas y apartamentos rotativos más pequeños que la mayoría de los sellos postales. Según todos los informes, incluso el suyo propio, era un cobarde. Demasiado miedo de avanzar, de correr riesgos. Sin embargo, cuando se le dio la oportunidad de elegir entre arriesgar su vida o alejarse de un encuentro mortal, no dudó. Momentos antes de su muerte prematura, Félix fue arrancado de la tierra y arrojado a un mundo mágico conocido solo como El Continente. Empoderado por el Sistema, aprende que puede fortalecerse a sí mismo a través del combate y la dedicación. Para sobrevivir, tendrá que esforzarse más allá de sus límites o caer ante los monstruos que lo rodean. Niveles, estadísticas y magia. La muerte es el comienzo de un terrible destino, pero si vive... nadie sabe en qué se convertirá.', 'Dissonance.jpg', 7, 1);
insert into product (title, price, description, image, genre_id, category_id) values ('Daughters of the Night Sky', 1.12, 'Una novela, inspirada en el regimiento más célebre del Ejército Rojo, sobre el sacrificio, el coraje y el amor de una mujer en tiempos de guerra. Rusia, 1941. Katya Ivanova es una joven piloto en una academia militar remota en los Montes Urales. Desde la infancia, ha soñado con volar a los cielos para escapar de su sombría vida en la montaña. Con los nazis en marcha por toda Europa, se le pide que use sus alas para servir a su país en su hora más oscura. Ni siquiera las súplicas de su nuevo esposo, un artista sensible que teme por su seguridad, pueden disuadirla de hacer su parte como una orgullosa hija de Rusia. Después de años de arduo entrenamiento, Katya es asignada al 588.° Regimiento de Bombarderos Nocturnos, una de las únicas unidades aéreas soviéticas compuesta en su totalidad por mujeres. Los alemanes aprenden rápidamente a temer las incursiones nocturnas de los atrevidos voladores a los que llaman brujas nocturnas. Pero la brutal campaña cobrará un precio amargo en Katya y sus hermanas de armas. Cuando el humo de la guerra se disipe, nada volverá a ser igual, y una de las heroínas militares más condecoradas de Rusia se enfrentará a la elección más angustiosa de todas.', 'Daughters of the Night Sky.jpg', 8, 1);
insert into product (title, price, description, image, genre_id, category_id) values ('La Riqueza de las Naciones', 54.67, 'La riqueza de las naciones, consta de cinco Libros. Con fundamento en que: (la riqueza de una nación deriva del producto anual del trabajo de su gente y de la tierra) el trabajo es el (fondo) del que se derivan todas las riquezas, el principal propósito es cómo aumentarlo: en el libro Primero considera que a partir de la división del trabajo surge el comercio, la distribución, el dinero, el precio el valor, los salarios, los costes, el beneficio y la renta.', 'la riqueza de las naciones.jpg', 2, 2);

insert into product_format (product_id, format_id) values (1, 2);
insert into product_format (product_id, format_id) values (2, 2);
insert into product_format (product_id, format_id) values (3, 2);
insert into product_format (product_id, format_id) values (4, 2);
insert into product_format (product_id, format_id) values (5, 2);
insert into product_format (product_id, format_id) values (5, 3);
insert into product_format (product_id, format_id) values (2, 1);
insert into product_format (product_id, format_id) values (6, 3);
insert into product_format (product_id, format_id) values (7, 3);
insert into product_format (product_id, format_id) values (8, 3);
insert into product_format (product_id, format_id) values (9, 3);


select * from format;
select * from category;
select * from genres;
select * from product;
select * from product_format;
select * from purchase;
select * from user;
