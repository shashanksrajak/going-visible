import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";

import {
  AutoFixHigh,
  AutoGraphOutlined,
  Email,
  EmojiEvents,
  Timeline,
} from "@mui/icons-material";

const items = [
  {
    icon: <AutoFixHigh />,
    title: "AI-Powered Mood Tracking",
    description:
      "We leverage the power of Gemini AI to analyze your moods by analysing your mood log and facial expressions. Our AI technology provides accurate mood tracking and insightful feedback based on your daily entries.",
  },
  {
    icon: <AutoGraphOutlined />,
    title: "Insightful Analytics",
    description:
      "Our platform analyzes your mood trends and generates detailed reports. Discover patterns and receive personalized recommendations to enhance your emotional health.",
  },
  {
    icon: <EmojiEvents />,
    title: "Personalized Rewards System",
    description:
      "Earn badges and rewards for actively logging your moods. Our platform recognizes milestones like maintaining streaks or logging positive moods, to track and reward your achievements.",
  },
  {
    icon: <Timeline />,
    title: "Weekly Streaks",
    description:
      "Track your consistency with weekly streaks. We support your emotional well being by tracking of your mood logs and provides motivational feedback to help you keep your streak alive.",
  },
  {
    icon: <Email />,
    title: "Family Alerts",
    description:
      "We share your mood data with family members using alerts so that your loved ones become a catalyst in your well being.",
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Gemini AI",
    description:
      "We use Gemini AI by Google to power all our tools. So you get the best results and feedbacks while logging your moods.",
  },
];

export default function Features() {
  return (
    <Box
      id="features"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#06090a",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4">
            Features
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Explore highlights of our platform.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor: "grey.900",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
