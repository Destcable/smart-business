export default function getNestedValue (obj: any, path: any) {
    return path.split('.').reduce((acc: any, part: any) => acc && acc[part], obj);
}
