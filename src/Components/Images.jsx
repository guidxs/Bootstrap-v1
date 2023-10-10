export default function Images () {
    return (
        <>
            <section>
                <img src="https://picsum.photos/800/200" className="img-fluid" />
            <hr />

                <img src="https://picsum.photos/300/200" className="img-thumbnail" />
            <br /> <br />

            <figure>
                <img src="http://lorempixel.com.br/300/200/?1" className="rounded float-start img-fluid" />
                <img src="http://lorempixel.com.br/300/200/?2" className="rounded float-end img-fluid" />
            </figure>
            </section>
        </>
    )
}