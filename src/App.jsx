import { useState } from "react";
import { initialData } from "./data/initialdata.js";
import PersonalDetailsForm from "./components/form/PersonalDetailsForm.jsx";
import EducationForm from "./components/form/EducationForm.jsx";
import WorkExperienceForm from "./components/form/WorkExperienceForm.jsx";
import PersonalDetails from "./components/PersonalDetails.jsx";
import Education from "./components/Education.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import "./App.css";

function App() {
  const [data, setData] = useState(initialData);
  const [editing, setEditing] = useState({ section: null, id: null });
  const editingData = editing.section
    ? data[editing.section].find((item) => item.id === editing.id)
    : null;

  const handleSave = (key, newData) => {
    setData((prevData) => ({
      ...prevData,
      [key]: newData,
    }));
  };
  return (
    <div className="app">
      <h1>CV Builder</h1>
      <div className="forms-panel">
        <PersonalDetailsForm
          personalDetails={data.personalDetails}
          onSave={(newData) => handleSave("personalDetails", newData)}
        />
        <EducationForm
          education={data.education}
          onSave={(newData) => handleSave("education", newData)}
          editingData={
            editing.section === "education" ? editingData : null
          }
        />
        <WorkExperienceForm
          workExperience={data.workExperience}
          onSave={(newData) => handleSave("workExperience", newData)}
          editingData={
            editing.section === "workExperience" ? editingData : null
          }
        />
      </div>
      <div className="cv-page">
        <PersonalDetails personalDetails={data.personalDetails} />
        <Education education={data.education} onEdit={setEditing} />
        <WorkExperience
          workExperience={data.workExperience}
          onEdit={setEditing}
        />
      </div>
    </div>
  );
}

export default App;
