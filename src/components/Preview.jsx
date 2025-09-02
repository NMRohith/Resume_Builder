function Preview({ data, template }) {
  const renderBullets = (text) => {
    const seen = new Set();
    return text
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && !seen.has(line) && seen.add(line))
      .map((line, idx) => <li key={idx}>{line}</li>);
  };

  return (
    <div className={`resume-preview ${template}`}>
      <header className="resume-header">
        {data.photo && <img src={data.photo} alt="Profile" className="profile-photo" />}
        <h2>{data.name || "Your Name"}</h2>
        <p>{data.email || "Your Email"} | {data.phone || "Your Phone"}</p>
        <p>
  {data.linkedin ? (
    <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
  ) : (
    <span>LinkedIn</span>
  )}
  {' | '}
  {data.github ? (
    <a href={data.github} target="_blank" rel="noopener noreferrer">GitHub</a>
  ) : (
    <span>GitHub</span>
  )}
</p>

      </header>

      {['Summary', 'Education', 'Experience', 'Skills', 'Projects', 'Certificates'].map((section) => (
        <section key={section}>
          <h3>{section}</h3>
          {section === 'Summary' ? (
            <p>{data.summary}</p>
          ) : (
            <ul>{renderBullets(data[section.toLowerCase()])}</ul>
          )}
        </section>
      ))}
    </div>
  );
}

export default Preview;
