import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import {
    FormLabel,
    Input,
    Heading,
    Checkbox,
    Button,
    ButtonGroup,
    InputGroup,
    InputRightElement,

}
    from "@chakra-ui/react";
import "./accountpage.css"
import { useDispatch } from "react-redux"
import { postNewUser } from "../../Redux/action";


export const Signup = () => {
    const form = useRef();
    const [email, setemail] = useState("")
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [contact, setcontact] = useState("")
    const [password, setpassword] = useState("")

    const dispatch = useDispatch();

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    let userDetails = {
        email,
        firstName,
        lastName,
        contact,
        password
    }

    const sendEmail = (e) => {


        e.preventDefault();
        console.log(userDetails);
        console.log(">>>>>>>>>>>>>>>>>>>>");
        emailjs.sendForm('service_fkfregs', 'template_n8ly4bv', form.current, 'wfw69oML3MWqQ0Srh')
            .then((result) => {
                console.log(result.text);
                console.log("Message Sent");
            }, (error) => {
                console.log(error.text);
            });

        dispatch(postNewUser(userDetails))

    };

    return (
        <div className="model_signup">
            <Heading fontWeight="10px" fontSize="32px">Create An Account</Heading>
            <br />
            <form ref={form} onSubmit={sendEmail} >
                <FormLabel> Email </FormLabel>
                <Input type="email" name="user_email" placeholder="Email" required onChange={(e) => setemail(e.target.value)} />
                <br />

                <FormLabel> First Name </FormLabel>
                <Input type="text" name="user_name" placeholder="First Name" required onChange={(e) => setfirstName(e.target.value)} />
                <br />

                <FormLabel> Last Name </FormLabel>
                <Input type="text" placeholder="Last Name" onChange={(e) => setlastName(e.target.value)} />
                <br />

                <FormLabel> Contact Info </FormLabel>
                <Input type="text" placeholder="Contact Info" onChange={(e) => setcontact(e.target.value)} />
                <br />

                <FormLabel> Create Password </FormLabel>
                <InputGroup size='md'>
                    <Input
                        type={show ? 'text' : 'password'}
                        placeholder='Create Password'
                        name="user_password"
                        onChange={(e) => setpassword(e.target.value)}
                    />
                    <InputRightElement width='4.5rem' >
                        <Button h='1.75rem' size='sm' onClick={handleClick} >
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <br />
                <br />
                <div >

                    <div className="item_center"><Checkbox required>I Accept The <a href="https://www.specialized.com/sg/en/terms-and-conditions" className="hover_text_color">Specialized Terms & Conditions</a> </Checkbox>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <p>I acknowledge Specialized will use my information in accordance with its <a href="https://www.specialized.com/sg/en/privacy-policy" className="hover_text_color"> Privacy Policy.</a></p>
                    </div>

                </div>
                <br />
                <ButtonGroup variant='outline' width="100%" >
                    <Button type="submit" colorScheme="yellow" className="btn">  Create Account </Button>
                </ButtonGroup>



            </form>
        </div >
    )
}