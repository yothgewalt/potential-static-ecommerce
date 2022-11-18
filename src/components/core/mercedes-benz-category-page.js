import { FirstPartOfMercedesBenz, SecondPartOfMercedesBenz } from './../data/mercedes-benz-category-objects';
import ProductCardTemplate from './product-card-template';

const FirstPartOfMercedesBenzElement = document.getElementById('first-part-of-mercedes-benz');
const SecondPartOfMercedesBenzElement = document.getElementById('second-part-of-mercedes-benz');

function withFirstPartOfMercedesBenzLoader() {
    FirstPartOfMercedesBenz.map((object) => {
        FirstPartOfMercedesBenzElement.appendChild(ProductCardTemplate(
            object.imageUrl, object.alt, object.brand, object.carName, object.driveTrain,
            object.engineType, object.fuelSystem, object.maximumHorsePower, object.maximumTorque,
            object.TranmissionSpeeds, object.description, object.priceCar, object.carAvailable,
            'mercedes-benz',
        ));
    });
}

function withSecondPartOfMercedesBenzLoader() {
    SecondPartOfMercedesBenz.map((object) => {
        SecondPartOfMercedesBenzElement.appendChild(ProductCardTemplate(
            object.imageUrl, object.alt, object.brand, object.carName, object.driveTrain,
            object.engineType, object.fuelSystem, object.maximumHorsePower, object.maximumTorque,
            object.TranmissionSpeeds, object.description, object.priceCar, object.carAvailable,
            'mercedes-benz',
        ));
    });
}

export default async function onAsyncMercedesBenzRender() {
    const firstPartOfMercedesBenzProduct = withFirstPartOfMercedesBenzLoader();
    const secondPartOfMercedesBenzProduct = withSecondPartOfMercedesBenzLoader();

    await Promise.all([
        firstPartOfMercedesBenzProduct,
        secondPartOfMercedesBenzProduct,
    ]);
}
