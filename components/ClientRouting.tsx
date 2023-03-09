import Link from "next/link";

type Props = {
  children: React.ReactNode;
  route: string;
};

function ClientRouting({ children, route }: Props) {
  return <Link href={route}>{children}</Link>;
}

export default ClientRouting;