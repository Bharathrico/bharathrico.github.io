import './Selector.css'

const Selector = ({activeSection})=> {
    function scrollposition(slocation)
    {
        const element = document.getElementById(String(slocation));
        element?.scrollIntoView(
        {
            behavior: 'smooth'
        }
        )
    }
    return (  <div className='selector-wrap'><div className="selector">
            <button className={`pill switzer ${activeSection === "hero"? "pill-active":""}`} onClick={()=>scrollposition('hero')}><div className='select-indicator' />Home</button>
            <button className={`pill switzer ${activeSection === "hobbies"? "pill-active":""}`} onClick={()=>scrollposition('hobbies')}><div className='select-indicator' />Hobbies</button>
            <button className={`pill switzer ${activeSection === "projects"? "pill-active":""}`} onClick={()=>scrollposition('projects')}><div className='select-indicator' />Projects</button>
            <button className={`pill switzer ${activeSection === "contacts"? "pill-active":""}`} onClick={()=>scrollposition('contacts')}><div className='select-indicator' />Contacts</button>
        </div></div>);
}

export default Selector;