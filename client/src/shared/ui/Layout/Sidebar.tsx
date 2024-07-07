import React from 'react';
import { makeStyles, shorthands, Tree, TreeItem, TreeItemLayout } from '@fluentui/react-components';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
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

const Sidebar: React.FC = () => {
    const styles = useStyles();
    return (
        <div className={styles.sidebar}>
            <Tree aria-label="Default">
                <NavLink to="/" className={styles.link}>
                    <TreeItemLayout>Главная</TreeItemLayout>
                </NavLink>
                <TreeItem itemType="branch">
                    <TreeItemLayout>Проекты</TreeItemLayout>
                    <Tree>

                        <TreeItem itemType="leaf">
                            <NavLink to="/project/data" className={styles.link}>
                                <TreeItemLayout>Управление данными</TreeItemLayout>
                            </NavLink>
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
                            <NavLink to="/cost/analysis" className={styles.link}>
                                <TreeItemLayout>Смарт-анализ</TreeItemLayout>
                            </NavLink>
                        </TreeItem>

                        <TreeItem itemType="leaf">
                            <NavLink to="/cost/data" className={styles.link}>
                                <TreeItemLayout>Управление данными</TreeItemLayout>
                            </NavLink>
                        </TreeItem>

                        <TreeItem itemType="leaf">
                            <NavLink to="/cost/settings" className={styles.link}>
                                <TreeItemLayout>Настройки</TreeItemLayout>
                            </NavLink>
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