const TabSlide = ({ heading, items }) => {
  return (
    <div style={{
      textAlign: 'left',
      background: '#E3E1DB',
      margin: 5,
      padding: '10px 20px 20px 10px',
      borderRadius: 5,
      boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
    }}>
      <h2 style={{ fontSize: 16 }}>{heading}</h2>
      {items.map(item => (<div>{item}</div>))}
    </div>
  );
};

const SummaryTabView = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '60vh',
      flexWrap: 'wrap',
      overflow: 'scroll',
    }}>
      <TabSlide heading='Patient Info' items={['Kylo Ren', '29 yo Male', 'English', '1234 Death Star Rd', 'Hanna City, Planet Chandrila', '678-999-8212']} />
      <TabSlide heading='Problem List' items={['Spinal Injury', 'Mobility lost in hand']} />
      <TabSlide heading='Allergies' items={['Latex']} />
      <TabSlide heading='Medications' items={['Cetrizine 10mg']} />
      <TabSlide heading='Insurance' items={['Galaxy\'s Edge HMO', 'Member ID:', 'Group ID:', 'Rx BIN:']} />
      <TabSlide heading='Religion' items={['The Dark Side']} />
      <TabSlide heading='Healthcare Power of Attorney' items={['George Lucas', '1234 Death Star Rd', 'Hanna City, Planet Chandrila', '773-202-5862']} />
      <TabSlide heading='Next of Kin' items={['George Lucas', '1234 Death Star Rd', 'Hanna City, Planet Chandrila', '773-202-5862']} />
    </div>
  );
};

export default SummaryTabView;
