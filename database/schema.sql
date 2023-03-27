drop table if exists alerts;
create table alerts (
  `id` int not null auto_increment,
  `mrn` int not null,
  `date_and_time` datetime not null,
  `subject` varchar(50) not null,
  `status` varchar(50) not null,
  `alert_type` varchar(50) not null,
  primary key (`id`)
);

drop table if exists encounters;
create table encounters (
  `id` int not null auto_increment,
  `mrn` int not null,
  `date` datetime not null,
  `location` varchar(100) not null,
  `provider` varchar(50) not null,
  `status` varchar(150) not null,
  `description` varchar(150) not null,
  primary key (`id`)
);

drop table if exists labs;
create table labs (
  `id` int not null auto_increment,
  `mrn` int not null,
  `date` datetime not null,
  `lab_test` varchar(150) not null,
  `value` varchar(150) not null,
  `unit` varchar(150) not null,
  `abnormal_flag` varchar(150) not null,
  `reference_range` varchar(150) not null,
  primary key (`id`)
);

drop table if exists meds;
create table meds (
  `id` int not null auto_increment,
  `mrn` int not null,
  `date` datetime not null,
  `category` varchar(50) not null,
  `drug_description` varchar(150) not null,
  `order_status` varchar(50) not null,
  `frequency` varchar(50) not null,
  primary key (`id`)
);

drop table if exists notes;
create table notes (
  `id` int not null auto_increment,
  `mrn` int,
  `date` datetime,
  `title` varchar(150),
  `author` varchar(150),
  `precautions` varchar(150),
  `subjective` varchar(150),
  `pain_level` varchar(150),
  `pain_quality` varchar(150),
  `blood_pressure` varchar(150),
  `heart_rate` varchar(150),
  `spo2` varchar(150),
  primary key (`id`)
);

drop table if exists orders;
create table orders (
  `id` int not null auto_increment,
  `mrn` int not null,
  `when` datetime not null,
  `category` varchar(150) not null,
  `order_item` varchar(150) not null,
  `frequency` varchar(150) not null,
  `status` varchar(150) not null,
  primary key (`id`)
);

drop table if exists patient_prevention;
create table patient_prevention (
  `id` int not null auto_increment,
  `mrn` int not null,
  `prev_date` datetime not null,
  `prev_subject` varchar(50) not null,
  `prev_status` varchar(50) not null,
  `prev_type` varchar(50) not null,
  primary key (`id`)
);

drop table if exists patient_problems;
create table patient_problems (
  `id` int not null auto_increment,
  `mrn` int not null,
  `date_of_onset` datetime not null,
  `priority` varchar(50) not null,
  `patient_status` varchar(50) not null,
  `description` varchar(150) not null,
  `immediacy` varchar(50) not null,
  `provider` varchar(50) not null,
  primary key (`id`)
);

drop table if exists patients;
create table patients (
  `mrn` int not null auto_increment,
  `firstName` varchar(50) not null,
  `lastName` varchar(50) not null,
  `diagnosis` varchar(50) not null,
  `gender` enum('M', 'F') not null,
  `dob` date not null,
  `language` varchar(50) not null,
  `ethnicity` varchar(50) not null,
  `contact_info` varchar(150) not null,
  `admit_date` datetime not null,
  `provider` varchar(50) not null,
  `hospital` varchar(50) not null,
  `comment` varchar(150) not null,
  `image` varchar(255) not null,
  primary key (`mrn`)
);

drop table if exists vitals;
create table vitals (
  `id` int not null auto_increment,
  `mrn` int not null,
  `date` datetime not null,
  `pulse` int not null,
  `blood_pressure` varchar(10) not null,
  `pulse_ox` int not null,
  `temperature` decimal(3,1),
  primary key (`id`)
);

drop table if exists users;
create table users (
  `username` varchar(255) not null,
  `password` varchar(255),
  `account_type` enum('teacher', 'student', 'admin') not null,
  `first_name` varchar(255),
  `last_name` varchar(255),
  primary key (`username`, `account_type`)
);
