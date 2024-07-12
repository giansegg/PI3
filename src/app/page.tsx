import CardComponent from "@/components/stepHome";
import InfoCard from "@/components/stepWork";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center gap-20">
      <section
        id="home"
        className="flex flex-col gap-10 text-balance max-w-[80%] justify-center items-center"
      >
        <h1 className="text-5xl font-bold mt-12">¿Qué es PaltaBot?</h1>
        <p className="text-xl">
          PaltaBot te ayudara a recopilar datos sobre la zona en la que planeas
          cultivar el “oro” verde, nosotros nos encargamos de darte los datos
          necesarios e importantes para el desarrollo correcto de tu cultivo
          para que tu puedas tomar mejores decisiones con la información
          obtenida.
        </p>
        <Link
          href="/register"
          className="bg-green-600 hover:bg-green-700 transition-colors duration-300 text-white text-xl font-semibold px-4 py-2 rounded-md w-fit"
        >
          Registrarse
        </Link>
      </section>
      <section
        id="steps"
        className="flex flex-row flex-wrap gap-10 items-center justify-center"
      >
        <CardComponent
          title="Siembra"
          step="1er Paso"
          description="La parte clave de todo cultivo es la siembra, es el primer paso para el desarrollo de tu cultivo."
          image="/harvest.png"
          alt="Agricultura"
        />
        <CardComponent
          title="Analiza"
          step="2do Paso"
          description="Analiza la zona en la que planeas cultivar, para saber si es apta para el cultivo de palta."
          image="/agriculture.png"
          alt="Análisis"
        />
        <CardComponent
          title="Potencia"
          step="3er Paso"
          description="Potencia tu cultivo con la información obtenida en el análisis de la zona."
          image="/lightning-electric-energy.png"
          alt="Energía"
        />
        <CardComponent
          title="Cultiva"
          step="4to Paso"
          description="Cultiva tu palta con la información obtenida en los pasos anteriores."
          image="/tractor.png"
          alt="Cosecha"
        />
      </section>
      <hr className="border-2 border-gray-300 rounded-md w-[80%]" />
      <section
        id="about-me"
        className="flex flex-col gap-10 text-balance justify-center items-center"
      >
        <h1 className="text-5xl font-bold">¿Cómo trabajar con nosotros?</h1>
        <section className="flex flex-row flex-wrap gap-10 justify-center items-center">
          <InfoCard
            number={1}
            title="Explora el software"
            description="Descubre nuestras características y funcionalidades clave."
          />
          <InfoCard
            number={2}
            title="Contacto y Consulta"
            description="Comunícate con nuestro equipo vía formulario o correo."
          />
          <InfoCard
            number={3}
            title="Demostraciones"
            description="Programa una demo personalizada para resolver tus dudas."
          />
          <InfoCard
            number={4}
            title="Capacitaciones"
            description="Recibe soporte completo para implementar y usar el software."
          />
          <InfoCard
            number={5}
            title="Soporte continuo"
            description="Disfruta de soporte constante después de la implementación."
          />
        </section>
      </section>
      <hr className="border-2 border-gray-300 rounded-md w-[80%]" />
      <section
        id="contact"
        className="flex flex-col text-balance justify-between items-center w-[80%] gap-10"
      >
        <h1 className="text-5xl font-bold">Contáctanos</h1>
        <div className="bg-white shadow-md rounded-lg p-8 w-full">
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Nombres y Apellidos"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Celular"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Correo Electrónico"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Mensaje"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:bg-green-600"
            >
              ENVIAR
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
