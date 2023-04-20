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