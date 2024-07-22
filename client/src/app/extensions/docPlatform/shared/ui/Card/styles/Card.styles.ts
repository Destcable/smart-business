import { makeStyles, tokens } from "@fluentui/react-components";

export const useStyles = makeStyles({
    title: { margin: '0 0 12px' },

    description: { margin: '0 0 12px' },

    card: {
        width: '100%',
        userSelect: 'none',
        height: '8rem',
    },

    caption: { color: tokens.colorNeutralForeground3 },

    logo: {
        borderRadius: '4px',
        width: '48px',
        height: '48px',
    },

    text: { margin: '0' },
});