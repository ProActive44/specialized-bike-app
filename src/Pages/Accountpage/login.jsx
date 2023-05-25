import React from "react"
import "./accountpage.css"
import {
    FormLabel,
    Input,
    Heading,
    Checkbox,
    Button,
    CheckboxIcon
}
    from "@chakra-ui/react";

export const Login = () => {
    return (
        <div>
            <div className="main_form_div">
                <Heading fontWeight="10px" fontSize="32px">Sign in to your Account</Heading>
                <br />
                <form  >
                    <FormLabel> Email </FormLabel>
                    <Input type="email" placeholder="Email" required />
                    <br />

                    <FormLabel> Password </FormLabel>
                    <Input type="password" placeholder="Password" required />
                    <br />
                    <br />
                    <div className="item_display_corner">
                        <div>
                            <Checkbox  >Remember Me</Checkbox>
                        </div>
                        <div><a href="">Forgot your password?</a> </div>
                    </div>


                    <div className="item_center">
                        <p className="small_font">
                            I accept the Specialized <a href="https://www.specialized.com/sg/en/terms-of-use" className="hover_text_color">Terms of Use</a> and acknowledge Specialized will use my information in accordance with its <a href="https://www.specialized.com/sg/en/privacy-policy" className="hover_text_color">Privacy Policy.</a>
                        </p>
                    </div>
                    <br />
                    <Button type="submit" className="btn">  Sign In  </Button>
                    <br />
                    <br />
                    <a href="" className="create_account_btn">Create Account</a>
                </form>
            </div>
        </div>
    )
}