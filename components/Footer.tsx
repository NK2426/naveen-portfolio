export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>© {year} Naveen Kumar N</span>
        <span>Designed &amp; built with intent</span>
      </div>
    </footer>
  );
}
