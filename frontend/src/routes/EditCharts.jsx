import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Audio } from 'react-loader-spinner';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactModal from 'react-modal';

import JsonTable from '../JsonTable';
import { setTitle } from '../util';
import { FlexBox, StyledField, Button, AddChartButton } from '../styles';

const PatientForm = () => {
  return (
    <Form>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <StyledField name='ID' placeholder="MR#"/>
        </div>
        <div>
          <StyledField name='FirstName' placeholder="First name"/>
        </div>
        <div>
          <StyledField name='LastName' placeholder="Last name"/>
        </div>
        <div>
          <StyledField name='DOB' placeholder="DOB"/>
        </div>
        <div>
          <StyledField name='description' placeholder="Description"/>
        </div>
      </div>
    </Form>
  );
};

const EditCharts = () => {
  setTitle('Edit Charts');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [jsonData, setJsonData] = useState();
  const [initialValues, setInitialValues] = useState({});

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const showEditModal = data => {
    setInitialValues(data);
    setIsEditModalOpen(true);
  };

  const showAddModal = data => {
    setInitialValues({});
    setIsAddModalOpen(true);
  };

  useEffect(() => {
    fetch("/patients")
      .then(res => res.json())
      .then(json => setJsonData(json))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  });
  return (
    <div>
      <ReactModal isOpen={isAddModalOpen} ariaHideApp={false}>
        <FlexBox style={{ flexDirection: 'column', alignItems: 'center' }}>
          <span>Add Chart</span>
          <Formik initialValues={initialValues}
          onSubmit={values => console.log(values)}>
            <PatientForm />
          </Formik>
          <FlexBox>
            <Button>Save</Button>
            <Button onClick={() => setIsAddModalOpen(false)}>Close</Button>
          </FlexBox>
        </FlexBox>
      </ReactModal>
      <ReactModal isOpen={isEditModalOpen} ariaHideApp={false}>
        <FlexBox style={{ flexDirection: 'column', alignItems: 'center' }}>
          <span>Edit Chart</span>
          <Formik initialValues={initialValues}
          onSubmit={values => console.log(values)}>
            <PatientForm />
          </Formik>
          <FlexBox>
            <Button>Save</Button>
            <Button onClick={() => setIsEditModalOpen(false)}>Close</Button>
          </FlexBox>
        </FlexBox>
      </ReactModal>
      <h2>Edit Charts</h2>
      <JsonTable jsonData={jsonData} isLoading={isLoading} onClick={(data) => showEditModal(data)} />
      <AddChartButton onClick={showAddModal}>Add <FontAwesomeIcon icon={faPlus} /></AddChartButton>
    </div>
  );
};

export default EditCharts;