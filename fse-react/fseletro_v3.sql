-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 05, 2020 at 02:32 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fseletro_v3`
--

-- --------------------------------------------------------

--
-- Table structure for table `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria` int(11) NOT NULL,
  `categoria` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categorias`
--

INSERT INTO `categorias` (`id_categoria`, `categoria`) VALUES
(1, 'Geladeira'),
(2, 'Fogão'),
(3, 'Maquina de Lavar'),
(4, 'Micro-ondas'),
(5, 'Freezer');

-- --------------------------------------------------------

--
-- Table structure for table `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `msg` varchar(300) DEFAULT NULL,
  `dia` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comentarios`
--

INSERT INTO `comentarios` (`id`, `nome`, `msg`, `dia`) VALUES
(1, 'Gustavo', 'Adorei a geladeira,perfeita!', '2020-12-04 10:55:35'),
(2, 'Guilherme', 'Fogão muito funcional, melhor loja.', '2020-12-04 22:26:20'),
(3, 'Maria', 'Freezer poderia gelar mais.. não recomendo.', '2020-12-04 22:26:21'),
(4, 'Laura', 'Entrega rápida.', '2020-12-04 22:26:21');

-- --------------------------------------------------------

--
-- Table structure for table `produtos`
--

CREATE TABLE `produtos` (
  `id_produto` int(5) NOT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  `descricao` varchar(250) NOT NULL,
  `preco` decimal(10,2) NOT NULL,
  `imagem` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `produtos`
--

INSERT INTO `produtos` (`id_produto`, `id_categoria`, `descricao`, `preco`, `imagem`) VALUES
(1, 1, 'Geladeira Brastemp Frost Free Inverse - Prata', '5999.00', './imgs/produtos/Geladeira_Brastemp_Prata.jpeg'),
(2, 1, 'Geladeira Consul Frost Free - Prata', '3999.00', './imgs/produtos/Geladeira_Consul.jpeg'),
(3, 1, 'Geladeira Brastemp Frost Free Inverse - Branca', '4999.00', './imgs/produtos/Geladeira_Brastemp_Branca.jpeg'),
(4, 2, 'Fogão Atlas 4 Bocas Tropical Glass - Branco', '699.00', './imgs/produtos/Fog%C3%A3o_Atlas.jpeg'),
(5, 2, 'Fogão Consul 4 Bocas com Acendimento Automático', '499.00', './imgs/produtos/Fog%C3%A3o_Consul.jpeg'),
(6, 3, 'Máquina de Lavar Brastemp e Lavagem mais rápida', '1499.00', './imgs/produtos/Lava_Roupa_Brastemp.jpeg'),
(7, 3, 'Máquina de Lavar Philco e Enxágue rápido', '1999.00', './imgs/produtos/Lava_Roupa_Philco.jpeg'),
(8, 3, 'Máquina de Lavar 15kg Enxágue Anti-Alérgico', '1999.00', './imgs/produtos/Lavadoura_Brastemp.jpeg'),
(9, 4, 'Micro-ondas Electrolux MEF41 menoe radioativo', '499.00', './imgs/produtos/Micro_ElectroLux.jpeg'),
(10, 4, 'Micro-ondas Consul ainda menos radioativo', '699.00', './imgs/produtos/Micro_Ondas_Consul.jpeg'),
(11, 4, 'Micro-ondas Philco sem radiação 2020', '250.00', './imgs/produtos/Micro_Philco.jpeg'),
(12, 5, 'Freezer Electrolux FE26 Cycle Defrost - 203L', '999.00', './imgs/produtos/Freezer_Electrolux.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `idusuario` int(9) NOT NULL,
  `nome` varchar(99) NOT NULL,
  `email` varchar(199) NOT NULL,
  `nascimento` date NOT NULL,
  `senha` varchar(99) NOT NULL,
  `cep` varchar(99) NOT NULL,
  `cidade` varchar(99) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`idusuario`, `nome`, `email`, `nascimento`, `senha`, `cep`, `cidade`) VALUES
(4, 'Gustavo', 'duartec@gmail.com', '1998-07-01', '1234', '12134134', 'são paulo');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indexes for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id_produto`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idusuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id_produto` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idusuario` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `produtos`
--
ALTER TABLE `produtos`
  ADD CONSTRAINT `produtos_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
