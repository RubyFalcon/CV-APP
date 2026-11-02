import { useFormData } from '../../hooks/useFormData.js';
import {upsertById} from '../../utils/upsertById.js';
export default function EducationForm({ education, onSave, editingData }) {
  const { formData, handleChange, resetForm } = useFormData(editingData || {});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEducationEntry = { ...formData, id: formData.id || crypto.randomUUID() };
    const updatedEducation = upsertById(education, newEducationEntry);
    onSave(updatedEducation);
    resetForm();
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="school"
        placeholder="School"
        value={formData.school || ""}
        onChange={handleChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Degree Title"
        value={formData.title || ""}
        onChange={handleChange}
      />
      <input
        type="text"
        name="dateOfStudy"
        placeholder="Date of Study"
        value={formData.dateOfStudy || ""}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
}