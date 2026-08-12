import { useState } from 'react'
import { initialData } from './data/initialdata.js'
import PersonalDetails from './components/PersonalDetails.jsx'
import Education from './components/Education.jsx'
import WorkExperience from './components/WorkExperience.jsx'
import './App.css'

function App() {
  const [data, setData] = useState(initialData)
  let mockData = initialData
  return (
    <>
      <PersonalDetails personalInfo={data.personalInfo} />
      <Education education={data.education} />
      <WorkExperience workExperience={data.workExperience} />
    </>
  )
}

export default App
