# ManageIt

ManageIt is a CRUD web application for managing employees efficiently. It allows you to add, edit, delete, and organize employees with an interactive dashboard.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/manageit.git
   cd manageit
   ```

2. Install dependencies:
   ```sh
   composer install
   npm install
   ```

3. Copy the environment file and configure it:
   ```sh
   cp .env.example .env
   ```
   Edit `.env` and set up your database connection.

4. Generate the application key:
   ```sh
   php artisan key:generate
   ```

5. Run database migrations:
   ```sh
   php artisan migrate
   ```

6. Start the development server:
   ```sh
   php artisan serve
   ```

## Usage

- Open `http://127.0.0.1:8000` in your browser.
- Register or log in to access the dashboard.
- Manage employees with an intuitive interface.

## Contributing

Feel free to fork the project and submit pull requests.

## License

This project is licensed under the MIT License.

