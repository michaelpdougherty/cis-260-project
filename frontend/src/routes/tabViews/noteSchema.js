export const dailyNoteSchema = {
  header: 'Daily Note: Occupational Therapy',
  fieldSets: [
    {
      legend: 'Occupational Therapy',
      fields: [
        {
          name: 'precautions-textarea',
          header: 'Precautions (textarea)',
          type: 'textarea',
        },
        {
          name: 'precautions',
          header: 'Precautions',
        },
        {
          name: 'subjective',
          header: 'Subjective',
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
          header: 'Precautions',
          name: 'precautions',
        },
        {
          header: 'Reason for Referral',
          name: 'reasonForReferral',
        },
        {
          header: 'Prior Medical History',
          name: 'priorMedicalHistory',
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
        },
        {
          header: 'Available Social Support',
          name: 'availableSocialSupport',
        },
        {
          header: 'Home Environment',
          name: 'homeEnvironment',
        },
        {
          header: 'Subjective',
          name: 'subjective',
        }
      ]
    }
  ]
};