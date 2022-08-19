-- MySQL dump 10.13  Distrib 5.7.18, for Linux (x86_64)
--
-- Host: localhost    Database: laravel-database
-- ------------------------------------------------------
-- Server version	5.7.18-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;



DROP DATABASE IF EXISTS e_books;
CREATE DATABASE e_books;
USE e_books;

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;

CREATE TABLE `product` (
     `id` int unsigned  AUTO_INCREMENT NOT NULL,
    `title` VARCHAR(100) NOT NULL,
    `price` DECIMAL(10,2) unsigned NOT NULL,
    `description` VARCHAR(1000) DEFAULT NULL,
    `image` VARCHAR(100)  DEFAULT NULL,
    `genre_id` int unsigned NOT NULL,
    `category_id` int unsigned NOT NULL,
  PRIMARY KEY(`id`),
  KEY `product_genre_id_foreign` (`genre_id`),
  KEY `product_category_id_foreign` (`category_id`),
  CONSTRAINT `product_genre_id_foreign` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`),
  CONSTRAINT `product_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `genres` (
    `id` int unsigned  AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(20)  NOT NULL,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
    `id` int unsigned  AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(20)  NOT NULL,
     PRIMARY KEY (`id`)
)ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

DROP TABLE IF EXISTS `purchase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchase` (
    `id` int unsigned  AUTO_INCREMENT NOT NULL,
    `active` tinyint(1) NOT NULL DEFAULT '1',
     PRIMARY KEY (`id`)
   
)ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

DROP TABLE IF EXISTS `format`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `format` (
    `id` int unsigned  AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(20)  NOT NULL,
     PRIMARY KEY (`id`)
   
)ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

DROP TABLE IF EXISTS `product_format`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_format` (
     `id` int unsigned  AUTO_INCREMENT NOT NULL,
     `product_id` int unsigned NOT NULL,
     `format_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),   
  KEY `product_format_product_id_foreign` (`product_id`),
  KEY `product_format_format_id_foreign` (`format_id`),
  CONSTRAINT `product_format_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `prduct` (`id`),
  CONSTRAINT `product_format_format_id_foreign` FOREIGN KEY (`format_id`) REFERENCES `format` (`id`)
)ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
    `id` int unsigned  AUTO_INCREMENT NOT NULL,
    `first_name` VARCHAR(50)  NOT NULL,
    `last_name` VARCHAR(50)  NOT NULL,
    `email` VARCHAR(50)  NOT NULL,
    `password` VARCHAR(100)  NOT NULL,
    `image` VARCHAR(100)  DEFAULT NULL,
     PRIMARY KEY (`id`)
   
)ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;