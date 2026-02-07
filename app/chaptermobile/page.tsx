"use client"

import { useRouter } from "next/navigation";
import ChapterMobile from "../components/chaptermobile";
import { motion } from "framer-motion";

export default function ChapterMobilePage() {
  const router = useRouter();

  return (
    <motion.div 
      className="min-h-screen w-screen bg-blue-100 p-8 hero-bg flex items-start justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <ChapterMobile onBack={() => router.back()} />
    </motion.div>
  );
}
