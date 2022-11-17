import ProductDetailPage from './../pages/product/product-details.html';

export function setProductState(imageUrlSource) {
    localStorage.setItem('image_url', imageUrlSource);
    console.log(localStorage.getItem('image_url'));

    window.location.replace(ProductDetailPage);
}
