import { makeStyles, Subtitle1 } from "@fluentui/react-components";
import { PropsWithChildren } from "react";

const useStyles = makeStyles({
    title: { margin: "0 0 12px" },
})

const Title = ({ children }: PropsWithChildren) => {
    const styles = useStyles();

    return (
        <Subtitle1 as="h4" block className={styles.title}>
            {children}
        </Subtitle1>
    );
};

export default Title;