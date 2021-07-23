import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "30px",
        marginBottom: "50px",
        textAlign: "center",
    },
}));

const Header = ({ title }) => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.root}>
            <Typography variant="h4" component="h3">
                {title}
            </Typography>
        </Box>
    );
};

export default withRouter(Header);
