import React from 'react';
import { FluentProvider, teamsLightTheme, makeStyles, shorthands } from '@fluentui/react-components';
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
  return (
    <div className={styles.sidebar}>
      <Text weight="bold" size={500}>Sidebar</Text>
      {/* Добавьте здесь элементы боковой панели */}
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
