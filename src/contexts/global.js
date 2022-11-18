import ProductDetailPage from './../pages/product-details.html';

export function setProductState(
    imageUrl, alternative, brand, carName, driveTrain,
    engineType, fuelSystem, maximumHorsePower, maximumTorque,
    transmissionSpeeds, description, priceCar, carAvailable,
    fromPage,
) {
    localStorage.setItem('image_url', imageUrl);
    localStorage.setItem('alt', alternative);
    localStorage.setItem('brand', brand);
    localStorage.setItem('car_name', carName);
    localStorage.setItem('drive_train', driveTrain);
    localStorage.setItem('engine_type', engineType);
    localStorage.setItem('fuel_system', fuelSystem);
    localStorage.setItem('maximum_horse_power', maximumHorsePower);
    localStorage.setItem('maximum_torque', maximumTorque);
    localStorage.setItem('transmission_speeds', transmissionSpeeds);
    localStorage.setItem('description', description);
    localStorage.setItem('price_car', priceCar);
    localStorage.setItem('car_available', carAvailable);
    localStorage.setItem('from_page', fromPage);

    window.location.href = ProductDetailPage;
}
