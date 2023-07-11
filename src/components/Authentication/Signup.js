import { Box, Button, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { CryptoState } from '../../CryptoContext';
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from '@firebase/auth';
const Signup = ({ handleClose }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const { setAlert } = CryptoState();

    const handleSubmit = async () => {
        if (password !== confirmpassword) {
            setAlert({
                open: true,
                message: "password do not match",
                type: "error"
            });
            return;
        }

        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);

            console.log(result);

            setAlert({
                open: true,
                message: `Sign Up Successful. Welcome ${result.user.email}`,
                type: "success",
            });
            handleClose()
        }

        catch (error) {
            setAlert({
                open: true,
                message:error.message,
                type: "error",
            });
            return;
        }
    };



    return (
        <Box p={3}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >

            <TextField
                variant='outlined'
                type='email'
                label='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
            />

            <TextField
                variant='outlined'
                type='password'
                label='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
            />

            <TextField
                variant='outlined'
                type='password'
                label='Confirm Password'
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                fullWidth
            />
            <Button
                variant='contained'
                size="large"
                style={{ backgroundColor: "#EEBC1D" }}
                onClick={handleSubmit}
            >
                Sign up
            </Button>

        </Box>
    )
}

export default Signup
