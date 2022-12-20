export const requreField = value => {
   if(value) return undefined;
   return 'Field is requred';
}


export const maxLengthCreator = (maxLength) => (value) => {
   if(value && value.length > maxLength) return `Max length ${maxLength} symbols`;
   return undefined;
}