import { Button, Input, Text } from "@fluentui/react-components";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
    container: {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "20px",
        alignItems: "center",
        marginBottom: '15px'
    },
    input: {
        width: "100%",
    },
});

const AuthPage = () => {
    const styles = useStyles();

    return (
        <div>
            <div className={styles.container}>
                <Text>Пользователь:</Text>
                <Input className={styles.input} />
            </div>
            <div className={styles.container} style={{ gap: '60px' }}>
                <Text>Пароль:</Text>
                <Input type="password" className={styles.input} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', width: '100%'}}>
                <Button>Войти</Button>
                <Button>Отмена</Button>
            </div>
        </div>
    );
};

export default AuthPage;
