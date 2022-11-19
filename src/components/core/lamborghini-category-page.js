import { FirstPartOfLamborghini, SecondPartOfLamborghini } from './../data/lamborghini-category-objects';
import ProductCardTemplate from './product-card-template';

const FirstPartOfLamborghiniElement = document.getElementById('first-part-of-lamborghini');
const SecondPartOfLamborghiniElement = document.getElementById('second-part-of-lamborghini');

function withFirstPartOfLamborghiniLoader() {
    FirstPartOfLamborghini.map((object) => {
        FirstPartOfLamborghiniElement.appendChild(ProductCardTemplate(
            object.imageUrl, object.alt, object.brand, object.carName, object.driveTrain,
            object.engineType, object.fuelSystem, object.maximumHorsePower, object.maximumTorque,
            object.TransmissionSpeeds, object.description, object.priceCar, object.carAvailable,
            'lamborghini',
        ));
    });
}

function withSecondPartOfLamborghiniLoader() {
    SecondPartOfLamborghini.map((object) => {
        SecondPartOfLamborghiniElement.appendChild(ProductCardTemplate(
            object.imageUrl, object.alt, object.brand, object.carName, object.driveTrain,
            object.engineType, object.fuelSystem, object.maximumHorsePower, object.maximumTorque,
            object.TransmissionSpeeds, object.description, object.priceCar, object.carAvailable,
            'lamborghini',
        ));
    });
}

export default async function onAsyncLamborghiniRender() {
    const firstPartOfLamborghiniProduct = withFirstPartOfLamborghiniLoader();
    const secondPartOfLamborghiniProduct = withSecondPartOfLamborghiniLoader();

    await Promise.all([
        firstPartOfLamborghiniProduct,
        secondPartOfLamborghiniProduct,
    ]);
}
