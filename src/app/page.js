import Comp from "@/components/comp/comp";
import Todo from "@/components/todo/todo";

const Home = () => {
    return (
        <main>
            <div>
                <h1>This is the main content.</h1>
            </div>

            <div>
                <Comp></Comp>
                <Todo></Todo>
            </div>
        </main>
    )
}

export default Home;