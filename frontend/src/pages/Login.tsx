import { Box, Button, Typography } from "@mui/material";
import "./Login.css";
import CustomizedInput from "../components/shared/CustomizedInput";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
const Login = () => {
  const auth = useAuth();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      toast.loading("Signing in...", { id: "login" });
      await auth?.login(email, password);
      toast.success("Signed in successfully!", { id: "login" });
    } catch (error) {
      console.log(error);

      toast.error("Sign in failed", { id: "login" });
    }
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
              className="submit-button"
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
