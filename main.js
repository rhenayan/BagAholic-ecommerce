

// FILTERING

const category = document.querySelector('.category-tab');
const filterProduct = document.querySelectorAll('.product-wrapper');

// console.log(filterProduct)

category.addEventListener('click', (selectedCategory) => {


    if(selectedCategory.target.classList.contains('category')) {
      const active = document.querySelector('.js-active');
      active.classList.remove('js-active');

     selectedCategory.target.classList.add('js-active');

     
      const filterCategory =  selectedCategory.target.getAttribute('data-name');
      console.log(filterCategory)

      filterProduct.forEach((product) => {
        const filterItem = product.getAttribute('data-name');
        console.log(filterItem)

        if((filterItem == filterCategory) || filterCategory == 'all' ) {
          product.classList.remove('hide');
          product.classList.add('show');

        } else {
          product.classList.add('hide');
          product.classList.remove('show');

        }



      });
      
      
    }

})
    

