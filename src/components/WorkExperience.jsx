export default function WorkExperience({ workExperience, onEdit }) {
  return (
    <div>
      <h2>Work Experience</h2>
      {workExperience.map((job) => (
        <div key={job.id}>
          <h3>{job.company}</h3>
          <p>Position: {job.position}</p>
          <p>Responsibilities: {job.responsibilities}</p>
          <p>Date From: {job.dateFrom}</p>
          <p>Date To: {job.dateTo}</p>
          <button onClick={() => onEdit({ section: 'workExperience', id: job.id })}>Edit</button>
        </div>
      ))}
    </div>
  );
}