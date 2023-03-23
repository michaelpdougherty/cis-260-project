import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { setTitle } from '../util';
import { MainPatientContent, PatientContentView, TabContainer, TabBar } from '../styles';

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
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    fetch(`/patient/${id}`)
      .then(res => res.json())
      .then(json => setJsonData(json))
      .finally(() => setIsLoading(false));
  }, [id]);

  // do not render tabs until data is loaded
  if (isLoading) return <FullPageLoadingSpinner/>;

  const tabSchema = [
    {
      title: 'Summary',
      component: <SummaryTabView/>,
    },
    {
      title: 'Vitals',
      component: <VitalsTabView vitals={jsonData.vitals} />,
    },
    {
      title: 'Lab Results',
      component: <LabResultsTabView labs={jsonData.labs} />,
    },
    {
      title: 'Imaging',
      component: <ImagingTabView imaging={{ what: '?' }} />,
    },
    {
      title: 'Orders',
      component: <OrdersTabView orders={jsonData.orders} />,
    },
    {
      title: 'Notes',
      component: <NotesTabView notes={jsonData.notes} />,
    },
  ];

  return (
    <MainPatientContent>
      <PatientSidebar image={jsonData.patient.image} name={jsonData.patient.firstName + ' ' + jsonData.patient.lastName} />
      <PatientContentView>
        <TabContainer>
          <TabBar>
            {tabSchema.map((tab, i) => <button className={currentTab === i ? 'active' : ''} onClick={() => setCurrentTab(i)}>{tab.title}</button>)}
          </TabBar>
          { tabSchema[currentTab].component }
        </TabContainer>
      </PatientContentView>
    </MainPatientContent>
  );
};

export default Patient;