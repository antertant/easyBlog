import {
    makeStyles,
    Container,
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Grid,
    Typography
} from "@material-ui/core";
import GroupIcon from "@material-ui/icons/Group";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(7),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "100%"
    }
}));

export default function AddEmployee() {
    const classes = useStyles();
    const [firstLoad, setLoad] = React.useState(true);

    const [selectedDate, setSelectedDate] = React.useState(
        new Date("1998-04-02T21:11:54")
    );
    const [name, setName] = React.useState("");
    const [department, setDepartment] = React.useState("");
    const [gender, setGender] = React.useState("");

    const handleDateChange = date => setSelectedDate(date.target.value);
    const handleNameChange = event => setName(event.target.value);
    const handleDepartmentChange = event => setDepartment(event.target.value);
    const handleGenderChange = event => setGender(event.target.value);

    const [message, setMessage] = React.useState("Nothing saved in the session");

    async function sampleFunc(toInput) {
        const response = await fetch("/api/employee", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(toInput)
        });
        let body = await response.json();
        console.log(body.id);
        setMessage(body.id ? "Data successfully updated" : "Data update failed");
    }

    const handleSubmit = variables => {
        const toInput = {name, department, gender, dob: selectedDate};
        sampleFunc(toInput);
        setName("");
        setDepartment("");
        setGender("");
    };

    if (firstLoad) {
        setLoad(false);
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <GroupIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Employee Directory
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                value={name}
                                label="Name"
                                name="name"
                                autoComplete="name"
                                onChange={handleNameChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="department"
                                name="department"
                                variant="outlined"
                                required
                                fullWidth
                                value={department}
                                id="department"
                                label="Department"
                                onChange={handleDepartmentChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="gender"
                                value={gender}
                                label="Gender"
                                name="gender"
                                autoComplete="gender"
                                onChange={handleGenderChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="date"
                                label="Date of birth"
                                type="date"
                                defaultValue="1998-04-02"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true
                                }}
                                onChange={handleDateChange}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        // type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        preventDefault
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        Save
                    </Button>

                    <Grid container justify="center">
                        <Grid item>
                            <Link to="/view">
                                View Employee Records
                            </Link>
                        </Grid>
                    </Grid>
                </form>

                <Typography style={{ margin: 7 }} variant="body1">
                    Status: {message}
                </Typography>
            </div>
        </Container>
    )
}