"use client";

import Link from "next/link";

export default function Register() {
    return (
        <main className="flex flex-col items-center justify-center text-center gap-20">
            <section
                id="register"
                className="flex flex-col gap-10 text-balance max-w-[80%] justify-center items-center mt-12"
            >
                <h1 className="text-5xl font-bold">Registrarse en PaltaBot</h1>
                <div className="bg-white shadow-md rounded-lg p-8 w-full">
                    <form onSubmit={
                      (e) => {
                        e.preventDefault();
                        const postUser = async () => {
                          let myHeaders = new Headers();
                          myHeaders.append("Content-Type", "application/json");
                      
                          let raw = JSON.stringify({
                              email: e.target[2].value,
                              password: e.target[3].value,
                              datos: {
                                  nombre: e.target[0].value,
                                  celular: e.target[1].value,
                                  domicilio: "La Libertad",
                              },
                          });
                      
                          let requestOptions = {
                              method: "POST",
                              headers: myHeaders,
                              body: raw,
                              redirect: "follow",
                          };
                      
                          fetch(
                              "https://tn0xzyjwee.execute-api.us-east-1.amazonaws.com/Proyecto/usuario/crear",
                              requestOptions as RequestInit
                          )
                              .then((response) => response.text())
                              .then((result) => console.log(result))
                              .catch((error) => console.log("error", error));
                        };
                        postUser();
                      }
                            
                    }>
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
                            <input
                                type="password"
                                placeholder="Contraseña"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:bg-green-600"
                        >
                            REGISTRARSE
                        </button>
                    </form>
                </div>
                <p className="text-xl">
                    ¿Ya tienes una cuenta?{" "}
                    <Link
                        href="/login"
                        className="text-green-600 hover:underline"
                    >
                        Inicia sesión aquí
                    </Link>
                </p>
            </section>
        </main>
    );
}
