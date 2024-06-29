import React from "react";
import { currentUser } from "@/lib/server-actions/user-auth";
import { Box } from "@mui/material";
import Welcome from "./_components/Welcome";
import MoodPrompt from "./_components/MoodPrompt";
import WeeklyStreak from "./_components/WeeklyStreak";
import Rewards from "./_components/Rewards";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await currentUser();
  console.log(user);

  if (!user) {
    redirect("/");
  }

  return (
    <>
      <Box>
        <Welcome user={user} />

        <MoodPrompt />
      </Box>

      <WeeklyStreak />

      <Rewards />
    </>
  );
}
