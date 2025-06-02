export function Footer() {
    return (
      <footer className="page-footer grey darken-2">
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} Klimovich Alexandr
            <a className="grey-text text-lighten-4 right" href="#!">
              Repository
            </a>
          </div>
        </div>
      </footer>
    );
  }