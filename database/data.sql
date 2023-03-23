set @hospital = 'Hillside Pediatric Hospital';
set @provider = 'Sharon Lamar, M.D.';

/* Patients */
/* Patient 1 */
set @mrn = 1;
set @st_thomas_aquinas = 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRy0Ttfy1cl94ppINrqqfYKIJ__91hbf8VES3WPuxXSJynpTMJ0zXC7HPAo4vNHe-jA';
set @wilbur_wright = 'https://www.invent.org/sites/default/files/styles/inductee_detail_media/public/inductees/2022-06/Wright%2CW_portrait_edited%20for%20web.jpg?h=fa49f84b&itok=29Jw7s07';
set @annoying_orange = 'https://i.ytimg.com/vi/DD5UKQggXTc/hqdefault.jpg';
insert into patients values (@mrn, 'Annoying', 'Orange', 'Sick', 'M', '2002-11-06', 'English', 'Caucasian', 'Mother', '2023-02-06', @provider, @hospital, 'Needs full assistance', @annoying_orange);
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

/* Patient 2 */
set @mrn = 2;
insert into patients values (@mrn, 'Wilbur', 'Wright', 'Ill', 'M', '2002-11-06', 'English', 'Caucasian', 'Mother', '2023-02-06', @provider, @hospital, 'Needs full assistance', @wilbur_wright);
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

/* Patient 3 */
set @mrn = 3;
insert into patients values (@mrn, 'St. Thomas', 'Aquinas', 'Ill', 'M', '2002-11-06', 'English', 'Caucasian', 'Mother', '2023-02-06', @provider, @hospital, 'Needs full assistance', @st_thomas_aquinas);
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


/* Users */
set @test_username = 'test';
set @test_password = 'test';
set @dev_first_name = 'Michael';
set @dev_last_name = 'Dougherty';
insert into users values (@test_username, @test_password, 'admin', @dev_first_name, @dev_last_name);
insert into users values (@test_username, @test_password, 'student', @dev_first_name, @dev_last_name);
insert into users values (@test_username, @test_password, 'teacher', @dev_first_name, @dev_last_name);
