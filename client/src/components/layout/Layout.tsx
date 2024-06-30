import Sidebar from '@components/layout/Sidebar';
import { makeStyles } from '@fluentui/react-components';
import Content from './Content';
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
                <Outlet />
            </Content>
        </div>
    )
};

export default Layout;