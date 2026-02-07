"use client";
import React from "react";
import { motion } from "framer-motion";

interface ContactsProps {
  onBack?: () => void;
}

export default function Contacts({ onBack }: ContactsProps) {
    return (
        <motion.div 
            className="flex flex-col p-8 bg-[#1E1E1D] h-screen justify-around"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
            <div className="h-[400px]">
                <h1>hwwwwwwwwwwwwwwwww</h1>
            </div>
            
            <div className="flex flex-col">
                <div className="w-64 text-sm text-white bg-transparent text-left">
                    <p className="text-[32px]">Contact</p>
                    <p className="text-[32px] text-orange">hello@dorodavid.com</p>
                    <p className="text-[32px] whitespace-nowrap">+39 345 636 6497</p>
                    <p className="text-[32px]">Instagram</p>
                    <p className="text-[32px]">LinkedIn</p>
                </div>
                <button
                    onClick={onBack}
                    className="text-[24px] text-center border border-white rounded-2xl py-2 w-[327px] h-[48px] mt-8"
                    style={{ fontFamily: 'Gyst, serif', fontWeight: 400, fontStyle: 'italic', lineHeight: '100%', letterSpacing: '0%', color: '#FFFFFF' }}
                >
                    back
                </button>
            </div>
        </motion.div>
    );
}