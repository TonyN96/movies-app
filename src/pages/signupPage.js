import React from "react";
import { withRouter } from "react-router-dom";
import SiteHeader from "../components/siteHeader";
import SignupForm from "../components/signupForm";

const SignupPage = () => {
    return (
        <>
            <SiteHeader loggedIn={false} />
            <SignupForm />
        </>
    );
};

export default withRouter(SignupPage);
