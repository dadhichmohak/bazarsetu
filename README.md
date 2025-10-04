# BazarSetu

BazarSetu is a full-stack web application designed to support the Indian agriculture system by connecting farmers and consumers. The platform provides a bilingual interface in English and Hindi, ensuring accessibility for a wider audience.

## 🚀 Live Demo

- **Live Application**: https://bazarsetu-dadhichmohak.vercel.app
- **GitHub Repository**: https://github.com/dadhichmohak/bazarsetu

## Features

- **Bilingual Support**: The application supports both English and Hindi, allowing users to switch languages seamlessly.
- **Responsive Design**: The application is designed to be fully responsive, ensuring a great user experience on both mobile and desktop devices.
- **Farmer Dashboard**: Farmers can manage their crops, view sales data, and track commissions through a dedicated dashboard.
- **Marketplace for Consumers**: Consumers can browse and purchase a variety of crops, fruits, and vegetables from local farmers.
- **User Authentication**: Secure login and registration processes, including Aadhaar number verification for users.
- **Internationalization**: The application is set up for easy addition of more languages in the future.

## Tech Stack

- **Frontend**: React.js, CSS, React Router
- **Backend**: Node.js, Express.js, MongoDB
- **Deployment**: Vercel
- **Internationalization**: i18next for language support
- **Version Control**: Git, GitHub

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)
- MongoDB (local or cloud)

### Installation

#### Option 1: Install All Dependencies at Once
```bash
git clone https://github.com/dadhichmohak/bazarsetu.git
cd bazarsetu
npm run install-all
```

#### Option 2: Manual Installation

**Client**
1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

**Server**
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

### Development

Run both client and server concurrently:
```bash
npm run dev
```

## Usage

- Access the application in your browser at `http://localhost:3000`.
- Use the navigation bar to explore different sections of the application.
- Farmers can register and manage their products, while consumers can browse and place orders.

## 🌐 Deployment

The application is automatically deployed to Vercel when changes are pushed to the main branch.

### Manual Deployment to Vercel
```bash
vercel --prod
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.

## Author

**Mohak Dadhich**
- GitHub: [@dadhichmohak](https://github.com/dadhichmohak)
- Project Link: [https://github.com/dadhichmohak/bazarsetu](https://github.com/dadhichmohak/bazarsetu)