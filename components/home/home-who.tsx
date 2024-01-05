import styled from 'styled-components'
import theme from '../Theme'

const StyledWho = styled.section`
    margin-top: 4rem;
    .bg-purple {
        @media ${theme.devices.small}{
        padding: 2rem 6rem;
    }
    }
    .bg-purple h5 {
        color: ${theme.colours.white};
        font-size: 1.5rem;
        margin: 0;
        @media ${theme.devices.small}{
            font-size: 3rem;
        }
        
    }

    .bg-purple .ui {
        font-size: 6rem;
        align-self: flex-end;
        margin-top: 2.5rem;
    }

    .bg-purple h6 {
        color: ${theme.colours.white};
        font-size: 3rem;
        line-height: 90%;
        margin: 1rem 0;
        @media ${theme.devices.small}{
            font-size: 6rem;
            margin-top: 2.5rem;
            width: 50%;
        }
    }

    .sisters {
        flex-direction: column;
    align-items: center;
    padding: 1rem;
        h6 {
            font-weight: bold;
        font-size: 3.5rem;
        margin: 0 0 1rem 0;
        color: ${theme.colours.orange};
        @media ${theme.devices.small}{
            font-size: 6rem;
        }
        }
        button {
            @media ${theme.devices.small}{
                font-size: 1.3rem;
        }
       
    }
    }

  
    
`




export default function HomeWho({}:{}){
    return (
        <StyledWho className="home-who-are-we" data-scroll-section>
             <div className="bg-purple flex">
                    <h5 data-scroll-class="appear" data-scroll-repeat="true">Who are we?</h5>
                    <h6>1 full-stack developer</h6>
                    <h6 className="ui">1 UI designer</h6>
                </div>
                <div className="sisters flex">
                    <h6>2 sisters</h6>
                    <a className="fade" href="about.html">
                        <button className="btn-transparent">read more about us</button>
                    </a>
                </div>
        </StyledWho>
    )
}