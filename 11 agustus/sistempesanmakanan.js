class Order {
    #status = "Pending";

    get status() {
        return this.#status;
    }

    set status(newStatus) {
        if (newStatus === "Delivered" || newStatus === "Cancelled") {
            this.#status = newStatus;
        }
    }
}


const order = new Order();
console.log(order.status); 
order.status = "Delivered";
console.log(order.status); 
order.status = "Other";
console.log(order.status); 
