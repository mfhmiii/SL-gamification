"use effect";

import Hero from "@/components/hero";
import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <html>
      <body>
        <div className="flex-1 w-full flex flex-col gap-12">
          {/* <Hero /> */}
          <h1>Lanidng Page</h1>
        </div>
      </body>
    </html>
  );
}
