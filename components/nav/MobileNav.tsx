// import styled from 'styled-components'
// import Link from 'next/link'
// import NavCarete from './nav-carete'

// const MobileHeader = styled.header`
    
// `


// type MobileNavProps = {
//   items: any;
//   subMenuItem: any;
  
// }

// const MobileNav: React.FC<MobileNavProps>=({items, subMenuItem})=>{
//     return (
//         <MobileHeader>
//             <button aria-label="menu" aria-expanded="false" className="mobile-menu--toggle"></button>
//              <span>Menu</span>
//                 <ul className="menu">
//         {items.map((item, index)=>{
//             return (
//                 <>
//                 {item.submenu ? (
//                     <li>
//                       <button onClick={()=> handleSubnavClick(item.title)} className="item-with-submenu" aria-expanded={subnav === item.title ? "true" : "false"} aria-label={`Submenu of ${item.title}`}>{item.title}
//                       <NavCarete />
//                     </button>	
//                     <ul  ref={ref} className="submenu" aria-hidden={subnav === item.title ? "false" : "true"}>
//                         {item.submenu.map((submenuItem, index)=>{
//                           return (
//                               <SubMenuItem link={`${item.link}/${submenuItem.link}`} title={submenuItem.title} srText={submenuItem.srText} />
//                           )
//                         })}
//                     </ul>
//                     </li>
                   
//                 ):(
//                 <li key={index} role="menuitem"><Link href={`/${item.link}`}>{item.title}
//                </Link>
//                 </li>
//                 )}
//                 </>
//             )
//         })}
//     </ul>
//         </MobileHeader>

//     )
// }

// export default MobileNav