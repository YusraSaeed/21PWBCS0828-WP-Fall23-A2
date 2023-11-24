
// Initialize the cart array with local storage data, if available
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add books to the cart
function addToCart(bookId) {
    // Check if the book is already in the cart
    let cartItem = cart.find(item => item.id === bookId);
    if (!cartItem) {
        cart.push({ id: bookId, quantity: 1 }); // Add book with quantity to the cart
        alert('Book added to cart.');
    } else {
        cartItem.quantity += 1; // Increase the quantity
        alert('Book quantity updated in cart.');
    }
    // Save cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to view the cart
function viewCart() {
    window.location.href = 'cart.html'; // Redirect to the cart page
}
document.addEventListener("DOMContentLoaded", function () {
    fetch('books.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.json();
        })
        .then(books => {
            let html = '<div class="row">';

            books.forEach((book) => {
                let htmlSegment = `
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <img src="${book.cover_image}" alt="${book.title} cover">
                            <h5 class="card-title">${book.title}</h5>
                            <p class="card-text">Author: ${book.author}</p>
                            <p class="card-text">Price: $${book.price}</p>
                            <button class="btn btn-primary expand-btn" onclick="addToCart(${book.id})">Add to Cart</button>
                            <button class="btn btn-secondary expand-btn" onclick="viewCart()">View Cart</button>
                        </div>
                    </div>
                </div>`;
                html += htmlSegment;
            });

            html += '</div>';
            let container = document.getElementById("bookDisplay");
            container.innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching books:', error);
        });
});


        //DISPLAY CLASSICAL
document.addEventListener("DOMContentLoaded", function () {
    fetch('books.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.json();
        })   

        .then(books => {
            let html = '<div class="container mt-4"><h1>Classic</h1></div><div class="row">'; // Start the row
        
            books.forEach((book, index) => {
                let htmlSegment = `
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <img src="${book.cover_image}">
                            <h5 class="card-title">${book.title}</h5>
                            <p class="card-text">Author: ${book.author}</p>
                            <p class="card-text">Price: $${book.price}</p>
                            <button class="btn btn-primary expand-btn" onclick="addToCart(${book.id})">Add to Cart</button>
                            <button class="btn btn-secondary expand-btn" onclick="viewCart()">View Cart</button>
                        </div>
                    </div>
                </div>`;
                if (book.category === 'Classic') {
                    html += htmlSegment; // Add to all books container
                }
            });
        
            html += '</div>'; // Close the final row for all books
        
        
            // Display fiction books
            let classicContainer = document.getElementById("classic"); // Changed ID to 'fiction'
            classicContainer.innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching books:', error);
        });
    });

    //DISPLAY CONTEMPORARY BOOKS
    document.addEventListener("DOMContentLoaded", function () {
        fetch('books.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })   
    
            .then(books => {
                let html = '<div class="container mt-4"><h1>Contemporary</h1></div><div class="row">'; // Start the row
            
                books.forEach((book, index) => {
                    let htmlSegment = `
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <img src="${book.cover_image}">
                                <h5 class="card-title">${book.title}</h5>
                                <p class="card-text">Author: ${book.author}</p>
                                <p class="card-text">Price: $${book.price}</p>
                                <button class="btn btn-primary expand-btn" onclick="addToCart(${book.id})">Add to Cart</button>
                            <button class="btn btn-secondary expand-btn" onclick="viewCart()">View Cart</button>
                            </div>
                        </div>
                    </div>`;
                    if (book.category === 'Contemporary') {
                        html += htmlSegment; // Add to all books container
                    }
                });
            
                html += '</div>'; // Close the final row for all books
            
                let contemporaryContainer = document.getElementById("contemporary"); // Changed ID to 'fiction'
                contemporaryContainer.innerHTML = html;
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
        });

        //DISPLAY DYSTOPIAN BOOKS
        
        document.addEventListener("DOMContentLoaded", function () {
            fetch('books.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
        


            .then(books => {
                let dystopianbooks = '<div class="container mt-4"><h1>Dystopian</h1></div><div class="row">';
            
                books.forEach((book, index) => {
                    let htmlSegment = `
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <img src="${book.cover_image}">
                                <h5 class="card-title">${book.title}</h5>
                                <p class="card-text">Author: ${book.author}</p>
                                <p class="card-text">Price: $${book.price}</p>
                                <button class="btn btn-primary expand-btn" onclick="addToCart(${book.id})">Add to Cart</button>
                                <button class="btn btn-secondary expand-btn" onclick="viewCart()">View Cart</button>
                            </div>
                        </div>
                    </div>`;
                    if (book.category === 'Dystopian') {
                        dystopianbooks += htmlSegment; // Add to fiction books container
                    }
                });
            
                dystopianbooks += '</div>'; // Close the final row for fiction books
            
                // Display dystopian books
                let dystopianContainer = document.getElementById("dystopian"); // Changed ID to 'fiction'
                dystopianContainer.innerHTML = dystopianbooks;
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
        });

        //DISPLAY FANTASY BOOKS
        document.addEventListener("DOMContentLoaded", function () {
            fetch('books.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
        
            

            .then(books => {
                let fantasybooks = '<div class="container mt-4"><h1>Fantasy</h1></div><div class="row">';
            
                books.forEach((book, index) => {
                    let htmlSegment = `
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <img src="${book.cover_image}">
                                <h5 class="card-title">${book.title}</h5>
                                <p class="card-text">Author: ${book.author}</p>
                                <p class="card-text">Price: $${book.price}</p>
                                <button class="btn btn-primary expand-btn" onclick="addToCart(${book.id})">Add to Cart</button>
                                <button class="btn btn-secondary expand-btn" onclick="viewCart()">View Cart</button>
                            </div>
                        </div>
                    </div>`;
                    if (book.category === 'Fantasy') {
                            fantasybooks += htmlSegment; // Add to fiction books container
                    }
                });
            
                fantasybooks += '</div>'; // Close the final row for fiction books

                // Display books
                let fantasyContainer = document.getElementById("fantasy"); // Changed ID to 'fiction'
                fantasyContainer.innerHTML = fantasybooks;
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
        });

        //FICTION BOOKS
        
        document.addEventListener("DOMContentLoaded", function () {
            fetch('books.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok.');
                    }
                    return response.json();
                })   
    
                .then(books => {
                    let html = '<div class="container mt-4"><h1>Fiction Collection </h1></div><div class="row">'; // Start the row
                
                    books.forEach((book, index) => {
                        let htmlSegment = `
                        <div class="col-lg-4 col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <img src="${book.cover_image}">
                                    <h5 class="card-title">${book.title}</h5>
                                    <p class="card-text">Author: ${book.author}</p>
                                    <p class="card-text">Price: $${book.price}</p>
                                    <button class="btn btn-primary expand-btn" onclick="addToCart(${book.id})">Add to Cart</button>
                                    <button class="btn btn-secondary expand-btn" onclick="viewCart()">View Cart</button>
                                </div>
                            </div>
                        </div>`;
                        if (book.category === 'Fiction') {
                            html += htmlSegment; // Add to all books container
                        }
                    });
                
                    html += '</div>'; // Close the final row for all books
                
                
                    // Display fiction books
                    let fictionContainer = document.getElementById("fiction"); // Changed ID to 'fiction'
                    fictionContainer.innerHTML = html;
                })
                .catch(error => {
                    console.error('Error fetching books:', error);
                });
        });

        //GOTHIC BOOKS
        document.addEventListener("DOMContentLoaded", function () {
            fetch('books.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
        
            

            .then(books => {
                let gothicbooks = '<div class="container mt-4"><h1>Gothic</h1></div><div class="row">';
            
                books.forEach((book, index) => {
                    let htmlSegment = `
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <img src="${book.cover_image}">
                                <h5 class="card-title">${book.title}</h5>
                                <p class="card-text">Author: ${book.author}</p>
                                <p class="card-text">Price: $${book.price}</p>
                                <button class="btn btn-primary expand-btn" onclick="addToCart(${book.id})">Add to Cart</button>
                                <button class="btn btn-secondary expand-btn" onclick="viewCart()">View Cart</button>
                            </div>
                        </div>
                    </div>`;
                    if (book.category === 'Gothic') {
                            gothicbooks += htmlSegment; // Add to fiction books container
                    }
                });
            
                gothicbooks += '</div>'; // Close the final row for fiction books

                // Display classic books
                let gothicContainer = document.getElementById("gothic"); // Changed ID to 'fiction'
                gothicContainer.innerHTML = gothicbooks;
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
        });

        //HISTORICAL
        document.addEventListener("DOMContentLoaded", function () {
            fetch('books.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
            .then(books => {
                let historicalbooks = '<div class="container mt-4"><h1>Historical</h1></div><div class="row">';
            
                books.forEach((book, index) => {
                    let htmlSegment = `
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <img src="${book.cover_image}">
                                <h5 class="card-title">${book.title}</h5>
                                <p class="card-text">Author: ${book.author}</p>
                                <p class="card-text">Price: $${book.price}</p>
                                <button class="btn btn-primary expand-btn" onclick="addToCart(${book.id})">Add to Cart</button>
                                <button class="btn btn-secondary expand-btn" onclick="viewCart()">View Cart</button>
                            </div>
                        </div>
                    </div>`;
                    if (book.category === 'Historical Fiction') {
                            historicalbooks += htmlSegment; // Add to fiction books container
                    }
                });
            
                historicalbooks += '</div>'; // Close the final row for fiction books

                // Display classic books
                let historicalContainer = document.getElementById("historical"); // Changed ID to 'fiction'
                historicalContainer.innerHTML = historicalbooks;
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
        });

        //HORROR BOOKS
        document.addEventListener("DOMContentLoaded", function () {
            fetch('books.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
        
            

            .then(books => {
                let horrorbooks = '<div class="container mt-4"><h1>Horror</h1></div><div class="row">';
            
                books.forEach((book, index) => {
                    let htmlSegment = `
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <img src="${book.cover_image}">
                                <h5 class="card-title">${book.title}</h5>
                                <p class="card-text">Author: ${book.author}</p>
                                <p class="card-text">Price: $${book.price}</p>
                                <button class="btn btn-primary expand-btn" onclick="addToCart(${book.id})">Add to Cart</button>
                                <button class="btn btn-secondary expand-btn" onclick="viewCart()">View Cart</button>
                            </div>
                        </div>
                    </div>`;
                    if (book.category === 'Horror') {
                            horrorbooks += htmlSegment; // Add to fiction books container
                    }
                });
            
                horrorbooks += '</div>'; // Close the final row for fiction books

                // Display classic books
                let horrorContainer = document.getElementById("horror"); // Changed ID to 'fiction'
                horrorContainer.innerHTML = horrorbooks;
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
        });

        //MYSTERY
        document.addEventListener("DOMContentLoaded", function () {
            fetch('books.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
        
            

            .then(books => {
                let mysterybooks = '<div class="container mt-4"><h1>Mystery</h1></div><div class="row">';
            
                books.forEach((book, index) => {
                    let htmlSegment = `
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <img src="${book.cover_image}">
                                <h5 class="card-title">${book.title}</h5>
                                <p class="card-text">Author: ${book.author}</p>
                                <p class="card-text">Price: $${book.price}</p>
                                <button class="btn btn-primary expand-btn" onclick="addToCart(${book.id})">Add to Cart</button>
                                <button class="btn btn-secondary expand-btn" onclick="viewCart()">View Cart</button>
                            </div>
                            </div>
                        </div>
                    </div>`;
                    if (book.category === 'Mystery') {
                            mysterybooks += htmlSegment; // Add to fiction books container
                    }
                });
            
                mysterybooks += '</div>'; // Close the final row for fiction books

                // Display classic books
                let mysteryContainer = document.getElementById("mystery"); // Changed ID to 'fiction'
                mysteryContainer.innerHTML = mysterybooks;
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
        });

        //PHILOSOPHICAL
        document.addEventListener("DOMContentLoaded", function () {
            fetch('books.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
        
            .then(books => {
                let philosophicalbooks = '<div class="container"><h1>Philosophical</h1></div><div class="row">';
            
                books.forEach((book, index) => {
                    let htmlSegment = `
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <img src="${book.cover_image}">
                                <h5 class="card-title">${book.title}</h5>
                                <p class="card-text">Author: ${book.author}</p>
                                <p class="card-text">Price: $${book.price}</p>
                                <button class="btn btn-primary expand-btn" onclick="addToCart(${book.id})">Add to Cart</button>
                                <button class="btn btn-secondary expand-btn" onclick="viewCart()">View Cart</button>
                            </div>
                        </div>
                    </div>`;
                    if (book.category === 'Philosophical') {
                            philosophicalbooks += htmlSegment; // Add to fiction books container
                    }
                });
            
                philosophicalbooks += '</div>'; // Close the final row for fiction books

                // Display classic books
                let philosophicalContainer = document.getElementById("philosophical"); // Changed ID to 'fiction'
                philosophicalContainer.innerHTML = philosophicalbooks;
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
        });

        //SCI-FI
        document.addEventListener("DOMContentLoaded", function () {
            fetch('books.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
        
            

            .then(books => {
                let html = '<div class="container mt-4"><h1>Sci-Fi</h1></div><div class="row">'; // Start the row
                let sci_fibooks = '<div class="head"><h1>Sci-Fi </h1></div><div class="row">';
            
                books.forEach((book, index) => {
                    let htmlSegment = `
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <img src="${book.cover_image}">
                                <h5 class="card-title">${book.title}</h5>
                                <p class="card-text">Author: ${book.author}</p>
                                <p class="card-text">Price: $${book.price}</p>
                                <button class="btn btn-primary expand-btn" onclick="addToCart(${book.id})">Add to Cart</button>
                                <button class="btn btn-secondary expand-btn" onclick="viewCart()">View Cart</button>
                            </div>
                        </div>
                    </div>`;
                    let count=0;
                    if (book.category === 'Science Fiction') {
                        count++;
                            sci_fibooks += htmlSegment; // Add to fiction books container              
                    }
                });
            
                sci_fibooks += '</div>'; // Close the final row for fiction books
            
                // Display fiction books
                let sci_fiContainer = document.getElementById("sci-fi"); // Changed ID to 'fiction'
                sci_fiContainer.innerHTML = sci_fibooks;
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
        });
    //Implementation of Cart
    function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const booksContainer = document.getElementById('cartDisplay');

    if (cart.length === 0) {
        booksContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }
    fetch('books.json')
        .then(response => response.json())
        .then(books => {
            let tableHtml = `
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>`;

            cart.forEach(cartItem => {
                const book = books.find(book => book.id === cartItem.id);
                if (book) {
                    tableHtml += `
                        <tr>
                            <td>${book.title}</td>
                            <td>${book.author}</td>
                            <td>$${book.price}</td>
                            <td>${cartItem.quantity}</td>
                            <td><button class= "btn btn-primary expand-btn" onclick="removeFromCart(${book.id})">Remove</button></td>
                        </tr>`;
                }
            });

            if (cart.length > 0) {
                tableHtml += `</table>`; // Close the table tag
                tableHtml += `
                    <div class="button">
                        <button class="btn btn-primary expand-btn" onclick="window.location.href='payment.html'">Proceed to Payment</button>
                    </div>`;
            }
            booksContainer.innerHTML = tableHtml;
        })
        .catch(error => {
            console.error('Error fetching cart items:', error);
        });
}

function removeFromCart(bookId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== bookId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(); // Refresh the cart display
}

document.addEventListener('DOMContentLoaded', displayCart);

// payment.js

// Function to calculate and display the receipt on payment.html
function displayReceipt() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const receiptContainer = document.getElementById('receipt'); // make sure you have a container with this id in your payment.html

    if (cart.length === 0) {
        receiptContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    fetch('books.json')
        .then(response => response.json())
        .then(books => {
            let total = 0;
            let receiptHtml = `
                <h1>Receipt</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>`;

            cart.forEach(cartItem => {
                const book = books.find(b => b.id === cartItem.id);
                if (book) {
                    const subtotal = book.price * cartItem.quantity;
                    total += subtotal;
                    receiptHtml += `
                        <tr>
                            <td>${book.title}</td>
                            <td>${cartItem.quantity}</td>
                            <td>$${book.price.toFixed(2)}</td>
                            <td>$${subtotal.toFixed(2)}</td>
                        </tr>`;
                }
            });

            receiptHtml += `
                        <tr id = "total">
                            <td><b>Total</b></td>
                            <td colspan="3"><b>$${total.toFixed(2)}</b></td>
                        </tr>
                    </tbody>
                </table>
                <button id="proceedToPayment" class="btn btn-primary expand-btn">Confirm</button>`;
            receiptContainer.innerHTML = receiptHtml;
            // Add event listener for the newly added button
            document.getElementById('proceedToPayment').addEventListener('click', showPaymentConfirmation);
        })
        
        .catch(error => {
            console.error('Error fetching book details:', error);
            receiptContainer.innerHTML = "<p>Error loading the payment details.</p>";
        });
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', displayReceipt);

function showPaymentConfirmation() {
    const paymentConfirmationHtml = `
        <div class="payment-confirmation">
            <p>Payment Done</p>
            <a href="index.html">Return to Home</a>
        </div>`;

    // Replace the receipt container's content with the payment confirmation message
    document.getElementById('receipt').innerHTML = paymentConfirmationHtml;
}






document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('query').trim().toLowerCase();

    fetch('books.json')
        .then(response => response.json())
        .then(books => {
            const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchQuery));
            displaySearchResults(filteredBooks);
        })
        .catch(error => {
            console.error('Error fetching books:', error);
            document.getElementById('searchResults').innerHTML = '<p>Error loading books.</p>';
        });
});

function displaySearchResults(books) {
    const resultsContainer = document.getElementById('searchResults');

    if (!books.length) {
        resultsContainer.innerHTML = '<p>No books found.</p>';
        return;
    }

    let result = '<div class="row">';

    books.forEach((book) => {
        let htmlSegment = `
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <img src="${book.cover_image}" alt="${book.title} cover" style="max-width:100%; height:350px;">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">Author: ${book.author}</p>
                    <p class="card-text">Price: $${book.price}</p>
                    <button class="btn btn-primary expand-btn" onclick="addToCart(${book.id})">Add to Cart</button>
                    <button class="btn btn-secondary expand-btn" onclick="viewCart()">View Cart</button>
                </div>
            </div>
        </div>`;
        result += htmlSegment;
    });

    result += '</div>';
    resultsContainer.innerHTML = result; // Ensure the correct container ID is used here
}
