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

const SMALL_SCREEN_SIZE = 700;
const MEDIUM_SCREEN_SIZE = 1000;

function HeaderGroup(width: number, loginNavigation: () => void) {
    if(width < SMALL_SCREEN_SIZE) {
        return (<Header background="brand">
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
        </Header>)
    } else {
        return (<Header background="brand">
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
            <Button onClick={loginNavigation} focusIndicator={true} margin="large" label="login / signup" alignSelf='end'/>
        </Header>)
    }
}

function FooterGroup(width: number, loginNavigation: () => void) {
    if(width < SMALL_SCREEN_SIZE) {
        return (
            <Box direction="column" margin="small">
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
                    <Box fill></Box>
                    <Button onClick={loginNavigation} focusIndicator={true} label="login / signup" alignSelf='end' margin="small"/>
                </Box>
                <Box direction="row" margin="small">
                    <Anchor color="gray" alignSelf="center"><Text>Nano Bank LLC © {new Date().getFullYear()}</Text></Anchor>
                </Box>
            </Box>);
    } else {
        return (
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
            </Box>);
    }
}

function ListItem(text: string, icon: any, vert_margin: string, horiz_margin: string) {
    return (
    <Box fill margin="large">
        <Box alignSelf="center">{icon}</Box>
        <Text size="xl" margin={{vertical: vert_margin, horizontal: horiz_margin}} alignSelf="center">
            {text}
        </Text>
    </Box>
    );
}

function ItemGrid(width: number) {
    if(width < SMALL_SCREEN_SIZE) {
        // small screen / phone size
        return (<Box fill direction='column' margin={{bottom: "large"}} overflow={{vertical: "scroll"}}>
        <Box fill direction="row" margin={{vertical:"xlarge"}}>
            {ListItem("earn interest on your XNO", <Test size="large"/>, "large", "large")}
        </Box><Box fill direction="row" margin={{vertical:"xlarge"}}>
            {ListItem("take out a loan in XNO", <Home size="large"/>, "large", "large")}
        </Box><Box fill direction="row" margin={{vertical:"xlarge"}}>
            {ListItem("insure your XNO", <CloudUpload size="large"/>, "large", "large")}
        </Box><Box fill direction="row" margin={{vertical:"xlarge"}}>
            {ListItem("schedule regular transfers", <History size="large"/>, "large", "large")}
        </Box><Box fill direction="row" margin={{vertical:"xlarge"}}>
            {ListItem("no surprise fees", <Money size="large"/>, "large", "large")}
        </Box><Box fill direction="row" margin={{vertical:"xlarge"}}>
            {ListItem("buy XNO with USD", <Currency size="large"/>, "large", "large")}
        </Box>
        </Box>);
    } else if(width < MEDIUM_SCREEN_SIZE) {
        // medium screen
        return (<Box fill direction='column' margin={{bottom: "large"}} overflow={{vertical: "scroll"}}><Box fill direction="row">
            {ListItem("earn interest on your XNO", <Test size="large"/>, "large", "large")}
            {ListItem("take out a loan in XNO", <Home size="large"/>, "large", "large")}
        </Box><Box fill direction="row">
            {ListItem("insure your XNO", <CloudUpload size="large"/>, "large", "large")}
            {ListItem("schedule regular transfers", <History size="large"/>, "large", "large")}
        </Box><Box fill direction="row">
            {ListItem("no surprise fees", <Money size="large"/>, "large", "large")}
            {ListItem("buy XNO with USD", <Currency size="large"/>, "large", "large")}
        </Box></Box>);
    } else {
        // large screen
        return (<Box fill direction='column' margin={{bottom: "large"}} overflow={{vertical: "scroll"}}><Box fill direction="row">
        {ListItem("earn interest on your XNO", <Test size="large"/>, "large", "small")}
        {ListItem("take out a loan in XNO", <Home size="large"/>, "large", "small")}
        {ListItem("insure your XNO", <CloudUpload size="large"/>, "large", "small")}
        </Box><Box fill direction="row">
        {ListItem("schedule regular transfers", <History size="large"/>, "large", "small")}
        {ListItem("no surprise fees", <Money size="large"/>, "large", "small")}
        {ListItem("buy XNO with USD", <Currency size="large"/>, "large", "small")}
        </Box></Box>);
    }
}

function LandingPage() {
    const filename = "DALL·E 2022-11-28 18.50.29 - photorealistic nature.png";
    const [width, setWidth] = useState<number>(() => {return getWindowWidth()});
    let navigate = useNavigate(); 
    function loginNavigation() {
        navigate(`login`);
    }

    function getWindowWidth() {
        return Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        );
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
    window.addEventListener("load", componentWillMount);

    return (
        <Grommet theme={theme}>
        <Layer full={true} modal={false} animate={false}>
            {HeaderGroup(width, loginNavigation)}
            <Box direction='row' alignSelf="center" margin={{horizontal: "large"}} height="10%" width="90%" background={"url('./"+filename+"')"}>
            </Box>
            <Box>
                <Text size="2xl" margin="large" alignSelf="center">join a modern crypto bank</Text>
                {ItemGrid(width)}
                {FooterGroup(width, loginNavigation)}
            </Box>
        </Layer>
        </Grommet>
    );
}

export default LandingPage;
