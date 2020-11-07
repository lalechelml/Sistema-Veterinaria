-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-11-2020 a las 17:56:55
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_veterinaria2020`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `animal`
--

CREATE TABLE `animal` (
  `ani_id` int(11) NOT NULL,
  `pro_id` int(11) NOT NULL,
  `ani_nombre` varchar(40) DEFAULT NULL,
  `ani_especie` varchar(45) DEFAULT NULL,
  `ani_raza` varchar(45) DEFAULT NULL,
  `ani_color` varchar(45) DEFAULT NULL,
  `ani_fecha_nacimiento` date DEFAULT NULL,
  `ani_genero` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `animal`
--

INSERT INTO `animal` (`ani_id`, `pro_id`, `ani_nombre`, `ani_especie`, `ani_raza`, `ani_color`, `ani_fecha_nacimiento`, `ani_genero`) VALUES
(1, 4, 'Firu14000', 'Perro', 'Pinscher', 'Negro', '2020-07-06', 'Macho'),
(2, 1, 'Mia10000', 'Perro', 'Pitbull', 'Negro', '2020-10-23', 'Hembra'),
(3, 2, 'Michi11', 'Gato', 'Bombay', 'Negro', '2020-10-19', 'Macho'),
(4, 4, 'Michi', 'Gato', 'Bombay', 'Negro', '2020-10-19', 'Macho'),
(5, 1, 'Michi', 'Gato', 'Bombay', 'Negro', '2020-10-19', 'Macho'),
(6, 1, 'Michi', 'Gato', 'Bombay', 'Negro', '2020-10-19', 'Macho'),
(15, 1, 'Firu', 'Perro', 'Pitbull', 'Negro', '2020-09-27', 'Macho'),
(16, 1, 'Firu', 'Perro', 'Pitbull', 'Negro', '2020-09-27', 'Macho'),
(18, 1, 'Firu5000', 'Perro', 'Pitbull', 'Negro', '2020-09-27', 'Macho'),
(19, 1, 'Firu', 'Perro', 'Pitbull', 'Negro', '2020-09-27', 'Macho'),
(20, 1, 'Firu', 'Perro', 'Pitbull', 'Negro', '2020-09-27', 'Macho'),
(25, 2, 'Firu', 'Perro', 'Pitbull', 'Negro', '2020-10-06', 'Macho'),
(44, 5, 'Firu11', 'Perro', 'Pinscher', 'Negro', '2020-07-06', 'Macho'),
(45, 9, 'Firu555', 'Perro', 'Pinscher', 'Negro', '2020-11-18', 'Macho'),
(46, 1, 'Mia99', 'Gato', 'NOse', 'Blanco', '2020-11-24', 'Hembra'),
(47, 2, 'Firu22', 'Perro', 'Pinscher', 'Negro', '2018-07-11', 'Hembra');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `atencion_medica`
--

CREATE TABLE `atencion_medica` (
  `ate_id` int(11) NOT NULL,
  `ani_id` int(11) NOT NULL,
  `med_id` int(11) NOT NULL,
  `ser_id` int(11) NOT NULL,
  `ate_fecha_hora` datetime DEFAULT NULL,
  `ate_diagnostico` varchar(400) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `atencion_medica`
--

INSERT INTO `atencion_medica` (`ate_id`, `ani_id`, `med_id`, `ser_id`, `ate_fecha_hora`, `ate_diagnostico`) VALUES
(17, 2, 1, 1, '2020-10-17 02:41:00', 'gaa'),
(18, 3, 1, 2, '2020-10-08 14:36:00', 'se va\' morir we'),
(19, 4, 1, 2, '2020-10-18 01:27:00', 'se va\' morir we'),
(20, 4, 1, 1, '2020-10-12 23:06:00', 'se va\' morir we'),
(21, 3, 1, 2, '2020-11-18 00:59:00', 'se va\' morir we'),
(22, 4, 1, 1, '2020-11-18 00:59:00', 'se va\' morir we'),
(23, 4, 1, 1, '2020-11-19 04:05:00', 'se va\' morir we'),
(24, 6, 1, 2, '2020-11-26 04:17:00', 'se va\' morir we'),
(25, 4, 1, 1, '2020-11-18 04:18:00', 'se va\' morir we'),
(26, 4, 1, 1, '2020-11-18 04:18:00', 'se va\' morir we'),
(27, 5, 1, 2, '2020-11-06 04:20:00', 'se va\' morir we'),
(28, 2, 1, 2, '2020-11-26 04:25:00', 'se va\' morir we'),
(29, 5, 1, 2, '2020-11-19 04:32:00', 'se va\' morir we'),
(30, 6, 1, 1, '2020-11-12 04:35:00', 'se va\' morir we'),
(31, 4, 1, 2, '2020-11-20 11:44:00', 'se va\' morir we'),
(32, 3, 1, 2, '2020-11-19 12:03:00', 'se va\' morir we'),
(33, 1, 1, 1, '2020-11-13 14:35:00', 'se va\' morir we'),
(34, 2, 1, 1, '2020-11-04 17:41:00', 'se va\' morir we'),
(35, 1, 2, 2, '2020-11-18 03:27:00', 'se va\' morir we'),
(36, 1, 4, 2, '2020-11-16 03:30:00', 'se va\' morir we');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria_prod`
--

CREATE TABLE `categoria_prod` (
  `catp_id` int(11) NOT NULL,
  `catp_nombre` varchar(15) DEFAULT NULL,
  `catp_descripcion` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categoria_prod`
--

INSERT INTO `categoria_prod` (`catp_id`, `catp_nombre`, `catp_descripcion`) VALUES
(1, 'Antibióticos', 'Los antibióticos eliminan o interrumpen el crecimiento y la proliferación de diversos microorganismos patógenos. Antibióticos orales, inyectables o tópicos para mascotas y animales de ganadería. Los antibióticos son fármacos de prescripción veterinaria, es necesario de receta para ser expedidos.'),
(2, 'Comida', 'Para comer pe\'');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_atencion`
--

CREATE TABLE `detalle_atencion` (
  `deta_id` int(11) NOT NULL,
  `ate_id` int(11) NOT NULL,
  `enf_id` int(11) NOT NULL,
  `prod_id` int(11) NOT NULL,
  `deta_dosis` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `detalle_atencion`
--

INSERT INTO `detalle_atencion` (`deta_id`, `ate_id`, `enf_id`, `prod_id`, `deta_dosis`) VALUES
(15, 17, 1, 1, '7'),
(16, 17, 2, 2, '7'),
(17, 17, 2, 2, '7'),
(18, 17, 2, 2, '7'),
(19, 17, 2, 5, '7'),
(20, 17, 1, 1, '7'),
(21, 18, 1, 2, '7'),
(22, 18, 2, 2, '7'),
(23, 18, 2, 5, '9'),
(24, 19, 1, 2, '7'),
(25, 19, 2, 4, '7'),
(26, 19, 1, 5, '7'),
(27, 20, 1, 2, '9'),
(28, 20, 2, 4, '9'),
(29, 20, 2, 2, '9'),
(30, 21, 1, 2, '9'),
(31, 21, 2, 5, '99'),
(32, 21, 2, 1, '9'),
(33, 21, 1, 2, '9'),
(34, 22, 1, 1, '9'),
(35, 22, 2, 5, '9'),
(36, 22, 1, 2, '9'),
(37, 22, 2, 1, '88'),
(38, 24, 2, 4, '9'),
(39, 25, 1, 2, '9'),
(40, 26, 1, 2, '9'),
(41, 27, 1, 4, '9'),
(42, 27, 2, 2, '9'),
(43, 28, 2, 5, '9'),
(44, 28, 1, 4, '9'),
(45, 28, 2, 4, '88'),
(46, 29, 1, 2, '9'),
(47, 29, 1, 2, '9'),
(48, 30, 1, 5, '9'),
(49, 30, 2, 1, '9'),
(50, 31, 2, 4, '88'),
(51, 31, 1, 4, '9'),
(52, 32, 1, 1, '9'),
(53, 32, 1, 1, '88'),
(54, 33, 2, 2, '9'),
(55, 33, 2, 2, '88'),
(56, 34, 1, 2, '9'),
(57, 34, 2, 2, '88'),
(58, 35, 2, 2, '88'),
(59, 36, 2, 2, '88'),
(60, 36, 2, 5, '9');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_venta`
--

CREATE TABLE `detalle_venta` (
  `detv_id` int(11) NOT NULL,
  `ate_id` int(11) DEFAULT NULL,
  `ven_id` int(11) NOT NULL,
  `prod_id` int(11) NOT NULL,
  `detv_cantidad` int(11) DEFAULT NULL,
  `detv_precio_venta` decimal(11,2) DEFAULT NULL,
  `detv_descuento` decimal(11,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `detalle_venta`
--

INSERT INTO `detalle_venta` (`detv_id`, `ate_id`, `ven_id`, `prod_id`, `detv_cantidad`, `detv_precio_venta`, `detv_descuento`) VALUES
(1, 18, 4, 2, 9, '3.00', '4.00'),
(2, 17, 5, 2, 9, '50.00', '4.00'),
(3, 18, 5, 2, 88, '550.00', '3.00'),
(4, 18, 5, 2, 9, '50.00', '10.00'),
(5, 17, 6, 2, 9, '5.00', '2.00'),
(6, 19, 7, 2, 9, '40.00', '20.00'),
(7, 17, 8, 2, 20, '55.00', '10.00'),
(8, 19, 8, 4, 9, '30.00', '3.00'),
(9, 19, 8, 4, 9, '50.00', '10.00'),
(10, 19, 8, 2, 50, '30.00', '20.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enfermedades`
--

CREATE TABLE `enfermedades` (
  `enf_id` int(11) NOT NULL,
  `enf_nombre` varchar(45) DEFAULT NULL,
  `enf_descripcion` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `enfermedades`
--

INSERT INTO `enfermedades` (`enf_id`, `enf_nombre`, `enf_descripcion`) VALUES
(1, 'ARTROSIS', 'La inflamación articular suele estar provocada por la artrosis, una enfermedad dolorosa de progresión lenta que va destruyendo el cartílago articular.  Aunque la enfermedad no se puede curar, se puede hacer mucho para reducir el dolor y mejorar la calidad de vida del animal.'),
(2, 'HEPATITIS', 'La hepatitis vírica canina es una enfermedad que afecta únicamente a los perros y no guarda relación alguna con la hepatitis humana. La enfermedad es hoy mucho menos frecuente gracias a la eficacia de las vacunas.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medico`
--

CREATE TABLE `medico` (
  `med_id` int(11) NOT NULL,
  `med_dni` varchar(8) DEFAULT NULL,
  `med_nombre` varchar(45) DEFAULT NULL,
  `med_apellidos` varchar(45) DEFAULT NULL,
  `med_telefono` varchar(9) DEFAULT NULL,
  `med_email` varchar(45) DEFAULT NULL,
  `med_genero` varchar(15) DEFAULT NULL,
  `med_fecha_nacimiento` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `medico`
--

INSERT INTO `medico` (`med_id`, `med_dni`, `med_nombre`, `med_apellidos`, `med_telefono`, `med_email`, `med_genero`, `med_fecha_nacimiento`) VALUES
(1, '32659874', 'Armando', 'Paredes', '985632145', 'paredes.gaa@gmail.com', 'Masculino', '1997-06-10'),
(2, '74129658', 'Zoyla', 'Vaca', '985741632', 'zoyla@gmail.com', 'Masculino', '2020-11-17'),
(3, '78563214', 'Edgar', 'Ganta', '985745632', 'ganta@gmail.com', 'Femenino', '1999-02-16'),
(4, '74586325', 'Omar', 'Garita', '985632132', 'Garita@gmail.com', 'Masculino', '2020-11-23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menu`
--

CREATE TABLE `menu` (
  `men_id` int(11) NOT NULL,
  `men_subid` int(11) DEFAULT NULL,
  `men_nombre` varchar(45) DEFAULT NULL,
  `men_controlador` varchar(45) DEFAULT NULL,
  `men_accion` varchar(20) DEFAULT NULL,
  `men_icono` varchar(30) DEFAULT NULL,
  `men_orden` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mep`
--

CREATE TABLE `mep` (
  `mep_id` int(11) NOT NULL,
  `per_id` int(11) NOT NULL,
  `men_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfil`
--

CREATE TABLE `perfil` (
  `per_id` int(11) NOT NULL,
  `per_nombre` varchar(20) DEFAULT NULL,
  `per_descripcion` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `prod_id` int(11) NOT NULL,
  `catp_id` int(11) NOT NULL,
  `prod_codigo` varchar(8) DEFAULT NULL,
  `prod_nombre` varchar(50) DEFAULT NULL,
  `prod_stock` int(11) DEFAULT NULL,
  `prod_descripcion` varchar(300) DEFAULT NULL,
  `prod_imagen` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`prod_id`, `catp_id`, `prod_codigo`, `prod_nombre`, `prod_stock`, `prod_descripcion`, `prod_imagen`) VALUES
(1, 1, '47586914', 'AGROGENTA® 11', 10000, 'Para el tratamiento de infecciones causadas por microorganismos sensibles a la gentamicina (del aparato genito-urinario, respiratorio, gastrointestinal). Útil además en casos de mastitis, metritis bacteriana, infecciones cutáneas y posoperatorias, septicemias, entre otras.', 'http://localhost:8000/storage/productos/hU3GoZvpFjrCBlGuVRnWFDZBnGOIiDJ5myIb4oNc.jpeg'),
(2, 1, '14258574', 'Whiskas', 100, 'Pa\' comer pe\'', 'http://localhost:8000/storage/productos/MutsJ1qrCwko7xW3s2EwgklRye3fmBvGwMNDX3TF.jpeg'),
(4, 1, '45879658', 'Firu', 10, 'Gaaaaa', 'http://localhost:8000/storage/productos/xxpu8HsdXPuA6KUs1XVMe24GprO2aEgzisBMsYYo.webp'),
(5, 1, '47589632', 'Whikas Grandes', 1000, 'GAAAA', 'http://localhost:8000/storage/productos/3tiBeHGQ25XJwjLZ38qvCC6KFnzoIAaL2VtbV5AJ.jpeg'),
(60, 1, '65489875', 'Whiskas', 52, 'ASDa', 'http://localhost:8000/storage/productos/zNF8hu6IqUCCZWgV07dIjVY3Pyi3IDuyS3EJa1PG.jpeg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `propietario`
--

CREATE TABLE `propietario` (
  `pro_id` int(11) NOT NULL,
  `pro_dni` varchar(8) DEFAULT NULL,
  `pro_nombre` varchar(45) DEFAULT NULL,
  `pro_apellidos` varchar(50) DEFAULT NULL,
  `pro_telefono` varchar(9) DEFAULT NULL,
  `pro_email` varchar(45) DEFAULT NULL,
  `pro_direccion` varchar(45) DEFAULT NULL,
  `pro_ciudad` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `propietario`
--

INSERT INTO `propietario` (`pro_id`, `pro_dni`, `pro_nombre`, `pro_apellidos`, `pro_telefono`, `pro_email`, `pro_direccion`, `pro_ciudad`) VALUES
(1, '71678458', 'Aquiles', 'Bailo', '985752841', 'aquiles@gmail.com', 'Av. Circunvalación', 'Lima'),
(2, '74853256', 'Elsa', 'Paton', '974563214', 'Paton@gmail.com', 'Tamburco', 'Abancay'),
(3, '85692145', 'Elba', 'Lazo', '985741365', 'elba@gmail.com', 'Tamburco', 'Abancay'),
(4, '85471236', 'Alan', 'Brito Delgado', '985471325', 'alan@gmail.com', 'Pueblo Joven', 'Abancay'),
(5, '9854766', 'Joshelin', 'Oscco', '99999', 'ramos.joshelin@hotmail.com', 'Bellavista', 'Abancay'),
(9, '96587412', 'Elvis', 'Cochuelo', '985741632', 'ELvis123@gmail.com', 'Bellavista Baja', 'Abancay');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

CREATE TABLE `servicios` (
  `ser_id` int(11) NOT NULL,
  `ser_nombre` varchar(45) DEFAULT NULL,
  `ser_precio` decimal(11,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`ser_id`, `ser_nombre`, `ser_precio`) VALUES
(1, 'Vacuna de la rabia', '50.00'),
(2, 'Estudio coprológico', '66.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `usu_id` int(11) NOT NULL,
  `per_id` int(11) DEFAULT NULL,
  `usu_dni` varchar(8) DEFAULT NULL,
  `usu_email` varchar(30) DEFAULT NULL,
  `usu_contrasenia` varchar(1000) DEFAULT NULL,
  `usu_nombres` varchar(20) DEFAULT NULL,
  `usu_apellidos` varchar(30) DEFAULT NULL,
  `usu_celular` varchar(9) DEFAULT NULL,
  `usu_estado` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`usu_id`, `per_id`, `usu_dni`, `usu_email`, `usu_contrasenia`, `usu_nombres`, `usu_apellidos`, `usu_celular`, `usu_estado`) VALUES
(2, NULL, '7412632', 'pizzaro@gmail,com', 'pedro123', 'Pedro', 'Pizarro', '984456741', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta`
--

CREATE TABLE `venta` (
  `ven_id` int(11) NOT NULL,
  `usu_id` int(11) NOT NULL,
  `pro_id` int(11) NOT NULL,
  `ven_numero_comprobante` varchar(8) DEFAULT NULL,
  `ven_tipo_comprobante` varchar(20) DEFAULT NULL,
  `ven_fecha_hora` datetime DEFAULT NULL,
  `ven_impuesto` decimal(11,2) DEFAULT NULL,
  `ven_total_venta` decimal(11,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `venta`
--

INSERT INTO `venta` (`ven_id`, `usu_id`, `pro_id`, `ven_numero_comprobante`, `ven_tipo_comprobante`, `ven_fecha_hora`, `ven_impuesto`, `ven_total_venta`) VALUES
(1, 2, 1, '00000001', 'Boleta', '2020-11-03 13:31:06', '2.00', '40.00'),
(2, 2, 2, '00000002', 'Boleta', '2020-11-17 14:05:00', '4.00', '10.00'),
(3, 2, 1, '00000003', 'Boleta', '2020-11-13 14:12:00', '44.00', '3.00'),
(4, 2, 1, '00000004', 'Factura', '2020-11-18 14:17:00', '3.00', '3.00'),
(5, 2, 1, '00000005', 'Boleta', '2020-11-03 14:32:00', '55.00', '650.00'),
(6, 2, 2, '00000006', 'Boleta', '2020-11-13 16:23:00', NULL, '5.00'),
(7, 2, 1, '00000007', 'Boleta', '2020-11-04 17:38:00', '440.00', '40.00'),
(8, 2, 2, '00000008', 'Boleta', '2020-11-12 21:46:00', '2.00', '2914.04');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `animal`
--
ALTER TABLE `animal`
  ADD PRIMARY KEY (`ani_id`),
  ADD KEY `fk_animal_propietario1_idx` (`pro_id`);

--
-- Indices de la tabla `atencion_medica`
--
ALTER TABLE `atencion_medica`
  ADD PRIMARY KEY (`ate_id`),
  ADD KEY `fk_atencion_medica_animal1_idx` (`ani_id`),
  ADD KEY `fk_atencion_medica_medico1_idx` (`med_id`),
  ADD KEY `fk_atencion_medica_servicios1_idx` (`ser_id`);

--
-- Indices de la tabla `categoria_prod`
--
ALTER TABLE `categoria_prod`
  ADD PRIMARY KEY (`catp_id`);

--
-- Indices de la tabla `detalle_atencion`
--
ALTER TABLE `detalle_atencion`
  ADD PRIMARY KEY (`deta_id`),
  ADD KEY `fk_detalle_atencion_enfermedades1_idx` (`enf_id`),
  ADD KEY `fk_detalle_atencion_atencion_medica1_idx` (`ate_id`),
  ADD KEY `fk_detalle_atencion_producto1_idx` (`prod_id`);

--
-- Indices de la tabla `detalle_venta`
--
ALTER TABLE `detalle_venta`
  ADD PRIMARY KEY (`detv_id`),
  ADD KEY `fk_venta_has_producto_producto1_idx` (`prod_id`),
  ADD KEY `fk_venta_has_producto_venta1_idx` (`ven_id`),
  ADD KEY `fk_detalle_venta_atencion_medica1_idx` (`ate_id`);

--
-- Indices de la tabla `enfermedades`
--
ALTER TABLE `enfermedades`
  ADD PRIMARY KEY (`enf_id`);

--
-- Indices de la tabla `medico`
--
ALTER TABLE `medico`
  ADD PRIMARY KEY (`med_id`);

--
-- Indices de la tabla `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`men_id`),
  ADD KEY `fk_menu_menu1_idx` (`men_subid`);

--
-- Indices de la tabla `mep`
--
ALTER TABLE `mep`
  ADD PRIMARY KEY (`mep_id`,`per_id`,`men_id`),
  ADD KEY `fk_perfil_has_menu_menu1_idx` (`men_id`),
  ADD KEY `fk_perfil_has_menu_perfil1_idx` (`per_id`);

--
-- Indices de la tabla `perfil`
--
ALTER TABLE `perfil`
  ADD PRIMARY KEY (`per_id`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`prod_id`),
  ADD KEY `fk_producto_categoria_prod1_idx` (`catp_id`);

--
-- Indices de la tabla `propietario`
--
ALTER TABLE `propietario`
  ADD PRIMARY KEY (`pro_id`);

--
-- Indices de la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD PRIMARY KEY (`ser_id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usu_id`),
  ADD KEY `fk_usuario_perfil_idx` (`per_id`);

--
-- Indices de la tabla `venta`
--
ALTER TABLE `venta`
  ADD PRIMARY KEY (`ven_id`),
  ADD KEY `fk_venta_usuario1_idx` (`usu_id`),
  ADD KEY `fk_venta_propietario1_idx` (`pro_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `animal`
--
ALTER TABLE `animal`
  MODIFY `ani_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT de la tabla `atencion_medica`
--
ALTER TABLE `atencion_medica`
  MODIFY `ate_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `categoria_prod`
--
ALTER TABLE `categoria_prod`
  MODIFY `catp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `detalle_atencion`
--
ALTER TABLE `detalle_atencion`
  MODIFY `deta_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT de la tabla `detalle_venta`
--
ALTER TABLE `detalle_venta`
  MODIFY `detv_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `enfermedades`
--
ALTER TABLE `enfermedades`
  MODIFY `enf_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `medico`
--
ALTER TABLE `medico`
  MODIFY `med_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `menu`
--
ALTER TABLE `menu`
  MODIFY `men_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mep`
--
ALTER TABLE `mep`
  MODIFY `mep_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `perfil`
--
ALTER TABLE `perfil`
  MODIFY `per_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `prod_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT de la tabla `propietario`
--
ALTER TABLE `propietario`
  MODIFY `pro_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `servicios`
--
ALTER TABLE `servicios`
  MODIFY `ser_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `usu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `venta`
--
ALTER TABLE `venta`
  MODIFY `ven_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `animal`
--
ALTER TABLE `animal`
  ADD CONSTRAINT `fk_animal_propietario1` FOREIGN KEY (`pro_id`) REFERENCES `propietario` (`pro_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `atencion_medica`
--
ALTER TABLE `atencion_medica`
  ADD CONSTRAINT `fk_atencion_medica_animal1` FOREIGN KEY (`ani_id`) REFERENCES `animal` (`ani_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_atencion_medica_medico1` FOREIGN KEY (`med_id`) REFERENCES `medico` (`med_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_atencion_medica_servicios1` FOREIGN KEY (`ser_id`) REFERENCES `servicios` (`ser_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `detalle_atencion`
--
ALTER TABLE `detalle_atencion`
  ADD CONSTRAINT `fk_detalle_atencion_atencion_medica1` FOREIGN KEY (`ate_id`) REFERENCES `atencion_medica` (`ate_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_detalle_atencion_enfermedades1` FOREIGN KEY (`enf_id`) REFERENCES `enfermedades` (`enf_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_detalle_atencion_producto1` FOREIGN KEY (`prod_id`) REFERENCES `producto` (`prod_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `detalle_venta`
--
ALTER TABLE `detalle_venta`
  ADD CONSTRAINT `fk_detalle_venta_atencion_medica1` FOREIGN KEY (`ate_id`) REFERENCES `atencion_medica` (`ate_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_venta_has_producto_producto1` FOREIGN KEY (`prod_id`) REFERENCES `producto` (`prod_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_venta_has_producto_venta1` FOREIGN KEY (`ven_id`) REFERENCES `venta` (`ven_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `menu`
--
ALTER TABLE `menu`
  ADD CONSTRAINT `fk_menu_menu1` FOREIGN KEY (`men_subid`) REFERENCES `menu` (`men_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `mep`
--
ALTER TABLE `mep`
  ADD CONSTRAINT `fk_perfil_has_menu_menu1` FOREIGN KEY (`men_id`) REFERENCES `menu` (`men_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_perfil_has_menu_perfil1` FOREIGN KEY (`per_id`) REFERENCES `perfil` (`per_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `fk_producto_categoria_prod1` FOREIGN KEY (`catp_id`) REFERENCES `categoria_prod` (`catp_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `fk_usuario_perfil` FOREIGN KEY (`per_id`) REFERENCES `perfil` (`per_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `venta`
--
ALTER TABLE `venta`
  ADD CONSTRAINT `fk_venta_propietario1` FOREIGN KEY (`pro_id`) REFERENCES `propietario` (`pro_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_venta_usuario1` FOREIGN KEY (`usu_id`) REFERENCES `usuario` (`usu_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
