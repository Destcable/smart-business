// @ts-ignore
import Icon from '/assets/icons/docs.png'
import { Button } from '@fluentui/react-components';
import { Layer20Regular } from '@fluentui/react-icons';
import { HeaderCreateSpaceButton } from './components/HeaderCreateSpaceButton';
import { HeaderCreateSpaceDialogWrapper } from './components/HeaderCreateSpaceDialogWrapper';
import { HeaderLogo } from './components/HeaderLogo';
import { HeaderActionsWrapper } from './components/actions/HeaderActionsWrapper';
import { useStyles } from './styles/Header.styles';
import { HeaderActionsSearch } from './components/actions/HeaderActionsSearch';
import { HeaderActionsSpace } from './components/actions/HeaderActionsSpace';

export const Header = () => {
    const classes = useStyles();

    return <header className={classes.header}>
        <HeaderLogo image={Icon} classes={classes} />
        <HeaderActionsWrapper classes={classes}>
            <HeaderActionsSpace>
                <HeaderCreateSpaceDialogWrapper>
                    <HeaderCreateSpaceButton />
                </HeaderCreateSpaceDialogWrapper>
                <hr />
                <Button appearance="subtle" icon={<Layer20Regular />}>
                    Основное пространство
                </Button>
            </HeaderActionsSpace>
            <HeaderActionsSearch />
        </HeaderActionsWrapper>
    </header>
};
