import { characterSlider } from "./funcionesFactions.js";

const strays = [
    {
        name: "Samuel Morse",
        img: "../Imagenes/Morse.jpg",
        desc: `<div>
                    <p>Ella es una Reencarnada que aparece acompañando a Ernetti. Es la encargada de transmitir la información que hay dentro
                        de su rango de radiodifusión, lo que le permite comunicarse con quien desee desde la ubicación que desee. De esta forma, 
                        Morse recibe los mensajes de Ernetti y ella se los proyecta a quien sea con quien quiera hablar. Por esa misma razón, 
                        ambos son comunmente conocidos como "El viento y las mareas".
                    </p>
                    <br><p>
                        Cuando te encuentres con ella y con Ernetti, será en una habitación blanca donde solo estarán ustedes.
                    </p>
                </div>`,
        talent: `<div>
                    <h4>Transmisor</h4>
                    <p>
                        Puede utilizar las ondas sonoras y la luz para recibir y transmitir mensajes, los cuales pueden ser tanto sonido puro como
                        imágenes. La habitación en donde te la encuentras o su propia apariencia son un ejemplo de lo segundo. A pesar de 
                        que ella se presente a sí misma como una mujer de 3.6 metros, lo cierto es que es una criatura similar a un ciempiés humano
                        con un transmisor por cabeza. 
                    </p><br>
                    <p> 
                        Su pasatiempo favorito es charlar con las ballenas y delfines.
                    </p>
                </div>`
    },
    {
        name: "Pellegrino Ernetti",
        img: "../Imagenes/Ernetti.png",
        desc: `<div>
                    <p>
                        Es sarcástico y orgulloso, pero ama a los humanos y le gusta ver la historia de la humanidad. A pesar de no haber estado en
                        la Great Men's War, gracias a que su Talento el permite ver el pasado, tomó una posición similar a aquellos que presenciaron
                        tal catástrofe. Utiliza su Talento para reunir información para mantener informada a Alexander; aunque ella nunca se lo
                        pidió directamente, entiende que su habilidad es invaluable para entender cualquier situación que pueda presentarse.
                    </p>
                    <br><p>
                        Esta apariencia solo es la que Morse quiere que veas.
                    </p>
                </div>`,
        talent: `<div>
                    <h4>Cronovisor</h4>
                    <p>
                        Ernetti puede ver el pasado al interpretar sus rayos electromagnéticos. Sin embargo, el dispositivo que utiliza
                        para esto es tan grande que es casi inamovible, por esta razón, no puede abandonar su habitación.
                    </p><br>
                    <p> 
                        Sumado a esto, él no puede ver arbitrariamente al pasado, mientras más lejos vaya, mayor interferencia recibe, lo que obstaculiza
                        el uso de su Talento. Por alguna razón, Ernetti es incapaz de ver eventos concretos por más que se esfuerce.
                    </p>
                </div>`
    },
    {
        name: "Kamiizumi Ise-no-Kami",
        img: "../Imagenes/Strays.jpg",
        desc: `<div>
                    <p>
                        Tras recibir la carta de una de sus aprendices, entró en contacto con Haito para entrenarla en el arte de la espada. Él
                        es apodado como el Santo de la Espada y se dice que su maestría con la espada es casi inigualable. Muy pocas personas
                        han visto su cara debajo de la tela que lleva puesta; Kamiizumi se la puso porque prefiere utilizar sus otros sentidos
                        que el de la vista, aunque parece ser que todavía puede ver un poco debajo de ésta.
                    </p>
                    
                    <br><p>El único espadachín que se considera un igual a Kamiizumi es su mejor amigo, Bokuden.</p>
                </div>`,
        talent: `<div>
                    <h4>Inconsciente</h4>
                    <p>
                        Originalmente se había enfocado en perfeccionar el estilo "Desinteresado". Junto con Bokuden, Kamiizumi se vio envuelto
                        en múltiples batallas en las que finalizaba con la vida de sus enemigos, pero pronto se dio cuenta que este camino no 
                        era para él. Ahora, empleando el estilo "Inconsciente", tuvo que separarse de su amigo al ver que se habían vuelto 
                        incompatibles.
                    </p><br>
                    <p>
                        Se desconoce cuál es la función de este Talento, Bokuden es el único que ha sobrevivido para contarlo.
                    </p>
                </div>`
    }, 
    {
        name: "Zenon",
        img: "../Imagenes/Zenon.jpg",
        desc: `<div>
                    <p>
                        Una mujer calmada y reservada, suele incrementar la moral de sus compañeros en momentos de estrés con un abrazo. Incluso en
                        situaciones cruciales donde su vida corre peligro, ella siempre se mantiene serena, quizás porque todo sigue dentro de
                        la lógica en la que ella tanto confía, o porque ya hizo las paces con que eventualmente encontraría su final. Aún si sus 
                        compañeros van en contra de la "lógica", estará dispuesta a seguirlos con tal de ver si serán capaces de anteponerse 
                        al resultado.
                    </p><br>
                    <p>
                        Antiguamente era un miembro de los Sabios.
                    </p>
                </div>`,
        talent: `<div>
                    <h4>Paradojas</h4>
                    <p>
                        Al entrar en un estado de hiperconcentración, ella puede traer paradojas a la realidad al aplicar reestricciones a objetos en
                        movimiento desde su perspectiva, pero debido a que esto puede ocasionar efectos mariposa, reduce sus usos estrictamente.
                    </p><br>
                    <p>
                        Aquiles y la Tortuga: Si un objeto se mueve en la misma dirección que Zenon, no será capaz de alcanzarla sin importar su velocidad.
                    </p>
                    <p>
                        Flecha Voladora: Si Zenon se vuelve completamente inmóvil o va en reversa, su objetivo estará obligado a imitarle. 
                    </p>
                </div>`
    },
    {
        name: "Genbei Fuse",
        img: "../Imagenes/Genbei.jpg",
        desc: `<div>
                    <p>Una chica que reencarnó recientemente. A solo 3 meses de haber renacido, formó parte de una batalla decisiva contra
                    el Bosque de los Grandes por petición de su mejor amiga, Minamoto no Tametomo, siendo Fuse la pieza clave para la
                    victoria.</p><br>
                    <p>Tiene un enorme complejo de inferioridad por ser la reencarnación de una persona que posee pocos registros históricos
                    sobre su existencia, ella misma duda de si el hombre conocido como "Genbei Fuse" realmente existió.</p>
                </div>`,
        talent: `<div>
                    <h4>Bala Mística de la Traición</h4>
                    <p>Un Talento que solo puede utilizarse una vez por batalla. Fuse, armada con un rifle japonés, tiene la capacidad de
                    dar un único disparo al equipo enemigo para destruirlo por dentro. No se trata de un disparo mortal, sino de uno que
                    hará florecer la semilla de la traición en su interior.</p>

                    <br><p>Cualquiera que toque esta bala traicionará a su equipo y hará todo lo posible para acabar con sus vidas.</p>
                </div>`
    },{
        name: "Laplace & Maxwell",
        img: "../Imagenes/Maxwell & Laplace X2.jpg",
        desc: `<div>
                    <p>
                        Pierre-Simon Laplace y James Clerk Maxwell son un dúo de Reencarnados que se mantienen al margen del conflicto entre
                        los humanos o los Reencarnados. No tienen el deseo de intervenir, tan solo el de observar. 
                    </p><br>

                    <p>
                        Eran cercanos a Erwin Schrödinger y hablaban sobre las teorías cuánticas que crearon en sus vidas pasadas. Sin embargo,
                        después de que éste se uniera al Bosque de los Grandes, ellos observaron algo, despidiéndolo con un último mensaje:</p>
                       <p> "La caja se ha abierto" "El gato ha muerto."
                    </p>
                </div>`,
        talent: `<div>
                    <h4>Demonio de Laplace</h4>
                    <p>Talento de Laplace. Mientras él se mantenga como un observador, podrá ver la verdadera conclusión de lo que sea.</p>

                    <br><h4>Demonio de Maxwell</h4>
                    <p>Talento de Maxwell. Mientras él se mantenga como un observador, podrá ver todo movimiento de lo que sea.</p>

                    <br><p>Cuando ambos activan sus Talentos, las cremalleras de sus cabezas se abren para revelar ojos gigantes.</p>
                </div>`
    },
    {
        name: "Alexander Non Grata",
        img: "../Imagenes/Alexander.jpg",
        desc: `<div>
                    <p>
                        La única forma posible de describirla es "poder puro". Es una de los Cuatro Reencarnados que iniciaron la Great Men's
                        War y la primera en salir de su prisión al considerar que ya tuvo suficiente de esperar. Al enterarse de la muerte de
                        dos de sus mejores amigos, decidió que era momento de reinaugurar la Great Men's War para honrarlos.
                    </p><br>
                    <p>
                        No es un jefe final, ni un jefe secreto más fuerte que el jefe final, no es un personaje desbloqueable, tampoco
                        un DLC. Ella es la pantalla final de Game Over que verás cuando termines de jugar.
                    </p>
                </div>`,
        talent: `<div>
                    <h4>"Existencia"</h4>
                    <p>
                        El nombre de su Talento es desconocido, pero es identificado bajo el apodo de "Existencia". De lo poco que se ha visto
                        en la historia, cada vez que golpea, es capaz de alterar las leyes de la física, destruyendo materia casi-indestructible,
                        o enviarle un mensaje a todos los Reencarnados de que el final se acercaba al hacer que un terremoto cruce en línea 
                        recta a través de todo el planeta, a pesar de que las leyes dictan que las vibraciones que crucen el manto terrestre 
                        deberían de curvarse. Se cree que puede destruir o alterar el curso del movimiento de los planetas. 
                    </p>
                </div>`
    }
];

characterSlider(strays);