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

  const { id: mrn } = useParams();

  const [jsonData, setJsonData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState(0);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`/patient/${mrn}`)
      .then(res => res.json())
      .then(json => setJsonData(json))
      .finally(() => setIsLoading(false));
  }, [mrn]);
  
  useEffect(() => {
    if (jsonData?.orders) {
      setOrders(jsonData.orders);
    }
  }, [jsonData])

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
      component: <ImagingTabView imaging={jsonData.imaging} />,
    },
    {
      title: 'Orders',
      component: <OrdersTabView mrn={mrn} initialOrders={jsonData.orders} orders={orders} setOrders={setOrders} />,
    },
    {
      title: 'Notes',
      component: <NotesTabView notes={jsonData.notes} mrn={mrn} />,
    },
  ];

  return (
    <MainPatientContent>
      <PatientSidebar image={jsonData.patient.image} name={jsonData.patient.firstName + ' ' + jsonData.patient.lastName} />
      <PatientContentView>
        <TabContainer>
          <TabBar>
            {tabSchema.map((tab, i) => <button key={tab.title} className={currentTab === i ? 'active' : ''} onClick={() => setCurrentTab(i)}>{tab.title}</button>)}
          </TabBar>
          { tabSchema[currentTab].component }
        </TabContainer>
      </PatientContentView>
    </MainPatientContent>
  );
};

export default Patient;