import React from 'react';
import { makeStyles, shorthands, Tree, TreeItem, TreeItemLayout } from '@fluentui/react-components';

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
});

const Sidebar: React.FC = () => {
	const styles = useStyles();
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

export default Sidebar;