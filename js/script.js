function type_of_product(){
    var type_product = document.getElementById('type_product');
    var text_type = type_product.options[type_product.selectedIndex].text;
    return text_type;
}


