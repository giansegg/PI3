import CardComponent from "@/components/stepHome";
import Link from "next/link";


export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center text-center">
            <section
                id="description"
                className="flex flex-col gap-10 text-balance max-w-[80%] justify-center items-center"
            >
                <h1 className="text-5xl font-bold">¿Qué es PaltaBot?</h1>
                <p className="text-xl">
                    PaltaBot te ayudara a recopilar datos sobre la zona en la
                    que planeas cultivar el “oro” verde, nosotros nos encargamos
                    de darte los datos necesarios e importantes para el
                    desarrollo correcto de tu cultivo para que tu puedas tomar
                    mejores decisiones con la información obtenida.
                </p>
                <Link
                    href="register/"
                    className="bg-green-600 text-white text-xl font-semibold px-4 py-2 rounded-md w-fit"
                >
                    Registrarse
                </Link>
            </section>
            <section id="steps">
                <CardComponent
                    title="Siembra"
                    step="1er Paso"
                    description=""
                    image="/harvest.png"
                    alt="Agricultura"
                />
                {/*2do paso Analiza, 3er Paso, Potencia, 4to Paso Cultiva*/}
                <CardComponent
                    title="Analiza"
                    step="2do Paso"
                    description=" "
                    image="/agriculture.png"
                    alt="Análisis"
                />
                <CardComponent
                    title="Potencia"
                    step="3er Paso"
                    description=" "
                    image="/lightning-electric-energy.png"
                    alt="Energía"
                />
                <CardComponent
                    title="Cultiva"
                    step="4to Paso"
                    description=" "
                    image="/tractor.png"
                    alt="Cosecha"
                />
            </section>
        </main>
    );
}
