import SiteHeader from "../components/siteHeader";
import MultiSearch from "../components/multiSearch";

const MultiSearchPage = () => {
    return (
        <>
            <SiteHeader loggedIn={true} />
            <MultiSearch />
        </>
    );
};

export default MultiSearchPage;
