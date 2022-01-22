import * as React from 'react';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Main from '../Components/blog/Main';
import Sidebar from '../Components/blog/Sidebar';
import post1 from '../tempResources/blog-post.1.md';
import post2 from '../tempResources/blog-post.2.md';
import post3 from '../tempResources/blog-post.3.md';
import MainFeaturedPost from "../Components/blog/MainFeaturedPost";

const posts = [post1, post2, post3];

const sidebar = {
    title: 'About',
    description:
        `This is a blog and personal page template built by 
        [Haocheng Wu](https://github.com/antertant). Feel free
        to establish your own website through it!`,
    archives: [
        { title: 'March 2020', url: '#' },
        { title: 'February 2020', url: '#' },
        { title: 'January 2020', url: '#' },
        { title: 'November 1999', url: '#' },
        { title: 'October 1999', url: '#' },
        { title: 'September 1999', url: '#' },
        { title: 'August 1999', url: '#' },
        { title: 'July 1999', url: '#' },
        { title: 'June 1999', url: '#' },
        { title: 'May 1999', url: '#' },
        { title: 'April 1999', url: '#' },
    ],
    social: [
        { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/antertant' },
        { name: 'LinkedIn', icon: LinkedInIcon, url: 'https://www.linkedin.com/in/haocheng-wu-736b2410a/'},
        { name: 'Twitter', icon: TwitterIcon, url: ''},
        { name: 'Facebook', icon: FacebookIcon, url: ''},
    ],
};

export default function Home() {

    return (
        <main>
            <Grid container spacing={1} sx={{ mt: 2 }}>
                <Main title="From the firehose" posts={posts} />
                <Sidebar
                    title={sidebar.title}
                    description={sidebar.description}
                    archives={sidebar.archives}
                    social={sidebar.social}
                />
            </Grid>
        </main>
    );
}