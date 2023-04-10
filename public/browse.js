async function fetchItems() {
    try {
      const response = await fetch('/api/items');
      if (response.ok) {
        const items = await response.json();
        displayItems(items);
      } else {
        throw new Error(await response.text());
      }
    } catch (error) {
      console.error('Error fetching items:', error.message);
    }
  }
  
  function displayItems(items) {
    const itemsContainer = document.getElementById('items-container');
  
    items.forEach((item) => {
      const itemCard = createItemCard(item);
      itemsContainer.appendChild(itemCard);
    });
  }
  
  function createItemCard(item) {
    const card = document.createElement('div');
    card.className = 'item-card';
  
    const title = document.createElement('h3');
    title.textContent = item.name;
  
    const description = document.createElement('p');
    description.textContent = item.description;
    
    const category = document.createElement('p');
    category.textContent = `Category: ${item.category || ""}`;

    const price = document.createElement('p');
    price.textContent = `Price: $${item.price}`;
    // Add other item properties (category, price, images, etc.) as needed
  
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(category);
    card.appendChild(price);
  
    return card;
  }
  
  // Fetch and display items when the page loads
  fetchItems();
  