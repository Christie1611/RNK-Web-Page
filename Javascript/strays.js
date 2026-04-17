import { characterSlider } from "./funcionesFactions.js";

const strays = [
    {
        name: "Samuel Morse",
        img: "../Imagenes/Morse.jpg",
        desc: `<div>
                    <p>Ella es un miembro fundador y el cerebro detrás del Bosque de los Grandes, suele tener una expresión fría y calculadora. 
                    Debido a su inteligencia, es bastante pesimista sobre el futuro que le depara a la humanidad. Es una Reencarnada 
                    Perfecta que conoce su edad y pasado, esto es gracias a que utilizó su Talento para averiguar su  antigua identidad, 
                    no obstante, se niega a hacer lo mismo con los demás miembros por más que se lo pidan. Es consciente de que si alguien se 
                    cortó el cuello con la Rama fue para olvidarse de las duras memorias de su pasado.</p>
                </div>`,
        talent: `<div>
                    <h4>Demonio del Cálculo</h4>
                    <p>Su Talento le permite interpretar toda la información que percibe de su entorno para calcular y predecir el futuro.</p><br>

                    <h4>Padre de la Informática</h4>
                    <p>Puede manipular todos los ordenadores que estén conectados a internet. Realmente tiene control sobre todo lo que
                    use un procesador, lo que significa que, en tiempos modernos como estos, es capaz de conectarse con todo el planeta y
                    ganar acceso al conocimiento colectivo de la humanidad.</p>
                </div>`
    },
    {
        name: "Henry Dunant",
        img: "../Imagenes/Henry.jpg",
        desc: `<div>
                    <p>Con una actitud positiva y bromista, pero seria y decidida cuando el momento lo amerita, Newton es con diferencia el miembro 
                    del Bosque de los Grandes al que podrías tener como amigo. Se volvió compañero de Albert Einstein para ayudarla a controlar mejor
                    su Talento, siendo apoyada por la Fruta de la Gravedad. Ambos se volvieron inseparables después de compartir muchas misiones
                    juntos.</p>
                    
                    <br><p>Sí, su cabeza es una manzana, pero todavía puede hacer cosas como comer, dormir o incluso respirar.</p>
                </div>`,
        talent: `<div>
                    <h4>Fruta de la Gravedad</h4>
                    <p>Tiene la capacidad de crear manzanas con propiedades gravitacionales y siempre que tenga una de estas en sus manos 
                    podrá controlar la gravedad a placer, algo que le sirve de forma tanto defensiva como ofensiva. Puede crear campos gravitacionales
                    a su alrededor para protegerse de ataques o usar estos mismos campos para limitar los movimientos de sus objetivos. Da igual el
                    tamaño o la fuerza de su oponente, éste sigue rigiéndose por las leyes de la gravedad, por lo que es imposible escapar de Newton.</p>
                </div>`
    },
    {
        name: "Kamiizumi Ise-no-Kami",
        img: "../Imagenes/Strays.jpg",
        desc: `<div>
                    <p>Fue la quinta y última miembro de los que fundaron originalmente el Bosque de los Grandes. Tiene un carácter bastante
                    agresivo y emocional hacia los hombres, no siendo capaz de tolerar su presencia, lo que hace que suela golpear a Newton
                    cada vez que éste la hace enojar. Fue una de las Reencarnadas que apoyaron el plan de Leonardo Da Vinci para conseguir
                    la Paz Mundial.</p>
                    
                    <br><p>A pesar de que lo odiaba al principio, con el paso del tiempo pudo encariñarse de Newton.</p>
                </div>`,
        talent: `<div>
                    <h4>Transferencia Espacial</h4>
                    <p>Si Einstein saca y muerde su lengua podrá teletransportarse a la ubicación que desee. No obstante, hay muchas condiciones
                    a seguir para que esto se cumpla: El área de teletransporte debe de ser una forma geométrica definida con sus medidas, 
                    tiene que tener puntos de referencia en su cuerpo para una imagen clara, y necesita conocer las coordenadas exactas a las 
                    que se moverá. Si alguna de estas condiciones no se cumple, puede correr el riesgo de afectar gravemente su salud o incluso
                    perder la vida.</p>
                </div>`
    }, 
    {
        name: "Zenon",
        img: "../Imagenes/Zenon.jpg",
        desc: `<div>
                    <p>Es la Reencarnación de Miyamoto Musashi, sin embargo, como todavía es una Reencarnada Imperfecta, de momento no se ha
                    ganado el reconocimiento de tomar el nombre de su vida pasada. Su propósito es convertirse en una Reencarnada Perfecta lo
                    más rápido posible para poder reabrir el dojo de su padre y hacer que éste se sienta orgulloso de ella.</p>
                    
                    <br><p>Por petición de Neumann (y por su propio instinto) invitó a Touya a formar parte del Bosque de los Grandes, aunque
                    eso no salió tan bien como esperaba.</p>
                </div>`,
        talent: `<div>
                    <h4>Ibitsu Niten Reihou</h4>
                    <p>Haito es una de las espadachinas más habilidosas entre los Reencarnados, pero donde realmente recide el valor del
                    Talento de Miyamoto Musashi es en las múltiples técnicas que puede utilizar. Ainuki inmoviliza
                    forzosamente a sus oponentes y a ella al hacerlos sentir la presión de la muerte, Ittou Entetsu paraliza a su objetivo 
                    y crea un corte que ignora las distancias, y Hued Corpse hace cortes simultáneos, la cantidad dependerá del usuario. 
                    A cambio, su Talento se manifestará como un tatuaje de ciempiés que "devorará" todo su cuerpo si no tiene cuidado.</p>
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
    },
    {
        name: "Laplace & Maxwell",
        img: "../Imagenes/Maxwell & Laplace.jpg", //"../Imagenes/Laplace & Maxwell.png",
        desc: `<div>
                    <p>Uno de los Reyes y la mano derecha de la lider del Bosque de los Grandes. Originalmente era un Reencarnado Errante que
                    seguía a "The White Person", pero después de discrepar con sus ideales, decidió unirse al Bosque para hacer posible el
                    plan de la Paz Mundial. No obstante, este plan es solo una tapadera. Nikola Tesla es un Reencarnado que busca el sentido
                    de su existencia, la razón por la que volvió a nacer. Necesita estar seguro de que es necesario para este
                    mundo, que éste no continuará girando sin él, de otro modo, ¿Por qué está aquí para empezar?</p>
                </div>`,
        talent: `<div>
                    <h4>Bala Mística de la Traición</h4>
                    <p>Nikola Tesla acumula la energía que le provee la rotación del planeta para convertirla en otra totalmente
                    diferente. Ya sea eléctrica, magnética, cinética, térmica, o lumínica; es posible utilizar cualquier tipo de energía
                    existente mientras la Tierra siga girando sobre su propio eje.</p>

                    <br><p>La potencia de sus ataques varían dependiendo de cuánta energía acumule Tesla dentro de sí mismo, siéndole posible
                    destruir un planeta según sus propias palabras.</p>
                </div>`
    },
    {
        name: "Alexander Non Grata",
        img: "../Imagenes/Alexander.jpg",
        desc: `<div>
                    <p>Miembro fundador y una de los más jóvenes dentro del Bosque de los Grandes, suele llevar puesta una máscara que muchas 
                    veces es confundida con su cara real. Picasso tiene la costumbre de pintar sobre todas las superficies que vea, lo que hace que
                    constantemente tengan que limpiar las instalaciones. Es bastante conocida en la Asociasión del Arte, pero no es un miembro 
                    oficial por razones desconocidas; se teoriza que se debe a que su Talento como pintora es mucho más aterrador que el de 
                    los demás, lo que terminó aislándola. A pesar de que hayan pasado tantos años, sigue siendo una niña.</p>
                </div>`,
        talent: `<div>
                    <h4>Periodo Negro</h4>
                    <p>El Talento de los Pintores consiste en influenciar las percepciones mentales de los videntes por medio del arte, por
                    lo que Picasso no es la excepción. Quien sea que vea sus pinturas las interpretará como algo real, lo que hará que las
                    susodichas cobren vida y se vuelvan capaces de tener efectos en la propia realidad. No es que las pinturas
                    literalmente salgan de sus cuadros, éstas permanecerán en su sitio, pero la mente es tan fuerte que, desde la perspectiva
                    del vidente, se verá como si la pintura de verdad se pudiera manifestar en nuestro mundo.</p>
                </div>`
    }
];

characterSlider(strays);