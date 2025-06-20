"use client";

import { Box, Button, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import Logout from "../../components/Logout";
import Link from "next/link";
import LogInIcon from "@mui/icons-material/Login";

export default function Dashboard() {
  const { data: session } = useSession();
  
  if (!session) return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Willkommen Unbekannter
        <Button
          color="inherit"
          component={Link}
          href="/login"
          startIcon={<LogInIcon />}
        >
          Login
        </Button>
      </Typography>
    </Box>
  );

  return (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          Willkommen, {session.user.username}
        </Typography>
        <Typography>
          Deine Rollen: {session.role}
        </Typography>
        <Logout />
      </Box>
  );
}
