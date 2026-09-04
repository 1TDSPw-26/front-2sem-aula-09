import imgQuadrado from "../../img/quadrado.png";

export default function Conteudo(){
    return(
        <main>
            <section>
                <h2>Conteúdo</h2>

                <figure>
                    <img src="https://placehold.co/600x400/FFFFF0/FFFFFF/png" alt="figura de demonstração" />
                    <figcaption>Imagem externa</figcaption>
                </figure>

                <figure>
                    <img src= {imgQuadrado} alt="figura de demonstração" />
                    <figcaption>Imagem interna</figcaption>
                </figure>

                <figure>
                    <img src="/quadrado-b.png" alt="figura de demonstração" />
                    <figcaption>Imagem estatico</figcaption>
                </figure>

                <p>Lorem ipsum dolor sit amet.</p>
            </section>
        </main>
    );
}