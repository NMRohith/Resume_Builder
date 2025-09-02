function Form({ formData, handleChange, handleSubmit, handlePhotoUpload }) {
  const shortFields = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'phone', label: 'Phone', type: 'tel' },
    { name: 'linkedin', label: 'LinkedIn', type: 'url', placeholder: 'https://linkedin.com/in/yourprofile' },
    { name: 'github', label: 'GitHub', type: 'url', placeholder: 'https://github.com/yourusername' }
  ];

  const longFields = ['summary', 'education', 'experience', 'skills', 'projects', 'certificates'];

  return (
    <form className="resume-form" onSubmit={handleSubmit}>
      {/* Short Inputs */}
      {shortFields.map(({ name, label, type, placeholder }) => (
        <div className="form-row" key={name}>
          <label htmlFor={name}>{label}</label>
          <input
            type={type}
            name={name}
            id={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder={placeholder || ''}
            required
          />
        </div>
      ))}

      {/* Photo Upload */}
      <div className="form-row">
        <label htmlFor="photo">Profile Photo</label>
        <input type="file" accept="image/*" onChange={handlePhotoUpload} />
      </div>

      {/* Long Textareas */}
      {longFields.map((field) => (
        <div className="form-row" key={field}>
          <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <textarea
            name={field}
            id={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder="Separate items with line breaks"
            required={field !== 'certificates'} // certificates can be optional
          />
        </div>
      ))}

      <button type="submit" className="primary-btn">Preview Resume</button>
    </form>
  );
}

export default Form;
