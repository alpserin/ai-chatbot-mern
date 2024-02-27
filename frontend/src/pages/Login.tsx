import { Box, Button, Typography } from "@mui/material";
import "./Login.css";
import CustomizedInput from "../components/shared/CustomizedInput";

const Login = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
  };
  return (
    <Box className="container">
      <Box className="image" display={{ md: "flex", sm: "none", xs: "none" }}>
        <img src="coverimage.png" alt="cover-image"></img>
      </Box>
      <Box className="form" display={"flex"} flex={{ xs: 1, md: 0.5 }}>
        <form onSubmit={handleSubmit}>
          <Box className="form-box">
            <Typography className="typography" variant="h4">
              Login
            </Typography>
            <CustomizedInput type="email" name="email" label="Email" />
            <CustomizedInput type="password" name="password" label="Password" />
            <Button
              className="button"
              type="submit"
              sx={{
                px: 2,
                py: 1,
                mt: 2,
                width: "400px",
                borderRadius: 2,
                bgcolor: "#00fffc",
                ":hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
