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
      className={`flex justify-center align-middle text-white rounded-3xl py-2 px-5 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
