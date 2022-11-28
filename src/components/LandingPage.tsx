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
    Header
} from 'grommet';
import '../App.css';
import { StatusGood } from 'grommet-icons';
import { GoogleLogin } from '@react-oauth/google';
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

const theme = {
    global: {
    colors: {
        // brand: '#809bce',
        // background: '#809bce',
        placeholder: '#000000',
        good: '#37eb34'
    },
    font: {
        size: '18px',
        height: '20px',
    },
    },
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
    var connected = true;
    // const [socket, setSocket] = useState<Socket>();
    // const [connected, setConnected] = useState<boolean>(() => {
    //   return false;
    // });

    // const navigate = useNavigate();

    // useEffect(() => {
    //   connect();
    // }, []);

    // function connect() {
    //   if(window.location.hostname === 'textmmo.com') {
    //       setSocket(io('https://server.textmmo.com/', {
    //           secure:true, transports: ['websocket']
    //       }));
    //   } else {
    //       setSocket(io('http://localhost:8080/', {}));
    //   }
    // }

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
                    <Button margin="medium" label="login / signup" alignSelf='end'/>
            </Header>
        </Layer>
        </Grommet>
    );
}

export default LandingPage;
