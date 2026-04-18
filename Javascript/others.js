import { characterSlider } from "./funcionesFactions.js";

const others = [
    {
        name: "Salvador Dalí",
        img: "../Imagenes/Others.jpg",
        desc: `<div>
                    <p>
                        Miembro de la Asociasión del Arte. Fue el primer Reencarnado con el que Touya y sus compañeros entraron en contacto en
                        la Isla de Enoshima, haciéndoles experimentar "Un breve viaje a las Artes". Su intención era mantenerlos presos dentro
                        de esta habilidad por el resto de sus vidas, pero al descubrir que no tenían malas intenciones, decidió rendirse. 
                    </p><br>
                    <p>
                        Pasa su tiempo dentro de Enoshima pintando cuadros junto a Van Gogh, René Magritte y Zdzisław Beksinski, siempre 
                        vigilando si hay algún intruso que no sepa valorar lo que es el Arte.
                    </p>
                </div>`,
        talent: `<div>
                    <h4>Método Crítico-Paranoico - Surrealismo</h4>
                    <p>
                        Como cualquier Reencarnado Artista, amplifica la sensitividad de aquellos que observen sus trabajos. Sus efectos cambian
                        acorde con los motivos detrás de su arte. Algunos de estos son:
                    </p><br>
                    <p>
                        La persistencia de la Memoria: Vuelve líquidos los objetos.
                    </p>
                    <p>
                        El gran masturbador: El observador entrará en pánico.
                    </p>
                    <p>
                        Cara de hormiga: Causa pérdida de energía.
                    </p>
                    <p>
                        El enigma del deseo, mi madre, mi madre, mi madre: Temporalmente borra de tu memoria lo que más amas.
                    </p>
                </div>`
    },
    {
        name: "Friedrich Nietzsche",
        img: "../Imagenes/Nietzsche.png",
        desc: `<div>
                    <p>
                        Miembro y potencial líder de los Sabios. A pesar de que ninguno tenga interés en presentarse con sus verdaderos nombres,
                        él suele hacerlo para entablar conversación con alguna persona que sea de su interés. Su misión es el encontrar "la 
                        Semilla" para detener la Great Men's War. Tras descubrir que su ubicación era en la guarida del Monstruo, sabía que 
                        era el momento perfecto para poder exterminar a la criatura y regresarla al ciclo de la Reencarnación.
                    </p><br>
                    
                    <p>
                        Su apodo dentro de los filósofos es "Mirada hacia al abismo".
                    </p>
                </div>`,
        talent: `<div>
                    <h4>Mirada hacia al abismo</h4>
                    <p>
                        Cuando miras por un largo tiempo al abismo, el abismo te devolverá la mirada. Una vez activa su Talento, su rostro
                        se volverá oscuro como la noche, al verlo, del abismo saldrá una copia del observador. Dicha copia tendrá todas sus
                        habilidades y Talento, y no parará de perseguir a su objetivo hasta que puede atraparlo y hundirlo en la oscuridad
                        de la que provino.
                    </p><br>
                    <p>
                        Con este Talento le fue posible asesinar a uno de los Reencarnados más poderosos dentro del Bosque de los Grandes.
                    </p>
                </div>`
    },
    {
        name: "Karl XII",
        img: "../Imagenes/Karl.jpg",
        desc: `<div>
                    <p>
                        Ella es en realidad un miembro del Bosque de los Grandes, siendo una de los Reyes que llevarían a cabo el plan de
                        la Paz Mundial cuando llegase el momento. No obstante, tras ver indicios del comienzo de la Great Men's War, parece
                        ser que abandonó su lealtad al Bosque y emprendió su propio viaje para acabar con aquellos Reencarnados que
                        amenazaban con destruir el planeta.
                    </p><br>

                    <p>
                        No se puede asegurar que ella haya abandonado su posición en el Bosque de forma permanente, lo más probable es que
                        regrese una vez exista una manera para detener la Great Men's War.
                    </p>
                </div>`,
        talent: `<div>
                    <h4>Meteorito de la Destrucción</h4>
                    <p>Las estrellas que la rodean le permiten flotar y acelerar su cuerpo para arrasar con sus enemigos. Es un ataque simple,
                    pero muy poderoso mientras más tiempo se encuentre acelerando, volviéndose su defensa casi impenetrable en este estado.</p>

                    <br><h4>Cabello de Estrella Fugaz</h4>
                    <p>La velocidad que alcanza con su Talento aumenta la fricción en su cuerpo al punto en el que éste empieza a
                    calentarse. Su cabello y ropas se cristalizan en rocas, similar a un meteorito.</p>
                </div>`
    },
    {
        name: "Victor Hugo",
        img: "../Imagenes/Hugo.png",
        desc: `<div>
                    <p>
                        Miembro y líder de Lumiéres. Muchos se preguntan por qué no está en la Asociasión de Novelistas. Su asociasión es la
                        encargada de recopilar información para el periodico conocido como "El Diario de los Reencarnados", donde no solo 
                        informan sobre los sucesos recientes ocurridos en el mundo de los Reencarnados de una forma extremadamente detallada
                        y precisa, sino que también tiene un apartado donde se dedica a contar historias que son consideradas cuentos de 
                        hadas. Fue el responsable de hacerle creer a todos los Reencarnados que la Great Men's War no era más que un mito.

                    </p>
                    
                </div>`,
        talent: `<div>
                    <h4>Les Rayons Et Les Ombres</h4>
                    <p>
                        Un Talento que le permite a Hugo cambiar de forma. Le gusta tomar la forma de aves o de ratones con el propósito de
                        recopilar información para sus noticias.
                    </p><br>

                    <h4>Les Misérables</h4>
                    <p>
                        Un Talento de larga distancia que hace que Hugo sea capaz de distribuir su periodico por todo el planeta. El diario
                        se crea con los materiales que hayan cerca de sus clientes; en el peor de los casos, se escribe en las paredes o en el suelo.
                    </p>
                </div>`
    },
    {
        name: "Antoni Gaudi",
        img: "../Imagenes/Gaudi2.png",
        desc: `<div>
                    <p>
                        Uno de los Reencarnados que estuvo en la Great Men's War. Tras haberse acabado, fue el responsable de reconstruir los edificios
                        y reparar las tierras que fueron arrasadas por la guerra. Después de aquello, viajó por todo el mundo para observar todos los
                        trabajos arquitécticos que la humanidad había creado; también recopiló información sobre construcciones perdidas y destruidas,
                        pero prefirió no repararlas. Él es un gran fanático de la arquitectura y de la historia. La gran caja en su espalda contiene los
                        dibujos de sus manuales de construcción y algunos brazos de repuesto.</p>
                </div>`,
        talent: `<div>
                    <h4>El Arquitecto Envidiado por Dios</h4>
                    <p>
                        Mientras tenga su manual, puede construir instantáneamente cualquier estructura. Su Talento también le permite reconstruir toda
                        una ciudad utilizando su mapa, o darle forma a un paisaje desde un mapa topográfico. No obstante, todavía necesita materiales 
                        con una calidad igual o superior a la original. Y finalmente, él no puede recrear construcciones a la perfección, pues ha
                        dicho que no existe construcción que carezca de fallos.
                    </p><br>
                    <p>
                        Si se lo piden, construirá las tumbas para sus compañeros.
                    </p>
                </div>`
    },
    {
        name: "Franz Anton Mesmer",
        img: "../Imagenes/Mesmer2.png",
        desc: `<div>
                    <p>
                        Uno de los Reencarnados que estuvo en la Great Men's War y uno de los responsables de esconderle al mundo la existencia de
                        ésta. Utilizó sus poderes hipnóticos proveídos por su Talento para sellar las memorias sobre la Great Men's War, haciendo
                        que ésta fuera olvidada por casi todos, salvo por aquellos que eran resistentes a su hipnósis o los que debían de mantener
                        sus recuerdos para poder ocultar el evento. Él se mantiene en silencio para que la hipnósis no pierda sus efectos, 
                        cualquier palabra podría debilitarla, por lo que decidió esconderse en una cueva, al menos hasta que fue encontrado por
                        Henri.
                    </p>
                </div>`,
        talent: `<div>
                    <h4>Armonía</h4>
                    <p>
                        Puede poner en trance a sus objetivos con una armónica que es parte de su cuerpo. El isntrumento está ubicado entre su hombro
                        izquierdo y su axila derecha, haciendo parecer que está besando su pecho cuando empieza a tocar su música. Su hipnosis es
                        muy potente, pero lleva un tiempo para que surja efecto y solo ocurre en un área pequeña. Muchos Reencarnados
                        combinaron sus poderes para que Mesmer pudiese afectar todo el Planeta.
                    </p><br>
                    <p>
                        Por la promesa que hizo, nunca volverá a hablar.
                    </p>
                </div>`
    },
    {
        name: "Henri Dunant",
        img: "../Imagenes/Henry.jpg",
        desc: `<div>
                    <p>
                        Aunque no es oficialmente una miembro del ejército de Pecadores, ella fue una de las seguidoras de Kouu junto con el grupo de
                        las Algas Marinas, compañeros de viaje y sus mejores amigos. Tras el final de la guerra entre los Pecadores y el Bosque,
                        decidió intervenir en los planes de los Grandes para respetar la última voluntad de Kouu. Lastimosamente, ocurrió un incidente
                        que la dejó con graves heridas, pero sus amigos no corrieron la misma suerte.
                    </p>
                    
                    <br><p>Ahora tendrá que aprender a vivir sin su compañía.</p>
                </div>`,
        talent: `<div>
                    <h4>Contrato de la Cruz Roja</h4>
                    <p>
                        Al besar a alguien en cualquier superficie de su cuerpo, puede crear un "contrato" con este. El contrato consiste en que,
                        mientras la persona se mantenga cerca de Henri, todo el daño recibido, incluso el que puede ser mortal, se reducirán a 
                        la mitad y se compartirá con ella. Henri siente el dolor de las heridas transmitidas, pero nunca morirá por estas,
                        además, tienen la característica adicional de sanarse con mayor velocidad, sin embargo, si la dañas directamente, ninguna
                        su Talento no funcionará, por lo que debe de mantenerse al margen.
                    </p>
                </div>`
    }
];

characterSlider(others);