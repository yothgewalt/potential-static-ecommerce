import { setProductState } from './../../contexts/global';
import splitClassNames from './../../helper/splitClassNames';

import ProductDetailPage from './../../pages/product-details.html';

export default function NewArrivalCardTemplate(imageUrl, alternative, carName, carAvailable, priceCar, href) {
    const buttonElement = document.createElement('a');
    const classNames = splitClassNames(
        'w-full h-[640px] p-3 relative flex flex-col space-y-4 rounded-xl justify-start items-start',
        'transition ease-in-out overflow-hidden hover:bg-neutral-200'
    );
    classNames.map((className) => {
        buttonElement.classList.add(className);
    });
    buttonElement.innerHTML = `
    <img src="${imageUrl}" alt="${alternative}" class="w-full h-full rounded-xl select-none object-cover z-10" loading="lazy" />
    <div class="w-full flex flex-row justify-between items-start">
        <span class="flex flex-col justify-start items-start">
            <h1 class="font-inter font-semibold">
                ${carName}
            </h1>
            <p class="font-inter font-light text-gray-600">
                พร้อมให้บริการ ${carAvailable} คัน
            </p>
        </span>
        <span class="font-seeds font-semibold">
            ${priceCar.toLocaleString()} บาท
        </span>
    </div>
    `;
    buttonElement.setAttribute('href', ProductDetailPage);
    buttonElement.addEventListener("click", () => setProductState(imageUrl));

    return buttonElement;
}
