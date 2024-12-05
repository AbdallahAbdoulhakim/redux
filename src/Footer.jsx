const Footer = () => {
  const date = new Date();
  return (
    <div className="bg-slate-800 p-4 text-center">
      Copyright &copy; {date.getFullYear()}
    </div>
  );
};

export default Footer;
