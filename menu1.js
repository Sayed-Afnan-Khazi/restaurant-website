const excelData = [
	{ Category: "Soup", "Item Name": "Cream of Seafood", "Price (rs)": 160 },
	{ Category: "Soup", "Item Name": "Crab Soup", "Price (rs)": 150 },
	{ Category: "Soup", "Item Name": "Prawn Soup", "Price (rs)": 180 },
	{ Category: "Salad", "Item Name": "Garlic Sauce", "Price (rs)": 40 },
	{ Category: "Salad", "Item Name": "Green Salad", "Price (rs)": 100 },
	{ Category: "Salad", "Item Name": "Apple Mint Salad", "Price (rs)": 100 },
	{ Category: "Salad", "Item Name": "Hawaiian Salad", "Price (rs)": 140 },
	{ Category: "Salad", "Item Name": "Raw Mango Salad", "Price (rs)": 140 },
	{ Category: "Salad", "Item Name": "Seafood Salad", "Price (rs)": 220 },
	{ Category: "Starters", "Item Name": "Fish Kabab", "Price (rs)": 340 },
	{ Category: "Starters", "Item Name": "Corn Fish", "Price (rs)": 320 },
	{ Category: "Starters", "Item Name": "Shorty Prawns", "Price (rs)": 290 },
	{ Category: "Starters", "Item Name": "Prawn Kabab", "Price (rs)": 380 },
	{ Category: "Starters", "Item Name": "Fish Fillet Barbeque", "Price (rs)": 480 },
	{ Category: "Starters", "Item Name": "Tawa Barbeque Prawns", "Price (rs)": 450 },
	{ Category: "Rice and Noodles", "Item Name": "Boiled Rice", "Price (rs)": 60 },
	{ Category: "Rice and Noodles", "Item Name": "Ghee Rice", "Price (rs)": 70 },
	{ Category: "Rice and Noodles", "Item Name": "Biriyanni Rice", "Price (rs)": 100 },
	{ Category: "Rice and Noodles", "Item Name": "Fish Fried Rice", "Price (rs)": 220 },
	{ Category: "Rice and Noodles", "Item Name": "Fish Noodles", "Price (rs)": 220 },
	{ Category: "Rice and Noodles", "Item Name": "Malabar Fish Biriyani", "Price (rs)": 280 },
	{ Category: "Indian Breads", "Item Name": "Parota", "Price (rs)": 20 },
	{ Category: "Indian Breads", "Item Name": "Tandoori Roti", "Price (rs)": 30 },
	{ Category: "Indian Breads", "Item Name": "Kulcha", "Price (rs)": 30 },
	{ Category: "Indian Breads", "Item Name": "Naan", "Price (rs)": 30 },
	{ Category: "Indian Breads", "Item Name": "Neer Dosa", "Price (rs)": 40 },
	{ Category: "Curry", "Item Name": "Dal Fry", "Price (rs)": 140 },
	{ Category: "Curry", "Item Name": "Panner Butter Masala", "Price (rs)": 200 },
	{ Category: "Curry", "Item Name": "Chicken Allapy", "Price (rs)": 220 },
	{ Category: "Curry", "Item Name": "Butter Chicken", "Price (rs)": 250 },
	{ Category: "Mocktails", "Item Name": "Blue Lady", "Price (rs)": 100 },
	{ Category: "Mocktails", "Item Name": "Blue Lagoon", "Price (rs)": 100 },
	{ Category: "Mocktails", "Item Name": "Blue Berry Mojito", "Price (rs)": 100 },
	{ Category: "Mocktails", "Item Name": "Guava Mojito", "Price (rs)": 100 },
	{ Category: "Mocktails", "Item Name": "Mango Deluxe", "Price (rs)": 120 },
	{ Category: "Mocktails", "Item Name": "Green Apple Mojito", "Price (rs)": 140 },
	{ Category: "Refreshers", "Item Name": "Mint Lassi", "Price (rs)": 60 },
	{ Category: "Refreshers", "Item Name": "Badam Lassi", "Price (rs)": 60 },
	{ Category: "Refreshers", "Item Name": "Dry Fruit Lassi", "Price (rs)": 100 },
	{ Category: "Refreshers", "Item Name": "Grape Lassi", "Price (rs)": 100 },
	{ Category: "Refreshers", "Item Name": "Mango Punch", "Price (rs)": 140 },
	{ Category: "Refreshers", "Item Name": "Mango Banana Nuts", "Price (rs)": 150 },
];
// Convert to JSON
const jsonData = {};
  
excelData.forEach(row => {
	const category = row.Category;
	const itemName = row["Item Name"];
	const price = row["Price (rs)"];
  
	if (!jsonData[category]) {
	  jsonData[category] = [];
	}
  
	jsonData[category].push({
	  name: itemName,
	  price: price
	});
});
  
// console.log(jsonData)

// menu data
const menuData = JSON.stringify(jsonData, null, 2)
// console.log(menuData)

// Function to fill the menu
function fillMenu() {
	const menuContainer = document.querySelector(".menuContainer");
  
	// Loop through menu data
	for (const category in jsonData) {
		// for each category reate a div with classname = category
		// Create category heading
		console.log("cat:",category)
		const categoryDiv = document.createElement('div')
		categoryDiv.className = "category"
		console.log(categoryDiv) 
		menuContainer.appendChild(categoryDiv);
		

		//create a category heading -> as a child of div.category
		const categoryHeading = document.createElement('h3');
	  	categoryHeading.innerHTML = category;
		categoryHeading.classList.add("category");
		
	  	// Append category heading to menu
		categoryDiv.appendChild(categoryHeading)
		// UL for list
		const ul = document.createElement('ul');
		ul.className = "itemlist_container"
		

		// Loop through items in category
		jsonData[category].forEach(item => {
			console.log("item",item)
			// Create list for items
			const itemList = document.createElement('li');
			itemList.className = 'itemList'

			// Create span for item name
			const itemNameSpan = document.createElement('span');
			itemNameSpan.innerHTML = item.name;
			itemNameSpan.classList.add("item");
  
			// Create span for item price
			const itemPriceSpan = document.createElement('span');
			itemPriceSpan.innerHTML = item.price;
			itemPriceSpan.classList.add('price');
  
			// Append item name and price spans to list item
			itemList.appendChild(itemNameSpan);
			itemList.appendChild(itemPriceSpan);
			ul.appendChild(itemList)
		});
		categoryDiv.appendChild(ul)
  
	  	// Append item list to menu
		menuContainer.appendChild(categoryDiv);
		console.log(menuContainer) 
	};
}
  
// Call the function to fill the menu
document.addEventListener('DOMContentLoaded', fillMenu);
// fillMenu();