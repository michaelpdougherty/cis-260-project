import { getUser } from "../../util";

export const dailyNoteSchema = {
  header: 'Daily Note: Occupational Therapy',
  fieldSets: [
    {
      legend: 'Occupational Therapy',
      fields: [
        {
          header: 'Date',
          name: 'date',
          disabled: true,
          value: new Date().toLocaleString(),
        },
        {
          header: 'Author',
          name: 'author',
          disabled: true,
          value: getUser().username,
        },
        {
          name: 'summary',
          header: 'Summary',
          type: 'textarea',
        },
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
          name: 'pain-level',
          header: 'Pain Level',
          type: 'select',
          options: {
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            10: 10,
          }
        },
        {
          name: 'pain-quality',
          header: 'Pain Quality',
          type: 'select',
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

export const initialEvaluationOTSchema = {
  header: 'Initial Evaluation: Occupational Therapy',
  fieldSets: [
    {
      legend: 'Initial Evaluation Occupational Therapy',
      fields: [
        {
          header: 'Date',
          name: 'date',
          disabled: true,
          value: new Date().toLocaleString(),
        },
        {
          header: 'Author',
          name: 'author',
          disabled: true,
          value: getUser().username,
        },
        {
          name: 'summary',
          header: 'Summary',
          type: 'textarea',
        },
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

export const freeTextSchema = {
  fields: [
    {
      header: 'Date',
      name: 'date',
      disabled: true,
      value: new Date().toLocaleString(),
    },
    {
      header: 'Author',
      name: 'author',
      disabled: true,
      value: getUser().username,
    },
    {
      name: 'content',
      type: 'textarea',
      placeholder: 'Free text',
    },
  ],
};