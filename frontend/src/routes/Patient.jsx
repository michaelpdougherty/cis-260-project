import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JsonTable from '../JsonTable';
import { getAgeFromDOB, setTitle } from '../util';
import { MainPatientContent, PatientContentView, TableLabel, TabContainer, TabBar } from '../styles';

import SummaryTabView from './tabViews/SummaryTabView';
import VitalsTabView from './tabViews/VitalsTabView';
import LabResultsTabView from './tabViews/LabResultsTabView';
import OrdersTabView from './tabViews/OrdersTabView';
import ImagingTabView from './tabViews/ImagingTabView';
import NotesTabView from './tabViews/NotesTabView';
import PatientSidebar from '../PatientSidebar';
import FullPageLoadingSpinner from '../FullPageLoadingSpinner';

const Patient = () => {
  setTitle('Patient');
  const { id } = useParams();
  const [jsonData, setJsonData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`/patient/${id}`)
      .then(res => res.json())
      .then(json => setJsonData(json))
      .finally(() => setIsLoading(false));
  }, [id]);

  // handle tabbing
  const [currentTab, setCurrentTab] = useState(0);
  const tabs = [
    <SummaryTabView/>,
    <VitalsTabView/>,
    <LabResultsTabView/>,
    <ImagingTabView/>,
    <OrdersTabView/>,
    <NotesTabView/>,
  ];

  if (isLoading) return <FullPageLoadingSpinner/>;
  return (
    <MainPatientContent>
      <PatientSidebar />
      <PatientContentView>
        <TabContainer>
          <TabBar>
            <p role="button" onClick={() => setCurrentTab(0)}>Summary</p>
            <p role="button" onClick={() => setCurrentTab(1)}>Vitals</p>
            <p role="button" onClick={() => setCurrentTab(2)}>Lab Results</p>
            <p role="button" onClick={() => setCurrentTab(3)}>Imaging</p>
            <p role="button" onClick={() => setCurrentTab(4)}>Orders</p>
            <p role="button" onClick={() => setCurrentTab(5)}>Notes</p>
          </TabBar>
          { tabs[currentTab] }
        </TabContainer>
      </PatientContentView>
      {/*
      <h2>{jsonData.patient.FirstName} {jsonData.patient.LastName}</h2>
      <div>
        <TableLabel>Patient</TableLabel>
        <JsonTable jsonData={[{
          MRN: jsonData.patient.mr_num,
          FULL_NAME: `${jsonData.patient.firstName} ${jsonData.patient.lastName}`,
          DOB: jsonData.patient.dob,
          AGE: `${getAgeFromDOB(jsonData.patient.dob)} years`,
          Location: jsonData.patient.hospital,
        }]} />
      </div>
      <JsonTable title="Alerts" jsonData={[jsonData.alerts]} />
      <JsonTable title="Encounters" jsonData={[jsonData.encounters]} />
      <JsonTable title="Labs" jsonData={[jsonData.labs]} />
      <JsonTable title="Meds" jsonData={[jsonData.meds]} />
      <JsonTable title="Notes" jsonData={[jsonData.notes]} />
      <JsonTable title="Orders" jsonData={[jsonData.orders]} />
      <JsonTable title="Patient All" jsonData={[jsonData.patient]} />
      <JsonTable title="Patient Prevention" jsonData={[jsonData.patientPrevention]} />
      <JsonTable title="Patient Problems" jsonData={[jsonData.patientProblems]} />
      <JsonTable title="Vitals" jsonData={[jsonData.vitals]} />
      */}
    </MainPatientContent>
  );
};

export default Patient;