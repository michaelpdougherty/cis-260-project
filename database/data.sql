/* Users */
set @test_username = 'test';
set @test_password = 'test';
set @dev_first_name = 'Michael';
set @dev_last_name = 'Dougherty';
insert into users (`username`, `password`, `account_type`, `first_name`, `last_name`) values (@test_username, @test_password, 'admin', @dev_first_name, @dev_last_name);
insert into users (`username`, `password`, `account_type`, `first_name`, `last_name`) values (@test_username, @test_password, 'student', @dev_first_name, @dev_last_name);
insert into users (`username`, `password`, `account_type`, `first_name`, `last_name`) values (@test_username, @test_password, 'teacher', @dev_first_name, @dev_last_name);

/* Global Sample Patient Data */
set @language = 'English';
set @ethnicity = 'Caucasian';
set @contact_info = 'Mother';
set @admit_date = '2023-02-05';
set @provider = 'Sharon Lamar, M.D.';
set @hospital = 'Hillside Pediatric Hospital';
set @comments = 'Needs full assistance';
set @male_image = "https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0=";
set @male_image_2 = "https://bracketfights.com/images/templates/2019/43805/random-male-celebrities-43805/screen-shot-2022-08-14-at-32648-pmpng.png";
set @female_image = "https://media.gettyimages.com/id/1212006375/photo/confident-asian-businesswoman-in-office.jpg?s=612x612&w=gi&k=20&c=-S1G8CZR8jhf52tIZqcXWSjt0KZFZ2HgCjpJjnidmv0=";
set @female_image_2 = "https://www.unilad.co.uk/wp-content/uploads/2019/06/jeana-1.jpg";
set @female_image_3 = "https://thumbs.dreamstime.com/b/portrait-attractive-young-woman-who-sitting-cafe-urban-lifestyle-random-183947629.jpg";

/* Create patient rows */
insert into patients (`firstName`, `lastName`, `diagnosis`, `gender`, `dob`, `language`, `ethnicity`, `contact_info`, `admit_date`, `provider`, `hospital`, `comment`, `height`, `weight`, `bmi`, `image`) values ('Beatrice', 'Dolton', 'Arthritis', 'F', '1990-01-01', @language, @ethnicity, @contact_info, @admit_date, @provider, @hospital, @comments, 65, 130, 18.2, @female_image);
set @beatrice_dolton_mrn = LAST_INSERT_ID();
insert into patients (`firstName`, `lastName`, `diagnosis`, `gender`, `dob`, `language`, `ethnicity`, `contact_info`, `admit_date`, `provider`, `hospital`, `comment`, `height`, `weight`, `bmi`, `image`) values ('Homer', 'Xiang', "Asperger's Syndrome", 'M', '1967-06-02', @language, @ethnicity, @contact_info, @admit_date, @provider, @hospital, @comments, 65, 130, 40.3, @male_image);
insert into patients (`firstName`, `lastName`, `diagnosis`, `gender`, `dob`, `language`, `ethnicity`, `contact_info`, `admit_date`, `provider`, `hospital`, `comment`, `height`, `weight`, `bmi`, `image`) values ('Meredith', 'Dewietz', 'Carpal Tunnel Syndrome', 'F', '1984-02-21', @language, @ethnicity, @contact_info, @admit_date, @provider, @hospital, @comments, 68, 200, 32.3, @female_image_2);
insert into patients (`firstName`, `lastName`, `diagnosis`, `gender`, `dob`, `language`, `ethnicity`, `contact_info`, `admit_date`, `provider`, `hospital`, `comment`, `height`, `weight`, `bmi`, `image`) values ('Suzanne', 'Rose', 'Anxiety', 'F', '1982-08-20', @language, @ethnicity, @contact_info, @admit_date, @provider, @hospital, @comments, 60, 130, 18.4, @female_image_3);
insert into patients (`firstName`, `lastName`, `diagnosis`, `gender`, `dob`, `language`, `ethnicity`, `contact_info`, `admit_date`, `provider`, `hospital`, `comment`, `height`, `weight`, `bmi`, `image`) values ('William', 'Overath', 'Depression', 'M', '1991-11-01', @language, @ethnicity, @contact_info, @admit_date, @provider, @hospital, @comments, 67, 130, 20.8, @male_image_2);

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

set @hand_image_1 = 'https://jooinn.com/images/xray-3.jpg';
set @hand_image_2 = 'https://jooinn.com/images/xray-1.png';
set @neck_image = 'https://www.sciencelearn.org.nz/system/images/images/000/001/098/original/Neck-X-ray20160518-20305-d802q3.jpg?1522298704';
set @doctor_image_1 = 'https://media.gettyimages.com/id/592647828/photo/surgical-excellence-at-its-best.jpg?s=612x612&w=0&k=20&c=p0wpHB6865Xh8oiiOhf0iEDqCtxe9K1LjNq-3dMGYBc';
set @scan_image_2 = 'https://media.gettyimages.com/id/503663386/photo/patient-lying-inside-a-medical-scanner-in-hospital.jpg?s=612x612&w=0&k=20&c=GOXVtNCG9AmmkdilutdyxbuO_As1J5sieqQVv9jfxkk=';
set @xrays_image = 'https://media.gettyimages.com/id/1364980289/photo/teacher-holding-a-digital-tablet-and-explaining-about-xrays-to-students.jpg?s=612x612&w=0&k=20&c=OaFM9zJFSuguZoq8UQdaaY54vHT9ca-7VKAZ48Kv984=';
set @brain_image_1 = 'https://media.gettyimages.com/id/838723420/photo/doctor-and-patient-using-digital-tablet-in-hospital.jpg?s=612x612&w=0&k=20&c=RbEyd_SEI5yTJ2GtEwt7cqO8s0W2c3UaNZ04nnvR1M0=';
set @lung_image_2 = 'https://media.gettyimages.com/id/1223774237/photo/doctors-looking-at-lungs-x-ray.jpg?s=612x612&w=0&k=20&c=X8yDt3r6yqP4d3cWSXIv7iSL90qzfFIEv_XsPNe4cH8=';
set @mammogram_image = 'https://media.gettyimages.com/id/917730078/photo/unrecognizable-female-gynocologist-looking-at-a-mammogram-at-the-hospital.jpg?s=612x612&w=0&k=20&c=O2fdoAViV0eErgpnx_R0BQ6X9-J8-l2JJ8spiiD03r4=';
set @shoudler_image_1 = 'https://media.istockphoto.com/id/482726023/photo/x-ray-image-of-shoulder.jpg?s=612x612&w=0&k=20&c=WvzwWZPEG2KTMt2SCaVNEiAHFPpzhi97Q2MoHD7Q01A=';
set @verebal_image_2 = 'https://media.istockphoto.com/id/922707152/photo/3d-illustration-of-sacral-and-cervical-painful.jpg?s=612x612&w=0&k=20&c=QIVcdq6SCIZkBZNYaTkBWjWHMeFhHEGeJBXAji2brXs=';
set @pelvis_image = 'https://media.istockphoto.com/id/945204366/photo/x-ray-image-of-human-normal-spine-rips-pelvis-both-hip-joint-and-blank-area-at-right-side.jpg?s=612x612&w=0&k=20&c=hwfv5GXlpF8LN9-IGua--3vFrccWyCDsKgGXaCidSPc=';
set @knee_image_1 = 'https://media.istockphoto.com/id/152964009/photo/collection-of-x-ray-normal-knee.jpg?s=612x612&w=0&k=20&c=gQrndk5oK8RqU7xuTlh0eX2uFSF1TkC5kKcpFVv5t7Y=';
set @dental_image_2 = 'https://media.istockphoto.com/id/171294275/photo/panoramic-dental-x-ray.jpg?s=612x612&w=0&k=20&c=cKxtL1W0L2LKVoZnNfiUj8umm6kQDonINuhn8NdCda4=';
set @foot_image = 'https://media.istockphoto.com/id/510159785/photo/x-ray-normal-foot-lateral.jpg?s=612x612&w=0&k=20&c=DwuTj32_s-FBNGmJ2emif6yTiQ0wT3Ds3vau_xntNpk=';
set @mrn = 1;
insert into imaging (`mrn`, `image`) VALUES (@mrn, @hand_image_1);
insert into imaging (`mrn`, `image`) VALUES (@mrn, @hand_image_2);
insert into imaging (`mrn`, `image`) VALUES (@mrn, @neck_image);
set @mrn = 2;
insert into imaging (`mrn`, `image`) VALUES (@mrn, @doctor_image_1);
insert into imaging (`mrn`, `image`) VALUES (@mrn, @scan_image_2);
insert into imaging (`mrn`, `image`) VALUES (@mrn, @xrays_image);
set @mrn = 3;
insert into imaging (`mrn`, `image`) VALUES (@mrn, @brain_image_1);
insert into imaging (`mrn`, `image`) VALUES (@mrn, @lung_image_2);
insert into imaging (`mrn`, `image`) VALUES (@mrn, @mammogram_image);
set @mrn = 4;
insert into imaging (`mrn`, `image`) VALUES (@mrn, @shoudler_image_1);
insert into imaging (`mrn`, `image`) VALUES (@mrn, @verebal_image_2);
insert into imaging (`mrn`, `image`) VALUES (@mrn, @pelvis_image);
set @mrn = 5;
insert into imaging (`mrn`, `image`) VALUES (@mrn, @knee_image_1);
insert into imaging (`mrn`, `image`) VALUES (@mrn, @dental_image_2);
insert into imaging (`mrn`, `image`) VALUES (@mrn, @foot_image);

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
  
set @mrn = 1;
set @userId = 0; /* this user ID is used for preexistent data not created by the student */
insert into notes (`user_id`, `mrn`, `date`, `summary`, `author`, `signed`) VALUES
(@userId, @mrn, '2022-01-01 13:40:00', 'Patient in critical condition', 'R.N. Lopez', 1),
(@userId, @mrn, '2022-02-15 00:00:00', 'Patient had allergic reaction to medication', 'Dr. Syad', 1),
(@userId, @mrn, '2022-03-10 04:06:00', 'Patient experienced high blood pressure', 'N.P. Toshiba', 1),
(@userId, @mrn, '2023-01-10 06:06:00', 'Patient experienced high glucose', 'M.D. Dell', 0);

insert into orders (`user_id`, `mrn`, `date`, `order`, `reason`) VALUES (@userId, @mrn, '2022-02-02 02:02:02', 'order', 'reason');

insert into labs (`mrn`, `lab_test`, `value`, `abnormal_flag`) VALUES
    (@mrn, 'hemoglobin', 12.02, ''),
    (@mrn, 'hemoglobin', 10, 'Low'),
    (@mrn, 'hemotocrit', 36.9, ''),
    (@mrn, 'hemotocrit', 31.2, 'Low'),
    (@mrn, 'rbc', 4.43, ''),
    (@mrn, 'rbc', 3.78, 'Low');

set @mrn = 2;
insert into labs (`mrn`, `lab_test`, `value`, `abnormal_flag`) VALUES
    (@mrn, 'hemoglobin', 12.02, ''),
    (@mrn, 'hemoglobin', 10, 'Low'),
    (@mrn, 'hemotocrit', 36.9, ''),
    (@mrn, 'hemotocrit', 31.2, 'Low'),
    (@mrn, 'rbc', 4.43, ''),
    (@mrn, 'rbc', 3.78, 'Low');

set @mrn = 3;
insert into labs (`mrn`, `lab_test`, `value`, `abnormal_flag`) VALUES
    (@mrn, 'hemoglobin', 12.02, ''),
    (@mrn, 'hemoglobin', 10, 'Low'),
    (@mrn, 'hemotocrit', 36.9, ''),
    (@mrn, 'hemotocrit', 31.2, 'Low'),
    (@mrn, 'rbc', 4.43, ''),
    (@mrn, 'rbc', 3.78, 'Low');

set @mrn = 4;
insert into labs (`mrn`, `lab_test`, `value`, `abnormal_flag`) VALUES
    (@mrn, 'hemoglobin', 12.02, ''),
    (@mrn, 'hemoglobin', 10, 'Low'),
    (@mrn, 'hemotocrit', 36.9, ''),
    (@mrn, 'hemotocrit', 31.2, 'Low'),
    (@mrn, 'rbc', 4.43, ''),
    (@mrn, 'rbc', 3.78, 'Low');

set @mrn = 5;
insert into labs (`mrn`, `lab_test`, `value`, `abnormal_flag`) VALUES
    (@mrn, 'hemoglobin', 12.02, ''),
    (@mrn, 'hemoglobin', 10, 'Low'),
    (@mrn, 'hemotocrit', 36.9, ''),
    (@mrn, 'hemotocrit', 31.2, 'Low'),
    (@mrn, 'rbc', 4.43, ''),
    (@mrn, 'rbc', 3.78, 'Low');