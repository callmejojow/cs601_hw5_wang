# Assignment 5: Inventory Management Application

## 📝 ABOUT
This project is for my Assignment 5 & 6 of CS601, where I created an Inventory Management Application using React. The application allows users to view a list of inventory items and see detailed information about each product. The app includes responsive design, dynamic routing, and detailed product pages with images.

## 🚀 INSTALLATION
To install and run the application locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd cs601_hw5_wang
   ```

2. **Install Dependencies**:
   Ensure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Start the Application**:
   ```bash
   npm run start
   ```
   The app will be available at `http://localhost:3000`.

## 📂 PROJECT STRUCTURE
- **src/components**: Contains the main components, such as `InventoryList`, `InventoryItem`, and `ProductDetail`.
- **src/data**: Stores the `inventory.json` file with sample inventory data.
- **src/styles**: Modular CSS files for each component, ensuring organized styling.

## 📚 FEATURES & IMPLEMENTATION DETAILS
- **Inventory List View**: Displays all inventory items, each with a name, SKU, quantity, and price. The items are clickable and lead to a detailed product page.
- **Product Detail View**: Shows detailed information about a selected product, including an image, SKU, quantity, price, and description. 
- **Responsive Design**: The application adjusts gracefully to different screen sizes, ensuring a consistent experience on desktop, tablet, and mobile devices.
- **React Router**: Used for client-side routing between the inventory list and product detail views.
- **Dynamic Image Handling**: Each product detail view includes an image that is dynamically loaded based on the product's SKU.

## 🌟 ABOVE & BEYOND
- Implemented **loading states** in the `ProductDetail` component to enhance the user experience while fetching product data.
- Created a **404 Not Found page** to handle undefined routes gracefully.
- Added **hover effects** and **interactive UI elements** for a better user experience, such as hovering on inventory items to show a subtle shadow.

## 📞 SUPPORT
Jolie Wang - jwjolie@bu.edu

## 💡 LEARNINGS & CHALLENGES
> Working with React Router was an insightful experience, particularly in understanding how to pass parameters like SKU for dynamic routing. I initially had challenges with dynamically loading images, but I solved this by ensuring the correct paths and adding error handling for missing assets.

> I also explored ways to improve **accessibility** by adding ARIA labels to clickable elements and ensuring all interactive items were keyboard accessible.

> Responsive design using CSS Grid and media queries was challenging at first, especially ensuring consistent layout across mobile devices. I resolved this by refining the grid settings for different breakpoints.

## 🌟 FUTURE IMPROVEMENTS
> Implement a **search or filter** functionality to allow users to easily find products in the inventory.

> Add **pagination** for larger inventory lists to improve performance and user experience.
