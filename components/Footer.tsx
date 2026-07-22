export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        Designed &amp; built by <strong>Naveen Kumar N</strong> · {year}
      </p>
      <p className="footer-note">Senior Full Stack Developer · AI-Enabled Backend Engineer</p>
    </footer>
  );
}
