import { useParams } from 'react-router-dom';
import Header from '../components/header-element';
import Accomodations from '../accomodations.json';
import CollapseElement from '../components/collapse-element'
import Slider from '../components/slider-element'
import Tag from '../components/tag-element'
import Star from '../components/star-element'
import Footer from '../components/footer-element';
import Error from './error'


export default function Accomodation () {

    const { id } = useParams();
    const place = Accomodations.find(place => place.id === id)
    if(place === undefined) {
        return <Error />
    } else {

    const rating = place.rating

    const range = () => {
        let array = []

        for (let i = 1; i<=5 ; i++) {
            array.push(i)
        }
        return array
    }

    return (
        <>
            <header className="header">
                <Header />
            </header>
            <main>
                <div className='container'>

                    <div className='carrousel'>
                        <Slider views={place.pictures}/>
                    </div>

                    <div className='content'>
                        <div className='top'>
                            <div className='left'>
                                <h1>{place.title}</h1>
                                <span className='location'>{place.location}</span>
                                <div className='tag-types'>
                                    {place.tags.map((el, key) => <Tag 
                                    key={"tag-"+key}
                                    el={el}/>
                                    )}
                                </div>
                            </div>
                            <div className='right'>

                                <div className='identity'>
                                    <span>{place.host.name}</span>
                                    <img src={place.host.picture} alt="portrait de l'hôte" />
                                </div>

                                <div className='ratings'>
                                    {range().map((i, key) => <Star 
                                    key={"star-"+key} 
                                    toggle={rating >= i ? 'on' : 'off'}/>
                                    )}
                                </div>

                            </div>
                        </div>

                        <div className='bottom'>

                            <div className='left'>
                                <CollapseElement
                                title="Description"
                                description={place.description}
                                />
                            </div>

                            <div className='right'>
                                <CollapseElement
                                title="Equipements"
                                description={place.equipments.map((el, key) => <span key={"equipements-"+key} className="equipments-list">{el}</span>)}
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )}
}