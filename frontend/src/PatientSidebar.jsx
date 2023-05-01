import { Sidebar, PatientImage } from './styles';

const PatientSidebar = ({
  image,
  name,
  dob,
  mrn,
  attendingPhysician,
  height,
  weight,
  bmi,
  allergies
}) => {
  return (
    <Sidebar>
      <div style={{ textAlign: 'left' }}>
        <PatientImage src={image} alt='patient profile' />
        <p><b>Name:</b> {name}</p>
        <p><b>DOB:</b> {dob}</p>
        <p><b>MRN:</b> {mrn}</p>
        <hr/>
        <p><b>Attending Physician:</b> {attendingPhysician}</p>
        <p><b>Height:</b> {Number.parseInt(height/12)}'{Number.parseInt(height % 12)}"</p>
        <p><b>Weight:</b> {weight} lbs.</p>
        <p><b>BMI:</b> {bmi}</p>
        <hr/>
        <p><b>Allergies:</b> {allergies}</p>
      </div>
    </Sidebar>
  );
};

export default PatientSidebar;