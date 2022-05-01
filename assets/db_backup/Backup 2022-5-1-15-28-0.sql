/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: asset_details
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `asset_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `asset_type` text,
  `asset_number` text,
  `assign_to` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 21 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: category
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) DEFAULT NULL,
  `desc` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 14 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: emp_details
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `emp_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) DEFAULT NULL,
  `lastName` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `pincode` varchar(100) DEFAULT NULL,
  `mobile` varchar(100) DEFAULT NULL,
  `gender` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 22 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: ticket_details
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `ticket_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_by` varchar(150) DEFAULT NULL,
  `created_for` varchar(150) DEFAULT NULL,
  `category` int DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `created_on` date DEFAULT NULL,
  `assign_to` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 10 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: asset_details
# ------------------------------------------------------------

INSERT INTO
  `asset_details` (`id`, `asset_type`, `asset_number`, `assign_to`)
VALUES
  (2, 'CPU', 'gdtrhtdyh', NULL);
INSERT INTO
  `asset_details` (`id`, `asset_type`, `asset_number`, `assign_to`)
VALUES
  (3, 'CPU', 'reter', NULL);
INSERT INTO
  `asset_details` (`id`, `asset_type`, `asset_number`, `assign_to`)
VALUES
  (4, 'Mouse', 'rfetrdjuyft', NULL);
INSERT INTO
  `asset_details` (`id`, `asset_type`, `asset_number`, `assign_to`)
VALUES
  (6, 'Mouse', 'trut', NULL);
INSERT INTO
  `asset_details` (`id`, `asset_type`, `asset_number`, `assign_to`)
VALUES
  (7, 'Keyboard', 'ferster', NULL);
INSERT INTO
  `asset_details` (`id`, `asset_type`, `asset_number`, `assign_to`)
VALUES
  (10, 'Mouse', 'fdsg', 2);
INSERT INTO
  `asset_details` (`id`, `asset_type`, `asset_number`, `assign_to`)
VALUES
  (11, 'Keyboard', '12356', 8);
INSERT INTO
  `asset_details` (`id`, `asset_type`, `asset_number`, `assign_to`)
VALUES
  (12, 'Mouse', 'trut', 1);
INSERT INTO
  `asset_details` (`id`, `asset_type`, `asset_number`, `assign_to`)
VALUES
  (13, 'CPU', '25533', 2);
INSERT INTO
  `asset_details` (`id`, `asset_type`, `asset_number`, `assign_to`)
VALUES
  (14, 'Mouse', 'trut', 2);
INSERT INTO
  `asset_details` (`id`, `asset_type`, `asset_number`, `assign_to`)
VALUES
  (16, 'Mouse', '123', 2);
INSERT INTO
  `asset_details` (`id`, `asset_type`, `asset_number`, `assign_to`)
VALUES
  (17, 'Mouse', '1234', 2);
INSERT INTO
  `asset_details` (`id`, `asset_type`, `asset_number`, `assign_to`)
VALUES
  (18, 'Laptop', '1234', 18);
INSERT INTO
  `asset_details` (`id`, `asset_type`, `asset_number`, `assign_to`)
VALUES
  (19, 'CPU', '1234', 1);
INSERT INTO
  `asset_details` (`id`, `asset_type`, `asset_number`, `assign_to`)
VALUES
  (20, 'CPU', '987654321', 7);

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: category
# ------------------------------------------------------------

INSERT INTO
  `category` (`id`, `name`, `desc`)
VALUES
  (1, 'HR', 'HR related queries');
INSERT INTO
  `category` (`id`, `name`, `desc`)
VALUES
  (4, 'Payroll', 'Payroll related query');
INSERT INTO
  `category` (`id`, `name`, `desc`)
VALUES
  (5, 'Cafeteria', 'Cafeteria related query');
INSERT INTO
  `category` (`id`, `name`, `desc`)
VALUES
  (7, 'HR', 'HR related query');

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: emp_details
# ------------------------------------------------------------

INSERT INTO
  `emp_details` (
    `id`,
    `firstName`,
    `lastName`,
    `email`,
    `password`,
    `address`,
    `pincode`,
    `mobile`,
    `gender`
  )
VALUES
  (
    1,
    'Aparna',
    'Domb',
    'aparnadomb3933@gmail.com',
    '11551155',
    'A/P-Nimsod Tal-Kadegaon',
    '415304',
    '9511927137',
    'F'
  );
INSERT INTO
  `emp_details` (
    `id`,
    `firstName`,
    `lastName`,
    `email`,
    `password`,
    `address`,
    `pincode`,
    `mobile`,
    `gender`
  )
VALUES
  (
    2,
    'Pranali',
    'Patil',
    'ppatil@gmail.com',
    '12345678',
    'A/P-karad Tal-Karad Dist-Satara',
    '415306',
    '9921573652',
    'F'
  );
INSERT INTO
  `emp_details` (
    `id`,
    `firstName`,
    `lastName`,
    `email`,
    `password`,
    `address`,
    `pincode`,
    `mobile`,
    `gender`
  )
VALUES
  (
    3,
    'Ganesh',
    'Domb',
    'ganeshdomb@gmail.com',
    '9112737951',
    'A/P-Nimsod Tal-Kadegaon',
    '415304',
    '9112737951',
    'M'
  );
INSERT INTO
  `emp_details` (
    `id`,
    `firstName`,
    `lastName`,
    `email`,
    `password`,
    `address`,
    `pincode`,
    `mobile`,
    `gender`
  )
VALUES
  (
    4,
    'Chandrakant',
    'Domb',
    'chandrakantdomb6117@gmail.com',
    '33753375',
    'A/P-Nimsod Tal-Kadegaon',
    '415304',
    '9657093152',
    'M'
  );
INSERT INTO
  `emp_details` (
    `id`,
    `firstName`,
    `lastName`,
    `email`,
    `password`,
    `address`,
    `pincode`,
    `mobile`,
    `gender`
  )
VALUES
  (
    7,
    'Avdut',
    'More',
    'avdut@gmail.com',
    '12345678',
    'A/P-Wangi Tal-Kadegaon Dist-Sangli',
    '415304',
    '7444558662',
    'M'
  );
INSERT INTO
  `emp_details` (
    `id`,
    `firstName`,
    `lastName`,
    `email`,
    `password`,
    `address`,
    `pincode`,
    `mobile`,
    `gender`
  )
VALUES
  (
    8,
    'Shubham',
    'Shinde',
    'shubham@gmail.com',
    '12345678',
    'A/P-Nimsod Tal-Kadegaon Dist-Sangli',
    '415304',
    '9856758006',
    'M'
  );
INSERT INTO
  `emp_details` (
    `id`,
    `firstName`,
    `lastName`,
    `email`,
    `password`,
    `address`,
    `pincode`,
    `mobile`,
    `gender`
  )
VALUES
  (
    9,
    'sonam',
    'Sawant',
    'sonamsawant@gmail.com',
    '12345678',
    'A/P-Kalamvadi Dist-Sangli',
    '415309',
    '8447896521',
    'F'
  );
INSERT INTO
  `emp_details` (
    `id`,
    `firstName`,
    `lastName`,
    `email`,
    `password`,
    `address`,
    `pincode`,
    `mobile`,
    `gender`
  )
VALUES
  (
    10,
    'Teju',
    'Pawar',
    'teju@gmail.com',
    '12345678',
    'A/P-kusrund Tal-Karad Dist-Satara',
    '485671',
    '8412569874',
    'F'
  );
INSERT INTO
  `emp_details` (
    `id`,
    `firstName`,
    `lastName`,
    `email`,
    `password`,
    `address`,
    `pincode`,
    `mobile`,
    `gender`
  )
VALUES
  (
    11,
    'Ananya',
    'Jagdale',
    'ananya@gmail.com',
    '12345678',
    'A/P-Helgaon Tal-Karad Dist-Satara',
    '415304',
    '9561354184',
    'F'
  );
INSERT INTO
  `emp_details` (
    `id`,
    `firstName`,
    `lastName`,
    `email`,
    `password`,
    `address`,
    `pincode`,
    `mobile`,
    `gender`
  )
VALUES
  (
    12,
    'Prachi',
    'Jadhav',
    'prachi@gmail.com',
    '12345678',
    'A/P-karad Tal-Karad Dist-Satara',
    '415306',
    '8308547451',
    'F'
  );
INSERT INTO
  `emp_details` (
    `id`,
    `firstName`,
    `lastName`,
    `email`,
    `password`,
    `address`,
    `pincode`,
    `mobile`,
    `gender`
  )
VALUES
  (
    13,
    'Pranjal',
    'Jadhav',
    'pranjal@gmail.com',
    '12345678',
    'A/P-Nimsod Tal-Kadegaon Dist-Sangli',
    '415306',
    '9874563214',
    'F'
  );
INSERT INTO
  `emp_details` (
    `id`,
    `firstName`,
    `lastName`,
    `email`,
    `password`,
    `address`,
    `pincode`,
    `mobile`,
    `gender`
  )
VALUES
  (
    14,
    'Anvi',
    'Jadhav',
    'anvi@gmail.com',
    '12345678',
    'A/p-Shalgaon Tal-Kadegaon Dist-Sangli',
    '415301',
    '9322785412',
    'F'
  );
INSERT INTO
  `emp_details` (
    `id`,
    `firstName`,
    `lastName`,
    `email`,
    `password`,
    `address`,
    `pincode`,
    `mobile`,
    `gender`
  )
VALUES
  (
    15,
    'Ganesh',
    'Mulik',
    'ganesh@gmail.com',
    '12345678',
    'ganesh@gmail.com',
    '415305',
    '8668386405',
    'M'
  );
INSERT INTO
  `emp_details` (
    `id`,
    `firstName`,
    `lastName`,
    `email`,
    `password`,
    `address`,
    `pincode`,
    `mobile`,
    `gender`
  )
VALUES
  (
    16,
    'Jay',
    'Gharge',
    'jay@gmail.com',
    '12345678',
    'A/P-chinchni Tal-Kadegaon Dist-Sangli',
    '415306',
    '987654321',
    'M'
  );
INSERT INTO
  `emp_details` (
    `id`,
    `firstName`,
    `lastName`,
    `email`,
    `password`,
    `address`,
    `pincode`,
    `mobile`,
    `gender`
  )
VALUES
  (
    17,
    'Yash',
    'Bhosale',
    'yash@gmail.com',
    '12345678',
    'yash@gmail.com',
    '485632',
    '9875632415',
    'M'
  );
INSERT INTO
  `emp_details` (
    `id`,
    `firstName`,
    `lastName`,
    `email`,
    `password`,
    `address`,
    `pincode`,
    `mobile`,
    `gender`
  )
VALUES
  (
    18,
    'shivani',
    'kadam',
    'shivanikadam@gmail.com',
    '12345678',
    'A/P-Tadsar Tal-Kadegaon Dist-Satara',
    '415304',
    '748569321',
    'F'
  );
INSERT INTO
  `emp_details` (
    `id`,
    `firstName`,
    `lastName`,
    `email`,
    `password`,
    `address`,
    `pincode`,
    `mobile`,
    `gender`
  )
VALUES
  (
    19,
    'Pradnesh',
    'Mokale',
    'pradnesh@gmail.com',
    '12345678',
    'A/P-Kadegaon Tal-Kadegaon Dist-Sangli',
    '415301',
    '9856321422',
    'M'
  );
INSERT INTO
  `emp_details` (
    `id`,
    `firstName`,
    `lastName`,
    `email`,
    `password`,
    `address`,
    `pincode`,
    `mobile`,
    `gender`
  )
VALUES
  (
    20,
    'admin',
    'admin',
    'admin@gmail.com',
    '12345678',
    'A/P-Nimsod Tal-Kadegaon',
    '415304',
    '8796541233',
    'O'
  );
INSERT INTO
  `emp_details` (
    `id`,
    `firstName`,
    `lastName`,
    `email`,
    `password`,
    `address`,
    `pincode`,
    `mobile`,
    `gender`
  )
VALUES
  (
    21,
    'Pratik',
    'Pisal',
    'pratik@gmail.com',
    '12345678',
    'A/P-Chorade Tal-khatav Dist-Satara',
    '415385',
    '8956741235',
    'F'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: ticket_details
# ------------------------------------------------------------

INSERT INTO
  `ticket_details` (
    `id`,
    `created_by`,
    `created_for`,
    `category`,
    `description`,
    `created_on`,
    `assign_to`
  )
VALUES
  (
    1,
    NULL,
    NULL,
    1,
    'HR related query',
    '2022-03-17',
    NULL
  );
INSERT INTO
  `ticket_details` (
    `id`,
    `created_by`,
    `created_for`,
    `category`,
    `description`,
    `created_on`,
    `assign_to`
  )
VALUES
  (2, '2', '1', 2, 'HR related query', '2022-03-17', NULL);
INSERT INTO
  `ticket_details` (
    `id`,
    `created_by`,
    `created_for`,
    `category`,
    `description`,
    `created_on`,
    `assign_to`
  )
VALUES
  (
    4,
    '14',
    '3',
    6,
    'management related query',
    '2022-03-17',
    2
  );
INSERT INTO
  `ticket_details` (
    `id`,
    `created_by`,
    `created_for`,
    `category`,
    `description`,
    `created_on`,
    `assign_to`
  )
VALUES
  (
    5,
    '15',
    '8',
    4,
    'payroll related query',
    '2022-03-17',
    NULL
  );
INSERT INTO
  `ticket_details` (
    `id`,
    `created_by`,
    `created_for`,
    `category`,
    `description`,
    `created_on`,
    `assign_to`
  )
VALUES
  (
    6,
    '19',
    '16',
    5,
    'Cafeteria related query',
    '2022-03-17',
    NULL
  );
INSERT INTO
  `ticket_details` (
    `id`,
    `created_by`,
    `created_for`,
    `category`,
    `description`,
    `created_on`,
    `assign_to`
  )
VALUES
  (
    7,
    '21',
    '2',
    6,
    'management related query',
    '2022-03-23',
    NULL
  );
INSERT INTO
  `ticket_details` (
    `id`,
    `created_by`,
    `created_for`,
    `category`,
    `description`,
    `created_on`,
    `assign_to`
  )
VALUES
  (
    8,
    '14',
    '1',
    1,
    'HR related query',
    '2022-03-23',
    NULL
  );
INSERT INTO
  `ticket_details` (
    `id`,
    `created_by`,
    `created_for`,
    `category`,
    `description`,
    `created_on`,
    `assign_to`
  )
VALUES
  (9, '1', '3', 6, 'fdsgf', '2022-03-31', NULL);

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
