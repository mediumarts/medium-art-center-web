import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Blog" };

export default function Page() {
  return <ComingSoon title="Blog" />;
}
