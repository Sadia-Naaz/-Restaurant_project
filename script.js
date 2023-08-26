function getMenu() {
    return fetch('menu.json')
      .then(response => response.json())
      .then(data => {
        // Display menu items on the screen
        const menuList = document.getElementById('menu-list');
        data.forEach(item => {
          const menuItem = document.createElement('div');
          menuItem.innerText = `${item.name} - $${item.price}`;
          menuList.appendChild(menuItem);
        });
      })
      .catch(error => console.error('Error fetching menu:', error));
  }
  
  function takeOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const burgers = ['Burger A', 'Burger B', 'Burger C'];
        const order = {
          burgers: burgers[Math.floor(Math.random() * burgers.length)],
        };
        resolve(order);
      }, 2500);
    });
  }
  
  function orderPrep(order) {
    return new Promise(resolve => {
      setTimeout(() => {
        const prepStatus = { order_status: true, paid: false };
        resolve(prepStatus);
      }, 1500);
    });
  }
  
  function payOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const paymentStatus = { order_status: true, paid: true };
        resolve(paymentStatus);
      }, 1000);
    });
  }
  
  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }
  
  // Function to chain the promises and handle the entire process
  async function restaurantFlow() {
    await getMenu();
    const order = await takeOrder();
    const prepStatus = await orderPrep(order);
    const paymentStatus = await payOrder();
  
    if (paymentStatus.paid) {
      thankyouFnc();
    }
  }
  
  // Run the restaurantFlow when the page loads
  window.onload = restaurantFlow;
  