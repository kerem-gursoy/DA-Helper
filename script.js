function generateMessage() {
    const startTime = document.getElementById('start-time').value;
    const startPeriod = document.getElementById('start-period').value;
    const endTime = document.getElementById('end-time').value;
    const endPeriod = document.getElementById('end-period').value;

    const checkedOut = [];
    const atTheDesk = [];
    const missing = [];

    const carts = document.querySelectorAll('.cart');
    carts.forEach(cart => {
        const cartName = cart.querySelector('h2').textContent.trim();
        const statusRadios = cart.querySelectorAll('input[type="radio"]');
        let selectedStatus = "";

        statusRadios.forEach(radio => {
            if (radio.checked) {
                selectedStatus = radio.value;
            }
        });

        switch (selectedStatus) {
            case 'checked-out':
                checkedOut.push(cartName);
                break;
            case 'at-the-desk':
                atTheDesk.push(cartName);
                break;
            case 'missing':
                missing.push(cartName);
                break;
        }
    });

    function formatCartNames(names) {
        if (names.length > 1) {
            return names.slice(0, -1).join(', ') + ', and ' + names.slice(-1);
        }
        return names.join('');
    }

    let message = `Checking in ${startTime}${startPeriod.toLowerCase()}-${endTime}${endPeriod.toLowerCase()}. `;

    if (checkedOut.length > 0)
    {
        message += `${formatCartNames(checkedOut)} ${checkedOut.length > 1 ? 'are' : 'is'} checked out. `;
    }
    if (atTheDesk.length > 0)
    {
        message += `${formatCartNames(atTheDesk)} ${atTheDesk.length > 1 ? 'are' : 'is'} at the front desk. `;
    }
    if (missing.length > 0)
    {
        message += `${formatCartNames(missing)} ${missing.length > 1 ? 'are' : 'is'} missing.`;
    }

    document.getElementById('message').value = message;
}
