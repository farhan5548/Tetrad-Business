import { Box, Typography, Button, Divider } from "@mui/material";

const UserProfile = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          p: { xs: 3, sm: 5 },
          border: "2px solid #8e9093ff",
          borderRadius: 4,
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
              gap: 2,
            }}
          >
            <Typography
              variant="h5"
              color="primary"
              sx={{ fontWeight: "bold" }}
            >
              User Data
            </Typography>
            <Button variant="contained" size="small" sx={{}}>
              REFRESH
            </Button>
          </Box>
          <Divider sx={{ mb: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="subtitle2" color="textSecondary">
              User Email
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 500 }}></Typography>
          </Box>
        </Box>
        <Box>
          <Button variant="contained" fullWidth>
            LOG OUT
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UserProfile;
