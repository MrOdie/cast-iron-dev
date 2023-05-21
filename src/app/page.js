import Comp from "@/components/comp/comp";
import Todo from "@/components/todo/todo";

// Styles
import sassy from "./page.module.scss";

const Home = () => {
    return (
        <section className={sassy.section}>
            <div className={sassy.article_base}>
                <h1>This is the main content.</h1>
            </div>

            <div className={sassy.article_alt}>
                <Todo></Todo>
            </div>
        </section>
    )
}

export default Home;