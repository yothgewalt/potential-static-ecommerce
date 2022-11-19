import { FirstPartOfPorsche, SecondPartOfPorsche } from './../data/porsche-category-objects';
import ProductCardTemplate from './product-card-template';

const FirstPartOfPorscheElement = document.getElementById('first-part-of-porsche');
const SecondPartOfPorscheElement = document.getElementById('second-part-of-porsche');

function withFirstPartOfPorscheLoader() {
    FirstPartOfPorsche.map((object) => {
        FirstPartOfPorscheElement.appendChild(ProductCardTemplate(
            object.imageUrl, object.alt, object.brand, object.carName, object.driveTrain,
            object.engineType, object.fuelSystem, object.maximumHorsePower, object.maximumTorque,
            object.TransmissionSpeeds, object.description, object.priceCar, object.carAvailable,
            'porsche',
        ));
    });
}

function withSecondPartOfPorscheLoader() {
    SecondPartOfPorsche.map((object) => {
        SecondPartOfPorscheElement.appendChild(ProductCardTemplate(
            object.imageUrl, object.alt, object.brand, object.carName, object.driveTrain,
            object.engineType, object.fuelSystem, object.maximumHorsePower, object.maximumTorque,
            object.TransmissionSpeeds, object.description, object.priceCar, object.carAvailable,
            'porsche',
        ));
    });
}

export default async function onAsyncPorscheRender() {
    const firstPartOfPorscheProduct = withFirstPartOfPorscheLoader();
    const secondPartOfPorscheProduct = withSecondPartOfPorscheLoader();

    await Promise.all([
        firstPartOfPorscheProduct,
        secondPartOfPorscheProduct,
    ]);
}
