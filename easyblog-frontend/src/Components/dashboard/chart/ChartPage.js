import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import Container from "@mui/material/Container";
import * as React from "react";
import {Typography} from "@mui/material";

export default function ChartPage() {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <Chart />
                    </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <Deposits />
                    </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Orders />
                    </Paper>
                </Grid>
            </Grid>
            <Typography sx={{ mt: 2 }}>
                Waiting to add real data...
            </Typography>
        </Container>
    );
}