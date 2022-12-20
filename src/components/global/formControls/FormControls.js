import styles from './FormControls.module.css';

export  const Textarea = ({input, meta, ...props}) => {
   const hasError = meta.touched && meta.error;
   return (
      <>
         <textarea {...input} {...props} className={ styles.formControl + ' ' + (hasError ? styles.error : '') + ' ' + styles.new_message_area } />
         { hasError && <span>{ meta.error }</span> }
      </>
   )
}

export  const Input = ({input, meta, ...props}) => {
   const hasError = meta.touched && meta.error;
   return (
      <>
         <input {...input} {...props} className={ styles.formControl + ' ' + (hasError ? styles.error : '') + ' ' + styles.field } />
         { hasError && <span>{ meta.error }</span> }
      </>
   )
}