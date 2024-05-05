
const backenedDomain = 'http://localhost:5000';

const SummaryApi={
    SignUp:{
        url:`${backenedDomain}/api/signup`,
        method:'POST',
    },
    signin:{
        url:`${backenedDomain}/api/signin`,
        method:'POST',
    },
    current_user:{
        url:`${backenedDomain}/api/user-details`,
        method:'GET',
    },
    logout_user:{
        url:`${backenedDomain}/api/userLogout`,
        method:'GET',
    },
    all_users:{
        url:`${backenedDomain}/api/all-user`,
        method:'GET',
    },
    updateUser:{
        url:`${backenedDomain}/api/update-user`,
        method:'POST',
    },
    uploadProduct : {
        url : `${backenedDomain}/api/upload-product`,
        method : 'post'
    },
    allProduct : {
        url : `${backenedDomain}/api/get-product`,
        method : 'get'
    },
    updateProduct : {
        url : `${backenedDomain}/api/update-product`,
        method  : 'post'
    },
    categoryProduct : {
        url : `${backenedDomain}/api/get-categoryProduct`,
        method : 'get'
    },
    categoryWiseProduct : {
        url : `${backenedDomain}/api/category-product`,
        method : 'post'
    },
    productDetails : {
        url : `${backenedDomain}/api/product-details`,
        method : 'post'
    },
    addToCartProduct : {
        url : `${backenedDomain}/api/addtocart`,
        method : 'post'
    },
    addToCartProductCount : {
        url : `${backenedDomain}/api/countAddToCartProduct`,
        method : 'get'
    },
    addToCartProductView : {
        url : `${backenedDomain}/api/view-card-product`,
        method : 'get'
    },
    updateCartProduct : {
        url : `${backenedDomain}/api/update-cart-product`,
        method : 'post'
    },
    deleteCartProduct : {
        url : `${backenedDomain}/api/delete-cart-product`,
        method : 'post'
    },
    searchProduct : {
        url : `${backenedDomain}/api/search`,
        method : 'get'
    },
    filterProduct : {
        url : `${backenedDomain}/api/filter-product`,
        method : 'post'
    }
    
}
export default SummaryApi;