import React from 'react';
import { FluentProvider, teamsLightTheme, makeStyles, shorthands, Tree, TreeItem, TreeItemLayout } from '@fluentui/react-components';
import { Text } from '@fluentui/react-components';

const useStyles = makeStyles({
	layout: {
		display: 'flex',
		height: '100vh',
		backgroundColor: '#f5f5f5',
	},
	sidebar: {
		width: '200px',
		backgroundColor: '#ffffff',
		...shorthands.padding('10px'),
		borderRight: `1px solid #e1e1e1`,
	},
	content: {
		flexGrow: 1,
		backgroundColor: '#ffffff',
		...shorthands.padding('20px'),
	},
});

const Sidebar: React.FC = () => {
	const styles = useStyles();
	console.log(1);
	return (
		<div className={styles.sidebar}>
			<Tree aria-label="Default">
				<TreeItem itemType="branch">
					<TreeItemLayout>Проекты</TreeItemLayout>
					<Tree>
						<TreeItem itemType="leaf">
							<TreeItemLayout>Управление данными</TreeItemLayout>
						</TreeItem>
						<TreeItem itemType="leaf">
							<TreeItemLayout>Настройки</TreeItemLayout>
						</TreeItem>
					</Tree>
				</TreeItem>
				<TreeItem itemType="branch">
					<TreeItemLayout>Расходы</TreeItemLayout>
					<Tree>
						<TreeItem itemType="leaf">
							<TreeItemLayout>Управление данными</TreeItemLayout>
						</TreeItem>
						<TreeItem itemType="leaf">
							<TreeItemLayout>Настройки</TreeItemLayout>
						</TreeItem>
					</Tree>
				</TreeItem>
				<TreeItem itemType="branch">
					<TreeItemLayout>Доходы</TreeItemLayout>
					<Tree>
						<TreeItem itemType="leaf">
							<TreeItemLayout>Управление данными</TreeItemLayout>
						</TreeItem>
						<TreeItem itemType="leaf">
							<TreeItemLayout>Настройки</TreeItemLayout>
						</TreeItem>
					</Tree>
				</TreeItem>
				<TreeItem itemType="branch">
					<TreeItemLayout>Справочники</TreeItemLayout>
					<Tree>
						<TreeItem itemType="leaf">
							<TreeItemLayout>Контрагенты</TreeItemLayout>
						</TreeItem>
					</Tree>
				</TreeItem>
			</Tree>
		</div>
	);
};

const Content: React.FC = () => {
	const styles = useStyles();
	return (
		<div className={styles.content}>
			<Text weight="bold" size={500}>Content</Text>
			{/* Добавьте здесь элементы основного содержимого */}
		</div>
	);
};

const Layout: React.FC = () => {
	const styles = useStyles();
	return (
		<FluentProvider theme={teamsLightTheme}>
			<div className={styles.layout}>
				<Sidebar />
				<Content />
			</div>
		</FluentProvider>
	);
};

export default Layout;
