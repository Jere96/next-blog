export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About JnDev Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Bienvenidos a JnDev Blog! Desarrollado por Jere Nuñez, este blog
              es utilizado para compartir informacion de mi interes con
              cualquier persona interesada en la tecnologia. Podras leer desde
              articulos sobre programacion hasta noticias relacionadas con el
              avance tecnologico actual.
            </p>

            <p>
              En este blog se subiran post de interes del administrador, revisa
              diariamente el blog para encontrar las ultimas noticias.
            </p>

            <p>
              El sitio web fue desarrollado utilizando Next.js and{" "}
              <a
                href="https://go.clerk.com/fgJHKlt"
                target="_blank"
                className="text-teal-500 hover:underline"
              >
                Clerk
              </a>
              .
            </p>

            <p>
              Te invitamos a comentar nuestras publicaciones e interactuar con
              otros lectores. También puedes darle "Me gusta" y responder a los
              comentarios de otros. Creemos que una comunidad activa puede
              apoyar el crecimiento y el desarrollo de los demás.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
