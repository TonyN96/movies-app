import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, Typography, InputBase, Button, Container } from "@material-ui/core";
import MultiSearchResults from "../multiSearchResults/multiSearchResults";

const useStyles = makeStyles((theme) => ({
    search: {
        marginTop: theme.spacing(12),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
    },
    searchBox: {
        margin: theme.spacing(3),
        padding: theme.spacing(1),
        width: "100%",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "#ededed",
        "&:hover": {
            backgroundColor: "#dedede",
        },
    },
    submit: { padding: theme.spacing(1) },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    searchResults: {
        width: "100%",
    },
}));

const MultiSearch = () => {
    const classes = useStyles();

    const [inputText, setInputText] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputTextChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(inputText);
    };

    handleSearch.bind(inputText);

    return (
        <>
            <Container component="main" maxWidth="xs">
                <div className={classes.search}>
                    <Avatar className={classes.avatar}>
                        <SearchIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Search
                    </Typography>
                    <form noValidate onSubmit={handleSearch} className={classes.form}>
                        <div className={classes.searchBox}>
                            <InputBase
                                name="inputText"
                                placeholder="Enter search term here.."
                                value={inputText}
                                onChange={handleInputTextChange}
                            />
                        </div>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            className={classes.submit}
                        >
                            Search
                        </Button>
                    </form>
                </div>
            </Container>
            <Container maxWidth="sm">
                {searchQuery !== "" ? (
                    <MultiSearchResults
                        searchQuery={searchQuery}
                        className={classes.searchResults}
                    />
                ) : (
                    <></>
                )}
            </Container>
        </>
    );
};

export default MultiSearch;
