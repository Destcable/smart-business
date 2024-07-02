import React, { ReactNode } from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
	content: {
		flexGrow: 1,
		backgroundColor: '#ffffff',
		...shorthands.padding('20px'),
	},
});

interface ContentProps { 
    children: ReactNode
}

const Content: React.FC<ContentProps> = ({ children }) => {
	const styles = useStyles();

	return (
		<div className={styles.content}>
            {children}
		</div>
	);
};

export default Content;