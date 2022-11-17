import { Company, CustomerService, Legal, Products } from "../data/landing-page-objects";

function onProductHyperlinkRender() {
    const ProductElements = document.getElementById('products');
    let products = ``;

    Products.map((object) => {
        if (object.header?.valueOf()) {
            products += `
            <h1 class="font-semibold text-black">${object.label}</h1>
            `;
        } else {
            products += `
            <a href="${object.href}" class="transition ease-in-out hover:text-gray-800 focus:outline-none">${object.label}</a>
            `;
        }
    });

    ProductElements.innerHTML = products.trim();
}

function onCustomerServiceHyperlinkRender() {
    const CustomerServiceElements = document.getElementById('customer-service');
    let customerService = ``;

    CustomerService.map((object) => {
        if (object.header?.valueOf()) {
            customerService += `
            <h1 class="font-semibold text-black">${object.label}</h1>
            `
        } else {
            customerService += `
            <a href="${object.href}" class="transition ease-in-out hover:text-gray-800 focus:outline-none">${object.label}</a>
            `;
        }
    });

    CustomerServiceElements.innerHTML = customerService.trim();
}

function onCompanyHyperlinkRender() {
    const CompanyElements = document.getElementById('company');
    let company = ``;

    Company.map((object) => {
        if (object.header?.valueOf()) {
            company += `
            <h1 class="font-semibold text-black">${object.label}</h1>
            `;
        } else {
            company += `
            <a href="${object.href}" class="transition ease-in-out hover:text-gray-800 focus:outline-none">${object.label}</a>
            `;
        }
    });

    CompanyElements.innerHTML = company.trim();
}

function onLegalHyperlinkRender() {
    const LegalElements = document.getElementById('legal');
    let legal = ``;

    Legal.map((object) => {
        if (object.header?.valueOf()) {
            legal += `
            <h1 class="inline-flex items-center font-semibold text-black">${object.label}</h1>
            `;
        } else {
            legal += `
            <a href="${object.href}" class="transition ease-in-out hover:text-gray-800 focus:outline-none">${object.label}</a>
            `;
        }
    });

    LegalElements.innerHTML = legal.trim();
}

export default async function onAsyncFooterHyperlinkRender() {
    const withProductHyperlink = onProductHyperlinkRender();
    const withCustomerHyperlink = onCustomerServiceHyperlinkRender();
    const withCompanyHyperlink = onCompanyHyperlinkRender();
    const withLegalHyperlink = onLegalHyperlinkRender();

    await Promise.all([
        withProductHyperlink,
        withCustomerHyperlink,
        withCompanyHyperlink,
        withLegalHyperlink,
    ]);
}

export {
    useUnauthorizedAction,
    useRegistrationButton,
    useAuthenticationButton,
    onAsyncLandingPageRender,
    onAsyncFooterHyperlinkRender
};
