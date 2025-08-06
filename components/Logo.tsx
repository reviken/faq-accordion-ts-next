import Image from "next/image";
import starIcon from "@/assets/images/icon-star.svg";
import { ReactNode } from "react";

interface LogoProps {
  children: ReactNode;
}

export default function Logo({ children }: LogoProps) {
  return (
    <div className="flex items-center gap-300">
      <Image src={starIcon} alt="Logo" width={36} height={36} priority />
      <h1 className="text-preset-1 text-purple-950">{children}</h1>
    </div>
  );
}
