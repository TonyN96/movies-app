import SiteHeader from "../components/siteHeader";
import { Container } from "@material-ui/core";
import MultiSearch from "../components/multiSearch/multiSearch";

const MultiSearchPage = () => {
    return (
        <>
            <SiteHeader loggedIn={true} />
            <MultiSearch />
        </>
    );
};

export default MultiSearchPage;
