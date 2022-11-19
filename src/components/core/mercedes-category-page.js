import { FirstPartOfMercedesBenz, SecondPartOfMercedesBenz } from '../data/mercedes-benz-category-objects';
import ProductCardTemplate from './product-card-template';

const FirstPartOfMercedesElement = document.getElementById('first-part-of-mercedes');
const SecondPartOfMercedesElement = document.getElementById('second-part-of-mercedes');

function withFirstPartOfMercedesLoader() {
    FirstPartOfMercedesBenz.map((object) => {
        FirstPartOfMercedesElement.appendChild(ProductCardTemplate(
            object.imageUrl, object.alt, object.brand, object.carName, object.driveTrain,
            object.engineType, object.fuelSystem, object.maximumHorsePower, object.maximumTorque,
            object.TransmissionSpeeds, object.description, object.priceCar, object.carAvailable,
            'mercedes',
        ));
    });
}

function withSecondPartOfMercedesLoader() {
    SecondPartOfMercedesBenz.map((object) => {
        SecondPartOfMercedesElement.appendChild(ProductCardTemplate(
            object.imageUrl, object.alt, object.brand, object.carName, object.driveTrain,
            object.engineType, object.fuelSystem, object.maximumHorsePower, object.maximumTorque,
            object.TransmissionSpeeds, object.description, object.priceCar, object.carAvailable,
            'mercedes',
        ));
    });
}

export default async function onAsyncMercedesRender() {
    const firstPartOfMercedesProduct = withFirstPartOfMercedesLoader();
    const secondPartOfMercedesProduct = withSecondPartOfMercedesLoader();

    await Promise.all([
        firstPartOfMercedesProduct,
        secondPartOfMercedesProduct,
    ]);
}
