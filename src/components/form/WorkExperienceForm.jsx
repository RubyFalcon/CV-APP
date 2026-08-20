import { useState } from 'react';
export default function WorkExperienceForm({ workExperience, onSave }) {
  const [formData, setFormData] = useState(workExperience || {});

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
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
        name="startDate"
        placeholder="Start Date"
        value={formData.startDate || ''}
        onChange={handleChange}
      />
      <input
        type="text"
        name="endDate"
        placeholder="End Date"
        value={formData.endDate || ''}
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