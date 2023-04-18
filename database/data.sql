/* Users */
set @test_username = 'test';
set @test_password = 'test';
set @dev_first_name = 'Michael';
set @dev_last_name = 'Dougherty';
insert into users values (@test_username, @test_password, 'admin', @dev_first_name, @dev_last_name);
insert into users values (@test_username, @test_password, 'student', @dev_first_name, @dev_last_name);
insert into users values (@test_username, @test_password, 'teacher', @dev_first_name, @dev_last_name);

/* Global Sample Patient Data */
set @diagnosis = 'Diagnosis?';
set @dob = '1950-10-05';
set @language = 'English';
set @ethnicity = 'Caucasian';
set @contact_info = 'Mother';
set @admit_date = '2023-02-05';
set @provider = 'Sharon Lamar, M.D.';
set @hospital = 'Hillside Pediatric Hospital';
set @comments = 'Needs full assistance';
set @male_image = "https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0=";
set @female_image = "https://media.gettyimages.com/id/1212006375/photo/confident-asian-businesswoman-in-office.jpg?s=612x612&w=gi&k=20&c=-S1G8CZR8jhf52tIZqcXWSjt0KZFZ2HgCjpJjnidmv0=";

/* Create patient rows */
insert into patients (`firstName`, `lastName`, `diagnosis`, `gender`, `dob`, `language`, `ethnicity`, `contact_info`, `admit_date`, `provider`, `hospital`, `comment`, `image`) values ('Beatrice', 'Dolton', @diagnosis, 'F', @dob, @language, @ethnicity, @contact_info, @admit_date, @provider, @hospital, @comments, @female_image);
set @beatrice_dolton_mrn = LAST_INSERT_ID();
insert into patients (`firstName`, `lastName`, `diagnosis`, `gender`, `dob`, `language`, `ethnicity`, `contact_info`, `admit_date`, `provider`, `hospital`, `comment`, `image`) values ('Homer', 'Xiang', @diagnosis, 'M', @dob, @language, @ethnicity, @contact_info, @admit_date, @provider, @hospital, @comments, @male_image);
insert into patients (`firstName`, `lastName`, `diagnosis`, `gender`, `dob`, `language`, `ethnicity`, `contact_info`, `admit_date`, `provider`, `hospital`, `comment`, `image`) values ('Meredith', 'Dewietz', @diagnosis, 'F', @dob, @language, @ethnicity, @contact_info, @admit_date, @provider, @hospital, @comments, @female_image);
insert into patients (`firstName`, `lastName`, `diagnosis`, `gender`, `dob`, `language`, `ethnicity`, `contact_info`, `admit_date`, `provider`, `hospital`, `comment`, `image`) values ('Suzanne', 'Rose', @diagnosis, 'F', @dob, @language, @ethnicity, @contact_info, @admit_date, @provider, @hospital, @comments, @female_image);
insert into patients (`firstName`, `lastName`, `diagnosis`, `gender`, `dob`, `language`, `ethnicity`, `contact_info`, `admit_date`, `provider`, `hospital`, `comment`, `image`) values ('William', 'Overath', @diagnosis, 'M', @dob, @language, @ethnicity, @contact_info, @admit_date, @provider, @hospital, @comments, @male_image);

/*
insert into alerts (`mrn`, `date_and_time`, `subject`, `status`, `alert_type`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever');
insert into encounters (`mrn`, `date`, `location`, `provider`, `status`, `description`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', @provider, 'whatever', 'whatever');
insert into labs (`mrn`, `date`, `lab_test`, `value`, `unit`, `abnormal_flag`, `reference_range`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever', 'whatever', 'whatever');
insert into meds (`mrn`, `date`, `category`, `drug_description`, `order_status`, `frequency`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever', 'whatever');

insert into notes (
    `mrn`,
    `date`,
    `title`,
    `author`,
    `precautions`,
    `subjective`,
    `pain_level`,
    `pain_quality`,
    `blood_pressure`,
    `heart_rate`,
    `spo2`
) VALUES (
    @mrn,
    CURRENT_TIMESTAMP(),
    'title',
    'author',
    'precautions',
    'subjective',
    'pain_level',
    'pain_quality',
    'blood_pressure',
    'heart_rate',
    'spo2'
);
insert into orders (`mrn`, `when`, `category`, `order_item`, `frequency`, `status`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever', 'whatever');
insert into patient_problems (`mrn`, `date_of_onset`, `priority`, `patient_status`, `description`, `immediacy`, `provider`) values (@mrn, '2023-02-06', 'Acute', 'Active', 'Dehydration: Assess Severity', 'Needs scoring now', @provider);
insert into patient_prevention (`mrn`, `prev_date`, `prev_subject`, `prev_status`, `prev_type`) values (@mrn, '2023-02-06', 'whatever', 'whatever', 'whatever');
insert into vitals (`mrn`, `date`, `pulse`, `blood_pressure`, `pulse_ox`, `temperature`) values (@mrn, CURRENT_TIMESTAMP(), 89, 'high', 100, 90.098);
set @mrn = LAST_INSERT_ID();

insert into alerts (`mrn`, `date_and_time`, `subject`, `status`, `alert_type`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever');
insert into encounters (`mrn`, `date`, `location`, `provider`, `status`, `description`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', @provider, 'whatever', 'whatever');
insert into labs (`mrn`, `date`, `lab_test`, `value`, `unit`, `abnormal_flag`, `reference_range`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever', 'whatever', 'whatever');
insert into meds (`mrn`, `date`, `category`, `drug_description`, `order_status`, `frequency`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever', 'whatever');

insert into notes (
    `mrn`,
    `date`,
    `title`,
    `author`,
    `precautions`,
    `subjective`,
    `pain_level`,
    `pain_quality`,
    `blood_pressure`,
    `heart_rate`,
    `spo2`
) VALUES (
    @mrn,
    CURRENT_TIMESTAMP(),
    'title',
    'author',
    'precautions',
    'subjective',
    'pain_level',
    'pain_quality',
    'blood_pressure',
    'heart_rate',
    'spo2'
);

insert into orders (`mrn`, `when`, `category`, `order_item`, `frequency`, `status`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever', 'whatever');
insert into patient_problems (`mrn`, `date_of_onset`, `priority`, `patient_status`, `description`, `immediacy`, `provider`) values (@mrn, '2023-02-06', 'Acute', 'Active', 'Dehydration: Assess Severity', 'Needs scoring now', @provider);
insert into patient_prevention (`mrn`, `prev_date`, `prev_subject`, `prev_status`, `prev_type`) values (@mrn, '2023-02-06', 'whatever', 'whatever', 'whatever');
insert into vitals (`mrn`, `date`, `pulse`, `blood_pressure`, `pulse_ox`, `temperature`) values (@mrn, CURRENT_TIMESTAMP(), 89, 'high', 100, 90.098);

set @mrn = 3;
insert into patients values (@mrn, 'St. Thomas', 'Aquinas', 'Holy', 'M', '1225-1-28', 'English', 'Caucasian', 'Mother', '2023-02-06', @provider, @hospital, 'Needs full assistance', @male_image);
insert into alerts (`mrn`, `date_and_time`, `subject`, `status`, `alert_type`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever');
insert into encounters (`mrn`, `date`, `location`, `provider`, `status`, `description`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', @provider, 'whatever', 'whatever');
insert into labs (`mrn`, `date`, `lab_test`, `value`, `unit`, `abnormal_flag`, `reference_range`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever', 'whatever', 'whatever');
insert into meds (`mrn`, `date`, `category`, `drug_description`, `order_status`, `frequency`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever', 'whatever');

insert into notes (
    `mrn`,
    `date`,
    `title`,
    `author`,
    `precautions`,
    `subjective`,
    `pain_level`,
    `pain_quality`,
    `blood_pressure`,
    `heart_rate`,
    `spo2`
) VALUES (
    @mrn,
    CURRENT_TIMESTAMP(),
    'title',
    'author',
    'precautions',
    'subjective',
    'pain_level',
    'pain_quality',
    'blood_pressure',
    'heart_rate',
    'spo2'
);

insert into patient_problems (`mrn`, `date_of_onset`, `priority`, `patient_status`, `description`, `immediacy`, `provider`) values (@mrn, '2023-02-06', 'Acute', 'Active', 'Dehydration: Assess Severity', 'Needs scoring now', @provider);
insert into patient_prevention (`mrn`, `prev_date`, `prev_subject`, `prev_status`, `prev_type`) values (@mrn, '2023-02-06', 'whatever', 'whatever', 'whatever');
*/

/** todo: use a loop to fill dummy data */
set @mrn = 1;
insert into vitals (`mrn`, `date`, `temperature`, `pulse`, `respiratory`, `blood_pressure`, `pulse_oxygen`, `pain`) VALUES
    (@mrn, '2022-12-09 10:23:00', 98.5, 86, 16, '121/64', 0.9, 8),
    (@mrn, '2022-12-11 07:50:00', 99, 82, 18, '126/68', 0.94, 5),
    (@mrn, '2022-12-13 15:21:00', 97.9, 90, 20, '128/70', 0.98, 3),
    (@mrn, '2023-01-06 11:45:00', 99, 87, 25, '139/68', 0.95, 7),
    (@mrn, '2023-01-20 09:30:00', 100.3, 110, 15, '130/85', 0.9, 6),
    (@mrn, '2023-02-18 15:40:00', 97.8, 89, 20, '126/80', 0.97, 5),
    (@mrn, '2023-02-28 13:15:00', 97.5, 88, 17, '120/70', 0.98, 3),
    (@mrn, '2023-03-09 07:00:00', 98, 85, 18, '130/50', 0.99, 0),
    (@mrn, '2023-03-16 11:45:00', 97.5, 87, 21, '140/50', 0.93, 6),
    (@mrn, '2023-03-28 10:00:00', 97.8, 90, 19, '139/70', 0.94, 4),
    (@mrn, '2023-04-05 16:45:00', 98, 89, 18, '128/40', 0.9, 2),
    (@mrn, '2023-04-09 07:55:00', 101, 105, 25, '140/80', 0.92, 8),
    (@mrn, '2023-04-10 08:00:00', 99, 90, 17, '130/68', 0.9, 8);

set @mrn = 2;
insert into vitals (`mrn`, `date`, `temperature`, `pulse`, `respiratory`, `blood_pressure`, `pulse_oxygen`, `pain`) VALUES
    (@mrn, '2022-12-09 10:23:00', 98.5, 86, 16, '121/64', 0.9, 8),
    (@mrn, '2022-12-11 07:50:00', 99, 82, 18, '126/68', 0.94, 5),
    (@mrn, '2022-12-13 15:21:00', 97.9, 90, 20, '128/70', 0.98, 3),
    (@mrn, '2023-01-06 11:45:00', 99, 87, 25, '139/68', 0.95, 7),
    (@mrn, '2023-01-20 09:30:00', 100.3, 110, 15, '130/85', 0.9, 6),
    (@mrn, '2023-02-18 15:40:00', 97.8, 89, 20, '126/80', 0.97, 5),
    (@mrn, '2023-02-28 13:15:00', 97.5, 88, 17, '120/70', 0.98, 3),
    (@mrn, '2023-03-09 07:00:00', 98, 85, 18, '130/50', 0.99, 0),
    (@mrn, '2023-03-16 11:45:00', 97.5, 87, 21, '140/50', 0.93, 6),
    (@mrn, '2023-03-28 10:00:00', 97.8, 90, 19, '139/70', 0.94, 4),
    (@mrn, '2023-04-05 16:45:00', 98, 89, 18, '128/40', 0.9, 2),
    (@mrn, '2023-04-09 07:55:00', 101, 105, 25, '140/80', 0.92, 8),
    (@mrn, '2023-04-10 08:00:00', 99, 90, 17, '130/68', 0.9, 8);

set @mrn = 3;
insert into vitals (`mrn`, `date`, `temperature`, `pulse`, `respiratory`, `blood_pressure`, `pulse_oxygen`, `pain`) VALUES
    (@mrn, '2022-12-09 10:23:00', 98.5, 86, 16, '121/64', 0.9, 8),
    (@mrn, '2022-12-11 07:50:00', 99, 82, 18, '126/68', 0.94, 5),
    (@mrn, '2022-12-13 15:21:00', 97.9, 90, 20, '128/70', 0.98, 3),
    (@mrn, '2023-01-06 11:45:00', 99, 87, 25, '139/68', 0.95, 7),
    (@mrn, '2023-01-20 09:30:00', 100.3, 110, 15, '130/85', 0.9, 6),
    (@mrn, '2023-02-18 15:40:00', 97.8, 89, 20, '126/80', 0.97, 5),
    (@mrn, '2023-02-28 13:15:00', 97.5, 88, 17, '120/70', 0.98, 3),
    (@mrn, '2023-03-09 07:00:00', 98, 85, 18, '130/50', 0.99, 0),
    (@mrn, '2023-03-16 11:45:00', 97.5, 87, 21, '140/50', 0.93, 6),
    (@mrn, '2023-03-28 10:00:00', 97.8, 90, 19, '139/70', 0.94, 4),
    (@mrn, '2023-04-05 16:45:00', 98, 89, 18, '128/40', 0.9, 2),
    (@mrn, '2023-04-09 07:55:00', 101, 105, 25, '140/80', 0.92, 8),
    (@mrn, '2023-04-10 08:00:00', 99, 90, 17, '130/68', 0.9, 8);

set @mrn = 4;
insert into vitals (`mrn`, `date`, `temperature`, `pulse`, `respiratory`, `blood_pressure`, `pulse_oxygen`, `pain`) VALUES
    (@mrn, '2022-12-09 10:23:00', 98.5, 86, 16, '121/64', 0.9, 8),
    (@mrn, '2022-12-11 07:50:00', 99, 82, 18, '126/68', 0.94, 5),
    (@mrn, '2022-12-13 15:21:00', 97.9, 90, 20, '128/70', 0.98, 3),
    (@mrn, '2023-01-06 11:45:00', 99, 87, 25, '139/68', 0.95, 7),
    (@mrn, '2023-01-20 09:30:00', 100.3, 110, 15, '130/85', 0.9, 6),
    (@mrn, '2023-02-18 15:40:00', 97.8, 89, 20, '126/80', 0.97, 5),
    (@mrn, '2023-02-28 13:15:00', 97.5, 88, 17, '120/70', 0.98, 3),
    (@mrn, '2023-03-09 07:00:00', 98, 85, 18, '130/50', 0.99, 0),
    (@mrn, '2023-03-16 11:45:00', 97.5, 87, 21, '140/50', 0.93, 6),
    (@mrn, '2023-03-28 10:00:00', 97.8, 90, 19, '139/70', 0.94, 4),
    (@mrn, '2023-04-05 16:45:00', 98, 89, 18, '128/40', 0.9, 2),
    (@mrn, '2023-04-09 07:55:00', 101, 105, 25, '140/80', 0.92, 8),
    (@mrn, '2023-04-10 08:00:00', 99, 90, 17, '130/68', 0.9, 8);

set @mrn = 5;
insert into vitals (`mrn`, `date`, `temperature`, `pulse`, `respiratory`, `blood_pressure`, `pulse_oxygen`, `pain`) VALUES
    (@mrn, '2022-12-09 10:23:00', 98.5, 86, 16, '121/64', 0.9, 8),
    (@mrn, '2022-12-11 07:50:00', 99, 82, 18, '126/68', 0.94, 5),
    (@mrn, '2022-12-13 15:21:00', 97.9, 90, 20, '128/70', 0.98, 3),
    (@mrn, '2023-01-06 11:45:00', 99, 87, 25, '139/68', 0.95, 7),
    (@mrn, '2023-01-20 09:30:00', 100.3, 110, 15, '130/85', 0.9, 6),
    (@mrn, '2023-02-18 15:40:00', 97.8, 89, 20, '126/80', 0.97, 5),
    (@mrn, '2023-02-28 13:15:00', 97.5, 88, 17, '120/70', 0.98, 3),
    (@mrn, '2023-03-09 07:00:00', 98, 85, 18, '130/50', 0.99, 0),
    (@mrn, '2023-03-16 11:45:00', 97.5, 87, 21, '140/50', 0.93, 6),
    (@mrn, '2023-03-28 10:00:00', 97.8, 90, 19, '139/70', 0.94, 4),
    (@mrn, '2023-04-05 16:45:00', 98, 89, 18, '128/40', 0.9, 2),
    (@mrn, '2023-04-09 07:55:00', 101, 105, 25, '140/80', 0.92, 8),
    (@mrn, '2023-04-10 08:00:00', 99, 90, 17, '130/68', 0.9, 8);