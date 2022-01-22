import collegeLogo from "../../../tempResources/fakeUniversity.jpeg";
import * as React from "react";
import EduPaper from "./EduPaper";
import {Stack} from "@mui/material";
import Divider from "@mui/material/Divider";

const colleges = [
    {
        image: collegeLogo,
        name: "Old Fake College",
        duration: "Sep. 2000 - June 2004",
        location: "City, Country",
        degree: "Fake Degree in Fake Major",
    },
    {
        image: collegeLogo,
        name: "New Fake College",
        duration: "Sep. 2004 - June 2006",
        location: "City, Country",
        degree: "Fake Degree in Fake Major",
    },
];

export default function Education(props) {
    return (
        <Stack
            spacing={2}
            divider={<Divider/>}
            maxWidth={'md'}
        >
            {colleges.map(college => (
                <EduPaper
                    image={college.image}
                    name={college.name}
                    duration={college.duration}
                    location={college.location}
                    degree={college.degree}
                />
            ))}
        </Stack>
    )
}