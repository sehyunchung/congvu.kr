export function Anchor({
  children,
  ...props
}: React.ComponentProps<"a">): React.ReactElement {
  return (
    <a className="hover:underline" {...props}>
      {children}
    </a>
  );
}
