import type { Metadata } from "next";
import { AUPage } from "./au-page";

export const metadata: Metadata = {
  title: "Gym Management Software Australia - BPAY & AUD Pricing",
  description:
    "Australian gym software with BPAY, Direct Debit, AUD pricing. Built for gyms in Sydney, Melbourne, Brisbane. Start A$129/mo. Free trial.",
};

export default function Page() {
  return <AUPage />;
}
