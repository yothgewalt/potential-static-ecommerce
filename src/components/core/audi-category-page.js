import { FirstPartOfAudi, SecondPartOfAudi } from './../data/audi-category-objects';
import ProductCardTemplate from './product-card-template';

const FirstPartOfAudiElement = document.getElementById('first-part-of-audi');
const SecondPartOfAudiElement = document.getElementById('second-part-of-audi');

function withFirstPartOfAudiLoader() {
    FirstPartOfAudi.map((object) => {
        FirstPartOfAudiElement.appendChild(ProductCardTemplate(
            object.imageUrl, object.alt, object.brand, object.carName, object.driveTrain,
            object.engineType, object.fuelSystem, object.maximumHorsePower, object.maximumTorque,
            object.TransmissionSpeeds, object.description, object.priceCar, object.carAvailable,
            'audi',
        ));
    });
}

function withSecondPartOfAudiLoader() {
    SecondPartOfAudi.map((object) => {
        SecondPartOfAudiElement.appendChild(ProductCardTemplate(
            object.imageUrl, object.alt, object.brand, object.carName, object.driveTrain,
            object.engineType, object.fuelSystem, object.maximumHorsePower, object.maximumTorque,
            object.TransmissionSpeeds, object.description, object.priceCar, object.carAvailable,
            'audi',
        ));
    });
}

export default async function onAsyncAudiRender() {
    const firstPartOfAudiProduct = withFirstPartOfAudiLoader();
    const secondPartOfAudiProduct = withSecondPartOfAudiLoader();

    await Promise.all([
        firstPartOfAudiProduct,
        secondPartOfAudiProduct,
    ]);
}
