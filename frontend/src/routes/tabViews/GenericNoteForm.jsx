import { Form, Field } from 'formik';
import { NoteFormLabel as Label, SelectField, ButtonBlue, NoteHeader, NoteFieldDiv } from '../../styles';

const GenericNoteForm = ({ noteSchema, isSubmitting }) => {
  const getCurrentField = ({ type, name, options, ...otherProps }) => {
    switch (type) {
      case 'textarea':
        return <Field as='textarea' id={name} name={name} {...otherProps} rows={3} style={{ width: '100%', marginTop: 10 }} />;
      case 'select':
        return <SelectField as='select' id={name} name={name} {...otherProps}>
          {Object.entries(options).map(([optionKey, optionValue]) => <option key={`${name}.${optionKey}.option`} value={optionValue}>{optionValue}</option>)}
        </SelectField>;
      default:
        return <Field type={type ?? 'text'} id={name} name={name} {...otherProps} />;
    }
  };

  return (
    <Form>
      <NoteHeader>{noteSchema.header}</NoteHeader>
      {noteSchema.fieldSets.map(fieldSet => (
        <fieldset key={`${fieldSet.legend}.fieldset`}>
          <legend>{fieldSet.legend}</legend>
          {fieldSet.fields.map(field => (
            <NoteFieldDiv key={`${fieldSet.legend}.${field.name}.NoteFieldDiv`} direction={field.type === 'textarea' ? 'column' : 'row'}>
              <Label htmlFor={field.name}>{field.header}:</Label>
              {getCurrentField(field)}
            </NoteFieldDiv>
          ))}
        </fieldset>
      ))}
      <ButtonBlue type="submit" disabled={isSubmitting}>
        Submit
      </ButtonBlue>
    </Form>
  );
};
export default GenericNoteForm;