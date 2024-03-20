const render = () => {
    let productsHtml = document.getElementById('products');
    let html = '';
    if (products.length === 0) {
        productsHtml.innerHTML = 'Empty';

        return;
    }
    for (const key in products) {
        html += `<li class="row">
                    <div class="col left">
                        <div class="thumbnail">
                            <a href="#">
                                <img src="${ products[key].image }" alt="" />
                            </a>
                        </div>
                        <div class="detail">
                            <div class="name"><a href="#">${ products[key].name }</a></div>
                            <div class="description">
                                ${ products[key].description }
                            </div>
                            <div class="price">Price</div>
                            <div class="total-price" id="price_">
                                ${ formatCurrency(products[key].price) }
                            </div>
                        </div>
                    </div>
                    <div class="col right">
                        <div class="quantity">
                            <input type="text"
                                class="product-quantity"
                                id="product_${products[key].id}"
                                onchange="handleUpdateQuantity(${products[key].id}, ${products[key].price})"
                                step="1" value="1" />
                        </div>
                        <div class="unit-price">
                            <p id="product_unit_${products[key].id}">
                                ${ formatCurrency(products[key].price) }
                            </p>
                        </div>
                        <div class="remove">
                            <span class="close" onclick="handleRemoveItem(${ products[key].id })">
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </li>
                `;
    }
    productsHtml.innerHTML = html;
    calculateTotal();
}

const handleRemoveItem = (id) => {
    //Cách 1: Dùng filter để lọc ra các sản phẩm ko trùng id
    // products = products.filter(item => item.id !== id);

    //Cách 2: Dùng vòng lặp for và splice để loại bỏ phần tử khỏi mảng products
    for (const key in products) {
        if (products[key].id === id) {
            products.splice(key, 1);
            break;
        }
    }

    //Cách 3: Dùng find để tìm ra phần tử products. Và dùng splice để xoá
    // let product = products.find(item => item.id === id);
    // products.splice(product, 1)

    render();
}

const handleUpdateQuantity = (id, price) => {
    let quantity = parseInt(document.getElementById('product_' + id).value);
    if (quantity > 0) {
        document.getElementById('product_' + id).value = quantity;
        let unitPrice = quantity * price;
        console.log(unitPrice);
        document.getElementById(`product_unit_${id}`).innerHTML = formatCurrency(unitPrice);
    } else {
        alert('Quantity must be greater than 0');
        document.getElementById('product_' + id).value = 1;
    }
    calculateTotal();
}

const calculateTotal = () => {
    let sum = 0;
    let sumAfterVAT = 0;
    for (let key in products) {
        let quantity = document.getElementById('product_' + products[key].id).value;
        console.log(quantity);
        sum += products[key].price * quantity;
    }

    if (sum > VAT_MAX) {
        sumAfterVAT = sum + (sum * VAT_VALUE) / 100;
    } else {
        sumAfterVAT = sum;
    }

    document.querySelector('.vat-value').innerHTML = VAT_VALUE + ' %';
    document.querySelector('.total').innerHTML = formatCurrency(sum);
    document.querySelector('.cart-total').innerHTML = formatCurrency(sumAfterVAT);

}

const initScreen = () => {
    render();
}

initScreen();