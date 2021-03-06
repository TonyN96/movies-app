import { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withRouter } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import app from "../../config/firebase";
import { AuthContext } from "../../contexts/authContext";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    offset: theme.mixins.toolbar,
}));

const SiteHeader = ({ history, loggedIn }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { currentUser } = useContext(AuthContext);

    let menuOptions;

    loggedIn
        ? (menuOptions = [
              { label: "Home", path: "/home" },
              { label: "Upcoming", path: "/movies/upcoming" },
              { label: "Favorites", path: "/movies/favorites" },
              { label: "Watchlist", path: "/movies/watchlist" },
              { label: "Actors", path: "/actors" },
              { label: "Search", path: "/search" },
              { label: "Logout", path: "/logout" },
          ])
        : (menuOptions = [
              { label: "Login", path: "/login" },
              { label: "Sign up", path: "/signup" },
          ]);

    const handleMenuSelect = (pageURL) => {
        pageURL === "/logout" ? app.auth().signOut() : history.push(pageURL);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <>
            <AppBar position="fixed" color="secondary">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h4" className={classes.title}>
                        TMDB Client
                    </Typography>
                    {currentUser && (
                        <Typography variant="subtitle1" className={classes.user}>
                            {currentUser.email}
                        </Typography>
                    )}
                    {isMobile ? (
                        <>
                            <IconButton
                                aria-label="menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={open}
                                onClose={() => setAnchorEl(null)}
                            >
                                {menuOptions.map((opt) => (
                                    <MenuItem
                                        key={opt.label}
                                        onClick={() => handleMenuSelect(opt.path)}
                                    >
                                        {opt.label}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </>
                    ) : (
                        <div>
                            {menuOptions.map((opt) => (
                                <Button
                                    key={opt.label}
                                    color="inherit"
                                    onClick={() => handleMenuSelect(opt.path)}
                                >
                                    {opt.label}
                                </Button>
                            ))}
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </>
    );
};

export default withRouter(SiteHeader);
