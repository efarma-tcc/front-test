import React from 'react';

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validade(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha o campo!');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validade(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validade: () => validade(value),
    onBlur: () => validade(value),
  };
};

export default useForm;
