import * as yup from 'yup';

const orderFormSchema = yup.object().shape({
  size: yup.string()
    .oneOf(['small', 'medium', 'large'], 'Size required'),
  sauce: yup.string()
    .oneOf(['tomato', 'bbq', 'buffalo'], 'Sauce required'),
  cheese: yup.string()
    .oneOf(['normal', 'light', 'extra'], 'Cheese amount required')
})

export default orderFormSchema;