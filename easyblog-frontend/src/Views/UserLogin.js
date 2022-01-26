import {Navigate, useSearchParams} from "react-router-dom";
import Cookies from "universal-cookie/es6";
import {useState} from "react";
import {CircularProgress, Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";

function RedirectComponent(props) {
    const {saving} = props;
    if (saving) {
        return (
            <Box maxWidth={"lg"} sx={{display: 'flex'}}>
                <Container sx={{position: 'absolute', bottom: '50%', textAlign: 'center'}}>
                    <CircularProgress/>
                    <Typography color={'primary'} variant={'subtitle1'} sx={{mt: 2}}>
                        Signing in...
                    </Typography>
                </Container>
            </Box>
        );
    }
    else {
        return (
            <Navigate to={"/"}/>
        )
    }
}

export default function UserLogin() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [saving, setSaving] = useState(true);
    const userId = searchParams.get("user_id");

    async function fetchUser() {
        let response = await fetch("/api/user/getUser=" + userId);
        let data = await response.json();
        const cookies = new Cookies();
        cookies.set('currUser', data, { path: '/', maxAge: 604800 });
        setSaving(false);
    }

    if (saving) {
        fetchUser();
    }

    return (
        <RedirectComponent saving={saving}/>
    );
}