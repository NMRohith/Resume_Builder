import { useState } from 'react';
import Preview from '../components/Preview';
import TemplateSelector from '../components/TemplateSelector';
import { exportPDF } from '../utils/exportPDF';

function ResumePreviewPage() {
  const [template, setTemplate] = useState('classic');
  const data = JSON.parse(localStorage.getItem('resumeData')) || {};

  return (
    <div className="resume-preview-page">
      <h1>Your Resume</h1>
      <TemplateSelector template={template} setTemplate={setTemplate} />
      <div className="resume-preview-wrapper">
  <Preview data={data} template={template} />
</div>

      <button onClick={exportPDF} className="primary-btn">Download PDF</button>
    </div>
  );
}

export default ResumePreviewPage;
