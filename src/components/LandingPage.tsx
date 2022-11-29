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
import { Test, Money, Currency, Home } from 'grommet-icons';
import { GoogleLogin } from '@react-oauth/google';
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

const theme = {
    global: {
        colors: {
            brand: '#FFFFFF',
            // background: '#809bce',
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
                <Box direction='row' margin={{horizontal: "large"}} height="10%" width="90%" background={"url('./"+filename+"')"}>
                </Box>
                <Text size="2xl" margin="large" alignSelf="center">join a modern crypto bank</Text>
                <Box direction="row">
                    <Box fill>
                        <Box margin="medium">
                        <Box alignSelf="center"><Test /></Box>
                        <Text size="xl" margin={{vertical: "medium", horizontal: "medium"}} alignSelf="center">
                            earn interest on your XNO
                        </Text>
                        </Box>
                        <Box margin="medium">
                        <Box alignSelf="center"><Home /></Box>
                        <Text size="xl" margin={{vertical: "medium", horizontal: "medium"}} alignSelf="center">
                            pay your mortgage in XNO
                        </Text>
                        </Box>
                    </Box>
                    <Box fill>
                        <Box margin="medium">
                        <Box alignSelf="center"><Money /></Box>
                        <Text size="xl" margin={{vertical: "medium", horizontal: "medium"}} alignSelf="center">
                            take out a personal loan in XNO
                        </Text>
                        </Box>
                        <Box margin="medium">
                        <Box alignSelf="center"><Currency /></Box>
                        <Text size="xl" margin={{vertical: "medium", horizontal: "medium"}} alignSelf="center">
                            buy XNO with USD
                        </Text>
                        </Box>
                    </Box>
                </Box>
            <Box direction="row">
                <Text></Text>
            </Box>
        </Layer>
        </Grommet>
    );
}

export default LandingPage;
