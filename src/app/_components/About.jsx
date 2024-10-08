"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function About() {
  return (
    <Container
      id="about"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { xs: "90%", sm: "80%", md: "60%" },
          textAlign: { xs: "center", sm: "left", md: "center" },
        }}
      >
        About
      </Typography>
      <Box sx={{ width: "100%", mt: 2 }}>
        <Typography
          variant="body1"
          sx={{ color: "grey.700", textAlign: "center", lineHeight: 1.6 }}
        >
          At Going Visible, we understand the challenges faced by individuals
          with invisible illnesses, as well as anyone looking to gain a deeper
          understanding of their emotional well-being. Our mission is to empower
          users to track their moods, recognize patterns, and foster emotional
          awareness through innovative technology and supportive features.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="body1"
            sx={{ color: "grey.700", textAlign: "center", lineHeight: 1.6 }}
          >
            Our platform is designed to serve as a personal companion in your
            mental health journey. By logging your moods, you can gain valuable
            insights into your emotional patterns and triggers. With the help of
            Google Gemini AI, &quot;Going Visible&quot; analyzes your mood
            entries to provide personalized suggestions and insights that can
            aid in managing your mental health.
          </Typography>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="body1"
            sx={{ color: "grey.700", textAlign: "center", lineHeight: 1.6 }}
          >
            Whether you&apos;re living with a chronic condition, navigating the
            ups and downs of everyday life, or simply interested in
            understanding your emotions better, &quot;Going Visible&quot; offers
            a safe and supportive space. Our mood alert feature ensures your
            family and friends can be notified when you need extra support,
            fostering a strong support network around you.
          </Typography>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="body1"
            sx={{ color: "grey.700", textAlign: "center", lineHeight: 1.6 }}
          >
            We believe that by making the invisible visible, we can create a
            more understanding and supportive world. Join us on this journey
            towards greater emotional well-being and empowerment.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
