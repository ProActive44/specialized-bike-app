import React, { useState } from "react"
import "./accountpage.css"
import {
    FormLabel,
    Input,
    Heading,
    Checkbox,
    Button,
    CheckboxIcon,
    ButtonGroup,
    InputGroup,
    InputRightElement,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure
}
    from "@chakra-ui/react";
import { Signup } from "./SignupPage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { calcLength } from "framer-motion";
import { getCurrentUser } from "../../Redux/action";




export const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const { isOpen, onOpen, onClose } = useDisclosure()

    const store = useSelector((store) => store.accountReducer.AllUsers)
    const currUser = useSelector((store) => store.accountReducer.currUser);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const handleSubmit = (e) => {
        e.preventDefault();

        store.map((user) => {
            if (email === user.email && password === user.password) {
                alert("successful");
                dispatch(getCurrentUser(user))
                navigate('/Homepage')
                return;
            }
        })
        console.log(currUser);
        alert("Wrong Credentails");

    }

    return (
        <div>
            <div className="main_form_div">
                <Heading fontWeight="10px" fontSize="32px">Sign in to your Account</Heading>
                <br />
                <form onSubmit={handleSubmit}>
                    <FormLabel> Email </FormLabel>
                    <Input type="email" placeholder="Email" required onChange={(e) => setemail(e.target.value)} />
                    <br />

                    <FormLabel> Password </FormLabel>
                    <InputGroup size='md'>
                        <Input
                            type={show ? 'text' : 'password'}
                            placeholder='Password'
                            required
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
                    <ButtonGroup variant='outline' width="100%" >
                        <Button type="submit" className="btn" colorScheme="yellow">  Sign In  </Button>
                    </ButtonGroup>

                    <br />
                    <br />
                    <ButtonGroup variant='outline' width="100%" >
                        <Button onClick={onOpen} className="btn" colorScheme="yellow">Create Account</Button>
                    </ButtonGroup>
                </form>
                <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={true}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <Signup />
                    </ModalContent>
                </Modal>

            </div>
        </div>
    )
}