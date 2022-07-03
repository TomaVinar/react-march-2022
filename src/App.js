import React from "react";
import Users from "./components/users/Users";

function App() {
    return (
        <div>
            <Users/>
        </div>
    );
}

export default App

// Отримати всіх користувачів з jsonplaceholder, вивести їх.
//     Біля кожного користувача зробити кнопку, при натисканні на яку в Апп компоненті з'являються всі пости поточного користувача
// Запити робити через axios, організація коду через сервіси