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

insert into users values ('test', 'test', 'admin');
insert into users values ('test', 'test', 'student');
insert into users values ('test', 'test', 'teacher');
