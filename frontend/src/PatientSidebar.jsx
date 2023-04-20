import { Sidebar, PatientImage } from './styles';

const PatientSidebar = ({ image, name }) => {
  return (
    <Sidebar>
      <div>
        <PatientImage src={image} alt='patient profile' />
        <p>{name}</p>
      </div>
    </Sidebar>
  );
};

export default PatientSidebar;