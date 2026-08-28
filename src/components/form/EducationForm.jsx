import { useState } from 'react';

export default function EducationForm({ education, onSave }) {
  const [formData, setFormData] = useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEducation = [...education, formData];
    onSave(updatedEducation);
    setFormData({}); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="school"
        placeholder="School"
        value={formData.school || ''}
        onChange={handleChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Degree Title"
        value={formData.title || ''}
        onChange={handleChange}
      />
      <input
        type="text"
        name="dateOfStudy"
        placeholder="Date of Study"
        value={formData.dateOfStudy || ''}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
}