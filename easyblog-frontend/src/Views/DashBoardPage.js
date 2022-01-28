import {useState, Fragment} from "react";
import Cookies from "universal-cookie/es6";
import {Box, CircularProgress, Container, Typography} from "@mui/material";
import {Navigate} from "react-router-dom";
import DashBoardIndex from "../Components/dashboard/common/DashBoardIndex";

const VerifiedComponent = (props) => {
    const {verifyAuth} = props;

    return (
        // <div>
        //     {verifyAuth}
        // </div>
        <Fragment>
            {verifyAuth ? (
                <DashBoardIndex/>
            ) : (
                <Navigate to={"/"}/>
            )}
        </Fragment>
    )
};

export default function DashBoardPage() {
    const [firstLoad, setFirstLoad] = useState(true);
    const [verifyAuth, setVerifyAuth] = useState(true);
    const [verifying, setVerifying] = useState(true);
    const cookie = new Cookies();
    const userId = cookie.get("currUser").id;

    async function fetchAuth() {
        let response = await fetch("/api/user/verifyAuth=" + userId);
        let data = await response.json();
        setVerifyAuth(data);
        setVerifying(false);
    }

    if (firstLoad) {
        fetchAuth();
        setFirstLoad(false);
    }

    return (
        <Fragment>
            {verifying ? (
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                    <Box sx={{textAlign: 'center'}}>
                        <CircularProgress/>
                        <Typography sx={{mt:2}}>
                            Verifying Authentication...
                        </Typography>
                    </Box>
                </Box>
            ) : (
                <VerifiedComponent verifyAuth={verifyAuth}/>
            )}
        </Fragment>
    )
}