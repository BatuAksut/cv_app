import { useRef } from 'react';
import html2pdf from 'html2pdf.js';

function Cv({ formData, setIsGenerated }) {
  const cvRef = useRef();

  const handleDownloadPDF = () => {
    setTimeout(() => {
      const element = cvRef.current;
  
      const opt = {
        margin:       0.5,
        filename:     `${formData.firstName}_CV.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
  
      html2pdf().set(opt).from(element).save();
    }, 100); 
  };
  

  return (
    <div>
      <div ref={cvRef} className='cv'>
        <h2>Personal Info</h2>
        <p>Name: {formData.firstName} {formData.lastName}</p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>

        <h2>Education</h2>
        <p>School: {formData.schoolName}</p>
        <p>Study Title: {formData.studyTitle}</p>
        <p>Study Date: {formData.studyDate}</p>

        <h2>Experience</h2>
        <p>Company: {formData.companyName}</p>
        <p>Position: {formData.position}</p>
        <p>Responsibilities: {formData.responsibilities}</p>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={handleDownloadPDF}>Download as PDF</button>
        <button onClick={() => setIsGenerated(false)}>Edit</button>
      </div>
    </div>
  );
}

export default Cv;
