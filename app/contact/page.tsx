"use client"

import { useRouter } from "next/navigation";
import Contacts from "../components/contacts";

export default function ContactPage() {
  const router = useRouter();

  return <Contacts onBack={() => router.push("/")} />;
}
