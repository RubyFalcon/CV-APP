import { useState } from 'react'
import { initialData } from './data/initialdata.js'
import PersonalDetailsForm from './components/form/PersonalDetailsForm.jsx'
import EducationForm from './components/form/EducationForm.jsx'
import WorkExperienceForm from './components/form/WorkExperienceForm.jsx'
import PersonalDetails from './components/PersonalDetails.jsx'
import Education from './components/Education.jsx'
import WorkExperience from './components/WorkExperience.jsx'
import './App.css'

function App() {
  const [data, setData] = useState(initialData)
  const handleSave = (key, newData) => {
    setData((prevData) => ({
      ...prevData,
      [key]: newData,
    }))
  }
  return (
    <>  
      <PersonalDetailsForm personalDetails={data.personalDetails} onSave={(newData) => handleSave('personalDetails', newData)} />
      <EducationForm education={data.education} onSave={(newData) => handleSave('education', newData)} />
      <WorkExperienceForm workExperience={data.workExperience} onSave={(newData) => handleSave('workExperience', newData)} />
      <PersonalDetails personalDetails={data.personalDetails} />
      <Education education={data.education} />
      <WorkExperience workExperience={data.workExperience} />
    </>
  )
}

export default App
