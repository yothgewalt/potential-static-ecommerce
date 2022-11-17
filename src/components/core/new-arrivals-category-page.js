import { FirstPartOfNewArrivals, SecondPartOfNewArrivals } from './../data/new-arrivals-category-objects';
import NewArrivalCardTemplate from './new-arrival-card-template';

const FirstPartOfNewArrivalElement = document.getElementById('first-part-of-new-arrivals');
const SecondPartOfNewArrivalElement = document.getElementById('second-part-of-new-arrivals');

function withFirstPartOfNewArrivalLoader() {
    FirstPartOfNewArrivals.map((object) => {
        FirstPartOfNewArrivalElement.appendChild(NewArrivalCardTemplate(
            object.imageUrl, object.alt, '', object.carName, object.driveTrain,
            object.engineType, object.fuelSystem, object.maximumHorsePower, object.maximumTorque,
            object.TranmissionSpeeds, '', object.priceCar, object.carAvailable,
        ));
    });
}

function withSecondPartOfNewArrivalLoader() {
    SecondPartOfNewArrivals.map((object) => {
        SecondPartOfNewArrivalElement.appendChild(NewArrivalCardTemplate(
            object.imageUrl, object.alt, '', object.carName, object.driveTrain,
            object.engineType, object.fuelSystem, object.maximumHorsePower, object.maximumTorque,
            object.TranmissionSpeeds, '', object.priceCar, object.carAvailable,
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
