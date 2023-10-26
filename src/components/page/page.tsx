import clsx from "clsx";

type PageProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function Page({
  className,
  style,
  children,
}: React.PropsWithChildren<PageProps>) {
  return (
    <div
      className={clsx(
        "max-w-screen-xl mx-auto p-4 mt-16 min-h-screen",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}
