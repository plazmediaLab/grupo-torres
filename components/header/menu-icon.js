export default function MenuIcon({ children, label }) {
  return (
    <>
      <p className="hidden lg:inline-block">{label}</p>
      {children}
    </>
  );
}
