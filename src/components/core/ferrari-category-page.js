import { FirstPartOfFerrari, SecondPartOfFerrari } from './../data/ferrari-category-objects';
import ProductCardTemplate from './product-card-template';

const FirstPartOfFerrariElement = document.getElementById('first-part-of-ferrari');
const SecondPartOfFerrariElement = document.getElementById('second-part-of-ferrari');

function withFirstPartOfFerrariLoader() {
    FirstPartOfFerrari.map((object) => {
        FirstPartOfFerrariElement.appendChild(ProductCardTemplate(
            object.imageUrl, object.alt, object.brand, object.carName, object.driveTrain,
            object.engineType, object.fuelSystem, object.maximumHorsePower, object.maximumTorque,
            object.TranmissionSpeeds, object.description, object.priceCar, object.carAvailable,
            'ferrari',
        ));
    });
}

function withSecondPartOfFerrariLoader() {
    SecondPartOfFerrari.map((object) => {
        SecondPartOfFerrariElement.appendChild(ProductCardTemplate(
            object.imageUrl, object.alt, object.brand, object.carName, object.driveTrain,
            object.engineType, object.fuelSystem, object.maximumHorsePower, object.maximumTorque,
            object.TranmissionSpeeds, object.description, object.priceCar, object.carAvailable,
            'ferrari',
        ));
    });
}

export default async function onAsyncFerrariRender() {
    const firstPartOfFerrariProduct = withFirstPartOfFerrariLoader();
    const secondPartOfFerrariProduct = withSecondPartOfFerrariLoader();

    await Promise.all([
        firstPartOfFerrariProduct,
        secondPartOfFerrariProduct,
    ]);
}
