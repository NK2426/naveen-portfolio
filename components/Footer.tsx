import Copy from "./Copy";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>© {year} Naveen Kumar N</span>
        <span>
          <Copy plain="Senior Full Stack Developer · AI-Enabled Backend Engineer" themed="Designed & built with intent" />
        </span>
      </div>
    </footer>
  );
}
