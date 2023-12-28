import React from "react";
import InfoNav from "../../components/infoNav";
import instagram from "../../assets/instagram.svg";
import badenpowell from "/badenpowell.jpg";
import florDeLiz from "/florDeLizNegra.png";
import Formulario from "../../components/formulario";

function Nosotros() {
  return (
    <main className="w-screen">
      <InfoNav />
      <section className="w-full flex justify-center items-center py-16">
        <div className="flex gap-8 h-3/5 px-40 items-center xln:px-10 lgn:flex-col lgn:px-2">
          <img
            src="/grupal.jpeg"
            className="w-1/2 h-96 rounded-lg lgn:w-full smn:h-60"
          />
          <div className="flex flex-col h-full basis-1/2 justify-between py-8">
            <div className="flex flex-col gap-4 smn:text-base">
              <h3 className="font-semibold text-4xl text-red-600">
                Sobre nosotros
              </h3>
              <p>
                Nuestro grupo es el hogar de una vibrante comunidad scout,
                compuesta por 6 ramas que atienden a diversas edades y etapas de
                desarrollo. Con más de 20 apasionados dirigentes, nos esforzamos
                por inspirar a la próxima generación de líderes, fomentando
                valores como el respeto, la solidaridad y la responsabilidad.
              </p>
              <p>
                Estamos orgullosos de ser miembros de la Asociación 'BPSA',
                uniendo fuerzas con otros grupos scouts comprometidos con la
                excelencia y la formación integral de nuestros miembros.
              </p>
              <p>
                En el Grupo Scout San Miguel de Arcángel, no solo creamos
                scouts, creamos experiencias significativas que perduran toda la
                vida. Únete a nosotros en este emocionante viaje donde la
                amistad, el aprendizaje y la diversión se entrelazan para formar
                la base de una comunidad fuerte y unida.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="tracking-tighter">
                9 de Julio 3535 - Rosario - Argentina
              </span>
              <div className="flex gap-2">
                <a href="https://instagram.com/gs_sanmi?igshid=OGQ5ZDc2ODk2ZA==">
                  <img src={instagram} className="w-12" />
                </a>
                {/* <img src={facebook} className="w-12" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col gap-4">
  
        <aside className="w-full h-96 flex px-20 py-5 bg-custon-red justify-between 2xln:px-10 xln:px-2 xln:h-72 mdn:hidden">
          <img
            src="/banderas.jpg"
            className="rounded-xl w-72 2xln:w-56 xln:w-40 "
          />
          <img
            src="/flecha.jpg"
            className="rounded-xl w-72 2xln:w-56 xln:w-40"
          />
          <img src="/mesa.jpg" className="rounded-xl w-72 2xln:w-56 xln:w-40" />
          <img
            src="/fogon.jpg"
            className="rounded-xl w-72 2xln:w-56 xln:w-40"
          />
          <img
            src="/juego1.jpg"
            className="rounded-xl w-72 2xln:w-56 xln:w-40"
          />
        </aside>
        <div className="px-10 py-4 flex flex-col gap-10 mdn:px-2">
          <div>
            <h3 className="text-4xl text-red-600 font-semibold">
              Nuestras secciones
            </h3>
            <h6 className="text-xl">
              Independientemente de la edad podemos compartir ideales
            </h6>
          </div>
          <div className="grid w-3/4 m-auto grid-cols-3 gap-x-6 gap-y-6 lgn:w-full mdn:flex flex-col mdn:text-center">
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl text-red-600 font-semibold">Castores</h4>
              <p>
                La Colonia de Castores comprende a niños de 5 a 7 años. Es la
                edad de máxima ilusión por descubrirlo todo. Aprenden a vivir en
                grupo y participar en actividades. El juego desarrolla la
                imaginación y la responsabilidad.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl text-red-600 font-semibold">Lobatos</h4>
              <p>
                Esta etapa abarca a niños de 7 a 11 años. Participan en juegos y
                actividades apropiados para su edad y reciben insignias por sus
                logros.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl text-red-600 font-semibold">Haditas</h4>
              <p>
                Comprende niñas de 7 a 11 años. Se llaman HADITAS y se basa en
                el libro "El cuento de la lechuza castaña."
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl text-red-600 font-semibold">Scouts</h4>
              <p>
                Abarca a niños de 11 a 14 años. Se forman secciones llamadas
                Tropa y Comunidad. Promueve el trabajo en equipo a través de
                juegos, buenas acciones y campamentos.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl text-red-600 font-semibold">Raiders</h4>
              <p>
                Comprende a jóvenes de 14 a 17 años. Se dividen en Tropas y
                Comunidades Raider Scouts y utilizan el Sistema de Patrullas.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl text-red-600 font-semibold">Rovers</h4>
              <p>
                La etapa de Rovers abarca a jóvenes de 18 a 25 años y permite la
                participación mixta. Realizan actividades de servicio a la
                comunidad y promueven valores scouts.
              </p>
            </div>
            <div className="flex flex-col gap-4 col-span-3 text-center">
              <h4 className="text-2xl text-red-600 font-semibold">
                Dirigentes
              </h4>
              <p>
                Comprende desde los 25 en adelante. Los dirigentes son modelos a
                seguir que inspiran a los jóvenes a convertirse en ciudadanos
                activos y éticos en sus comunidades.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="w-screen h-full flex flex-col pt-24 px-40 gap-32">
        <div className="flex flex-col gap-10">
          <h1 className="text-5xl font-bold text-red-600">Scoutismo</h1>
          <div className="w-full flex h-96">
            <div className="w-full flex justify-center">
              <img src={badenpowell} className="rounded-2xl"></img>
            </div>
            <div className="w-full flex flex-col gap-4">
              <h3 className="text-2xl font-bold">Robert Baden-Powell</h3>
              <p>
                Robert Baden-Powell, nacido en 1857 en Londres, fue un
                distinguido militar británico y el fundador del movimiento
                scout. Después de destacarse en el asedio de Mafeking durante la
                Segunda Guerra Bóer, Baden-Powell canalizó su experiencia
                militar hacia la educación juvenil. En 1907, organizó el primer
                campamento experimental en la isla de Brownsea, sentando las
                bases del escultismo. Su libro "Escultismo para muchachos" de
                1908 consolidó los principios del movimiento. La Promesa Scout y
                la Ley Scout, establecidas por Baden-Powell, son fundamentales
                para los scouts en todo el mundo. El movimiento scout se
                expandió internacionalmente, promoviendo valores como la
                responsabilidad, el respeto por la naturaleza y el servicio
                comunitario. Baden-Powell falleció en 1941, pero su legado
                perdura a través de la influencia positiva del escultismo en la
                juventud.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-full flex flex-col gap-4">
            <h3 className="text-2xl font-bold">La flor de liz</h3>
            <p>
              La flor de lis, símbolo icónico en el movimiento scout, tiene un
              rico trasfondo histórico y simbólico. Originaria de la heráldica
              medieval, la flor de lis era un emblema utilizado por la realeza y
              simbolizaba nobleza, pureza y honor. En el contexto scout, fue
              adoptada por Baden-Powell como un símbolo representativo de los
              ideales del movimiento. Cada pétalo de la flor de lis tiene un
              significado específico: el deber hacia Dios y la religión, el
              deber hacia los demás y la lealtad, y el deber hacia uno mismo y
              la autoestima. Este emblema es un recordatorio constante de los
              valores fundamentales que los scouts se comprometen a seguir.
              Además, la flor de lis sirve como un símbolo de unidad global
              dentro del escultismo, ya que es reconocida y utilizada por scouts
              de todo el mundo. En otras palabras la flor de lis es un emblema
              que encarna la esencia misma del escultismo, amalgamando historia,
              nobleza y valores esenciales para la formación de los jóvenes.
            </p>
          </div>
          <div className="w-full flex justify-center">
            <img src={florDeLiz} className="w-96"></img>
          </div>
        </div>
      </div>
      <aside className="h-96 w-full bg-red-600 px-8 text-white flex flex-col gap-12 py-4">
        <h3 className=" text-2xl font-bold">La ley scout</h3>
        <div className="w-full h-full grid grid-cols-5 gap-x-10">
          <div>1. El scout cifra su honor en ser digno de confianza</div>
          <div>2. El scout es leal</div>
          <div>3. El scout util y actua sin esperar recompensa</div>
          <div>4. El scout es amigo de todos y hermano de otro scout</div>
          <div>5. El scout es cortes y caballeroso</div>
          <div>6. El scout ama y protege la naturaleza</div>
          <div>
            7. El scout sabe obedecer, elige y actua con responsabilidad
          </div>
          <div>8. El scout sonrie y canta en las dificultades</div>
          <div>
            9. El scout es economico, trabajador y cuidadoso del bien ageno
          </div>
          <div>
            10. El Scout es limpio y sano; puro en pensamientos, palabras y
            acciones
          </div>
        </div>
      </aside>
      <main className="w-screen pb-52 bg-custon-white bg-gradient-to-t from-red-200 to-red-600">
        <section className="pt-20 w-full flex flex-col px-10 gap-12 items-center">
          <div className="font-semibold text-white text-center">
            <h2 className="text-5xl">Contestamos a la brevedad</h2>
            <h1 className="text-7xl">No dudes en mandarnos un mensaje</h1>
          </div>
          <Formulario />
        </section>
      </main>
    </main>
  );
}

export default Nosotros;
