import { FirstPartOfNewArrivals, SecondPartOfNewArrivals } from './../data/new-arrivals-category-objects';
import ProductCardTemplate from './product-card-template';

const FirstPartOfNewArrivalElement = document.getElementById('first-part-of-new-arrivals');
const SecondPartOfNewArrivalElement = document.getElementById('second-part-of-new-arrivals');

function withFirstPartOfNewArrivalLoader() {
    FirstPartOfNewArrivals.map((object) => {
        FirstPartOfNewArrivalElement.appendChild(ProductCardTemplate(
            object.imageUrl, object.alt, object.brand, object.carName, object.driveTrain,
            object.engineType, object.fuelSystem, object.maximumHorsePower, object.maximumTorque,
            object.TransmissionSpeeds, object.description, object.priceCar, object.carAvailable,
            'new-arrivals',
        ));
    });
}

function withSecondPartOfNewArrivalLoader() {
    SecondPartOfNewArrivals.map((object) => {
        SecondPartOfNewArrivalElement.appendChild(ProductCardTemplate(
            object.imageUrl, object.alt, object.brand, object.carName, object.driveTrain,
            object.engineType, object.fuelSystem, object.maximumHorsePower, object.maximumTorque,
            object.TransmissionSpeeds, object.description, object.priceCar, object.carAvailable,
            'new-arrivals',
        ));
    });
}

export default async function onAsyncNewArrivalRender() {
    const firstPartOfNewArrivalProduct = withFirstPartOfNewArrivalLoader();
    const secondPartOfNewArrivalProduct = withSecondPartOfNewArrivalLoader();

    await Promise.all([
        firstPartOfNewArrivalProduct,
        secondPartOfNewArrivalProduct,
    ]);
}
