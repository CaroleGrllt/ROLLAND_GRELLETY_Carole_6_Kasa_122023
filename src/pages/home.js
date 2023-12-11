import Accomodations from '../accomodations.json'
import AccomodationCard from '../components/accomodationCard-element'
import HomeCover from '../components/coverHome-element'
import Footer from '../components/footer-element'
import Header from '../components/header-element'

export default function Home () {
    return (
        <>
        <header className="header">
            <Header />
        </header>
        <main>
            <section className='homepage-cover'>
                <HomeCover />
            </section>
            <section className="accomodations-container">
                {Accomodations.map(accomodation => {
                    return <AccomodationCard
                        key={accomodation.id}
                        id={accomodation.id}
                        image={accomodation.cover}
                        name={accomodation.title}
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