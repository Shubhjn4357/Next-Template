'use client'
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: "600",
// });
export default function Home() {
  
  return (
    <main
      className={cn(
        " h-full d-center flex-col"
      )}
    >
      <div className=" space-y-6 min-h-dvh text-center">
        <p className=" d-center flex-col text-lg">
          A simple authentication service
          <Button>
            Login
          </Button>
          <span>
            Theme
          </span>
          
        </p>
      </div>
      <div className="min-h-dvh py-5">
                      
                         Hellow
                    </div>
    </main>
  );
}
