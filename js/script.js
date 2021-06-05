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

    class Add_data {
        constructor (id, name,price) {
          this.id = p_id;
          this.name = p_name;
          this.price = p_price;
    }};
    const data_const = new Add_data();
    console.log(data_const);
    return data_const;

}

function print_html() {
    for (const data of Object.keys(get_data())) {
        const contenedor = document.createElement('div');
        contenedor.innerHTML = `<h4>ID: ${get_data().id} </h4>
        
                                <h4>Name: ${get_data().name} </h4>

                                <h4>Price: ${get_data().price} </h4>`;

        document.body.appendChild(contenedor);
        localStorage.setItem('id_storage', get_data().id);
        localStorage.setItem('name_storage', get_data().name);
        localStorage.setItem('price_storage', get_data().price);
    }

}

// let jsonData = JSON.stringify(get_data());
// localStorage.setItem('jsonData', jsonData);
// console.log( localStorage.getItem('jsonData'));