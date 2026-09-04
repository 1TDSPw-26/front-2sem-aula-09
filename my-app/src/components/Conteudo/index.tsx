import imgQuadrado from '../../img/quadrado.png';

export default function Conteudo(){
    return(
        <main>
            <section>
                <h2>Conteúdo</h2>

                <figure>
                    <img src="https://placehold.co/600x400/0000FF/FF0000/png" alt="Figura de demonstração." />
                    <figcaption>Imagem externa</figcaption>
                </figure>

                <figure>
                    <img src={imgQuadrado} alt="Figura de demonstração." />
                    <figcaption>Imagem interna</figcaption>
                </figure>

                <figure>
                    <img src="/quadrado-b.png" alt="Figura de demonstração." />
                    <figcaption>Imagem interna</figcaption>
                </figure>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad inventore laboriosam iste dolore molestias voluptas aut voluptatibus iusto facilis iure quo mollitia quam cum eligendi dolor ut corrupti excepturi, voluptatum magnam incidunt doloribus accusantium quae magni nobis. Voluptatem mollitia recusandae, tenetur exercitationem laboriosam labore? Mollitia maiores totam distinctio ipsam quasi?</p>
            </section>
        </main>
    )
}