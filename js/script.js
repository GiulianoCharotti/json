function type_of_product() {
    var type_product = document.getElementById('type_product');
    var text_type = type_product.options[type_product.selectedIndex].text;
    return text_type;
}

function get_data() {
    // var inventory_data = [];
    var p_id = document.getElementById('p_id').value;
    var p_name = document.getElementById('p_name').value;
    var p_price = document.getElementById('p_price').value;


    // const add_data = {
    //     id: p_id,
    //     name: p_name,
    //     price: p_price
    // }

    class add_data {
        constructor (id, name,price) {
          this.id = p_id;
          this.name = p_name;
          this.price = p_price;

    }};
    console.log(add_data);
    // inventory_data.push(add_data);
    return add_data;
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

}

let jsonData = JSON.stringify(get_data());
localStorage.setItem('jsonData', jsonData);
console.log( localStorage.getItem('jsonData'));