const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200 text-center py-4 mt-8">
      <p className="text-sm">
        &copy; {year} - Franco Villalba - Trabajo Práctico Integrador III
      </p>
    </footer>
  );
};

export default Footer;
