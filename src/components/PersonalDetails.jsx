export default function PersonalDetails({ personalInfo }) {
  return (
    <div>
      <h1>Personal Information</h1>
      <p>Name: {personalInfo.name}</p>
      <p>Email: {personalInfo.email}</p>
      <p>Phone: {personalInfo.phone}</p>
    </div>
  );
}