import {
    Box,
    Grommet,
    Layer,
    PageHeader,
    Anchor,
    Image,
    Spinner,
    Text,
    Button,
    Header,
    Heading,
    Footer,
    TextInput
} from 'grommet';
import '../App.css';
import { Test, Money, Currency, Home, Github, Twitter, Reddit, History, CloudUpload, Medium } from 'grommet-icons';
import { FaDiscord } from 'react-icons/fa';
import { GoogleLogin } from '@react-oauth/google';
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, Auth } from "firebase/auth";

// https://stackoverflow.com/a/37484053
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
    apiKey: "AIzaSyBQ8rb3jkIsusGKhGwGm-ri9VAjoof1OKA",
    authDomain: "nanocryptobank.firebaseapp.com",
    projectId: "nanocryptobank",
    storageBucket: "nanocryptobank.appspot.com",
    messagingSenderId: "950014241040",
    appId: "1:950014241040:web:16e7f8fa0f59bcaf7b5d95",
    measurementId: "G-H4F5Z43EKN"
};
const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
const theme = {
    global: {
        colors: {
            brand: '#FFFFFF',
            // background: '#809bce',
            footer: 'lightgray',
            placeholder: 'gray',
            good: '#37eb34',
        },
        font: {
            size: '18px',
            height: '20px',
        },
    },
    button: {
        border: {
            color: '#000000'
        }
    },
    text: {
        skeleton: {
            width: { width: '100px', min: '100px' },
            margin: { vertical: 'xsmall' },
            colors: {
              dark: ['border', 'border'],
              light: ['background-front', 'background-back'],
            }
        }
    }
};

const SMALL_SCREEN_SIZE = 700;
const MEDIUM_SCREEN_SIZE = 1000;

const error_message: any = {
    "auth/email-already-in-use": "Email already in use",
    "auth/invalid-email": "Error: Invalid Email",
    "auth/wrong-password": "Incorrect password",
    "auth/rejected-credential": "Incorrect password",
    "auth/too-many-requests": "Too many attempts",
    "auth/unverified-email": "Please verify your email",
    "auth/weak-password": "Your password must be at least 6 characters, containing letters and numbers"
}

function createUser(email: string, password: string, setError: any) {
    console.log(email);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const token = auth.currentUser?.getIdToken();
        console.log(token);
    })
    .catch((error) => {
        setError(error_message[error.code] || error.code);
    });
}

function CreateAccountPage() {
    const [email, setEmail] = useState<string>(() => {return ""});
    const [password, setPassword] = useState<string>(() => {return ""});
    const [submitReady, setSubmitReady] = useState<Boolean>(() => {return false});
    const [error, setError] = useState<string>(() => {return ""})
    
    useEffect(() => {
        setSubmitReady(Boolean(email) && Boolean(password));
    }, [email, password]);

    return (
        <Grommet theme={theme}>
        <Layer full={true} modal={false} animate={false}>
            {/* header */}
            <Header background="brand">
                <Text size="4xl" margin={{
                        left: "small",
                    }} alignSelf="start">

                    <Image 
                        margin={{
                            vertical: "medium",
                            left: "large",
                            right: "small"
                        }}
                        src="./favicon-32x32.png"
                    />

                    nano bank
                </Text>
            </Header>

            {/* body */}
            <Box fill direction="column" margin={{top:'xlarge'}}>
                <Text size="2xl" margin="large" alignSelf="center">Create your account</Text>
                <Box direction="row" alignSelf='center'>
                    <Box direction="column" alignSelf='center'>
                        <Box margin='small' width="300" alignSelf='center'>
                        <TextInput
                            placeholder="email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            />
                        </Box>
                        <Box margin='small' width="300" alignSelf='center'>
                        <TextInput
                            placeholder="password"
                            type="password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            />
                        </Box>
                    </Box>
                    <Box margin='small' width="300" alignSelf='center'>
                        <Button primary disabled={!submitReady} onClick={event => createUser(email, password, setError)} label="submit" type="submit"/>
                    </Box>
                </Box>
                <Box margin='small' width="300" alignSelf='center'>
                    <Text>{error}</Text>
                </Box>
            </Box>

            {/* footer */}
            <Box direction="column">
                <Box direction="row" margin={{vertical: "small"}}>
                    <Button tip="github" margin={{horizontal: "small"}} alignSelf="center"><Github></Github></Button>
                    <Button tip="twitter" margin={{horizontal: "small"}} alignSelf="center"><Twitter></Twitter></Button>
                    <Button tip="reddit" margin={{horizontal: "small"}} alignSelf="center"><Reddit></Reddit></Button>
                    <Button tip="discord" margin={{horizontal: "small"}} alignSelf="center"><FaDiscord></FaDiscord></Button>
                    <Button tip="medium" margin={{horizontal: "small"}} alignSelf="center"><Medium></Medium></Button>
                </Box><Box direction="row" margin={{vertical: "small"}}>
                    <Anchor color="#000000" alignSelf="center" margin={{horizontal:"small"}}><Text>About</Text></Anchor>
                    <Anchor color="#000000" alignSelf="center" margin={{horizontal:"small"}}><Text>Careers</Text></Anchor>
                    <Anchor color="#000000" alignSelf="center" margin={{horizontal:"small"}}><Text>Legal</Text></Anchor>
                </Box>
                <Box direction="row" margin="small">
                    <Anchor color="gray" alignSelf="center"><Text>Nano Bank LLC © {new Date().getFullYear()}</Text></Anchor>
                </Box>
            </Box>
        </Layer>
        </Grommet>
    );
}

export default CreateAccountPage;
