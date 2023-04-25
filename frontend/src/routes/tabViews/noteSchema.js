import { getUserFullName } from "../../util";

const commonFields = {
    date: {
      header: 'Date',
      name: 'date',
      disabled: true,
      value: new Date().toLocaleString(),
    },
    author: {
      header: 'Author',
      name: 'author',
      disabled: true,
      value: getUserFullName(),
    },
    summary: {
      header: 'Summary',
      name: 'summary',
    },
}

const dailyNoteSchema = {
  header: 'Daily Note: Occupational Therapy',
  fieldSets: [
    {
      legend: 'Occupational Therapy',
      fields: [
        ...Object.values(commonFields),
        {
          name: 'precautions',
          header: 'Precautions',
          type: 'textarea',
        },
        {
          name: 'subjective',
          header: 'Subjective',
          type: 'textarea',
        },
        {
          name: 'painLevel',
          header: 'Pain Level',
          type: 'select',
          defaultValue: "1",
          options: {
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
            "5": "5",
            "6": "6",
            "7": "7",
            "8": "8",
            "9": "9",
            "10": "10",
          }
        },
        {
          name: 'painQuality',
          header: 'Pain Quality',
          type: 'select',
          defaultValue: 'dull',
          options: {
            dull: 'dull',
            sharp: 'sharp',
            aching: 'aching',
            radiating: 'radiating',
            burning: 'burning',
            cramping: 'cramping',
            shooting: 'shooting',
            stabbing: 'stabbing',
            throbbing: 'throbbing',
          }
        },
      ]
    },
    {
      legend: 'Vitals',
      fields: [
        {
          header: 'Blood Pressure',
          name: 'bloodPressure',
          type: 'number',
        },
        {
          header: 'Heart Rate',
          name: 'heartRate',
          type: 'number',
        },
        {
          header: 'SpO2',
          name: 'spO2',
          pattern: '\\d{1,3}%',
        }
      ]
    }
  ]
};

const initialEvaluationOTSchema = {
  header: 'Initial Evaluation: Occupational Therapy',
  fieldSets: [
    {
      legend: 'Initial Evaluation Occupational Therapy',
      fields: [
        ...Object.values(commonFields),
        {
          header: 'Precautions',
          name: 'precautions',
          type: 'textarea',
        },
        {
          header: 'Reason for Referral',
          name: 'reasonForReferral',
          type: 'textarea',
        },
        {
          header: 'Prior Medical History',
          name: 'priorMedicalHistory',
          type: 'textarea',
        },
      ]
    },
    {
      legend: 'PLOF',
      fields: [
        {
          header: 'Equipment used PTA',
          name: 'equipmentUsedPTA',
          type: 'select',
          defaultValue: 'rollator',
          options: {
            includingCommode: 'Including Commode',
            grabBars: 'Grab Bars',
            tubTransferBench: 'Tub Transfer Bench',
            showerChair: 'Shower Chair',
            showerStools: 'Shower Stool',
            reacher: 'Reacher',
            sockAid: 'Sock Aid',
            rollingWater: 'Rolling Water',
            rollator: 'Rollator',
            sc: 'SC',
            lbqc: 'LBQC',
            nbqc: 'NBQC',
            hemiWalker: 'Hemi Walker',
            liftEquipment: 'Lift Equipment',
            other: 'Other',
          }
        },
        {
          header: 'Lives with',
          name: 'livesWith',
          type: 'textarea',
        },
        {
          header: 'Available Social Support',
          name: 'availableSocialSupport',
          type: 'textarea',
        },
        {
          header: 'Home Environment',
          name: 'homeEnvironment',
          type: 'textarea',
        },
        {
          header: 'Subjective',
          name: 'subjective',
          type: 'textarea',
        }
      ]
    }
  ]
};

const freeTextSchema = {
  fields: [
    ...Object.values(commonFields),
    {
      name: 'content',
      type: 'textarea',
      placeholder: 'Free text',
    },
  ],
};

const getInitialValueForField = field => {
  if (field.name === 'date') {
    return new Date().toLocaleString(); // commonFields
  }
  if (field.name === 'author') {
    return getUserFullName(); // commonFields
  }
  if (field.defaultValue) {
    return field.defaultValue;
  }
  return '';
}

export const getInitialValuesForFormType = formType => {
  const schema = getNoteSchemaForFormType(formType);
  if (!schema) return {};
  const initialValues = {};
  if (schema.fieldSets) {
    schema.fieldSets.forEach(fieldSet => {
      fieldSet.fields.forEach(field => {
        initialValues[field.name] = getInitialValueForField(field);
      })
    })
  } else {
    schema.fields.forEach(field => {
      initialValues[field.name] = getInitialValueForField(field);
    })
  }
  return initialValues;
};

export const getNoteSchemaForFormType = formType => {
  return {
    dailyNoteOT: dailyNoteSchema,
    initialEvalOT: initialEvaluationOTSchema,
    freeText: freeTextSchema,
  }[formType] ?? null;
};