import { Icon } from "./icon";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Spinner(props: any) {
  return (
    <Icon
      provider="phosphor"
      name="Spinner"
      className="animate-spin"
      {...props}
    />
  );
}
