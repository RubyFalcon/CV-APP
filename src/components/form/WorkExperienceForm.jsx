import { useFormData } from "../../hooks/useFormData.js";
import { upsertById } from "../../utils/upsertById.js";
export default function WorkExperienceForm({
  workExperience,
  onSave,
  editingData,
}) {
  const { formData, handleChange, resetForm } = useFormData(editingData || {});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorkExperienceEntry = {
      ...formData,
      id: formData.id || crypto.randomUUID(),
    };
    const updatedWorkExperience = upsertById(
      workExperience,
      newWorkExperienceEntry,
    );
    onSave(updatedWorkExperience);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={formData.company || ""}
        onChange={handleChange}
      />
      <input
        type="text"
        name="position"
        placeholder="Position"
        value={formData.position || ""}
        onChange={handleChange}
      />
      <input
        type="text"
        name="dateFrom"
        placeholder="Start Date"
        value={formData.dateFrom || ""}
        onChange={handleChange}
      />
      <input
        type="text"
        name="dateTo"
        placeholder="End Date"
        value={formData.dateTo || ""}
        onChange={handleChange}
      />
      <input
        type="text"
        name="responsibilities"
        placeholder="Responsibilities"
        value={formData.responsibilities || ""}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
}
