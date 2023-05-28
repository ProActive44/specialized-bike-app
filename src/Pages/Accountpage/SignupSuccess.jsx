import { Heading } from '@chakra-ui/react'
import React from "react";
import "./accountpage.css"
import { Link } from 'react-router-dom'

export const SignupSuccess = () => {
    return (
        <div className="main_div_success">
            <h2> <Heading>Congratulations!</Heading> Your Account has been created Successfully.</h2>
            <h4>We have also sent login details to your email. Kinldy keep it for future Reference.</h4>
            <br />
            <br />
            <div className="first_div_success">
                <Link to="/login">Goto Login Page</Link>
                <Link to='/'>Goto Home Page</Link>
            </div>
        </div>

    )
}
