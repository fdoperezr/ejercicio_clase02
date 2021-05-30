import ContactForm from "../contact-form/ContactForm";
import SectionSecundary from "../section-secundary/SectionSecundary";

export default function SectionPrincipal() {
    return (
        <main>
            <section
                id="section-principal">
                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                    <div className="col-md-5 p-lg-5 mx-auto my-5">
                        <h1 className="display-4 fw-normal">
                            Sección Principal - Inicio
                            </h1>
                        <p className="lead fw-normal">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </p>
                    </div>
                    <div className="product-device shadow-sm d-none d-md-block">
                    </div>
                    <div className="product-device product-device-2 shadow-sm d-none d-md-block">
                    </div>
                </div>
            </section>
            <SectionSecundary />
            <ContactForm />
        </main>
    )
}
