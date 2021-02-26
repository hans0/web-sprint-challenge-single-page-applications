import * as yup from 'yup';

const orderFormSchema = yup.object().shape({
  name: yup.string()
    .required('Name required')
    .min(2, 'Name must be at least 2 characters long'),
  size: yup.string()
    .oneOf(['small', 'medium', 'large'], 'Size required'),
  sauce: yup.string()
    .oneOf(['tomato', 'bbq', 'buffalo'], 'Sauce required'),
  cheeseAmount: yup.string()
    .oneOf(['normal', 'light', 'extra'], 'Cheese amount required'),
  specialInstructions: yup.string()
    .min(0, 'This should never show')
})

export default orderFormSchema;