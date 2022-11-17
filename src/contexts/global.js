export function setProductState(imageUrlSource) {
    localStorage.setItem('image_url', imageUrlSource);
    console.log(localStorage.getItem('image_url'));

    window.location.href = '/pages/product-details.html';
}
