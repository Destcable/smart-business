import { Accordion, AccordionHeader, AccordionItem, AccordionPanel } from "@fluentui/react-components";
import { analyzeCostByCategory } from "../../../../smartAnalysis/Cost/analyzeByCategory";

const categorys = [
    { id: 1, name: "Зарплаты" },
    { id: 2, name: "Штрафы" },
    { id: 3, name: "Закупка" }
];


const CostSmartAnalysisList = () => {
    const amountOperationsByCategory = analyzeCostByCategory(categorys).amounts();
    const countOperationsByCategory = analyzeCostByCategory(categorys).countOperations();

    return <Accordion collapsible>
        <AccordionItem value="1">
            <AccordionHeader>Сумма расходов по категориям</AccordionHeader>
            <AccordionPanel>
                {Object.entries(amountOperationsByCategory).map(([key, value]) => {
                    const category = categorys.filter(cat => cat.id == key);
                    console.log(category)
                    return (
                        <p key={key}>Категория {category[0].name}: {value}</p>
                    )
                }
                )}
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="2">
            <AccordionHeader>Количества операций по категориям</AccordionHeader>
            <AccordionPanel>
                {Object.entries(countOperationsByCategory).map(([key, value]) => {
                    const category = categorys.filter(cat => cat.id == key);
                    console.log(category)
                    return (
                        <p key={key}>Категория {category[0].name}: {value}</p>
                    )
                }
                )}
            </AccordionPanel>
        </AccordionItem>
    </Accordion>
};

export default CostSmartAnalysisList;