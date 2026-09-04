import imgQuadrado from "../../img/quadrado.png"

export default function Conteudo(){
    return(
        <main>
            <section>
                <h2>Conteudo</h2>

                <figure>
                    <img src="" 
                    alt="Figure de Demonstração"  />
                </figure>

                <figure>
                    <img src={imgQuadrado} 
                    alt="Imagem Externa"/>
                </figure>

                <figure>
                    <img src={imgQuadrado} alt="Figure de demonstração" />
                    <figcaption>Imagem Interna</figcaption>
                </figure>

                <figure>
                    <img src="/image/quadrado-b" />
                    <figcaption>Imagem Estática</figcaption>
                </figure>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nam totam id vel optio quo officia corporis blanditiis facere earum. Mollitia eum quasi totam architecto natus eos perferendis libero deleniti.</p>
            </section>
        </main>
    );
}