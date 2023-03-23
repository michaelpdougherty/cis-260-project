set @hospital = 'Hillside Pediatric Hospital';
set @provider = 'Sharon Lamar, M.D.';

/* Patients */
/* Patient 1 */
set @mrn = 1;
set @st_thomas_aquinas = 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRy0Ttfy1cl94ppINrqqfYKIJ__91hbf8VES3WPuxXSJynpTMJ0zXC7HPAo4vNHe-jA';
insert into patients values (@mrn, 'Neveah', 'Williams', 'Sick', 'M', '2002-11-06', 'English', 'Caucasian', 'Mother', '2023-02-06', @provider, @hospital, 'Needs full assistance', @st_thomas_aquinas);
insert into alerts (`mr_num`, `date_and_time`, `subject`, `status`, `alert_type`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever');
insert into encounters (`mr_num`, `date`, `location`, `provider`, `status`, `description`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', @provider, 'whatever', 'whatever');
insert into labs (`mr_num`, `date`, `lab_test`, `value`, `unit`, `abnormal_flag`, `reference_range`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever', 'whatever', 'whatever');
insert into meds (`mr_num`, `date`, `category`, `drug_description`, `order_status`, `frequency`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever', 'whatever');

insert into notes (
    `mr_num`,
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
insert into orders (`mr_num`, `when`, `category`, `order_item`, `frequency`, `status`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever', 'whatever');
insert into patient_problems (`mr_num`, `date_of_onset`, `priority`, `patient_status`, `description`, `immediacy`, `provider`) values (@mrn, '2023-02-06', 'Acute', 'Active', 'Dehydration: Assess Severity', 'Needs scoring now', @provider);
insert into patient_prevention (`mr_num`, `prev_date`, `prev_subject`, `prev_status`, `prev_type`) values (@mrn, '2023-02-06', 'whatever', 'whatever', 'whatever');
insert into vitals (`mr_num`, `date`, `pulse`, `blood_pressure`, `pulse_ox`, `temperature`) values (@mrn, CURRENT_TIMESTAMP(), 89, 'high', 100, 90.098);

/* Patient 2 */
set @mrn = 2;
insert into patients values (@mrn, 'Wilbur', 'Wright', 'Ill', 'M', '2002-11-06', 'English', 'Caucasian', 'Mother', '2023-02-06', @provider, @hospital, 'Needs full assistance', @st_thomas_aquinas);
insert into alerts (`mr_num`, `date_and_time`, `subject`, `status`, `alert_type`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever');
insert into encounters (`mr_num`, `date`, `location`, `provider`, `status`, `description`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', @provider, 'whatever', 'whatever');
insert into labs (`mr_num`, `date`, `lab_test`, `value`, `unit`, `abnormal_flag`, `reference_range`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever', 'whatever', 'whatever');
insert into meds (`mr_num`, `date`, `category`, `drug_description`, `order_status`, `frequency`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever', 'whatever');

insert into notes (
    `mr_num`,
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

insert into orders (`mr_num`, `when`, `category`, `order_item`, `frequency`, `status`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever', 'whatever');
insert into patient_problems (`mr_num`, `date_of_onset`, `priority`, `patient_status`, `description`, `immediacy`, `provider`) values (@mrn, '2023-02-06', 'Acute', 'Active', 'Dehydration: Assess Severity', 'Needs scoring now', @provider);
insert into patient_prevention (`mr_num`, `prev_date`, `prev_subject`, `prev_status`, `prev_type`) values (@mrn, '2023-02-06', 'whatever', 'whatever', 'whatever');
insert into vitals (`mr_num`, `date`, `pulse`, `blood_pressure`, `pulse_ox`, `temperature`) values (@mrn, CURRENT_TIMESTAMP(), 89, 'high', 100, 90.098);

/* Patient 3 */
set @mrn = 3;
insert into patients values (@mrn, 'St. Thomas', 'Aquinas', 'Ill', 'M', '2002-11-06', 'English', 'Caucasian', 'Mother', '2023-02-06', @provider, @hospital, 'Needs full assistance', @st_thomas_aquinas);
insert into alerts (`mr_num`, `date_and_time`, `subject`, `status`, `alert_type`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever');
insert into encounters (`mr_num`, `date`, `location`, `provider`, `status`, `description`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', @provider, 'whatever', 'whatever');
insert into labs (`mr_num`, `date`, `lab_test`, `value`, `unit`, `abnormal_flag`, `reference_range`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever', 'whatever', 'whatever');
insert into meds (`mr_num`, `date`, `category`, `drug_description`, `order_status`, `frequency`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever', 'whatever');

insert into notes (
    `mr_num`,
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

insert into orders (`mr_num`, `when`, `category`, `order_item`, `frequency`, `status`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever', 'whatever');
insert into patient_problems (`mr_num`, `date_of_onset`, `priority`, `patient_status`, `description`, `immediacy`, `provider`) values (@mrn, '2023-02-06', 'Acute', 'Active', 'Dehydration: Assess Severity', 'Needs scoring now', @provider);
insert into patient_prevention (`mr_num`, `prev_date`, `prev_subject`, `prev_status`, `prev_type`) values (@mrn, '2023-02-06', 'whatever', 'whatever', 'whatever');
insert into vitals (`mr_num`, `date`, `pulse`, `blood_pressure`, `pulse_ox`, `temperature`) values (@mrn, CURRENT_TIMESTAMP(), 89, 'high', 100, 90.098);


/* Users */
set @test_username = 'test';
set @test_password = 'test';
set @dev_first_name = 'Michael';
set @dev_last_name = 'Dougherty';
insert into users values (@test_username, @test_password, 'admin', @dev_first_name, @dev_last_name);
insert into users values (@test_username, @test_password, 'student', @dev_first_name, @dev_last_name);
insert into users values (@test_username, @test_password, 'teacher', @dev_first_name, @dev_last_name);
