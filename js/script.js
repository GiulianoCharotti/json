
function type_of_product() {
    var type_product = document.getElementById('type_product');
    var text_type = type_product.options[type_product.selectedIndex].text;
    return text_type;
}

function get_data() {
    var p_id = document.getElementById('p_id').value;
    var p_name = document.getElementById('p_name').value;
    var p_price = document.getElementById('p_price').value;
    class Add_data {
        constructor() {
            this.id = p_id;
            this.name = p_name;
            this.price = p_price;
        }
    };
    const data_const = new Add_data();
    return data_const;
}
function print_html() {
    for (const [key, value] of Object.entries(get_data())) {
        const contenedor = document.createElement('div');
        contenedor.innerHTML = `${key}: ${value}`;
        document.body.appendChild(contenedor);
        localStorage.setItem(`${key}`, `${value}`);
    }
}
let jsonData = JSON.stringify(get_data());
localStorage.setItem('jsonData', jsonData);
console.log(localStorage.getItem('jsonData'));


$("#form_products").on({
    mouseenter: function () {
        var title = document.getElementById('title');
        const contenedor = document.createElement('div');
        contenedor.setAttribute("id", "container");
        contenedor.innerHTML = "You're about to enter new inventory";
        title.appendChild(contenedor);
    },
    mouseleave: function () {
        $( "#container" ).remove();
    }
});