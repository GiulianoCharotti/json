function type_of_product() {
    var type_product = document.getElementById('type_product');
    var text_type = type_product.options[type_product.selectedIndex].text;
    return text_type;
}

function get_data() {
    var inventory_data = [];
    var p_id = document.getElementById('p_id').value;
    var p_name = document.getElementById('p_name').value;
    var p_price = document.getElementById('p_price').value;


    const add_data = {
        id: p_id,
        name: p_name,
        price: p_price
    }
    inventory_data.push(add_data);
    return inventory_data;
}

function print_html() {
    for (const data of get_data()) {
        const contenedor = document.createElement('div');
        contenedor.innerHTML = `<h4>ID: ${get_data()[0].id} </h4>
        
                                <h4>Name: ${get_data()[0].name} </h4>

                                <h4>Price: ${get_data()[0].price} </h4>`;

        document.body.appendChild(contenedor);
        localStorage.setItem('id_storage', get_data()[0].id);
        localStorage.setItem('name_storage', get_data()[0].name);
        localStorage.setItem('price_storage', get_data()[0].price);
    }
    // // select your div
    // const div_inventory_selector = document.querySelector('.inventory');
    // // to not redraw DOM every time
    // const docFragment = document.createDocumentFragment();
    // // create a div elem
    // const divElement = document.createElement('div');

    // // assign a class to it
    // // divElement.setAttribute('class', 'your-desired-class'); 

    // // create a p elem
    // const paragraphElement = document.createElement('p');

    // // assing a class to it
    // // paragraphElement.setAttribute('class', 'your-another-class'); 

    // // add text to p elem
    // paragraphElement.innerHTML = type_of_product();


    // // append div elem to your fragment
    // docFragment.appendChild(divElement);
    // // append p elem to div elem
    // divElement.appendChild(paragraphElement);
    // // this appends the elem on your DOM
    // div_inventory_selector.appendChild(docFragment);



}