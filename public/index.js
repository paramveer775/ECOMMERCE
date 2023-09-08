/*const products = [
    { name: 'Product A',
      price: 19.99 },
    { name: 'Product B',
      price: 29.99 },
    { name: 'Product C',
      price: 9.99 },
    { name: 'Product D',
      price: 39.99 },
    // Add more products as needed
  ];

  function displayProductDetails(product) {
    const productContainer = document.getElementById('child');
    
    productContainer.innerHTML = `
      <p>Product Name: ${product.name}</p>
      <p>Product Price: $${product.price.toFixed(2)}</p>
      <hr>
    `;
    productContainer.appendChild(productElement);
  }

// -------------------------------------------------------------------
  
    // Get the parent div
    const parentDiv = document.getElementById('odin');

    // Get all child divs within the parent div
    const childDivs = parentDiv.getElementsByClassName('thor');

    // Loop through and access each child div
    for (const child of childDivs) {
        for(const product of products)
        {
            displayProductDetails(product);
    
        }
        }






const contentDiv = document.getElementById('thanos');

// Create content to add
const newContent = document.createElement('p');
newContent.textContent = 'This is new content added via JavaScript.';
newContent.style.fontWeight = 'bold';

// Append the new content to the existing div
contentDiv.appendChild(newContent);
   





    


































<!--

 
            <div id="odin">
                <div class="container mx-auto px-4 md:px-8">
                   <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 rounded-e-lg">
                   
      
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow thor">
                    <a href="#">
                        
                    </a>
                    <div class="p-5">
                        <p class="mb-3 font-normal text-gray-700"></p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                            More Details
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5h9M7 1l4 4-4 4"></path>
                            </svg>
                        </a>
                    </div>
                </div>
        
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow thor">
                    <a href="#">
                        
                    </a>
                    <div class="p-5">
                        <p class="mb-3 font-normal text-gray-700"></p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                            More Details
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5h9M7 1l4 4-4 4"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow thor">
                    <a href="#">
                        
                    </a>
                    <div class="p-5">
                        <p class="mb-3 font-normal text-gray-700"></p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                            More Details
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5h9M7 1l4 4-4 4"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow thor">
                    <a href="#">
                        
                    </a>
                    <div class="p-5">
                        <p class="mb-3 font-normal text-gray-700"></p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                            More Details
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5h9M7 1l4 4-4 4"></path>
                            </svg>
                        </a>
                    </div>
                </div>
    

                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow thor">
                    <a href="#">

                    </a>
                    <div class="p-5">
                        <p class="mb-3 font-normal text-gray-700"></p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                            More Details
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5h9M7 1l4 4-4 4"></path>
                            </svg>
                        </a>
                    </div>
                </div>
  
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow thor">
                    <a href="#">
                     
                    </a>
                    <div class="p-5">
                        <p class="mb-3 font-normal text-gray-700"></p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                            More Details
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5h9M7 1l4 4-4 4"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow thor">
                    <a href="#">
                       
                    </a>
                    <div class="p-5">
                        <p class="mb-3 font-normal text-gray-700"></p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                            More Details
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5h9M7 1l4 4-4 4"></path>
                            </svg>
                        </a>
                    </div>
                </div>
        
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow thor">
                    <a href="#">
                       
                    </a>
                    <div class="p-5">
                        <p class="mb-3 font-normal text-gray-700"></p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                            More Details
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5h9M7 1l4 4-4 4"></path>
                            </svg>
                        </a>
                    </div>
                </div>


           </div>
        </div>




*/







const products = [
  { name: 'Product A',
   price: 14.99,
   image: './image5.jpg' 
  },
   { name: 'Product B', price: 15.99, image: './image4.jpg' },
  { name: 'Product C', price: 13.99,  image: './image5.jpg'},
  { name: 'Product D', price: 14.99,  image: './image4.jpg' },
  { name: 'Product AA', price: 15.99,  image: './image5.jpg' },
  { name: 'Product BB', price: 12.99,  image: './image4.jpg' },
  { name: 'Product CC', price: 14.99,  image: './image5.jpg' },
  { name: 'Product DD', price: 13.99,  image: './image4.jpg' },
  { name: 'Product EE', price: 13.99,  image: './image5.jpg' },
  ];

 const parentDiv = document.getElementById('odin');
 const childDivs = parentDiv.getElementsByClassName('thor');


 function displayProductDetails(product, productContainer) {
   const productElement = document.createElement('div');
   productElement.innerHTML = `
   <img class="rounded-t-lg rounded-b-lg"  src= ${product.image} /> 
     <p class="mb-3 font-normal text-gray-700 dark:text-black-400"><b>Product Name: ${product.name}<b></p>
     <p>Product Price: ${product.price.toFixed(2)}</p>
     
     <hr>
    `;
   
   productContainer.appendChild(productElement);
 }


 for (let i = 0; i <childDivs.length; i++) {
  const currentDiv = childDivs[i];
  const currentProduct = products[i];
  displayProductDetails(currentProduct, currentDiv);
 }
   
