import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import {
    FormLabel,
    Input,
    Heading,
    Checkbox,
    Button
}
    from "@chakra-ui/react";
import "./accountpage.css"


export const Signup = () => {
    const form = useRef();
    const [email, setemail] = useState("")
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [contact, setcontact] = useState("")
    const [address, setaddress] = useState("")


    const sendEmail = (e) => {
        e.preventDefault();
        console.log(">>>>>>>>>>>>>>>>>>>>");
        emailjs.sendForm('service_fkfregs', 'template_n8ly4bv', form.current, 'wfw69oML3MWqQ0Srh')
            .then((result) => {
                console.log(result.text);
                console.log("Message Sent");
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="main_form_div">
            <Heading fontWeight="10px" fontSize="32px">Create An Account</Heading>
            <br />
            <form ref={form} onSubmit={sendEmail} >
                <FormLabel> Email </FormLabel>
                <Input type="email" name="user_email" placeholder="Email" required onChange={(e) => setemail(e.target.value)} />
                <br />

                <FormLabel> First Name </FormLabel>
                <Input type="text" name="user_name" placeholder="First Name" required />
                <br />

                <FormLabel> Last Name </FormLabel>
                <Input type="text" placeholder="Last Name" />
                <br />

                <FormLabel> Contact Info </FormLabel>
                <Input type="text" placeholder="Contact Info" />
                <br />

                <FormLabel> Address </FormLabel>
                <Input type="text" placeholder="Address" />
                <br />
                <br />
                <div className="item_center">
                    <div><Checkbox required>Sign Me Up To Receive Email Offers And Updates</Checkbox></div>
                    <div><Checkbox required>I Accept The <a href="https://www.specialized.com/sg/en/terms-and-conditions" className="hover_text_color">Specialized Terms & Conditions</a> </Checkbox></div>
                    <div><Checkbox required  >I Accept The <a href="https://www.specialized.com/sg/en/terms-of-use" className="hover_text_color">Specialized Terms Of Use</a> </Checkbox></div>
                    <p>I acknowledge Specialized will use my information in accordance with its <a href="https://www.specialized.com/sg/en/privacy-policy" className="hover_text_color"> Privacy Policy.</a></p>
                </div>
                <br />

                <Button type="submit" className="btn">  Create Account  </Button>

            </form>
        </div >
    )
}