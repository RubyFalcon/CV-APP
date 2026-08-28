export default function WorkExperience({ workExperience }) {
  return (
    <div>
      <h2>Work Experience</h2>
      {workExperience.map((job, index) => (
        <div key={index}>
          <h3>{job.company}</h3>
          <p>Position: {job.position}</p>
          <p>Responsibilities: {job.responsibilities}</p>
          <p>Date From: {job.dateFrom}</p>
          <p>Date To: {job.dateTo}</p>
        </div>
      ))}
    </div>
  );
}