import styles from './FormControls.module.css';

export const ElemFormControl = ({input, meta, ...props}) => {
   const hasError = meta.touched && meta.error;
   return (
      <>
         { props.types === 'textarea' && <textarea {...input} {...props} className={ styles.formControl + ' ' + (hasError ? styles.error : '') + ' ' + styles.new_message_area } /> }
         { props.types === 'input' && <input {...input} {...props} className={ styles.formControl + ' ' + (hasError ? styles.error : '') + ' ' + styles.field } /> }
         { props.types === 'inputPassword' && <input {...input} {...props} type="password" className={ styles.formControl + ' ' + (hasError ? styles.error : '') + ' ' + styles.field } /> }
         { hasError && <span>{ meta.error }</span> }
      </>
   )
}