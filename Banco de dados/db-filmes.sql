-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 31/07/2026 às 22:49
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `db-filmes`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `catalogo`
--

CREATE TABLE `catalogo` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `genero` varchar(100) NOT NULL,
  `tipo` enum('filme','serie') NOT NULL,
  `data_de_lançamento` date DEFAULT NULL,
  `capa` varchar(255) DEFAULT NULL,
  `trailer` varchar(400) NOT NULL,
  `avaliacao` float DEFAULT NULL,
  `sinopse` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `catalogo`
--

INSERT INTO `catalogo` (`id`, `titulo`, `genero`, `tipo`, `data_de_lançamento`, `capa`, `trailer`, `avaliacao`, `sinopse`) VALUES
(14, 'Oppenheimer', 'suspense', 'filme', '2023-07-20', 'https://i0.wp.com/cloud.estacaonerd.com/wp-content/uploads/2022/12/14124955/maxresdefault-27.jpg?fit=1280%2C720&ssl=1', 'https://www.youtube.com/embed/F3OxA9Cz17A?si=BV-ra-S0lBiOgmHr', 9, 'Durante a Segunda Guerra Mundial, o governo dos Estados Unidos reúne uma equipe dos melhores cientis'),
(16, 'Vingadores Ultimato', 'fantasia', 'filme', '2019-04-25', 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/a01393ab-13bb-415b-a830-4188ec50fb31/compose?aspectRatio=1.78&format=webp&width=1200', 'https://www.youtube.com/embed/PgrmbRID0eY?si=6AWefesW8ShmAkqw', 9, 'Após Thanos ter dizimado metade de todas as formas de vida no universo, os heróis sobreviventes prec'),
(17, 'Coringa', 'drama', 'filme', '2019-10-03', 'https://m.media-amazon.com/images/S/pv-target-images/7de9bdaf287c0579ea16a70a62259ef00415feb09d1b59f49436f3b1571d3763.jpg', 'https://www.youtube.com/embed/jfVTJm9NilA?si=4F2PpQoRRC1OrG0V', 10, 'Na década de 1980, Arthur Fleck, um comediante fracassado e marginalizado pela sociedade de Gotham, '),
(18, 'Stranger Things', 'misterio', 'serie', '2016-07-15', 'https://rollingstone.com.br/wp-content/uploads/2025/11/O-comeco-do-fim-de-Stranger-Things-um-dos-maiores-sucessos-da-historia-da-Netflix.jpg', 'https://www.youtube.com/embed/RMmGQNNl164?si=N4WiVfEKZlRQjNFp', 10, 'Na década de 1980, na pacata cidade de Hawkins, o desaparecimento de um garoto revela segredos sobre'),
(19, 'John Wick: De Volta ao Jogo', 'acao', 'filme', '2014-11-27', 'https://cloud.estacaonerd.com/wp-content/uploads/2018/08/14153652/john-wick-tv-series-chapter-3-feature-img-geekexchange-061517.jpg', 'https://www.youtube.com/embed/hPYz9Yz6ekA?si=Icr0jDV31gRXyBpQ', 10, 'Um lendário assassino de aluguel aposentado é forçado a voltar à ativa em busca de vingança contra o'),
(20, 'Breaking Bad', 'policial', 'serie', '2008-01-20', 'https://cloud.estacaonerd.com/wp-content/uploads/2019/05/15093546/breaking-bad-capa.jpg', 'https://www.youtube.com/embed/_-Nv0JOcGxg?si=m89HgXYuoUTX8Qyq', 10, 'Um desacreditado professor de química do ensino médio, ao descobrir um câncer de pulmão inoperável, '),
(21, 'La Casa de Papel', 'policial', 'serie', '2017-05-02', 'https://i.ytimg.com/vi/Oqfh0dKHhT4/maxresdefault.jpg', 'https://www.youtube.com/embed/iS5xXr-GOnM?si=k13bgjUTtG2G_a1S', 8, 'Um mente brilhante conhecida apenas como \"O Professor\" recruta oito criminosos com habilidades espec');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `catalogo`
--
ALTER TABLE `catalogo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `catalogo`
--
ALTER TABLE `catalogo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
