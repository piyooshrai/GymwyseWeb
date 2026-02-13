import { verticalPages } from "@/lib/vertical-data";
import { VerticalPage } from "./vertical-page";

const data = verticalPages.find((p) => p.slug === "personal-training-studio-software")!;

export const metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function Page() {
  return <VerticalPage />;
}
