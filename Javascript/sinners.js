import { characterSlider } from "./funcionesFactions.js";

const sinners = [
    {
        name: "Kouu",
        img: "../Imagenes/Sinners.jpg",
        desc: `<div>
                    <p>El Rey de los Reencarnados. Uno de los fundadores del Bosque de los Grandes y el actual "líder" del ejército de 
                        los Pecadores. Kouu deseaba que los Reencarnados tuviesen libre albedrío y crecieran en una sociedad donde todos
                        pudieran coexistir, Da Vinci quería un mundo donde pudiesen apoyar a la humanidad, lo que implicaba la muerte 
                        de algunos Reencarnados, esto ocasionó que ambos separaran sus caminos y Kouu se volviese el principal 
                        obstáculo para el Bosque.
                    </p><br>

                    <p>
                        Se dice que él es el Reencarnado más poderoso.
                    </p>
                </div>`,
        talent: `<div>
                    <h4>Omnireceptáculo</h4>
                    <p>Al cubrir cualquier objeto con su aura negra puede controlarlo y utilizarlo como arma. No sería exagerado decir que 
                        podría controlar todo el Planeta si lo cubre con su aura. Para poder emplear su Talento primero tiene que dañar 
                        a alguien.
                    </p><br>
                    <p>
                        Posee una técnica llamada "Armonía de la Muerte Negra" donde controla toda la materia a nivel molecular en un área
                        determinada, comprimiéndola y reduciéndola a átomos. Él lo describe como un Big Bang en miniatura.
                    </p>
                </div>`
    },
    {
        name: "Charlotte Corday",
        img: "../Imagenes/Charlotte.jpg",
        desc: `<div>
                    <p>La persona más cercana a Kouu. Justo después de haberse convertido en una Reencarnada, estaba llena de odio y resentimiento 
                    hacia las personas que le hicieron daño, buscando usar su Talento para vengarse de todos ellos, sin embargo, fue Kouu
                    quien la hizo olvidarse de todo eso y la convenció de perseguir otro objetivo: El Amor. Siendo atraída por el encanto de Kouu, 
                    ella juró que permanecería a su lado hasta el final. En sus últimos momentos, Kouu lamentó no haber encontrado una persona a 
                    la que Charlotte podría usar su Talento, inconsciente de que ella ya estaba satisfecha con su deseo.</p>
                </div>`,
        talent: `<div>
                    <h4>Angel del Asesinato</h4>
                    <p>Un Talento que le permite asegurar la muerte de alguien. Una vez escoge a su objetivo, éste sufrirá las mismas heridas que
                    Charlotte produzca sobre su cuerpo, y si ella muere, su objetivo indudablemente también lo hará.</p>
                    
                    <br><h4>La Virgen de Caen</h4>
                    <p>Si Charlotte todavía no ha escogido a su objetivo, ella no podrá ser herida de ninguna manera. Si Charlotte ha escogido, su
                    objetivo no podrá morir hasta que ella sea ejecutada.</p>
                </div>`
    },
    {
        name: "Nostradamus",
        img: "../Imagenes/Nostradamus.png",
        desc: `<div>
                    <p>Uno de los Reencarnados más fieles a Kouu dentro de los Pecadores. Está constantemente a su lado como una especie
                    de secretario, avisándole sobre el futuro y aconsejándole sobre cuál puede ser el curso de acciones más indicado.</p>

                    <br><p>Fue capturado por la Black Edge en un intento de sacarle información sobre los secretos detrás
                    de los Pétalos y las Ramas de la Reencarnación. Más tarde se revelaría que él se dejó capturar para poder darle
                    el aviso a la humanidad y al Bosque de los Grandes que el Rey de los Reencarnados había regresado.</p>
                </div>`,
        talent: `<div>
                    <h4>El Gran Profeta</h4>
                    <p>Tiene en sus manos un libro conocido como "El Tomo de la Profecía", el cual le permite ver el futuro por medio de
                    los textos que se escriben automáticamente en las páginas. Pero eso no es todo, con el bolígrafo que carga consigo es 
                    capaz de tachar y reescribir los acontecimientos que ocurrirán.</p>

                    <br><p>No obstante, hay muchas reglas y condiciones que deben de seguirse, por lo que no es posible cambiar cualquier
                    contenido del libro de forma inconsciente.</p>
                </div>`
    },
    {
        name: "Hans Ulrich Rudel",
        img: "../Imagenes/Rudel.png",
        desc: `<div>
                    <p>Uno de los 5 Generales del ejército de los Pecadores. Cuando Kouu desertó del Bosque de los Grandes, él fue de
                    los primeros en avivar las llamas para iniciar una guerra, queriendo pelear contra aquellos que estaban en
                    la cima.</p>
                    
                    <br><p>Él no posee ningún deseo en ser un "Grande" o un "Pecador", tampoco siente orgullo por el nombre que
                    recibió tras reencarnar; él considera que lo perdió todo en el momento en el que cortó su cuello. No sabe
                    quién fue o por qué tomó esta decisión, solo le queda su Talento, y por ende, no le queda nada.</p>
                </div>`,
        talent: `<div>
                    <h4>Fénix</h4>
                    <p>Cualquier daño que reciba, ya sea físico o por medio de los Talentos, será contrarrestado por un poder equivalente
                    salido de su cuerpo. Desde el exterior parecerá invulnerable, pero es algo mucho más complejo que eso: Es Inmortal.</p>

                    <br><h4>Trompetas de Jericho</h4>
                    <p>Desde la oscuridad de su capa, Rudel puede sacar una cantidad ilimitada de armamento de la guerra en la que
                    participó en su vida pasada, esto incluye misiles o aviones bombarderos.</p>
                </div>`
    }, 
    {
        name: "Gaius Julius Caesar",
        img: "../Imagenes/Caesar.png",
        desc: `<div>
                    <p>Aunque parecía ser un miembro del Bosque de los Grandes, lo cierto es que él fue uno de los Pecadores originales
                    dentro del ejército de Kouu. Habiéndose infiltrado como un doble agente, en medio de la Guerra mostró sus verdaderos
                    colores a todo el mundo, traicionando al Bosque y mostrando el poder de su Talento.</p>

                    <br><p>Él es uno de los Reencarnados más interesados en descubrir la verdad detrás de los pétalos, queriendo darle
                    un sentido a un fenómeno tan extraño como la transmigración.</p>
                </div>`,
        talent: `<div>
                    <h4>Testamento del Héroe</h4>
                    <p>Él puede invocar cualquier arma existente y usarla con la mayor de las eficacias. Por "cualquier arma existente"
                    hablamos de cualquier arma que ha sido registrada en la historia humana, lo que incluye aquellas que solo se quedaron en
                    los planos.</p>

                    <br><h4>Pigmalion</h4>
                    <p>Al levantar un estandarte rojo, puede liderar hasta 1000 soldados. Todos los que sigan sus órdenes verán su poder
                    y habilidades incrementadas.</p>
                </div>`
    },
    {
        name: "Adolf Hitler",
        img: "../Imagenes/Hitler.png",
        desc: `<div>
                    <p>Uno de los 5 Generales del ejército de los Pecadores. Hitler es un niño que le tiene desprecio a aquellos
                    Reencarnados que perdieron toda su humanidad y se dejaron consumir por el orgullo de tener un Talento. Como el
                    Bosque está lleno de Reencarnados que cumplen con esas características, su misión era acabar con todos los que
                    pudiera.</p>

                    <br><p>Él sabe perfectamente la clase de persona que fue en su vida pasada, por eso tiene planeado suicidarse
                    cuando la guerra termine. Entre todos los pecadores, él es de los peores.</p>
                </div>`,
        talent: `<div>
                    <h4>Mente Maestra / Enigma</h4>
                    <p>Le permite compartir su visión con cualquier ser vivo que tenga el símbolo de la Swastika, lo cual le da un
                    conocimiento del terreno extremedamante amplio.</p>

                    <br><h4>Mein Kampf</h4>
                    <p>Puede tomar el control de aquellos que lleven el símbolo de la Cruz de Hierro, usando sus cuerpos y Talentos
                    con la mayor de las eficacias. Es capaz de robarle los sentidos a aquellos que porten el símbolo, siendo baterías
                    para potenciar su Talento.</p>
                </div>`
    },
    {
        name: "Pol Pot",
        img: "../Imagenes/Pol Pot2.jpg",
        desc: `<div>
                    <p>Uno de los 5 Generales del ejército de los Pecadores. Está siempre al lado de Hitler, sirviéndole como si fuera
                    una especie de mayordomo personal, o al menos, eso es lo que se ve desde el exterior. Lo cierto es que Hitler y
                    Pol Pot son bastante cercanos, cuidándose el uno al otro. Él es un Reencarnado que no habla nunca, por lo que es probable
                    que Hitler sea el único con el que pueda comunicarse.</p>

                    <br><p>Pol Pot decidió que iba a acompañar a Hitler en su plan suicida cuando acabase la Guerra.</p>
                </div>`,
        talent: `<div>
                    <h4>Fruta de la Corrupción</h4>
                    <p>Desprende un aura negra altamente corrosiva. Cualquier objeto o ser vivo que lo toque se pudre y desintegra, da igual
                    si se trata de una persona de carne y hueso o el acero sólido. El hedor que deja su corrupción es horrible, pero ya
                    está acostumbrado a olerlo.</p>

                    <br><p>Puede corromper hasta un radio de 50 metros, aunque él prefiere atacar directamente con sus manos, aún si eso
                    implica que destruya a su enemigo con su fuerza bruta en lugar de su Talento. Es el segundo General más fuerte.</p>
                </div>`
    }
];

characterSlider(sinners);