import CommentForm from "./components/commentForm/CommentForm";
import UserForm from "./components/userForm/UserForm";

function App() {
    return (
        <div>
            <CommentForm/>
            <UserForm/>
        </div>
    );
}

export default App;

// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users
//     Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments