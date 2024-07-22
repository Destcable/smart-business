import { makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    headerLogo: { width: '2rem' },

    headerActions: { 
        display: 'flex',
        alignItems: 'center',
        color: '#787878',
    },
})