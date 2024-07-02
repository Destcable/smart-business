import { Suspense } from 'react';
import Content from './Content';
import Sidebar from './Sidebar';
import { makeStyles } from '@fluentui/react-components';
import { Outlet } from 'react-router-dom';

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
            <Sidebar />
            <Content>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Outlet />
                </Suspense>
            </Content>
        </div>
    )
};

export default Layout;