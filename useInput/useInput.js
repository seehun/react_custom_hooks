const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    let willUpdate = true;
    const value = e.target.value;
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export { useInput };
