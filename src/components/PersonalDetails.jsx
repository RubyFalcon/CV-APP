export default function PersonalDetails({ personalDetails }) {
  return (
    <div>
      <h1>Personal Information</h1>
      <p>Name: {personalDetails.name}</p>
      <p>Email: {personalDetails.email}</p>
      <p>Phone: {personalDetails.phone}</p>
      <p>Address: {personalDetails.address}</p>
    </div>
  );
}