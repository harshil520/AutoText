"use client"
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, []);

  return (
    <div className='flex justify-center items-center h-screen'>
      <Loader2Icon className='animate-spin' />
    </div>
  );
}
