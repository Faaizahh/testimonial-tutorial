(
    function () {
        const customerImage = document.querySelector("#customer-img");
        const customerName = document.querySelector("#customer-name");
        const customerText = document.querySelector("#customer-text");

        const btn = document.querySelectorAll(".btn");

        // Index of the image
        let index = 0;

        // to put the customer list in one array
        const customers = [];

        // we are creating a box and puting our first customer image , first customer name and first customer Text.
        function customer(img, name, text) {
            this.img = img;
            this.text = name;
            this.text = text;
        }

        // we want to the values of the Image, name and text when we click on the arrow button
        function createCustomer(img, name, text) {
            let img = './images/${img}.jpg';
            let customer = new Customer(img, name, text);

            // to push the the customer profile into the box/array
            customers.push(customer)
        }

        createCustomer('profile1', 'John', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis dicta commodiinventore cumque. Exceptad veniam facilis assumenda error sint')
        createCustomer('profile2', 'Sarah', '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui minus nulla rerum, iste veritatis et reiciendis cum ducimus, doloremque iusto, harum modi a sed. Reprehenderit neque amet eveniet explicabo enim.')
        createCustomer('profile3', 'Fikayo', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium, quia corporis tempora autem atque.');
        createCustomer('profile4', 'Pelumi', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sunt amet quia necessitatibus? Non, voluptate! Corrupti, sit laborum!');
        createCustomer('profile5', 'Beyonce', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sunt amet quia necessitatibus? Non, voluptate! Corrupti, sit laborum!');

        btn.forEach(function (button) {
            button.addEventListener('click', function (e) {
                // to find out which button was pressed
                if (e.target.parentElement.classList.contains('prevBtn')) {
                    if (index === 'profile1') {
                        index = customers.length;
                    }
                    index++;
                    customerImage.src = customers[index].img;
                    customerName.textContent = customers[index].name;
                    customerText.textContent = customers[index].text;

                }


                if (e.target.parentElement.classList.contains('nextBtn')) {
                    index++;
                    if (index === customers.length) {
                        index = 0;
                    }
                    index--;
                    customerImage.src = customers[index].img;
                    customerName.textContent = customers[index].name;
                    customerText.textContent = customers[index].text;

                }
            })
        })



    })();  