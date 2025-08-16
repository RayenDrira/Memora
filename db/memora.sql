-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 11, 2025 at 02:57 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `memora`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(8, 'Anime'),
(3, 'Geography'),
(1, 'History'),
(9, 'Mathematics'),
(6, 'Movies'),
(7, 'Music'),
(2, 'Science'),
(4, 'Sports'),
(5, 'Video Games');

-- --------------------------------------------------------

--
-- Table structure for table `flashcards`
--

CREATE TABLE `flashcards` (
  `id` int(11) NOT NULL,
  `set_id` int(11) NOT NULL,
  `question` varchar(255) NOT NULL,
  `answer` varchar(255) NOT NULL,
  `hint` varchar(100) NOT NULL,
  `option_1` varchar(255) NOT NULL,
  `option_2` varchar(255) NOT NULL,
  `option_3` varchar(255) NOT NULL,
  `option_4` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `flashcards`
--

INSERT INTO `flashcards` (`id`, `set_id`, `question`, `answer`, `hint`, `option_1`, `option_2`, `option_3`, `option_4`) VALUES
(1, 1, 'what does \\\'WW1\\\' stand for', 'World War One ', '***** *** ***', 'World War One ', 'World Wide One ', 'Wide War One', 'Wide War One '),
(2, 2, 'question 1', 'answer', 'this is the hint', 'zf', 'wrotn', 'wrong', 'wrong'),
(3, 2, 'questithdt', 'answer 2', 'this is second the hint', 'right', 'wrong', 'wrong', 'wrong'),
(4, 3, 'sfa', 'zad', 'adazd', 'azdz', 'azd', 'qsdqd', 'adazd'),
(5, 4, 'k:nd:,', 'ld', 'mozknmd', 'knd', 'mlzd', 'modknezd', 'kdjlznd'),
(6, 5, 'efrf', 'rf\\\'trgft\\\'g', 'vtyh-yuh', 'tcrvrg', 'tcrgrctgrctg', 'tvgthh(tg', 'vyhvh'),
(7, 6, 'What does WW1 stand for', 'World War One', '***** *** ***', 'World War One', 'Wide War One', 'Wrong', 'Wrong'),
(8, 6, 'When did ww1 start ', '1914', ' after the assassination of Archduke Franz Ferdinand', '1914', '1916', '1918', '1920'),
(9, 7, 'what does ww1 stand for', 'World War One', '**** *** ***', 'World War One', 'wrong', 'wrong', 'wrong'),
(10, 7, 'When did ww1 start', '1914', ' after the assassination of Archduke Franz Ferdinand', '1914', '1912', '1916', '1918');

-- --------------------------------------------------------

--
-- Table structure for table `flashcard_sets`
--

CREATE TABLE `flashcard_sets` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `title` varchar(100) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `flashcard_sets`
--

INSERT INTO `flashcard_sets` (`id`, `user_id`, `category_id`, `title`, `description`) VALUES
(1, 2, 1, 'WW1 chapter 1', 'A brutal global war'),
(2, 2, 1, 'WW1 chapter 2', 'description'),
(3, 2, 1, 'WW1 chapter 3', 'lmkqdsf'),
(4, 2, 1, 'WW1 chapter 4', ':lshdijlae'),
(5, 4, 1, 'WW1 chapter 5', 'A brutal global war'),
(6, 5, 1, 'WW1 chapter 6', 'A brutal global war'),
(7, 5, 1, 'WW1 chapter 7', 'A brutal global war');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `creator` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `firstname`, `lastname`, `creator`) VALUES
(2, 'rayen.drira04@gmail.com', '$2y$10$Su/oSbjHJKo53hb8w2mvQ.Ki8xMqN.vcYBvhQ8AQy1crNrhK4WsDO', 'Rayen', 'Drira', 1),
(3, 'admin@gmail.com', '$2y$10$xEpLWZTAO45TycmAGokpxuIdj4sg0EIMACddWRRBMoYDyoCNU3tdm', 'admin', 'admin', 0),
(4, 'admin1@gmail.com', '$2y$10$YD0ZiWcSpboqmoXjpZTeHuenKdTojn3DiL4Da0Uy2AAmi8J.Hm9JW', 'admin', 'admin', 1),
(5, 'rayen@gmail.com', '$2y$10$DHtseHexB6wsGcPqrExQzeDh8pCNwMYDkhSnKzj8sTt7ZdKkew5/i', 'Rayen', 'Drira', 1),
(6, 'rayen1@gmail.com', '$2y$10$.0YPOhmW21XyM4wYiTb0leR6JWkA/M9XsiaLj3cbyvsi08KHVtJ5K', 'Rayen', 'Drira', 0),
(7, 'rayen2@gmail.com', '$2y$10$BzP3LaQxa0xA.GCcJAuCZ.86r9Co1zf1vw7Tg7ghY9m2UP6gpm9Tu', 'Rayen', 'Drira', 0),
(8, 'rayen3@gmail.com', '$2y$10$TzqlorVPfn2AZ9jmiXWtHuoQfNU7G3eCicNh6kanEUbBZiQYcSty2', 'Rayen', 'Drira', 0),
(9, 'rayen5@gmail.com', '$2y$10$5TDJetgHglXTWOmGlp2IE.xbLh35wFMpDxuk5OUcDZmepk5XQl0Zq', 'Rayen', 'Drira', 0),
(10, 'rayen8@gmail.com', '$2y$10$83f3g.c.9JzhSI9iorS3N.kR2TMteTeKKZvRKduAkNMaXpnCSSSSW', 'Rayen', 'Drira', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `flashcards`
--
ALTER TABLE `flashcards`
  ADD PRIMARY KEY (`id`),
  ADD KEY `set_id` (`set_id`);

--
-- Indexes for table `flashcard_sets`
--
ALTER TABLE `flashcard_sets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `flashcards`
--
ALTER TABLE `flashcards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `flashcard_sets`
--
ALTER TABLE `flashcard_sets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `flashcards`
--
ALTER TABLE `flashcards`
  ADD CONSTRAINT `flashcards_ibfk_1` FOREIGN KEY (`set_id`) REFERENCES `flashcard_sets` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `flashcard_sets`
--
ALTER TABLE `flashcard_sets`
  ADD CONSTRAINT `flashcard_sets_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `flashcard_sets_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
