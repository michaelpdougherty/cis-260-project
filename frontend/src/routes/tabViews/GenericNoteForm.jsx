import { Form, Field } from 'formik';
import { NoteHeader, NoteFieldDiv } from '../../styles';

const GenericNoteForm = ({ noteSchema, isSubmitting }) => {
  const getCurrentField = ({ type, name, options, ...otherProps }) => {
    switch (type) {
      case 'textarea':
        return <Field as='textarea' id={name} name={name} {...otherProps} />;
      case 'select':
        return <Field as='select' id={name} name={name} {...otherProps}>
          {Object.entries(options).map(([optionKey, optionValue]) => <option key={optionKey} value={optionValue}>{optionValue}</option>)}
        </Field>;
      default:
        return <Field type={type ?? 'text'} id={name} name={name} {...otherProps} />;
    }
  };

  return (
    <Form>
      <NoteHeader>{noteSchema.header}</NoteHeader>
      {noteSchema.fieldSets.map(fieldSet => (
        <fieldset>
          <legend>{fieldSet.legend}</legend>
          {fieldSet.fields.map(field => (
            <NoteFieldDiv direction={field.type === 'textarea' ? 'column' : 'row'}>
              <label htmlFor={field.name}>{field.header}:</label>
              <div>
                {getCurrentField(field)}
              </div>
            </NoteFieldDiv>
          ))}
        </fieldset>
      ))}
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};
export default GenericNoteForm;