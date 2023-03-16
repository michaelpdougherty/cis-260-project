const TabSlide = ({ heading, items }) => {
	return (
			<div style={{ background: 'gray' }}>
				<h2>{heading}</h2>
				{items.map(item => (<div>{item}</div>))}
			</div>
	);
};

const SummaryTabView = () => {
  const patient = {
	  name: 'Michael',
	  age: '8',
	  gender: 'M',
	  address: '1234 Main St.',
	  phone: '(123) 330-1234',
	  email: 'mlowe@student.ccc.edu',
	  lastVisit: '2020-01-01',
	  nextAppointment: '2022-01-01q',
  };

  return (
    <div>
      <h2>Patient Summary</h2>
  	<TabSlide heading={'Allergies'} items={['Latex']}/>
  	<TabSlide heading={'Medications'} items={['Cetrizine 10mg', 'Aspirin 100mg']}/>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{patient.name}</td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>{patient.age}</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>{patient.gender}</td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>{patient.address}</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>{patient.phone}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{patient.email}</td>
          </tr>
          <tr>
            <td>Last visit:</td>
            <td>{patient.lastVisit}</td>
          </tr>
          <tr>
            <td>Next appointment:</td>
            <td>{patient.nextAppointment}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SummaryTabView;
