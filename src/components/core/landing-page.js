import { Brands, Parts } from "./../data/landing-page-objects";
import classNames from './../../helper/classNames';

function onCategoryRender() {
    const CategoryElements = document.getElementById('brand-by-category');
    let category = ``;

    let gridBlockClasses = classNames(
        'w-[7.7rem] h-[7.7rem] bg-stone-200 rounded-xl overflow-hidden',
        '360px:w-[10.2rem] 360px:h-[10.2rem] 375px:w-[10.5rem] 375px:h-[10.5rem] 390px:w-[11rem] 390px:h-[11rem]',
        '540px:w-[15.8rem] 540px:h-[15.8rem] 412px:w-[11.8rem] 412px:h-[11.8rem] 768px:w-[15.2rem] 768px:h-[25rem]',
        '820px:w-[16.1rem] 820px:h-[26rem] 912px:w-[18rem] 912px:h-[26rem] 1024px:w-[15.2rem] 1024px:h-[24rem]'
    );

    Brands.map((object) => {
        category += `
        <div class="${gridBlockClasses}">
            <a
                class="w-full h-full relative flex text-xs transition ease-in-out rounded-xl hover:opacity-90 360px:text-base 540px:text-lg 768px:text-xl 912px:text-2xl 912px:hover:text-[1.6rem]"
                href="${object.href}"
            >
                <div class="w-full h-full pb-3 absolute inset-0 flex flex-col justify-end items-center rounded-xl bg-black bg-opacity-20 z-20 768px:pb-4">
                    <h1 class="font-inter font-semibold text-white">${object.brandName}</h1>
                    <p class="font-seeds font-normal text-xs text-stone-300 1024px:text-[1.1rem]">เลือกดูรถยนต์ที่ต้่องการ</p>
                </div>
                <img src="${object.imageUrl}" alt="${object.alt}" class="w-full h-full rounded-xl select-none object-cover z-10" loading="lazy" />
                <div class="w-full h-full absolute inset-0 rounded-xl animate-pulse bg-neutral-400 z-0"></div>
            </a>
        </div>
        `;
    });

    CategoryElements.innerHTML = category.trim();
}

function onPartRender() {
    const PartElements = document.getElementById('shop-by-parts');
    let part = ``;

    let gridBlockClasses = classNames(
        'w-[16rem] h-[16rem] relative rounded-xl bg-stone-100',
        '360px:w-[20rem] 360px:h-[20rem] 375px:w-[22rem] 375px:h-[22rem] 390px:w-[23rem] 390px:h-[23rem]',
        '540px:w-[10.5rem] 540px:h-[16rem] 412px:w-[24rem] 412px:h-[24rem] 768px:w-[15.2rem] 768px:h-[24rem]',
        '820px:w-[16.2rem] 820px:h-[25rem] 912px:w-[18rem] 912px:h-[28rem] 1024px:w-[24.5rem] 1024px:h-[31rem]'
    );

    Parts.map((object) => {
        part += `
        <a class="p-4 flex flex-col rounded-xl space-y-4 justify-start items-start transition ease-in-out hover:bg-none focus:outline-none 540px:space-y-3 768px:space-y-6 912px:hover:bg-stone-200" href="${object.href}">
            <div class="${gridBlockClasses}">
                <img src="${object.imageUrl}" alt="${object.alt}" class="w-full h-full object-cover select-none rounded-xl z-10" loading="lazy" />
                <div class="w-full h-full absolute inset-0 rounded-xl bg-neutral-400 animate-pulse -z-10"></div>
            </div>
            <div class="flex flex-col space-y-1 justify-start items-start">
                <span class="flex flex-row space-x-1.5 font-inter text-sm justify-center items-center 540px:text-[0.60rem] 768px:text-sm 912px:text-lg">
                    <h1 class="font-semibold">${object.header}</h1>
                    <span class="px-1.5 h-4 inline-flex items-center text-[0.60rem] text-center rounded-md text-green-800 bg-green-400 bg-opacity-60 540px:h-3 540px:text-[0.45rem] 540px:rounded 768px:px-1.5 768px:h-5 768px:text-sm">${object.label}</span>
                </span>
                <p class="font-seeds font-normal text-xs text-gray-500 540px:text-[0.64rem] 540px:leading-3 768px:text-[0.66rem] 912px:text-base">
                    ${object.description}
                </p>
            </div>
        </a>
        `;
    });

    PartElements.innerHTML = part.trim();
}

export default async function onAsyncLandingPageRender() {
    const withCategory = onCategoryRender();
    const withPart = onPartRender();

    await Promise.all([
        withCategory,
        withPart,
    ]);
}
