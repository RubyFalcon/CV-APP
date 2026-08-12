export default function Education({ education }) {
    return (
        <div>
            <h1>Education</h1>
            {education.map((edu, index) => (
                <div key={index}>
                    <h2>{edu.school}</h2>
                    <p>Degree: {edu.title}</p>
                    <p>Year: {edu.dateOfStudy}</p>
                </div>
            ))}
        </div>
    );
}