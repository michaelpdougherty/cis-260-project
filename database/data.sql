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

insert into orders (`mrn`, `when`, `category`, `order_item`, `frequency`, `status`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever', 'whatever');
insert into patient_problems (`mrn`, `date_of_onset`, `priority`, `patient_status`, `description`, `immediacy`, `provider`) values (@mrn, '2023-02-06', 'Acute', 'Active', 'Dehydration: Assess Severity', 'Needs scoring now', @provider);
insert into patient_prevention (`mrn`, `prev_date`, `prev_subject`, `prev_status`, `prev_type`) values (@mrn, '2023-02-06', 'whatever', 'whatever', 'whatever');
insert into vitals (`mrn`, `date`, `pulse`, `blood_pressure`, `pulse_ox`, `temperature`) values (@mrn, CURRENT_TIMESTAMP(), 89, 'high', 100, 90.098);
*/

set @hand_image_1 = 'https://jooinn.com/images/xray-3.jpg';
set @hand_image_2 = 'https://jooinn.com/images/xray-1.png';
set @neck_image = 'https://www.sciencelearn.org.nz/system/images/images/000/001/098/original/Neck-X-ray20160518-20305-d802q3.jpg?1522298704';
insert into imaging (`mrn`, `image`) VALUES (1, @hand_image_1);
insert into imaging (`mrn`, `image`) VALUES (1, @hand_image_2);
insert into imaging (`mrn`, `image`) VALUES (1, @neck_image);
