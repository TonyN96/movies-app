import { IconButton, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function backButton({ history }) {
    return (
        <IconButton aria-label="go back" onClick={() => history.goBack()}>
            <ArrowBackIcon color="primary" fontSize="large" />
            <Typography variant="h6" component="h3">
                &nbsp;&nbsp;Back
            </Typography>
        </IconButton>
    );
}
