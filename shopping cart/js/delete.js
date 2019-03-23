$(document).ready(function () {
    $('.shoppingCart').on('click','.delete', function (e) {
        e.preventDefault();
        
        this.closest('.cartItem').remove();
    });

});