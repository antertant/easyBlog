/*
 Navicat Premium Data Transfer

 Source Server         : blogdb
 Source Server Type    : MySQL
 Source Server Version : 80027
 Source Host           : localhost:3306
 Source Schema         : blogdb

 Target Server Type    : MySQL
 Target Server Version : 80027
 File Encoding         : 65001

 Date: 14/01/2022 20:37:50
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for blog_post
-- ----------------------------
DROP TABLE IF EXISTS `blog_post`;
CREATE TABLE `blog_post`  (
  `article_id` int(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `article_title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `article_abstract` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `article_content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `article_post_time` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`article_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_post
-- ----------------------------
INSERT INTO `blog_post` VALUES (1, 'Another blog post', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\r\nAenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.\r\nSed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.', '# Another blog post\r\n\r\n#### March 23, 2020 by [Matt](/)\r\n\r\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\r\nAenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.\r\nSed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.\r\n\r\nCurabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis** ornare vel eu leo.\r\nNullam id dolor id nibh ultricies vehicula ut id elit.\r\n\r\nEtiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.\r\nAenean lacinia bibendum nulla sed consectetur.\r\n\r\nVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.\r\nDuis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.\r\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros.', '2022-01-09 00:00:00');
INSERT INTO `blog_post` VALUES (2, 'New feature', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\r\nAenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.\r\nFusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,\r\nut fermentum massa justo sit amet risus.', '# New feature\r\n\r\n#### March 14, 2020 by [Tom](/)\r\n\r\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\r\nAenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.\r\nFusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,\r\nut fermentum massa justo sit amet risus.\r\n\r\n- Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\r\n- Donec id elit non mi porta gravida at eget metus.\r\n- Nulla vitae elit libero, a pharetra augue.\r\n\r\nEtiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.\r\nAenean lacinia bibendum nulla sed consectetur.\r\n\r\nDonec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.', '2022-01-08 00:00:00');
INSERT INTO `blog_post` VALUES (3, 'Weird post', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\r\nAenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.\r\nFusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,\r\nut fermentum massa justo sit amet risus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\r\nAenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.\r\nFusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,\r\nut fermentum massa justo sit amet risus.\r\n\r\n- Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\r\n- Donec id elit non mi porta gravida at eget metus.\r\n- Nulla vitae elit libero, a pharetra augue.\r\n\r\nEtiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.\r\nAenean lacinia bibendum nulla sed consectetur.\r\n\r\nDonec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.', '2022-01-08 00:00:00');
INSERT INTO `blog_post` VALUES (4, 'Sample blog post', 'This blog post shows a few different types of content that are supported and styled with\r\nMaterial styles. Basic typography, images, and code are all supported.\r\nYou can extend these by modifying `Markdown.js`.', '# Sample blog post\r\n\r\n#### April 1, 2020 by [Olivier](/)\r\n\r\nThis blog post shows a few different types of content that are supported and styled with\r\nMaterial styles. Basic typography, images, and code are all supported.\r\nYou can extend these by modifying `Markdown.js`.\r\n\r\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\r\nAenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.\r\nSed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.\r\n\r\nCurabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis** ornare vel eu leo.\r\nNullam id dolor id nibh ultricies vehicula ut id elit.\r\n\r\nEtiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.\r\nAenean lacinia bibendum nulla sed consectetur.\r\n\r\n## Heading\r\n\r\nVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.\r\nDuis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.\r\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros.\r\n\r\n### Sub-heading\r\n\r\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\r\n\r\n### Sub-heading\r\n\r\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\r\nAenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.\r\nFusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo\r\nsit amet risus.\r\n\r\n- Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\r\n- Donec id elit non mi porta gravida at eget metus.\r\n- Nulla vitae elit libero, a pharetra augue.\r\n\r\nDonec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.\r\n\r\n1.  Vestibulum id ligula porta felis euismod semper.\r\n2.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\r\n3.  Maecenas sed diam eget risus varius blandit sit amet non magna.\r\n\r\nCras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.', '2022-01-09 00:00:00');

-- ----------------------------
-- Table structure for project_info
-- ----------------------------
DROP TABLE IF EXISTS `project_info`;
CREATE TABLE `project_info`  (
  `project_id` int(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `project_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `project_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `project_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `post_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `git_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`project_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of project_info
-- ----------------------------
INSERT INTO `project_info` VALUES (1, 'Divergence Meter', NULL, 'Maecenas eget nisl quis sapien euismod convallis nec sed diam. Curabitur vitae \r\n        vulputate quam, eget molestie dolor. Phasellus iaculis nunc id ex interdum, in \r\n        blandit ante tempor. Aenean lobortis eros id magna convallis posuere. Curabitur \r\n        at sagittis nisi. Vivamus id pellentesque lectus. Aliquam erat volutpat. Curabitur \r\n        eros justo, tristique ac leo eu, ullamcorper tempus risus. Integer varius ex risus, \r\n        id sodales lacus efficitur quis.', NULL, NULL);
INSERT INTO `project_info` VALUES (2, 'Pixel Clock', NULL, 'Maecenas eget nisl quis sapien euismod convallis nec sed diam. Curabitur vitae \r\n        vulputate quam, eget molestie dolor. Phasellus iaculis nunc id ex interdum, in \r\n        blandit ante tempor. Aenean lobortis eros id magna convallis posuere. Curabitur \r\n        at sagittis nisi. Vivamus id pellentesque lectus. Aliquam erat volutpat. Curabitur \r\n        eros justo, tristique ac leo eu, ullamcorper tempus risus. Integer varius ex risus, \r\n        id sodales lacus efficitur quis.', NULL, 'https://github.com/antertant/PIXCLOCK-ASM-DOS');
INSERT INTO `project_info` VALUES (3, 'Full-text Search Engine', NULL, 'Maecenas eget nisl quis sapien euismod convallis nec sed diam. Curabitur vitae \r\n        vulputate quam, eget molestie dolor. Phasellus iaculis nunc id ex interdum, in \r\n        blandit ante tempor. Aenean lobortis eros id magna convallis posuere. Curabitur \r\n        at sagittis nisi. Vivamus id pellentesque lectus. Aliquam erat volutpat. Curabitur \r\n        eros justo, tristique ac leo eu, ullamcorper tempus risus. Integer varius ex risus, \r\n        id sodales lacus efficitur quis.', NULL, 'https://github.com/antertant/LightSearch25');

-- ----------------------------
-- Table structure for tag_info
-- ----------------------------
DROP TABLE IF EXISTS `tag_info`;
CREATE TABLE `tag_info`  (
  `tag_id` int(0) NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `article_id` int(0) UNSIGNED NULL DEFAULT NULL,
  `project_id` int(0) UNSIGNED NULL DEFAULT NULL,
  PRIMARY KEY (`tag_id`) USING BTREE,
  INDEX `article`(`article_id`) USING BTREE,
  INDEX `project`(`project_id`) USING BTREE,
  CONSTRAINT `article` FOREIGN KEY (`article_id`) REFERENCES `blog_post` (`article_id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `project` FOREIGN KEY (`project_id`) REFERENCES `project_info` (`project_id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tag_info
-- ----------------------------
INSERT INTO `tag_info` VALUES (1, 'Electrics', NULL, 1);
INSERT INTO `tag_info` VALUES (2, 'Embedding System', NULL, 1);
INSERT INTO `tag_info` VALUES (3, 'C/C++', NULL, 1);
INSERT INTO `tag_info` VALUES (4, 'Assembly', NULL, 2);
INSERT INTO `tag_info` VALUES (5, 'MS-DOS', NULL, 2);
INSERT INTO `tag_info` VALUES (6, 'Java', NULL, 3);
INSERT INTO `tag_info` VALUES (7, 'Information Retrieval', NULL, 3);

SET FOREIGN_KEY_CHECKS = 1;
