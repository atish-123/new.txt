-------------------------Users Table----------------------------

CREATE TABLE `ecommerce`.`users` (
  `userid` INT NOT NULL,
  `username` VARCHAR(200) NULL,
  `password` VARCHAR(100) NOT NULL,
  `contactnumber` VARCHAR(10) NULL,
  `email` VARCHAR(45) NOT NULL,
  `role` VARCHAR(100) NULL,
  PRIMARY KEY (`userid`));
  
  
---------------------------Customers-----------------------------

CREATE TABLE `ecommerce`.`customers` (
  `customerid` INT NOT NULL,
  `firstname` VARCHAR(100) NOT NULL,
  `lastname` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `contact number` VARCHAR(10) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `accountid` INT NOT NULL,
  `userid` INT NOT NULL,
  PRIMARY KEY (`customerid`),
  INDEX `customerusers_idx` (`userid` ASC) VISIBLE,
  INDEX `customeraccounts_idx` (`accountid` ASC) VISIBLE,
  CONSTRAINT `customerusers`
    FOREIGN KEY (`userid`)
    REFERENCES `ecommerce`.`users` (`userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `customeraccounts`
    FOREIGN KEY (`accountid`)
    REFERENCES `ecommerce`.`accounts` (`accountsid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
	
-------------------------------Categories-----------------------

CREATE TABLE `ecommerce`.`categories` (
  `idcategories` INT NOT NULL,
  `title` VARCHAR(55) NOT NULL,
  `pictures` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idcategories`));
  
--------------------------------Shipping--------------------------------------------------

CREATE TABLE `ecommerce`.`shippers` (
  `shipperid` INT NOT NULL,
  `userid` INT NOT NULL,
  `email` VARCHAR(200) NOT NULL,
  `contactnumber` VARCHAR(10) NOT NULL,
  `organization` VARCHAR(50) NULL,
  PRIMARY KEY (`shipperid`),
  INDEX `usershippers_idx` (`userid` ASC) VISIBLE,
  CONSTRAINT `usershippers`
    FOREIGN KEY (`userid`)
    REFERENCES `ecommerce`.`users` (`userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
	
-------------------------------orders----------------------------------

CREATE TABLE `ecommerce`.`orders` (
  `orderid` INT NOT NULL,
  `orderdate DATETIME` VARCHAR(45) NOT NULL,
  `status` VARCHAR(20) NULL,
  `customerid` INT NOT NULL,
  PRIMARY KEY (`orderid`),
  INDEX `ordercustomers_idx` (`customerid` ASC) VISIBLE,
  CONSTRAINT `ordercustomers`
    FOREIGN KEY (`customerid`)
    REFERENCES `ecommerce`.`customers` (`customerid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);