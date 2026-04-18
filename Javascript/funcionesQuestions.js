const questions = document.querySelector(".questions");
const frequestions = document.querySelector(".frequentlyQuestions");
const close = document.querySelector(".close");
const body = document.getElementsByTagName("body")[0];

questions.addEventListener("click", () => {
    frequestions.classList.add("show");
    body.style.overflowY = "hidden";
});

close.addEventListener("click", () => {
    frequestions.classList.remove("show");
    body.style.overflowY = "visible";
});

const contentQuestions = document.querySelector(".contentQuestions");

contentQuestions.innerHTML = `
<h2>Reencarnado</h2>
<p>
    Este es el nombre con el que se le conoce a la nueva especie que camina sobre la Tierra. Sabrás si alguien es
    un Reencarnado por los pétalos que desprende de su cuello. Los Reencarnados se dividen en dos tipos: Perfectos e
    Imperfectos; los Imperfectos son aquellos cuya reencarnación es temporal, necesitando volver a
    utilizar las Ramas para continuar reencarnando. Es por medio de estos constantes usos que un Reencarnado puede
    volverse Perfecto, siendo este un estado donde la reencarnación está siempre activa y la Rama se vuelve parte de
    sus cuerpos. Como reconocimiento por haber alcanzado la perfección, el resto de Reencarnados se refieren a ellos por
    el nombre de la figura histórica que representan.
</p><br>
<p>
    Convertirse en un Reencarnado Perfecto también significa abandonar tu antigua vida, lo que se traduce a 
    perder todos tus recuerdos hasta ahora, quedando solo tu identidad como Reencarnado. Sin embargo, eso parece un
    trato justo para muchas personas que se someten a la reencarnación.
</p><br>

<h2>Rama de la Reencarnación</h2>
<p>
    Es el cuchillo con el que los humanos pueden hacer la transmigración para volverse Reencarnados. Se le da este nombre
    por su mango que se asemeja al de una Rama. El método para transmigar consiste en cortar tu garganta con la Rama, si en
    tu vida pasada tuviste algún Talento, podrás convertirte exitosamente en un Reencarnado, pero sino, simplemente morirás.
    Tienes que tomar ese riesgo si de verdad anhelas ser alguien en la vida.
</p><br>

<h2>Semilla de la Reencarnación</h2>
<p>
    Es el punto de origen donde crecen las Ramas de la Reencarnación. Si los Reencarnados nacen de las Ramas, las Ramas nacen de
    la Semilla. Sin este objeto, los Reencarnados no podrían existir, lo que en otras palabras significa que, si la destruyes,
    los cuerpos de los Reencarnados se disolverán en pétalos y desaparecerán de la faz de la tierra.
</p><br>

<h2>Great Men's War</h2>
<p>
    Hace siglos atrás, existieron Cuatro Reencarnados que contaban con un Talento que era devastadoramente superior al de
    los demás. Sin importar qué tantos daños le hiciera un Reencarnado a la civilización, éste jamás sería capaz de afectar
    cuerpos celestes como el planeta, pero estos Cuatro son diferentes. Renovación, Control, Creación y Existencia; estas eran
    las palabras clave para identificar los Talentos trascendentales de estos Reencarnados, los cuales, queriendo probar los
    límites de sus poderes, desencadenaron lo que más adelante se conocería como la Great Men's War.
</p><br>
<p>
    Nadie sabe con exactitud lo que ocurrió, pero la luz se curvó y el espacio se retorció, ningún órgano humano era capaz de
    percibir tales fenómenos, pero todos sabían lo que esto significaba: El Fin del Mundo. Una vez alguien se vuelve un Reencarnado,
    lo único que le queda es su Talento, y así como una mariposa usa sus alas para volar, un Reencarnado tiene derecho a usar su
    Talento como le plazca, y estos Cuatro no fueron la excepción. Si tienen el poder para destruir el planeta, ¿Por qué no deberían
    de hacerlo?
</p><br>
<p>
    Afortunadamente, un grupo de Reencarnados conocidos como "Los Sabios" intentaron razonar con estos Cuatro Reencarnados, 
    argumentando que el planeta no podía acabarse tan pronto, que más adelante podría haber algo que sea mejor que nuestro
    fin. Los Cuatro Reencarnados escucharon a esta petición, incluso ellos disfrutan de la compañía de los más débiles,
    por eso decidieron sellarse en bóvedas de espinas y observar el desarrollo de la humanidad. Si de verdad existe una mejor 
    respuesta que la destrucción, entonces estarán contentos de escucharla, pero si no es el caso, ellos reinaugurarán la guerra.
</p><br>

<h2>Los Sabios</h2>
<p>
    Son un grupo de Reencarnados que han existido desde tiempos antiguos y fueron los principales responsables de detener la Great
    Men's War. Ellos en realidad son reencarnaciones de los más grandes filósofos de la historia, lo que hace que su percepción del
    mundo sea mucho más amplia a la convencional, debido a esto, ven innecesario el presentarse por sus nombres, identificándose a 
    sí mismos por sus Talentos al ser estos el culmen de sus percepciones. Dado que la Great Men's War es un peligro inminente 
    incluso en la actualidad, han decidido buscar el paradero de la Semilla de la Reencarnación para amenazar a los Cuatro Reencarnados
    con destruirla, de esta forma, debería de ser posible impedir el fin del mundo.
</p><br>
<p>
    No obstante, la Great Men's War no es la única amenaza de los Sabios. Ellos tienen que hacerse cargo de un monstruo cambia formas
    que ha tomado la apariencia de una humana que viste de blanco; temen que, de no poder hacerlo, la realidad como la conocemos pueda
    correr un gran peligro.
</p><br>

<h2>The White Person</h2>
<p>
    Fue una de los Reencarnados que ha vivido desde los acontecimientos de The Great Men's War, es amiga cercana de los Cuatro 
    Reencarnados y una conocida de los Sabios. Se cree que también formó parte del plan para impedir la destrucción del planeta.
    Ella originalmente tenía un nombre como Reencarnada, pero decidió abandonarlo para darle prioridad a encontrar una respuesta
    al motivo de su existencia, no solo para sí misma, sino para satisfacer a los Cuatro Reencarnados.
</p><br>
<p>
    Lastimosamente, sus planes junto con su vida se esfumarían en un instante después de la aparición de un monstruo.
</p><br>

<h2>Alan Smithee</h2>
<p>
    ¿Quién fue el primer Reencarnado? Esa es una pregunta que nadie puede responder, sin embargo, sí es posible saber quién fue 
    el que le dio la primera Rama. 
</p><br>
<p>
    Una entidad que no desprende pétalos. Este hombre afirma ser el creador de las Ramas de la Reencarnación, el responsable de 
    que los Reencarnados existan en este mundo; él los observa a todos como si fuera un padre que vigila a sus hijos divertirse
    en un patio de juegos. Pero, a diferencia de un padre real, Alan Smithee nunca intervendrá en lo que va a ocurrir, si el 
    planeta es salvado o destruido, eso lo decidirán sus hijos. Aun así, siempre estará dispuesto a charlar con ellos de vez en
    cuando.
</p><br>
<p>
    Alan Smithee es un director de cine con muchas películas a su nombre, es alguien que lo rodea el misterio porque se desconoce
    su identidad. Lo cierto es que este alias lo utilizan directores de cine que no quieren recibir el reconocimiento de haber
    dirigido alguna película de la que no se sientan orgullosos, de ahí el nombre Alan Smithee ("The Alias Men"). Se desconoce por
    qué esta entidad decidió llamarse así, probablemente solo se está divirtiendo.
</p>
`