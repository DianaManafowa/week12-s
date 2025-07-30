document.addEventListener('DOMContentLoaded', () => {
    const priceElements = document.querySelectorAll('.item-price');
    const totalElement = document.getElementById('total-price');
    const couponBtn = document.getElementById('coupon-btn');

    const calculateTotal = () => {
        return Array.from(priceElements).reduce((sum, el) => {
            return sum + Number(el.textContent);
        }, 0);
    };

    totalElement.textContent = calculateTotal();

    couponBtn.addEventListener('click', () => {
        priceElements.forEach(el => {
            const price = Number(el.textContent);
            el.textContent = (price * 0.8).toFixed(2);
        });
        
        totalElement.textContent = calculateTotal().toFixed(2);
        couponBtn.disabled = true;
        couponBtn.textContent = "Купон использован";
    });
});