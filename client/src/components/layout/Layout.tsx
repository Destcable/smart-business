import Sidebar from '@components/layout/Sidebar';
import { makeStyles } from '@fluentui/react-components';
import Content from './Content';
import { ReactNode, FC } from 'react';

const useStyles = makeStyles({
    layout: {
        display: 'flex',
        height: '100vh',
        backgroundColor: '#f5f5f5',
    }
});

interface LayoutProps { 
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    const styles = useStyles();
    return (
        <div className={styles.layout}>
            <Sidebar />
            <Content>
                {children}
            </Content>
        </div>
    )
};

export default Layout;