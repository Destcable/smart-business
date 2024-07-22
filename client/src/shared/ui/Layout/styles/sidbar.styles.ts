import { makeStyles, shorthands } from "@fluentui/react-components";

export const useStyles = makeStyles({
    sidebar: {
        width: '200px',
        backgroundColor: '#ffffff',
        ...shorthands.padding('10px'),
        borderRight: `1px solid #e1e1e1`,
    },
    link: {
        display: 'block',
        color: 'inherit',
        textDecoration: 'none',
        padding: '5px 0',
        '&.active': {
            fontWeight: 'bold',
        }
    },
});