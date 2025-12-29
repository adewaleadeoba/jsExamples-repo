const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $22', 'Oatmeal - $21', 'Frittata - $15'];
const mainCourseMenu = ['Steak - $45','Pasta - $16','Burger - $18','Salmon - $25', 'Chicken Sandwich - $15'];
const dessertMenu = ['Cake - $6','Ice Cream - $5','Pudding - $4','Fruit Salad - $7', 'Frozen Yorghurt - $4', 'Carrot Cake - $8'];

//Total number of breakfast items
const breakfastTotal = breakfastMenu.length;
breakfastTotalHTML = `<p>${breakfastTotal} total breakfast items</p>`;
document.getElementById('breakfastTotalItems').innerHTML = breakfastTotalHTML;

// Use map() method for iteration. 
// Then use join() method to create a string for the HTML elements
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

//Total number of main course items
const mainCourseTotal = mainCourseMenu.length;
mainCourseTotalHTML = `<p>${mainCourseTotal} total main course items</p>`;
document.getElementById('maincourseTotalItems').innerHTML = mainCourseTotalHTML;


// Initialize a empty string variable
// Then use forEach() method for iteration
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

//Total number of dessert items
const dessertTotal = dessertMenu.length;
dessertTotalHTML = `<p>${dessertTotal} total dessert items</p>`;
document.getElementById('dessertTotalItems').innerHTML = dessertTotalHTML;


// Initialize a empty string variable
// Then use for() method for iteration
let dessertItem = '';
for(i=0; i<dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;