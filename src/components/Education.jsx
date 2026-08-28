export default function Education({ education }) {
    return (
        <div>
            <h2>Education</h2>
            {education.map((edu, index) => (
                <div key={index}>
                    <h3>{edu.school}</h3>
                    <p>Degree: {edu.title}</p>
                    <p>Year: {edu.dateOfStudy}</p>
                </div>
            ))}
        </div>
    );
}