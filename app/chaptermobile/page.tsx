"use client"

import { useRouter } from "next/navigation";
import ChapterMobile from "../components/chaptermobile";

export default function ChapterMobilePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-screen bg-blue-100 p-8 hero-bg flex items-start justify-center">
      <ChapterMobile onBack={() => router.back()} />
    </div>
  );
}
