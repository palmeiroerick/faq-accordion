"use client";
import FAQs from "@/components/FAQs";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className="m-6 flex w-full max-w-[600px] flex-col gap-6 rounded-lg bg-white p-6 shadow-xl lg:gap-8 lg:rounded-2xl lg:p-10">
      <Title>FAQs</Title>
      <FAQs />
    </main>
  );
}
