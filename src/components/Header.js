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
          <li>Mais Pedidos</li>
          <li>Cardápio</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header