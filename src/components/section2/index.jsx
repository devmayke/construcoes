import './section2.css'
import "animate.css/animate.min.css"
import 'animate.css';
import { useState } from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'nuka-carousel'
export default function Section2() {
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

    return (
        <section className='section2'>
            <div className="group1">
                <div className='article'>
                
            <ScrollContainer  >
                    <ScrollPage page={0}>
                        <Animator animation={batch(Fade(), Sticky()) }>
                        <article className='article'>
                                <h1 class=",
                            " >Título</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque dapibus purus eget viverra. Quisque non mollis orci, at vehicula dolor. Morbi orci dolor, elementum at felis ut, efficitur tempus leo. Sed eu diam leo.</p>
                            </article>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={1}>
                        <Animator animation={batch(Fade(), Sticky())}>

                            <article className='article'>
                                <h1 class=",
                            " >Título</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque dapibus purus eget viverra. Quisque non mollis orci, at vehicula dolor. Morbi orci dolor, elementum at felis ut, efficitur tempus leo. Sed eu diam leo.</p>
                            </article>
                        </Animator>
                    </ScrollPage>
                </ScrollContainer>
                </div>




                <article  >
                    <h1 class=",
                            " >Título</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque dapibus purus eget viverra. Quisque non mollis orci, at vehicula dolor. Morbi orci dolor, elementum at felis ut, efficitur tempus leo. Sed eu diam leo.</p>
                </article>



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