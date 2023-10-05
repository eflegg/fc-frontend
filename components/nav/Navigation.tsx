import styled from 'styled-components'


const items = [
    {title: "About", link: "about"}, 
    {title: "Contact", link: "contact"}, 
    {title: "Case Studies", link: "case-studies"}, 
]

export default function Navigation(){
    return (
<>
<nav aria-label="primary menu">
    <ul>
        {items.map((item, index)=>{
            return (
                <>
                <li role="menuitem"></li>
                </>
            )
        })}
    </ul>
</nav>
</>
    )
}