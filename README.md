# Task-Maker Laravel API and Nuxt.js Documentation

This documentation provides instructions for setting up the Task-Maker project, a Laravel API, and a Nuxt.js client, using MySQL as the database, and Yarn as the package manager.

## Prerequisites

Before you begin, make sure you have the following prerequisites:

- Laravel 10
- Node.js version 21.1.0
- Yarn
- MySQL database server

## Task-Maker Server (Laravel)

### 1. Clone the Repository

```shell
git clone https://github.com/zalven-official/Task-Maker.git
```

### 3. Copy the environment variables
```shell
cd Task-Maker/server
cp .env.example .env
```

### 4. Configure Database

Open the `.env` file in the `Task-Maker/server` directory and configure your MySQL database settings:

```ini
DB_CONNECTION=mysql
DB_HOST=your_database_host
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
```

### 3. Install Dependencies

```shell
composer install
```

### 4. Run Migrations

```shell
php artisan migrate
```

### 5. Run Seeder
```shell
php artisan migrate --seed
```

### 6. Start the Laravel Server

```shell
php artisan serve
```

Your Laravel API will be accessible at `http://localhost:8000`.

## Task-Maker Client (Nuxt.js)

### 1. Navigate to the Client Directory

```shell
cd Task-Maker/client
```

### 2. Install Dependencies using Yarn

```shell
yarn install
```

### 3. Copy the environment variables

```shell
cp .env.example .env
```

### 4. Configure API Base URL inside ```.env```
```ini
BASE_URL='http://localhost:8000/api'
```

### 4. Start the Nuxt.js Development Server

```shell
yarn dev
```

Your Nuxt.js client will be accessible at `http://localhost:3000`.

## Using the Task-Maker Project

You can now use your Task-Maker project with the Laravel API serving as the backend and the Nuxt.js client for the frontend. Make sure to customize the client and server code to match your specific requirements.
