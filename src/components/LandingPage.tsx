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
    Heading
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
            good: '#37eb34'
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
            <Box direction="row">
                <Box margin={{horizontal: "large"}} height="100%" width="100%" background={"url('./"+filename+"')"} alignSelf="start">
                </Box>
                <Box>
                    <Text size="2xl" margin={{vertical: "medium", horizontal: "medium"}} alignSelf="center">
                        <Test /> earn interest on your XNO
                    </Text>
                    <Text size="2xl" margin={{vertical: "medium", horizontal: "medium"}} alignSelf="center">
                        <Home /> pay your mortgage in XNO
                    </Text>
                    <Text size="2xl" margin={{vertical: "medium", horizontal: "medium"}} alignSelf="center">
                        <Money /> take out a personal loan in XNO
                    </Text>
                    <Text size="2xl" margin={{vertical: "medium", horizontal: "medium"}} alignSelf="center">
                        <Currency /> buy XNO with USD
                    </Text>
                </Box>
            </Box>
        </Layer>
        </Grommet>
    );
}

export default LandingPage;
