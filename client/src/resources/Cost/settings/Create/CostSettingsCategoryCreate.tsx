import {
    Dialog,
    DialogTrigger,
    DialogSurface,
    DialogTitle,
    DialogBody,
    DialogActions,
    DialogContent,
    Button,
    makeStyles,
    Label,
    Input,
} from "@fluentui/react-components";
import { FC } from "react";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        gap: "2px",
    },
});

interface CostSettingsCategoryCreateProps {
    button: any
}

export const CostSettingsCategoryCreate: FC<CostSettingsCategoryCreateProps> = ({
    button
}) => {
    const styles = useStyles();

    return (
        <Dialog>
            <DialogTrigger disableButtonEnhancement>
                {button}
            </DialogTrigger>

            <DialogSurface>
                <DialogBody>
                    <DialogTitle>Создание категории для расходов</DialogTitle>
                    <DialogContent>
                        <div className={styles.root}>
                            <Label>Наименование категории</Label>
                            <Input />
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <DialogTrigger disableButtonEnhancement>
                            <Button appearance="secondary">Закрыть</Button>
                        </DialogTrigger>
                        <Button appearance="primary">Создать</Button>
                    </DialogActions>
                </DialogBody>
            </DialogSurface>

        </Dialog>
    )
}