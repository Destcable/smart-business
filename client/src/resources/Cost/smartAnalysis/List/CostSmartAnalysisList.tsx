import { Accordion, AccordionHeader, AccordionItem, AccordionPanel } from "@fluentui/react-components";
import { analyzeCostByCategory } from "../../../../smartAnalysis/Cost/analyzeByCategory";

const CostSmartAnalysisList = () => {
    console.log( 
        analyzeCostByCategory.amounts(),
        analyzeCostByCategory.countOperations()
    )
    return <Accordion collapsible>
        <AccordionItem value="1">
            <AccordionHeader>Анализ расходов по категориям</AccordionHeader>
            <AccordionPanel>
                <div>Accordion Panel 1</div>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="2">
            <AccordionHeader>Анализ количества операций по категориям</AccordionHeader>
            <AccordionPanel>
                <div>Accordion Panel 1</div>
            </AccordionPanel>
        </AccordionItem>
    </Accordion>
};

export default CostSmartAnalysisList;