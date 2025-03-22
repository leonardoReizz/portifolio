export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border container">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-xl font-display font-semibold tracking-tight"
            >
              Leonardo<span className="text-primary">Reis</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Criando experiências digitais extraordinárias
            </p>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} Leonardo Reis.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
