import { Pencapaian } from "@/components/achivement";
import { Badges } from "@/components/badges";
import { ProfilePicture } from "@/components/profile-pict";
import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function ProfilePage() {

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }
    return(
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <ProfilePicture />
      <div className="mt-6">
        <Badges />
      </div>
      <div className="mt-6">
        <Pencapaian />
      </div>
    </div>
    );
}