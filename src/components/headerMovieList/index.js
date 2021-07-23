import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import { Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "10px",
        marginBottom: "40px",
        textAlign: "center",
        padding: "20px",
    },
}));

const Header = ({ title }) => {
    const classes = useStyles();
    return (
        <Card component="div" className={classes.root}>
            <Typography variant="h4" component="h3">
                {title}
            </Typography>
        </Card>
    );
};

export default withRouter(Header);
