export default function Education({ education, onEdit }) {
    
    return (
        <div>
            <h2>Education</h2>
            {education.map((edu) => (
                <div key={edu.id}>
                    <h3>{edu.school}</h3>
                    <p>Degree: {edu.title}</p>
                    <p>Year: {edu.dateOfStudy}</p>
                    <button onClick={() => onEdit({ section: 'education', id: edu.id })}>Edit</button>
                </div>
            ))}
        </div>
    );
}