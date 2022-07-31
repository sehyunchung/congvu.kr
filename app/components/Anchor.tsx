export function Anchor({
  children,
  className,
  ...props
}: React.ComponentProps<"a">): React.ReactElement {
  return (
    <a className={`hover:underline ${className}`} {...props}>
      {children}
    </a>
  );
}

export function BorderedAnchor({
  children,
  className,
  ...props
}: React.ComponentProps<"a">): React.ReactElement {
  return (
    <a
      className={`flex justify-center align-middle rounded-3xl py-2 px-5 text-sm hover:underline ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
