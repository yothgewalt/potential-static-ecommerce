export default function splitClassNames(...classes) {
    let aggregateClasses = classes.filter(Boolean).join(' ');

    return aggregateClasses.split(" ");
}
