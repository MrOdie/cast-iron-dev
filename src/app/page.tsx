import styles from "@/app/assets/styles/modules/home.module.scss";

const About = () => {
    return (
        <div className={styles.home}>
            <article className={styles.article}>
                <h1 className="text-center">Father &mdash; Husband &mdash; Software Developer</h1>
            </article>
            <article className={styles.article}>
                <h2>Professional Background</h2>
                <p className="h3">College</p>
                <p>In 2014 I graduated with a Bachelor of Art&#39;s in Philosophy.</p>
                <p>I then began to teach Religion at a Catholic School in Montgomery, Al.</p>
                <p>After just 3 years of teaching and a few conversations with my wife, I was inspired to make a career
                    change.</p>
            </article>
            <article className={styles.article}>
                <p className="h3">Self Learning</p>
                <p>In June of 2017 my wife and I relocated from Alabama to the Washington DC area.</p>
                <p>It was here that I began to teach myself everything that I could about computers.</p>
                <p>With a clear goal (Career in Tech), minus a concrete understanding of what this would look like (IT
                    vs. Software Engineer), I sort of floated between paths.</p>
                <p>I first learned <strong>HTML</strong> &amp; <strong>CSS</strong> before trying my hand
                    at <strong>JS.</strong></p>
                <p>The transition from <strong>HTML</strong> & <strong>CSS</strong> was to <strong>JS</strong> was more
                    challenging than I had naively anticipated.</p>
                <p>I then decided to pivot to IT &amp; began preparing to take the CompTIA A+ certification exam.</p>
                <p>By November 2017, I had passed both the 901 &amp; 902 exams and became CompTIA A+ certified.</p>
                <p>I then discovered that most all entry-level positions required <em>either</em> experience or a
                    security clearance.</p>
                <p>I had neither.</p>
                <p>December 2017 I pivoted once more, but back to Web Development. For the first
                    time <strong>JS</strong> began to click for me.</p>
                <p>February 2018 I landed my first job with DealerOn.</p>
            </article>
            <article className={styles.article}>
                <p className="h3">The Beginnings</p>
                <ul>
                    <li><p><strong>2018 &mdash; 2019:</strong> DealerOn &mdash; Jr. Web Designer</p></li>
                    <li>
                        <p><strong>2019 &mdash; 2020:</strong> SAIC &mdash; Web Developer</p>
                    </li>
                    <li>
                        <p><strong>2020 &mdash; 2022:</strong> Booz Allen Hamilton &mdash; Software Developer</p>
                    </li>
                    <li>
                        <p><strong>2022 &mdash; present:</strong> Brightspot &mdash; Senior Software
                            Engineer</p>
                    </li>
                </ul>
            </article>
        </div>
    )
}

export default About;