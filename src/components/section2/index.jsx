import './section2.css'
import "animate.css/animate.min.css"
import 'animate.css';
import { useEffect, useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'nuka-carousel'
export default function Section2() {


    const [isMobile, setIsMobile] = useState(true)
    useEffect(() => {
        if (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Android/i)) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [])
    const [currentSlideState, setCurrentSlideState] = useState(0)

    const images = [
        "https://artia.com/wp-content/uploads/2015/07/obras.jpg",
        "https://constructapp.io/shared/uploads/2017/05/imprevisto-em-obras-2.jpg",
        "https://ibecensino.org.br/wp-content/uploads/2019/07/04_Planejamento_controle_obras.png",
        "https://blog.belgobekaert.com.br/wp-content/uploads/2019/09/GettyImages-628578920-1.jpg"
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
                    <ScrollAnimation className='article scroll-animation' animateIn="animate__zoomIn"  >
                        <article >
                            <h1 class="animate__animated animate__bounce animate__delay-2s" >Título</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque dapibus purus eget viverra. Quisque non mollis orci, at vehicula dolor. Morbi orci dolor, elementum at felis ut, efficitur tempus leo. Sed eu diam leo.</p>
                        </article>
                    </ScrollAnimation>
                    <ScrollAnimation className='scroll-animation article ' animateIn="animate__zoomIn">
                        <article >
                            <h1 class="animate__animated animate__bounce animate__delay-2s">Título</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque dapibus purus eget viverra. Quisque non mollis orci, at vehicula dolor. Morbi orci dolor, elementum at felis ut, efficitur tempus leo. Sed eu diam leo.</p>
                        </article>
                    </ScrollAnimation>
                </>
            )
        } else {
            return(
            <>
                <article className='article' >
                    <h1 class="animate__animated animate__bounce animate__delay-2s" >Título</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque dapibus purus eget viverra. Quisque non mollis orci, at vehicula dolor. Morbi orci dolor, elementum at felis ut, efficitur tempus leo. Sed eu diam leo.</p>
                </article>
                <article className='article'>
                    <h1 class="animate__animated animate__bounce animate__delay-2s" >Título</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque dapibus purus eget viverra. Quisque non mollis orci, at vehicula dolor. Morbi orci dolor, elementum at felis ut, efficitur tempus leo. Sed eu diam leo.</p>
                </article>
            </>
            )
        }
    }

    return (
        <section className='section2'>
            <div className="group1">
                {render()}

            </div>
            <div className='group2'>
                <Carousel className='carousel-article'
                    wrapAround={true}
                    autoplayInterval={3500}
                    autoplay={true}
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

            </div>
        </section>
    )
}