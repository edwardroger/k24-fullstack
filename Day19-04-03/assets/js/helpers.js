const formatCurrency = (price) => { //Function common
    return new Intl.NumberFormat(
        'vi-VN',
        { style: 'currency', currency: 'VND' }
        ).format(price)
}