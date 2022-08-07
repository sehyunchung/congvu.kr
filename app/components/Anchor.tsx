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
      className={`flex justify-center align-middle py-1 px-3 text-md hover:underline select-none ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
