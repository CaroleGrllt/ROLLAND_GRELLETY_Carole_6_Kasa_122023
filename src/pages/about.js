import AboutSections from '../about.json'
import Header from '../components/header-element'
import Footer from '../components/footer-element'
import AboutCover from '../components/coverAbout-element'
import CollapseElement from '../components/collapse-element'


export default function About () {
    return (
        <>
            <header className="header">
                <Header />
            </header>
            <main>
                <section className='about-cover'>
                    <AboutCover />
                </section>
                <section className='about-collapse-container'>
                    {AboutSections.map((about, key) => {
                        return <CollapseElement
                        key={"about-"+key}
                        title={about.title}
                        description={about.description}
                        />
                    })}     
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </>

    )
}
