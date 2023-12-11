import { useState } from 'react';


export default function CollapseElement({title, description}) {
    const [isOpen, setIsOpen] = useState(false)

    
    return  (
        <>
            <div className='collapse__container'>
                <div className="collapse-content">
                    <span>{title}</span>
                    <div className="opened-collapse-arrow" onClick={() => setIsOpen(!isOpen)}>
                        <i className={"fa-solid fa-angle-up" + (isOpen ? " clicked" : " unclicked")}  ></i>
                    </div>
                </div>
                <div className={"dropdown"+ (isOpen ? " dropdown-open" : "") }>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}