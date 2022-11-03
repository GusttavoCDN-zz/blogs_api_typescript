CREATE TABLE `users`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` INT NOT NULL
);
ALTER TABLE
    `users` ADD PRIMARY KEY `users_id_primary`(`id`);
CREATE TABLE `posts`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `content` TEXT NOT NULL,
    `user_id` INT NOT NULL COMMENT 'ForeignKey to users',
    `published` DATETIME NOT NULL,
    `updated` DATETIME NOT NULL
);
ALTER TABLE
    `posts` ADD PRIMARY KEY `posts_id_primary`(`id`);
CREATE TABLE `categories`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `categories` ADD PRIMARY KEY `categories_id_primary`(`id`);
CREATE TABLE `post_categories`(
    `post_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `category_id` INT NOT NULL
);
ALTER TABLE
    `post_categories` ADD PRIMARY KEY `post_categories_post_id_primary`(`post_id`);
ALTER TABLE
    `post_categories` ADD PRIMARY KEY `post_categories_category_id_primary`(`category_id`);
ALTER TABLE
    `posts` ADD CONSTRAINT `posts_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`);