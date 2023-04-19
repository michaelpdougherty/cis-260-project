import { Formik, Form, Field } from 'formik';
import { NoteFormLabel as Label, SelectField, ButtonBlue, NoteHeader, NoteFieldDiv } from '../../styles';

const GenericNoteForm = ({ handleSubmit, initialValues, noteSchema, isSubmitting }) => {
  const getCurrentField = ({ type, name, options, ...otherProps }) => {
    switch (type) {
      case 'textarea':
        return <Field as='textarea' id={name} name={name} {...otherProps} rows={3} style={{ width: '100%', marginTop: 5 }} />;
      case 'select':
        return <SelectField as='select' id={name} name={name} {...otherProps}>
          {Object.entries(options).map(([optionKey, optionValue]) => <option key={`${name}.${optionKey}.option`} value={optionValue}>{optionValue}</option>)}
        </SelectField>;
      default:
        return <Field type={type ?? 'text'} id={name} name={name} {...otherProps} />;
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} enableReinitialize>
      {({ isSubmitting }) => (
        <Form>
          {noteSchema.header && <NoteHeader>{noteSchema.header}</NoteHeader>}
          {noteSchema.fieldSets ? noteSchema.fieldSets.map(fieldSet => (
            <fieldset style={{ padding: 2 }} key={`${fieldSet.legend}.fieldset`}>
              <legend>{fieldSet.legend}</legend>
              {fieldSet.fields.map(field => (
                <NoteFieldDiv key={`${fieldSet.legend}.${field.name}.NoteFieldDiv`} direction={field.type === 'textarea' ? 'column' : 'row'}>
                  { field.header && <Label htmlFor={field.name}>{field.header}:</Label> }
                  {getCurrentField(field)}
                </NoteFieldDiv>
              ))}
            </fieldset>
          )) : noteSchema.fields.map(field => (
              <NoteFieldDiv key={`${field.name}.NoteFieldDiv`} direction={field.type === 'textarea' ? 'column' : 'row'}>
                { field.header && <Label htmlFor={field.name}>{field.header}:</Label> }
                {getCurrentField(field)}
              </NoteFieldDiv>
          ))}
          <ButtonBlue style={{ marginTop: 5 }} type="submit" disabled={isSubmitting}>
            Save as draft
          </ButtonBlue>
        </Form>
      )}
    </Formik>
  );
};
export default GenericNoteForm;