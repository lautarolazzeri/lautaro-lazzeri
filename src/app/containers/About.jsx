export default function About() {
  const highlights = [
    { label: "Formación", value: "Téc. en Informática" },
    { label: "Estudios superiores (En Curso)", value: "Ingeniería en Sistemas de Información" },
    { label: "Stack", value: "Web & Mobile" },
  ];

  return (
    <div className="mt-56 flex flex-col items-center justify-center md:mt-40">
      <hr className="my-8 h-px w-full border-0 bg-[#636d728d]" />
      <div className="-mt-52 rounded-lg border-2 border-[#636d725f] bg-[#181e27] px-8 py-8 md:-mt-40 md:mx-36 md:px-14 mx-8 lg:-mt-24">
        <h2 className="font-title text-2xl">Un poco sobre mí</h2>

        <p className="mb-6 mt-3 font-title text-gray-400">
          Soy <strong>Técnico en Informática</strong> egresado de la Escuela Técnica San
          Judas Tadeo (Ituzaingó) y actualmente estudio <strong>Ingeniería en Sistemas de Información</strong> en la Universidad Nacional del Sur. <br />
          Desde 2020 desarrollo aplicaciones web y móviles, combinando mi formación académica con un aprendizaje constante a través de documentación, cursos y proyectos reales. <br />
          Trabajo con distintos lenguajes y frameworks, priorizando siempre
          soluciones simples y bien pensadas por sobre las complejas. Ya
          entregué varios proyectos de forma independiente, encargándome de
          cada etapa: desde el diseño y la planificación hasta la implementación y el despliegue en producción. <br />
          Me gusta mantenerme al día con nuevas tecnologías, y sigo sumando
          proyectos a este portafolio.
        </p>

        <div className="flex flex-wrap gap-6 border-t border-[#636d725f] pt-6">
          {highlights.map((item) => (
            <div key={item.label}>
              <p className="font-title text-xl text-white">{item.value}</p>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}