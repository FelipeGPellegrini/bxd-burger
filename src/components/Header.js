import "./Header.css"

const Header = () => {
  return (
    <header className="containerHeader">
      <div className="logo">
        <h1>BXD BURGER</h1>
      </div>
      <nav className="navigator">
        <ul>
          <li className="active">Home</li>
          <li className="underlineEffect">Mais Pedidos</li>
          <li className="underlineEffect">Cardápio</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header