import { useState } from 'react';
export default function WorkExperienceForm({ workExperience, onSave }) {
  const [formData, setFormData] = useState({});

   const handleSubmit = (e) => {
    e.preventDefault();
    const updatedWorkExperience = [...workExperience, formData];
    onSave(updatedWorkExperience);
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
        name="company"
        placeholder="Company"
        value={formData.company || ''}
        onChange={handleChange}
      />
      <input
        type="text"
        name="position"
        placeholder="Position"
        value={formData.position || ''}
        onChange={handleChange}
      />
      <input
        type="text"
        name="dateFrom"
        placeholder="Start Date"
        value={formData.dateFrom || ''}
        onChange={handleChange}
      />
      <input
        type="text"
        name="dateTo"
        placeholder="End Date"
        value={formData.dateTo || ''}
        onChange={handleChange}
      />
      <input
        type="text"
        name="responsibilities"
        placeholder="Responsibilities"
        value={formData.responsibilities || ''}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
}