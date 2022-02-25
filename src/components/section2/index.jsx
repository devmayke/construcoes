import './section2.css'
import "animate.css/animate.min.css"
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll'
import { useEffect, useState } from 'react'
import image1 from './assets/GettyImages-628578920-1.jpg'
import image2 from './assets/imprevisto-em-obras-2.jpg'
import image3 from './assets/obras.jpg'
import image4 from './assets/04_Planejamento_controle_obras-min.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'nuka-carousel'
export default function Section2() {
    const [currentScreenWidth, setCurrentScreenWidth] = useState(700)
 
    function sizeWidth(){
      if(currentScreenWidth > 600){
        return true
      }
      return false
      
  
    }


    const [isMobile, setIsMobile] = useState(true)
    useEffect(() => {
        setCurrentScreenWidth(window.screen.width)
        if (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Android/i)) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [])
    const [currentSlideState, setCurrentSlideState] = useState(0)

    const images = [
        image1,
        image2,
        image3,
        image4
    ]
    const textSlide = {
        title: [
            'Construção e Obras',
            'Manutenção predial e residencial',
            'Pinturas e reformas',
            'Limpeza e Conservação'
        ],
        description: [
            'Serviço de empreita de obras, construções residenciais e prediais',
            'Serviços de alvernaria,elétrica, hidráulica',
            'Pintura e texturização',
            'Lavação predial, paredes, telhados, rufos, calhas e fachadas de vidro'
        ]
    }
    function render() {
        if (!isMobile) {
            return (
                <>
                    <ScrollAnimation className='article scroll-animation' animateIn="animate__fadeInLeft"  >
                        <article >
                            <h1 class="animate__animated animate__bounce animate__delay-2s" >Título</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque dapibus purus eget viverra. Quisque non mollis orci, at vehicula dolor. Morbi orci dolor, elementum at felis ut, efficitur tempus leo. Sed eu diam leo.</p>
                        </article>
                    </ScrollAnimation>
                    <ScrollAnimation className='scroll-animation article ' animateIn="animate__fadeInLeft">
                        <article >
                            <h1 class="animate__animated animate__bounce animate__delay-2s">Título</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque dapibus purus eget viverra. Quisque non mollis orci, at vehicula dolor. Morbi orci dolor, elementum at felis ut, efficitur tempus leo. Sed eu diam leo.</p>
                        </article>
                        </ScrollAnimation>
                  
                </>
            )
        } 
            return(
            <>
                        <article className='article'>
                            <h1 class="animate__animated animate__bounce animate__delay-2s" >Título</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque dapibus purus eget viverra. Quisque non mollis orci, at vehicula dolor. Morbi orci dolor, elementum at felis ut, efficitur tempus leo. Sed eu diam leo.</p>
                        </article >
                    
                        <article className='article'>
                            <h1 class="animate__animated animate__bounce animate__delay-2s">Título</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque dapibus purus eget viverra. Quisque non mollis orci, at vehicula dolor. Morbi orci dolor, elementum at felis ut, efficitur tempus leo. Sed eu diam leo.</p>
                        </article>
            </>
            )
       
    }

    return (
        <section className='section2'>
            <div className="group1">
                {render()}

            </div>
            <div className='group2'>
            <ScrollAnimation className='carousel-article' animateIn="animate__zoomIn">
                <Carousel 
                    wrapAround={true}
                    autoplayInterval={3500}
                    autoplay={sizeWidth()}
                    dragging={true}
                    pauseOnHover={true}
                    defaultControlsConfig={{
                        pagingDotsContainerClassName: "container-dots"
                    }}

                    renderCenterLeftControls={({ previousSlide }) => (
                        <FontAwesomeIcon className='previous' onClick={previousSlide} icon={faChevronLeft} size='5x' />
                    )}
                    renderCenterRightControls={({ nextSlide }) => (
                        <FontAwesomeIcon className="next" onClick={nextSlide} icon={faChevronRight} size='5x' />
                    )}
                    renderTopCenterControls={({ currentSlide }) => {
                        setCurrentSlideState(currentSlide)
                        return (
                            <div></div>
                        )
                    }} >
                    {
                        images.map((el, i) => {
                            return (
                                <img alt='' src={el} className={currentSlideState === i ? 'animate' : ''} key={i} />
                            )
                        })
                    }
                </Carousel>
                </ScrollAnimation >

            </div>
        </section>
    )
}