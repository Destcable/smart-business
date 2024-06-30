import React from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';
import { Text } from '@fluentui/react-components';

const useStyles = makeStyles({
	content: {
		flexGrow: 1,
		backgroundColor: '#ffffff',
		...shorthands.padding('20px'),
	},
});

const Content: React.FC = () => {
	const styles = useStyles();

	return (
		<div className={styles.content}>
			<Text weight="bold" size={500}>Content</Text>
			{/* Добавьте здесь элементы основного содержимого */}
		</div>
	);
};

export default Content;