-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.10-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table warehouse.cities
CREATE TABLE IF NOT EXISTS `cities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `city` char(20) COLLATE utf8_unicode_ci NOT NULL,
  `state` char(20) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table warehouse.cities: ~0 rows (approximately)

-- Dumping structure for table warehouse.customer
CREATE TABLE IF NOT EXISTS `customer` (
  `cno` int(11) NOT NULL AUTO_INCREMENT,
  `cname` char(50) COLLATE utf8_unicode_ci NOT NULL,
  `addr` char(50) COLLATE utf8_unicode_ci NOT NULL,
  `cu_city` char(20) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`cno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table warehouse.customer: ~0 rows (approximately)

-- Dumping structure for table warehouse.items
CREATE TABLE IF NOT EXISTS `items` (
  `itemno` int(11) NOT NULL AUTO_INCREMENT,
  `ono` int(11) NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `weight` decimal(5,2) NOT NULL,
  `cost` decimal(5,2) NOT NULL,
  PRIMARY KEY (`itemno`),
  KEY `ono` (`ono`),
  CONSTRAINT `ono` FOREIGN KEY (`ono`) REFERENCES `orders` (`ono`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table warehouse.items: ~0 rows (approximately)

-- Dumping structure for table warehouse.orders
CREATE TABLE IF NOT EXISTS `orders` (
  `ono` int(11) NOT NULL AUTO_INCREMENT,
  `cno` int(11) NOT NULL,
  `odate` date NOT NULL,
  `ordered_quantity` int(11) NOT NULL,
  PRIMARY KEY (`ono`),
  KEY `cno` (`cno`),
  CONSTRAINT `cno` FOREIGN KEY (`cno`) REFERENCES `customer` (`cno`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table warehouse.orders: ~0 rows (approximately)

-- Dumping structure for table warehouse.stores
CREATE TABLE IF NOT EXISTS `stores` (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `wid` int(11) NOT NULL,
  `store_name` char(20) COLLATE utf8_unicode_ci NOT NULL,
  `location_city` char(20) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`sid`),
  KEY `wid` (`wid`),
  CONSTRAINT `wid` FOREIGN KEY (`wid`) REFERENCES `warehouses` (`wid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table warehouse.stores: ~0 rows (approximately)

-- Dumping structure for table warehouse.warehouses
CREATE TABLE IF NOT EXISTS `warehouses` (
  `wid` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NOT NULL,
  `wname` int(11) NOT NULL,
  `location` int(11) NOT NULL,
  `extra_context` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`extra_context`)),
  PRIMARY KEY (`wid`),
  KEY `city_id` (`cid`),
  CONSTRAINT `city_id` FOREIGN KEY (`cid`) REFERENCES `cities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table warehouse.warehouses: ~0 rows (approximately)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;