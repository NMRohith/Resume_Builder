function TemplateSelector({ template, setTemplate }) {
  const templates = [
    { id: 'classic', label: 'Classic', color: '#2c3e50' },
    { id: 'modern', label: 'Modern', color: '#007bff' },
    { id: 'minimal', label: 'Minimal', color: '#888' },
    { id: 'bold', label: 'Bold', color: '#e74c3c' }
  ];

  return (
    <div className="template-selector">
      <h3>Choose a Resume Template</h3>
      <div className="template-options">
        {templates.map((tpl) => (
          <button
            key={tpl.id}
            className={`template-btn ${template === tpl.id ? 'active' : ''}`}
            style={{ borderColor: tpl.color }}
            onClick={() => setTemplate(tpl.id)}
          >
            <div className="template-preview" style={{ backgroundColor: tpl.color }}></div>
            <span>{tpl.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default TemplateSelector;
