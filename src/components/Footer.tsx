
const year = new Date().getFullYear();

function Footer() {
  return (
    <footer
      className="text-center mb-3"
    >
      Ballers @ {year}
    </footer>
  );
}

export default Footer;