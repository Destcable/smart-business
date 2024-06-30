import React from 'react';
import { makeStyles } from '@fluentui/react-components';
import Content from '@components/layout/Content';
import Sidebar from '@components/layout/Sidebar';

const useStyles = makeStyles({
	layout: {
		display: 'flex',
		height: '100vh',
		backgroundColor: '#f5f5f5',
	}
});


const Dashboard: React.FC = () => {
	const styles = useStyles();
	return <div className={styles.layout}>
		<Sidebar />
		<Content />
	</div>
};

export default Dashboard;
