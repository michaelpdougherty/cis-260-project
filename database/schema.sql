drop table if exists alerts;
create table alerts (
  date_and_time datetime not null,
  subject varchar(50) not null,
  status varchar(50) not null,
  alert_type varchar(50) not null,
  id int not null auto_increment,
  mr_num int,
  primary key (id)
);
drop table if exists encounters;
create table encounters (
  date datetime not null,
  location varchar(100) not null,
  provider varchar(50) not null,
  status varchar(150) not null,
  description varchar(150) not null,
  id int not null auto_increment,
  mr_num int,
  primary key (id)
);
drop table if exists labs;
create table labs (
  date datetime not null,
  lab_test varchar(150) not null,
  value varchar(150) not null,
  unit varchar(150) not null,
  abnormal_flag varchar(150) not null,
  reference_range varchar(150) not null,
  id int not null auto_increment,
  mr_num int,
  primary key (id)
);
drop table if exists meds;
create table meds (
  date datetime not null,
  category varchar(50) not null,
  drug_description varchar(150) not null,
  order_status varchar(50) not null,
  frequency varchar(50) not null,
  id int not null auto_increment,
  mr_num int,
  primary key (id)
);
drop table if exists notes;
create table notes (
  date datetime not null,
  note_title varchar(150) not null,
  author varchar(150) not null,
  location varchar(150) not null,
  id int not null auto_increment,
  mr_num int,
  primary key (id)
);
drop table if exists labs;
create table labs (
  date datetime not null,
  lab_test varchar(150) not null,
  value varchar(150) not null,
  unit varchar(150) not null,
  abnormal_flag varchar(150) not null,
  reference_range varchar(150) not null,
  id int not null auto_increment,
  mr_num int,
  primary key (id)
);
drop table if exists orders;
create table orders (
  category varchar(150) not null,
  order_item varchar(150) not null,
  frequency varchar(150) not null,
  status varchar(150) not null,
  whene datetime not null,
  id int not null auto_increment,
  mr_num int,
  primary key (id)
);
drop table if exists patient_header;
create table patient_header (
  dob datetime not null,
  admin_date datetime not null,
  name varchar(50) not null,
  hospital varchar(50) not null,
  comment varchar(150) not null,
  id int not null auto_increment,
  mr_num int,
  primary key (id)
);
drop table if exists patient_info;
create table patient_info (
  name varchar(50) not null,
  contact_info varchar(150) not null,
  patient_info varchar(150) not null,
  patient varchar(50),
  id int not null auto_increment,
  mr_num int,
  primary key (id)
);
drop table if exists patient_prevention;
create table patient_prevention (
  prev_date datetime not null,
  prev_subject varchar(50) not null,
  prev_status varchar(50) not null,
  prev_type varchar(50) not null,
  id int not null auto_increment,
  mr_num int,
  primary key (id)
);
drop table if exists patient_problems;
create table patient_problems (
  date_of_onset datetime not null,
  priority varchar(50) not null,
  patient_status varchar(50) not null,
  description varchar(150) not null,
  immediacy varchar(50) not null,
  provider varchar(50) not null,
  id int not null auto_increment,
  mr_num int,
  primary key (id)
);
drop table if exists patients;
create table patients (
  dob datetime not null,
  lastName varchar(50) not null,
  firstName varchar(50) not null,
  id int not null auto_increment,
  mr_num int,
  primary key (id)
);
drop table if exists vitals;
create table vitals (
  date datetime not null,
  pulse int not null,
  blood_pressure varchar(10) not null,
  pulse_ox int not null,
  temperature decimal(3,1),
  id int not null auto_increment,
  mr_num int,
  primary key (id)
);
drop table if exists users;
create table users (
  username varchar(255) not null,
  password varchar(255),
  account_type enum('teacher', 'student', 'admin') not null,
  primary key (username, account_type)
);
