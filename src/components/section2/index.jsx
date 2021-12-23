import './section2.css'
import "animate.css/animate.min.css"
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll'
export default function Section2() {
  
    return (
        <section className='section2'> 
            
            <ScrollAnimation className='article scroll-animation'  animateIn="animate__zoomIn"  >
                <article >
                    <h1  class="animate__animated animate__bounce animate__delay-2s" >Teste</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque dapibus purus eget viverra. Quisque non mollis orci, at vehicula dolor. Morbi orci dolor, elementum at felis ut, efficitur tempus leo. Sed eu diam leo. Maecenas commodo neque sed purus posuere pretium. Suspendisse mattis quam tortor, eu lobortis nulla aliquam sit amet. </p>
                </article>
            </ScrollAnimation>
            <ScrollAnimation className='scroll-animation article ' animateIn="animate__zoomIn">
                <article >
                    <h1   class="animate__animated animate__bounce animate__delay-2s">Teste</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque dapibus purus eget viverra. Quisque non mollis orci, at vehicula dolor. Morbi orci dolor, elementum at felis ut, efficitur tempus leo. Sed eu diam leo. Maecenas commodo neque sed purus posuere pretium. Suspendisse mattis quam tortor, eu lobortis nulla aliquam sit amet. </p>
                </article>
            </ScrollAnimation>
            <ScrollAnimation className='scroll-animation article ' animateIn="animate__zoomIn">
                <article >
                    <h1 class="animate__animated animate__bounce animate__delay-2s">Teste</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque dapibus purus eget viverra. Quisque non mollis orci, at vehicula dolor. Morbi orci dolor, elementum at felis ut, efficitur tempus leo. Sed eu diam leo. Maecenas commodo neque sed purus posuere pretium. Suspendisse mattis quam tortor, eu lobortis nulla aliquam sit amet. </p>
                </article>
            </ScrollAnimation>
            <ScrollAnimation className='article  scroll-animation' animateIn="animate__zoomIn">
                <article >
                    <h1 class="animate__animated animate__bounce animate__delay-2s">Teste</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque dapibus purus eget viverra. Quisque non mollis orci, at vehicula dolor. Morbi orci dolor, elementum at felis ut, efficitur tempus leo. Sed eu diam leo. Maecenas commodo neque sed purus posuere pretium. Suspendisse mattis quam tortor, eu lobortis nulla aliquam sit amet. </p>
                </article>
            </ScrollAnimation>
        </section>
    )
}