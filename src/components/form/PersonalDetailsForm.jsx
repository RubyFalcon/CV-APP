import { useFormData } from "../../hooks/useFormData.js";

export default function PersonalDetailsForm({ personalDetails, onSave }) {
  const { formData, handleChange } = useFormData(personalDetails || {});

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name || ""}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email || ""}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone || ""}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address || ""}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
}
