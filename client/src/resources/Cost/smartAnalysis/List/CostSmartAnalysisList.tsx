import getCostCategorySettingsList from "@entities/cost/api/getCostCategorySettingsList";
import { Accordion, AccordionHeader, AccordionItem, AccordionPanel } from "@fluentui/react-components";
import { lazy, Suspense, useState } from "react";

const RenderAmountOperationsByCategory = lazy(() => import("./render/AmountOperationsByCategory"));
const CountOperationsByCategory = lazy(() => import("./render/CountOperationsByCategory"));

const CostSmartAnalysisList = () => {
    const [categorys, setCategorys] = useState<any>(null);

    getCostCategorySettingsList().then(cost => setCategorys(cost));

    return <Accordion multiple>
        <AccordionItem value="1">
            <AccordionHeader>Сумма расходов по категориям</AccordionHeader>
            <AccordionPanel>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <RenderAmountOperationsByCategory
                        categorys={categorys}
                    />
                </Suspense>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="2">
            <AccordionHeader>Количества операций по категориям</AccordionHeader>
            <AccordionPanel>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <CountOperationsByCategory
                        categorys={categorys}
                    />
                </Suspense>
            </AccordionPanel>
        </AccordionItem>
    </Accordion>
};

export default CostSmartAnalysisList;