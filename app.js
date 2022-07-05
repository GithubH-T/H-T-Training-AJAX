function save(event) {
    const payload = {
        item: "laptop"
    }
    console.log(event);
    fetch("http://localhost:3000/orders", {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-type': 'application/json'
        }
    });
}

(function () {//IIFE 
    const promise = fetch("http://localhost:3000/orders");
    promise.then(function (response) {
        console.log(response);
        const body = response.json();
        body.then(function (orders) {
            const list = document.getElementById("orderlist");

            console.log(orders);
            orders.forEach(order => {
                const row = document.createElement('li');
                const deleteBtn = document.createElement('button');
                deleteBtn.addEventListener(function () {
                    fetch("http://localhost:3000/orders/id", {
                        method:'DELETE',
                    
                    })
                })
                deleteBtn.textContent = 'delete';
                row.textContent = order.item+ ", "+order.price;
                row.appendChild(deleteBtn);
                list.appendChild(row);
            });
        })

    })
})();