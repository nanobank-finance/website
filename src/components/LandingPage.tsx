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

function ItemGrid(width: number) {
    if(width < 600) {
        return (<Box>
        <Box fill direction="row">
            {ListItem("earn interest on your XNO", <Test size="large"/>)}
        </Box><Box fill direction="row">
            {ListItem("take out a loan in XNO", <Home size="large"/>)}
        </Box><Box fill direction="row">
            {ListItem("insure your XNO", <CloudUpload size="large"/>)}
        </Box><Box fill direction="row">
            {ListItem("schedule regular transfers", <History size="large"/>)}
        </Box><Box fill direction="row">
            {ListItem("no surprise fees", <Money size="large"/>)}
        </Box><Box fill direction="row">
            {ListItem("buy XNO with USD", <Currency size="large"/>)}
        </Box>
        </Box>);
    } else if(width < 1000) {
        return (<Box><Box fill direction="row">
            {ListItem("earn interest on your XNO", <Test size="large"/>)}
            {ListItem("take out a loan in XNO", <Home size="large"/>)}
        </Box><Box fill direction="row">
            {ListItem("insure your XNO", <CloudUpload size="large"/>)}
            {ListItem("schedule regular transfers", <History size="large"/>)}
        </Box><Box fill direction="row">
            {ListItem("no surprise fees", <Money size="large"/>)}
            {ListItem("buy XNO with USD", <Currency size="large"/>)}
        </Box></Box>);
    } else {
        return (<Box><Box fill direction="row">
        {ListItem("earn interest on your XNO", <Test size="large"/>)}
        {ListItem("take out a loan in XNO", <Home size="large"/>)}
        {ListItem("insure your XNO", <CloudUpload size="large"/>)}
        </Box><Box fill direction="row">
        {ListItem("schedule regular transfers", <History size="large"/>)}
        {ListItem("no surprise fees", <Money size="large"/>)}
        {ListItem("buy XNO with USD", <Currency size="large"/>)}
        </Box></Box>);
    }
}

function LandingPage() {
    const filename = "DALL·E 2022-11-28 18.50.29 - photorealistic nature.png";
    const [width, setWidth] = useState<number>(() => {return 0});

    function getWindowWidth() {
        var ret = Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        );
        console.log(ret);
        return ret;
    }
    
    function onResize() {
        window.requestAnimationFrame(() => {
            setWidth(getWindowWidth());
        });
      }
    
    function componentWillMount() {
        setWidth(getWindowWidth());
    }

    window.addEventListener("resize", onResize);

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
                    {ItemGrid(width)}
                <Box direction="row" margin={{horizontal:"medium", vertical:"medium"}}>
                    <Box fill direction="row" as="footer">
                    <Anchor color="gray" alignSelf="center"><Text>Nano Bank LLC © {new Date().getFullYear()}</Text></Anchor>
                    </Box>
                </Box>
                <Box direction="row" margin="small">
                    <Box fill direction="row" as="footer">
                        <Button tip="github" margin={{horizontal: "small"}} alignSelf="end"><Github></Github></Button>
                        <Button tip="twitter" margin={{horizontal: "small"}} alignSelf="end"><Twitter></Twitter></Button>
                        <Button tip="reddit" margin={{horizontal: "small"}} alignSelf="end"><Reddit></Reddit></Button>
                        <Button tip="discord" margin={{horizontal: "small"}} alignSelf="end"><FaDiscord></FaDiscord></Button>
                        <Button tip="medium" margin={{horizontal: "small"}} alignSelf="end"><Medium></Medium></Button>
                        <Box fill></Box>
                    </Box>
                    <Box fill direction="row" as="footer">
                    </Box>
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
