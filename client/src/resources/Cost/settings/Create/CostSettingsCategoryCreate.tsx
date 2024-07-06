import { FC } from "react";
import { useForm } from "react-hook-form"
import { createCostCategorySettings } from "@entities/cost/api/createCostCategorySettings";
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

    const { register, handleSubmit } = useForm()

    const onSubmit = (data: any) => createCostCategorySettings({
        for: "cost",
        name: data.name
    })

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
                            <Input {...register("name", { required: true })} />
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <DialogTrigger disableButtonEnhancement>
                            <Button appearance="secondary">Закрыть</Button>
                        </DialogTrigger>
                        <DialogTrigger disableButtonEnhancement>
                        <Button
                            appearance="primary"
                            onClick={handleSubmit(onSubmit)}
                        >
                            Создать
                        </Button>
                        </DialogTrigger>
                    </DialogActions>
                </DialogBody>
            </DialogSurface>

        </Dialog>
    )
}