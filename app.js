// app.js
new Vue({
  el: '#app',
  data: {
    menuItems: [
      { label: 'Home' },
      { label: 'About' },
      { label: 'Services' },
      // Add more menu items as needed
    ],
    selectedItem: null,
  },
  methods: {
    handleMenuItemClick(item) {
      // Handle the menu item click event, you can navigate or perform actions here
      console.log(`Clicked on ${item.label}`);
      this.selectedItem = item;
    },
  },
  template: `
    <div id="app">
      <div class="left-menu">
        <ul>
          <li v-for="item in menuItems" :key="item.label" @click="handleMenuItemClick(item)">
            {{ item.label }}
          </li>
        </ul>
      </div>
      <div class="main-content">
        <p v-if="selectedItem">Selected: {{ selectedItem.label }}</p>
        <!-- Your main content goes here -->
      </div>
    </div>
  `,
});
