import TodoApp from "@/components/Todo/TodoApp/TodoApp";

// Styles
import sassy from "./page.module.scss";

const Home = () => {
    return (
        <section className={sassy.section}>
            <article className={sassy.article_base}>
                <h1>This is the main content.</h1>
            </article>

            <article className={sassy.article_alt}>
                <TodoApp></TodoApp>
            </article>
        </section>
    )
}

export default Home;