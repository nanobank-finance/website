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

function LoginPage() {
    const [username, setUsername] = useState<string>(() => {return ""});
    const [password, setPassword] = useState<string>(() => {return ""});
    let submit_ready = false;
    let navigate = useNavigate();

    function forgotNavigation() {
        navigate(`../forgot`);
    }

    function createNavigation() {
        navigate(`../start`);
    }

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
            <Box fill margin={{top:'xlarge'}}>
                <Text size="2xl" margin="large" alignSelf="center">Login</Text>
                <Box direction="row" alignSelf='center'>
                    <Box direction="column" alignSelf='center'>
                        <Box margin='small' width="300" alignSelf='center'>
                        <TextInput
                            placeholder="email"
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                            />
                        </Box>
                        <Box margin='small' width="300" alignSelf='center'>
                        <TextInput
                            placeholder="password"
                            value={password}
                            type="password"
                            onChange={event => setPassword(event.target.value)}
                            />
                        </Box>
                    </Box>
                    <Box margin='small' width="300" alignSelf='center'>
                        <Button primary disabled={!submit_ready} label="submit" type="submit"/>
                    </Box>
                </Box>
                <Box direction="row" alignSelf='center'>
                    <Box margin='small' width="300" alignSelf='center'>
                        <Button onClick={forgotNavigation} secondary label="forgot password" />
                    </Box>
                    <Box margin='small' width="300" alignSelf='center'>
                        <Button onClick={createNavigation} secondary label="create an account" />
                    </Box>
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

export default LoginPage;
