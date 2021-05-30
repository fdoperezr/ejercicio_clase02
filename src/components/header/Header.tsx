import Menu from "../menu/Menu";

export default function Header() {
  return (
    <header className="bg-info sticky-top py-1">
      <nav className="container d-flex flex-column flex-md-row justify-content-between">
        <a className="py-2 d-none d-md-inline-block text-white"
          href="#section-principal">
          Inicio
            </a>
        <a className="py-2 d-none d-md-inline-block text-white"
          href="#section-secundary">
          Acerca de
            </a>
        <a className="py-2 d-none d-md-inline-block text-white"
          href="#contacto">
          Contacto
            </a>
        <Menu />
      </nav>
    </header>
  )
}
