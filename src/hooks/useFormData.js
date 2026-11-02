import { useState } from "react";

export const useFormData = (initialData) => {
  const [formData, setFormData] = useState(initialData ?? {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialData ?? {});
  };

  return { formData, handleChange, resetForm };
};
