import { FirstPartOfMcLaren, SecondPartOfMcLaren } from './../data/mclaren-category-objects';
import ProductCardTemplate from './product-card-template';

const FirstPartOfMcLarenElement = document.getElementById('first-part-of-mclaren');
const SecondPartOfMcLarenElement = document.getElementById('second-part-of-mclaren');

function withFirstPartOfMcLarenLoader() {
    FirstPartOfMcLaren.map((object) => {
        FirstPartOfMcLarenElement.appendChild(ProductCardTemplate(
            object.imageUrl, object.alt, object.brand, object.carName, object.driveTrain,
            object.engineType, object.fuelSystem, object.maximumHorsePower, object.maximumTorque,
            object.TransmissionSpeeds, object.description, object.priceCar, object.carAvailable,
            'mclaren',
        ));
    });
}

function withSecondPartOfMcLarenLoader() {
    SecondPartOfMcLaren.map((object) => {
        SecondPartOfMcLarenElement.appendChild(ProductCardTemplate(
            object.imageUrl, object.alt, object.brand, object.carName, object.driveTrain,
            object.engineType, object.fuelSystem, object.maximumHorsePower, object.maximumTorque,
            object.TransmissionSpeeds, object.description, object.priceCar, object.carAvailable,
            'mclaren',
        ));
    });
}

export default async function onAsyncMcLarenRender() {
    const firstPartOfMcLarenProduct = withFirstPartOfMcLarenLoader();
    const secondPartOfMcLarenProduct = withSecondPartOfMcLarenLoader();

    await Promise.all([
        firstPartOfMcLarenProduct,
        secondPartOfMcLarenProduct,
    ]);
}
