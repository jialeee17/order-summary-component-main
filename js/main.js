// Just adding these for fun. Enjoy!

const btn_change = document.querySelector('.btn-change');
const btn_purchase = document.querySelector('.btn-purchase');
const btn_cancelOrder = document.querySelector('.btn-cancelOrder');

btn_change.addEventListener("click", () => {
    window.alert('It\'s just for demonstration purposes.');
});

btn_purchase.addEventListener("click", () => {
    let your_pocket_depth;
    const regex = /\D/gi;

    // Amount validation
    your_pocket_depth = prompt('How much money do you have?');
    if (your_pocket_depth.match(regex)) {
        do {
            window.alert('Please enter valid amount. Don\'t fool me!');
            your_pocket_depth = prompt('How much money do you have?');
        } while (your_pocket_depth.match(regex));
    }

    if (parseInt(your_pocket_depth) > 100) {
        const order_number = Math.floor(100 + Math.random() * 900);
        window.alert(`Your order ${order_number} has been processed!`);
    } else {
        window.alert('Save the money, you poor thing..');
    }
});

btn_cancelOrder.addEventListener("click", () => {
    window.alert('I\'m lazy to play anymore. Ciao!');
});