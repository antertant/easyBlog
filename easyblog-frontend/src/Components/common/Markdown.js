import * as React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function MarkdownListItem(props) {
    return <Box component="li" sx={{ mt: 1, typography: 'body1' }} {...props} />;
}

function MarkDownLink(props) {
    return <Link
        {...props}
        target={'_blank'}
        sx={{
            color: '#3874ac',
            fontWeight: 500,
            textDecoration: 'none',
            fontFamily: 'Roboto',
            "&:hover": {
                color: '#38ac4b',}
        }}
    />;
}

const options = {
    overrides: {
        h1: {
            component: Typography,
            props: {
                gutterBottom: true,
                variant: 'h4',
                component: 'h1',
            },
        },
        h2: {
            component: Typography,
            props: { gutterBottom: true, variant: 'h6', component: 'h2' },
        },
        h3: {
            component: Typography,
            props: { gutterBottom: true, variant: 'subtitle1' },
        },
        h4: {
            component: Typography,
            props: {
                gutterBottom: true,
                variant: 'caption',
                paragraph: true,
            },
        },
        p: {
            component: Typography,
            props: { paragraph: true },
        },
        a: { component: MarkDownLink },
        li: {
            component: MarkdownListItem,
        },
    },
};

export default function Markdown(props) {
    return <ReactMarkdown options={options} {...props}/>;
}