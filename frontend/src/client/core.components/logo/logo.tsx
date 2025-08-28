export interface LogoProps {
  className?: string;
  height?: string;
  width?: string;
}

export function Logo({ className, height, width }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="Mercado Libre"
      width={width}
      height={height}
      className={className}
    />
  );
}
