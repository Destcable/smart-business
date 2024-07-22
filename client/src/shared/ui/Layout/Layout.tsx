import { Suspense } from 'react';
import Content from './Content';
import { makeStyles } from '@fluentui/react-components';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { sidebarData } from '@app/providers/sidebar';

const useStyles = makeStyles({
    layout: {
        display: 'flex',
        height: '100vh',
        backgroundColor: '#f5f5f5',
    }
});

const Layout = () => {
    const styles = useStyles();
    return (
        <div className={styles.layout}>
            <Sidebar sidebarData={sidebarData} />
            <Content>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Outlet />
                </Suspense>
            </Content>
        </div>
    )
};

export default Layout;