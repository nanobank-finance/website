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
    Footer
} from 'grommet';
import '../App.css';
import { Test, Money, Currency, Home, Github, Twitter, Reddit, History, CloudUpload } from 'grommet-icons';
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
            placeholder: '#000000',
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

function decodeJwtResponse(token: string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

function ListItem(text: string, icon: any) {
    return (
    <Box fill margin="large">
        <Box alignSelf="center">{icon}</Box>
        <Text size="xl" margin={{vertical: "large", horizontal: "large"}} alignSelf="center">
            {text}
        </Text>
    </Box>
    );
}

function LandingPage() {
    var filename = "DALL·E 2022-11-28 18.50.29 - photorealistic nature.png";
    return (
        <Grommet theme={theme}>
        <Layer full={true} modal={false} animate={false}>
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
                    <Button focusIndicator={true} margin="large" label="login / signup" alignSelf='end'/>
            </Header>
                <Box direction='row' alignSelf="center" margin={{horizontal: "large"}} height="10%" width="90%" background={"url('./"+filename+"')"}>
                </Box>
                <Text size="2xl" margin="large" alignSelf="center">join a modern crypto bank</Text>
                <Box fill direction="row">
                    {ListItem("earn interest on your XNO", <Test />)}
                    {ListItem("take out a loan in XNO", <Home />)}
                </Box><Box fill direction="row">
                    {ListItem("insure your XNO", <CloudUpload />)}
                    {ListItem("schedule regular transfers", <History />)}
                </Box><Box fill direction="row">
                    {ListItem("no surprise fees", <Money />)}
                    {ListItem("buy XNO with USD", <Currency />)}
                </Box>
                <Box direction="row" margin="small">
                    <Box fill direction="row" as="footer">
                        <Button tip="github" margin={{horizontal: "small"}} alignSelf="end"><Github></Github></Button>
                        <Button tip="twitter" margin={{horizontal: "small"}} alignSelf="end"><Twitter></Twitter></Button>
                        <Button tip="reddit" margin={{horizontal: "small"}} alignSelf="end"><Reddit></Reddit></Button>
                        <Button tip="discord" margin={{horizontal: "small"}} alignSelf="end"><FaDiscord></FaDiscord></Button>
                        <Box fill></Box>
                    </Box>
                    <Box fill></Box>
                    <Box fill direction="row" as="footer">
                        <Box fill></Box>
                        <Anchor color="#000000" alignSelf="end" margin={{horizontal:"small"}}><Text>About</Text></Anchor>
                        <Anchor color="#000000" alignSelf="end" margin={{horizontal:"small"}}><Text>Careers</Text></Anchor>
                        <Anchor color="#000000" alignSelf="end" margin={{horizontal:"small"}}><Text>Legal</Text></Anchor>
                    </Box>
                </Box>
        </Layer>
        </Grommet>
    );
}

export default LandingPage;
