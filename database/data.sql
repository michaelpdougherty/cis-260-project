/* begin mrn / patient-specific info */
set @mrn = 1;
set @provider = 'Sharon Lamar, M.D.';
insert into patients values (
  @mrn,
  'Neveah',
  'Williams',
  '2002-11-06',
  'English',
  'Caucasian',
  'Mother',
  '2023-02-06',
  @provider,
  'Hillside Pediatric Hospital',
  'Needs full assistance'
);
insert into alerts (`mr_num`, `date_and_time`, `subject`, `status`, `alert_type`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever');
insert into encounters (`mr_num`, `date`, `location`, `provider`, `status`, `description`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', @provider, 'whatever', 'whatever');
insert into labs (`mr_num`, `date`, `lab_test`, `value`, `unit`, `abnormal_flag`, `reference_range`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever', 'whatever', 'whatever');
insert into meds (`mr_num`, `date`, `category`, `drug_description`, `order_status`, `frequency`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever', 'whatever');
insert into notes (`mr_num`, `date`, `note_title`, `author`, `location`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever');
insert into orders (`mr_num`, `when`, `category`, `order_item`, `frequency`, `status`) VALUES (@mrn, CURRENT_TIMESTAMP(), 'whatever', 'whatever', 'whatever', 'whatever');
insert into patient_problems (`mr_num`, `date_of_onset`, `priority`, `patient_status`, `description`, `immediacy`, `provider`) values (@mrn, '2023-02-06', 'Acute', 'Active', 'Dehydration: Assess Severity', 'Needs scoring now', @provider);
insert into patient_prevention (`mr_num`, `prev_date`, `prev_subject`, `prev_status`, `prev_type`) values (@mrn, '2023-02-06', 'whatever', 'whatever', 'whatever');
insert into vitals (`mr_num`, `date`, `pulse`, `blood_pressure`, `pulse_ox`, `temperature`) values (@mrn, CURRENT_TIMESTAMP(), 89, 'high', 100, 90.098);
/* end patient-specific info */

insert into users values ('test', 'test', 'admin', 'Michael', 'Dougherty');
insert into users values ('test', 'test', 'student', 'Michael', 'Dougherty');
insert into users values ('test', 'test', 'teacher', 'Michael', 'Dougherty');
