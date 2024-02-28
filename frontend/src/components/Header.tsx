import { AppBar, Toolbar } from "@mui/material";
import Logo from "./shared/Logo";
import NavLink from "./shared/NavLink";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar
      sx={{
        bgcolor: "transparent",
        position: "static",
        boxShadow: "none",
        mt: "16px",
      }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavLink
                bg="white"
                to="/chat"
                text="Go to Chat"
                textColor="black"
              />
              <NavLink
                bg="beige"
                textColor="black"
                to="/"
                text="Logout"
                onClick={auth?.logout}
              />
            </>
          ) : (
            <>
              <NavLink bg="white" to="/login" text="Login" textColor="black" />
              <NavLink
                bg="beige"
                textColor="black"
                to="/signup"
                text="Signup"
                onClick={auth?.logout}
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
