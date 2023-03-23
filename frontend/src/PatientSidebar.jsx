import { Sidebar } from './styles';

const PatientSidebar = ({ image, name }) => {
  return <Sidebar>
    <div>
      <img src={image} style={{
        width: 150,
        height: 150,
        borderRadius: 300,
        objectFit: 'cover',
      }}/>
      <p>{name}</p>
     </div>
  </Sidebar>;
};

export default PatientSidebar;
