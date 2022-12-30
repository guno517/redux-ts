import { useState } from 'react';

interface Props {
  initialValues: string,
  onSubmit(): void,
  validate(): void,
}

const useForm = ({ initialValues, onSubmit, validate }: Props) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setValues({ ...values, [name]: value });
  // };

  // const handleSubmit = async (e) => {
  //   setIsLoading(true);
  //   e.preventDefault();
  //   const newErrors = validate ? validate(values) : {};
  //   if (Object.keys(newErrors).length === 0) {
  //     await onSubmit(values);
  //   }
  //   setErrors(newErrors);
  //   setIsLoading(false);
  // };

  return {
    // values,
    // errors,
    // isLoading,
    // handleChange,
    // handleSubmit,
  };
};

export default useForm;
