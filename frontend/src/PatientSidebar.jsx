import { Sidebar, PatientImage } from './styles';

const PatientSidebar = ({ image, name, dob }) => {
  return (
    <Sidebar>
      <div>
        <PatientImage src={image} alt='patient profile' />
        <p>Name: {name}</p>
        <p>DOB: {dob}</p>
      </div>
    </Sidebar>
  );
};

export default PatientSidebar;