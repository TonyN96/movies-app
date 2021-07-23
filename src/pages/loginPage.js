import React from "react";
import { withRouter } from "react-router-dom";
import SiteHeader from "../components/siteHeader";
import LoginForm from "../components/loginForm";

const LoginPage = () => {
    return (
        <>
            <SiteHeader loggedIn={false} />
            <LoginForm />
        </>
    );
};

export default withRouter(LoginPage);
