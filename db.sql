-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: db4free.net    Database: grupo_1_ebooks
-- ------------------------------------------------------
-- Server version	8.0.33
--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
);

--
-- Dumping data for table `category`
--

INSERT INTO `category` VALUES (1,'Mas vendidos'),(2,'Novedades'),(3,'Recomendados');

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;

CREATE TABLE `genres` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
);


--
-- Dumping data for table `genres`
--

INSERT INTO `genres` VALUES (1,'Fantasia'),(2,'Economia'),(3,'Literatura'),(4,'Autoayuda'),(5,'Accion'),(6,'Liderazgo'),(7,'Ficcion'),(8,'Aventura'),(9,'Romance'),(10,'Drama');

UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) COLLATE utf8mb3_unicode_ci NOT NULL,
  `price` decimal(10,2) unsigned NOT NULL,
  `description` varchar(1000) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `image` varchar(100) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `genre_id` int unsigned NOT NULL,
  `category_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_genre_id_foreign` (`genre_id`),
  KEY `product_category_id_foreign` (`category_id`),
  CONSTRAINT `product_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `product_genre_id_foreign` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`)
);

--
-- Dumping data for table `product`
--

INSERT INTO `product` VALUES (1,'Palabras Radiantes',50.46,'Los Caballeros Radiantes deben volver a alzarse. Los antiguos juramentos por fin se han pronunciado. Los hombres buscan lo que se perdió. Temo que la búsqueda los destruya. Es la naturaleza de la magia. Un alma rota tiene grietas donde puede colarse algo más. Las potencias, los poderes de la creación misma, pueden abrazar un alma rota, pero también pueden ampliar sus fisuras. El Corredor del Viento está perdido en una tierra quebrada, en equilibro entre la venganza y el honor. La Tejedora de Luz, lentamente consumida por su pasado, busca la mentira en la que debe convertirse. El Forjador de Vínculos, nacido en la sangre y la muerte, se esfuerza ahora por reconstruir lo que fue destruido. La Exploradora, a caballo entre los destinos de dos pueblos, se ve obligada a elegir entre una muerte lenta y una terrible traición a todo en lo que cree. Ya es hora de despertarlos, pues acecha la eterna tormenta. Y el asesino ha llegado.','Palabras radiantes.jpg',1,3),(3,'El Camino de Los Reyes',21.05,'Anhelo los días previos a la Última Desolación. Los días en que los Heraldos nos abandonaron y los Caballeros Radiantes se giraron en nuestra contra. Un tiempo en que aún había magia en el mundo y honor en el corazón de los hombres. El mundo fue nuestro, pero lo perdimos. Probablemente no hay nada más estimulante para las almas de los hombres que la victoria. ¿O tal vez fue la victoria una ilusión durante todo ese tiempo? ¿Comprendieron nuestros enemigos que cuanto más duramente luchaban, más resistíamos nosotros? Quizá vieron que el fuego y el martillo tan solo producían mejores espadas.','Way_of_Kings.jpg',1,3),(4,'Juramentada',56.47,'La humanidad se enfrenta a una nueva Desolación con el regreso de los Portadores del Vacío, un enemigo tan grande en número como en sed de venganza. La victoria fugaz de los ejércitos alezi de Dalinar Kholin ha tenido consecuencias: el enemigo parshendi ha convocado la violenta tormenta eterna, que arrasa el mundo y hace que los hasta ahora pacíficos parshmenios descubran con horror que llevan un milenio esclavizados por los humanos. Al mismo tiempo, en una desesperada huida para alertar a su familia de la amenaza, Kaladin se pregunta si la repentina ira de los parshmenios está justificada.','Juramentada.jpg',1,3),(5,'El Ritmo de La Guerra',29.43,'Hay secretos que hemos guardado mucho tiempo. Vigilantes. Insomnes. Eternos. Y pronto dejarán de ser nuestros. La Una que es Tres busca, sin saberlo, el alma capturada. El spren aprisionado, olvidado hace mucho tiempo. ¿Puede liberar su propia alma a tiempo de hallar el conocimiento que condena a todos los pueblos de Roshar? El Soldado Caído acaricia y ama la lanza, incluso mientras el arma hiende su propia carne. Camina siempre hacia delante, siempre hacia la oscuridad, sin luz. No puede llevar consigo a nadie, salvo aquello que él mismo puede avivar.','Ritmo de la guerra.jpg',1,3),(6,'El Imperio final',10.27,'Durante mil años nada ha cambiado: han caído las cenizas, los skaa han sido esclavizados y el Lord Legislador ha dominado el mundo. Pero lo imposible ha sucedido. El Lord Legislador ha muerto. Sin embargo, vencer y matarlo fue la parte sencilla. El verdadero desafío será sobrevivir a las consecuencias de su caída. Tomar el poder tal vez resultó fácil, pero ¿qué ocurre después?, ¿cómo se utiliza? La tarea de reconstruir el mundo, ahora que Kelsier no está, ha quedado en manos de Vin. Y las brumas, desde que el Lord Legislador cayó, se han vuelto cada vez más impredecibles... A medida que el asedio se intensifica, la antigua leyenda del Pozo de la Ascensión ofrece un único rayo de esperanza. En ese mundo de aventura épica, la estrategia política y religiosa debe lidiar con los siempre misteriosos poderes de la alomancia...','pozo de la acension.jpg',5,1),(7,'Dissonance',65.47,'Un nuevo mundo. Mil Amenazas. Bienvenidos al Continente. La vida de Félix en la Tierra se había convertido en una serie de trabajos sin salida, relaciones arruinadas y apartamentos rotativos más pequeños que la mayoría de los sellos postales. Según todos los informes, incluso el suyo propio, era un cobarde. Demasiado miedo de avanzar, de correr riesgos. Sin embargo, cuando se le dio la oportunidad de elegir entre arriesgar su vida o alejarse de un encuentro mortal, no dudó. Momentos antes de su muerte prematura, Félix fue arrancado de la tierra y arrojado a un mundo mágico conocido solo como El Continente. Empoderado por el Sistema, aprende que puede fortalecerse a sí mismo a través del combate y la dedicación. Para sobrevivir, tendrá que esforzarse más allá de sus límites o caer ante los monstruos que lo rodean. Niveles, estadísticas y magia. La muerte es el comienzo de un terrible destino, pero si vive... nadie sabe en qué se convertirá.','Dissonance.jpg',7,1),(8,'Keep Away',86.00,'Ben sabe que si va a triunfar como capitán de una nave estelar, algo tiene que ceder. Después de otro encuentro inesperado con el Sr. Keep, está listo para aceptar que no puede evitar su destino para siempre. Pero el primer paso es increíble, y no está precisamente empezando con las mejores bases. Tiene más que perder que su nave estelar o su vida. Mucho más. Comprar la nave estelar era un negocio. Esto es personal. La aventura de tu vida continúa en la tercera entrega de la serie de ciencia ficción número 1 Starship For Sale. Si te gustan las naves estelares encontradas, los héroes inverosímiles y el caos intergaláctico, te encantará Starship For Sale.','Keep Away.jpg',6,2),(10,'Generación idiota',8.99,'Generación idiota nos ofrece una inmersión profunda en la desaparición de la sociedad intergeneracional y el auge de la mentalidad adolescente, que ha causado un gran daño a la política y a la sociedad.\r\n\r\nEn la continuación de su best seller internacional La batalla cultural, el afamado escritor, politólogo y conferencista Agustín Laje presenta Generación idiota: Una crítica al adolescentecentrismo. \r\n\r\nSegún Agustín, las ideologías centradas en la adolescencia del siglo XXI están en auge. Como resultado, los adolescentes están gobernando el mundo. Rigen la forma de la cultura, estructuran la forma de la política, inspiran los cambios de nuestro lenguaje, imponen sus preferencias estéticas y dominan el imaginario postindustrial y el sistema de consumo. Las instituciones básicas, como la familia, también están fuera de lugar en estas generaciones adolescentes.','1675524219085_img_.jpg',1,1),(11,'Spare: En la sombra ',10.99,'Fue una de las imágenes más desgarradoras del siglo XX: Dos niños, dos príncipes, caminando detrás del féretro de su madre, mientras el mundo contemplaba la escena con pesar… y horror. A la vez que se daba sepultura a Diana, princesa de Gales, miles de millones de personas se preguntaban qué debían pensar y sentir esos príncipes y qué rumbo tomarían sus vidas.\r\n\r\nEn el caso de Harry, esta es, por fin, esa historia.\r\n\r\nCon su franqueza directa y sin concesiones, SPARE: En la sombra es una publicación que marcará un hito. Está llena de lucidez, revelaciones, introspección y sabiduría sobre el eterno poder del amor, sabiduría adquirida a un alto coste.','1675524316638_img_.jpg',4,1),(12,'Una Vida Contigo: Pequeños actos, grandes recompensas',10.99,'Este libro esta basado en mi experiencia personal como padre de familia y los cambios que trajo a mi vida ser padre, a medida del crecimiento de mi hija pude generar una serie de cambios que me permitieron tener una gran relación de padre a hija, obteniendo como bases de nuestra relación el amor, la confianza, el respeto y muchas otras cosas positivas que nos permitieron como padre e hija poder tener una relación sana.','1675524516318_img_.jpg',4,2),(13,'Trenza del mar Esmeralda',60.00,'En su isla natal sobre un océano verde esmeralda, la única vida que Trenza conoce es sencilla, marcada por el placer de coleccionar las tazas que traen los marineros de tierras lejanas y escuchar las historias que le cuenta su amigo Charlie. Pero cuando el padre de Charlie se lo lleva en barco para buscarle esposa y sucede una catástrofe, Trenza deberá colarse como polizona en un barco y partir en busca de la hechicera que habita en el mortífero mar de Medianoche. Sobre unos océanos de esporas repletos de piratas, ¿podrá Trenza abandonar su tranquila vida y crearse un lugar en un océano donde una sola gota puede significar la muerte instantánea?\r\n\r\n','1677111807998_img_.jpg',1,2),(15,'El Dragon Renacido ',65.00,'Rand, acosado por inquietantes sueños sobre una espada de cristal, decide abandonar a sus compañeros tras un ataque de Engendros de la Sombra y se encamina hacia Tear para descubrir quién es realmente. Mientras tanto, las tres jóvenes aspirantes a Aes Sedai viajan con Mat hacia Tar Valon para ingresar como novicias en la Torre Blanca, donde esperan que las hermanas sanen a Mat de la extraña enfermedad que padece. Poco tiempo después, la Amyrlin les encomienda una peligrosa misión.\r\n\r\n','1678307465156_img_.jpg',1,2);


--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) COLLATE utf8mb3_unicode_ci NOT NULL,
  `last_name` varchar(50) COLLATE utf8mb3_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb3_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb3_unicode_ci NOT NULL,
  `image` varchar(100) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `rol` varchar(100) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` VALUES (1,'Wilmer ','Cordoba','alexandercordoba2003@hotmail.com','$2a$10$s./KXxSv1hN6Sz1xug36FeQme3kogSVC3TaF4ziZx.cWfeD51beYa','wilmer.jpg',"admin");

-- Dump completed on 2023-04-19 16:14:33
