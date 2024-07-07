import { Accordion, AccordionHeader, AccordionItem, AccordionPanel } from "@fluentui/react-components";
import { lazy, Suspense } from "react";

const categorys = [
    { id: 1, name: "Зарплаты" },
    { id: 2, name: "Штрафы" },
    { id: 3, name: "Закупка" }
];

const RenderAmountOperationsByCategory = lazy(() => import("./render/AmountOperationsByCategory"));
const CountOperationsByCategory = lazy(() => import("./render/CountOperationsByCategory"));

const CostSmartAnalysisList = () => {
    return <Accordion collapsible>
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