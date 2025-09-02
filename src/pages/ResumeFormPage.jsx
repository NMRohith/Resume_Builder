import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';

function ResumeFormPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    photo: '',
    summary: '',
    education: '',
    experience: '',
    skills: '',
    projects: '',
    certificates: ''
  });

  const navigate = useNavigate();

  const sanitizeText = (text) => {
    const seen = new Set();
    return text
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && !seen.has(line) && seen.add(line))
      .join('\n');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanedData = {};
    for (const key in formData) {
      cleanedData[key] = sanitizeText(formData[key]);
    }
    localStorage.setItem('resumeData', JSON.stringify(cleanedData));
    navigate('/preview');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, photo: reader.result });
    };
    if (file) reader.readAsDataURL(file);
  };

  return (
    <div className="resume-form-page">
      <h1>Resume Builder</h1>
      <Form
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handlePhotoUpload={handlePhotoUpload}
      />
    </div>
  );
}

export default ResumeFormPage;
