import { useState } from 'react'
import './App.css'
import Cv from './Cv'


function App() {
  const [isGenerated, setIsGenerated] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    schoolName: '',
    studyTitle: '',
    studyDate: '',
    companyName: '',
    position: '',
    responsibilities: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsGenerated(true)
    
  };

  return (
    <>
      {!isGenerated ? (
        <form className='form' onSubmit={handleSubmit}>
          <h3>Personal Info</h3>
          <label>
            First Name <br />
            <input type='text' name='firstName' required onChange={handleChange} />
          </label>

          <label>
            Last Name <br />
            <input type='text' name='lastName' required onChange={handleChange} />
          </label>

          <label>
            Email <br />
            <input type='email' name='email' required onChange={handleChange} />
          </label>

          <label>
            Phone <br />
            <input type='tel' name='phone' required onChange={handleChange} />
          </label>

          
          <h3>Education</h3>
          <label>
            School Name <br />
            <input type='text' name='schoolName' required onChange={handleChange} />
          </label>

          <label>
            Title of Study <br />
            <input type='text' name='studyTitle' required onChange={handleChange} />
          </label>

          <label>
            Date of Study <br />
            <input type='date' name='studyDate' required onChange={handleChange} />
          </label>

         
          <h3>Experience</h3>
          <label>
            Company Name <br />
            <input type='text' name='companyName' required onChange={handleChange} />
          </label>

          <label>
            Position <br />
            <input type='text' name='position' required onChange={handleChange} />
          </label>

          <label>
            Responsibilities <br />
            <textarea name='responsibilities' required onChange={handleChange}></textarea>
          </label>

          <button type='submit'>Generate Cv</button>
        </form>
      ) : (
        <Cv formData={formData} setIsGenerated={setIsGenerated} />
      )}
    </>
  )
}

export default App
