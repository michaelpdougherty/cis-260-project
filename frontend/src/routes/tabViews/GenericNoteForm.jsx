import { Formik, Form, Field } from 'formik';
import { NoteFormLabel as Label, SelectFieldDiv, InputBlue, NoteHeader, NoteFieldDiv } from '../../styles';

const GenericNoteForm = ({ handleSubmit, initialValues, noteSchema }) => {
  const getCurrentField = ({ type, name, options, ...otherProps }) => {
    switch (type) {
      case 'textarea':
        return <Field as='textarea' id={name} name={name} rows={3} style={{ width: '100%', marginTop: 5 }} {...otherProps} />;
      case 'select':
        return (
          <SelectFieldDiv>
            <Field as='select' id={name} name={name}>
              {Object.entries(options).map(([optionKey, optionValue]) => <option key={optionKey} value={optionKey}>{optionValue}</option>)}
            </Field>
          </SelectFieldDiv>
        );
      default:
        return <Field style={{
          width: '50%',
        }} type={type ?? 'text'} id={name} name={name} {...otherProps} />;
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} enableReinitialize>
      {({ isSubmitting }) => (
        <Form>
          {noteSchema.header && <NoteHeader>{noteSchema.header}</NoteHeader>}
          {noteSchema.fieldSets ? noteSchema.fieldSets.map(fieldSet => (
            <fieldset style={{ padding: 2 }} key={fieldSet.legend}>
              <legend>{fieldSet.legend}</legend>
              {fieldSet.fields.map(field => (
                <NoteFieldDiv key={field.name} direction={field.type === 'textarea' ? 'column' : 'row'}>
                  { field.header && <Label htmlFor={field.name}>{field.header}:</Label> }
                  {getCurrentField(field)}
                </NoteFieldDiv>
              ))}
            </fieldset>
          )) : noteSchema.fields.map(field => (
              <NoteFieldDiv key={field.name} direction={field.type === 'textarea' ? 'column' : 'row'}>
                { field.header && <Label htmlFor={field.name}>{field.header}:</Label> }
                {getCurrentField(field)}
              </NoteFieldDiv>
          ))}
          <InputBlue style={{ marginTop: 5 }} type="submit" disabled={isSubmitting} value="Save as draft"/>
        </Form>
      )}
    </Formik>
  );
};
export default GenericNoteForm;