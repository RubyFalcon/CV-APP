export default function WorkExperience({ workExperience }) {
  return (
    <div>
      <h1>Work Experience</h1>
      {workExperience.map((job, index) => (
        <div key={index}>
          <h2>{job.company}</h2>
          <p>Position: {job.position}</p>
          <p>Responsibilities: {job.responsibilities}</p>
          <p>Date From: {job.dateFrom}</p>
          <p>Date To: {job.dateTo}</p>
        </div>
      ))}
    </div>
  );
}