import React from "react";
import InfoNav from "../../components/infoNav";
import badenpowell from "/badenpowell.jpg";
import florDeLiz from "/florDeLizNegra.png";

function Scoutismo() {
  return (
    <main className="w-screen">
      <InfoNav />
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
    </main>
  );
}

export default Scoutismo;
