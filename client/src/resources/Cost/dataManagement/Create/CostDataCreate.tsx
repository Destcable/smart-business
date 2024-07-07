import { DatePicker } from "@fluentui/react-datepicker-compat";
import Title from "@shared/ui/Title/Title";

const CostDataCreate = () => {
    return <>
        <Title>Создание расхода</Title>
        <form>
        <DatePicker
            // minDate={minDate}
            // maxDate={maxDate}
            // formatDate={onFormatDate}
            placeholder="Select a date..."
            allowTextInput
        // onValidationResult={(data) => setError(data.error)}
        // className={styles.control}
        />
    </form>
    </>
};

export default CostDataCreate;