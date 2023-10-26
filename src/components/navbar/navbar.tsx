import clsx from "clsx";

type NavbarProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function Navbar({ className, style }: NavbarProps) {
  return (
    <div
      style={style}
      className={clsx(
        "w-full fixed top-0 left-0 h-16 bg-white/10 backdrop-blur-md border-b z-50",
        className
      )}
    >
      <div className="max-w-screen-xl mx-auto flex items-center h-full px-4">
        <h1 className="text-xl font-bold">Qualcentric</h1>
      </div>
    </div>
  );
}
