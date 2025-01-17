function showCategory(categoryId) {
    // Get all categories and hide them
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
      category.classList.remove('active');
      category.style.opacity = '0';
      category.style.transform = 'translateX(100%)';
    });
  
    // Show the selected category with animation
    const selectedCategory = document.getElementById(categoryId);
    setTimeout(() => {
      selectedCategory.classList.add('active');
      selectedCategory.style.opacity = '1';
      selectedCategory.style.transform = 'translateX(0)';
    }, 100);
  }
  
const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(tab => tab.classList.remove('active'));
document.querySelector(`[onclick="showCategory('${categoryId}')"]`).classList.add('active');


  