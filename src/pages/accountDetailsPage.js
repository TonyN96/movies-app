import React from "react";
import { withRouter } from "react-router-dom";
import SiteHeader from "../components/siteHeader";
import AccountDetailsForm from "../components/accountDetailsForm";

const AccountDetailsPage = () => {
    return (
        <>
            <SiteHeader loggedIn={true} />
            <AccountDetailsForm />
        </>
    );
};

export default withRouter(AccountDetailsPage);
