import { Sidebar, PatientImage } from './styles';

const PatientSidebar = ({ image, name, dob, mrn, attendingPhysician }) => {
  return (
    <Sidebar>
      <div>
        <PatientImage src={image} alt='patient profile' />
        <p><b>Name:</b> {name}</p>
        <p><b>DOB:</b> {dob}</p>
        <p><b>MRN:</b> {mrn}</p>
        <p><b>Attending Physician:</b> {attendingPhysician}</p>
      </div>
    </Sidebar>
  );
};

export default PatientSidebar;