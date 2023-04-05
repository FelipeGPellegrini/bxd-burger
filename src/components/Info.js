import "./Info.css"
import maisPedidos from "../assets/most-orders.jpg"

const Info = () => {
  return (
    <div className="containerInfo">
      <div className="infoItem">
        <h2>Nossa História</h2>
        <hr color="orange" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur laborum et blanditiis a libero nesciunt ipsa recusandae, perferendis quo accusantium itaque quod nostrum quos corrupti natus sit soluta nemo optio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero reiciendis perferendis nisi mollitia voluptas eius magni itaque atque obcaecati eos, ipsum nostrum soluta cupiditate voluptatem dolorum adipisci ducimus. Officia, aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laborum sit mollitia, quod cum dolore repudiandae doloribus vitae ea impedit iusto eos non amet minima iste quas magni dignissimos porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque esse reprehenderit, atque similique porro odit repudiandae fugit dicta? Praesentium dolorum enim eveniet sunt officiis reprehenderit reiciendis quidem quos, voluptate est.</p>
      </div>
      <div className="infoItem">
        <h2>Mais Pedidos</h2>
        <hr color="orange" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, reprehenderit voluptate? Alias, possimus suscipit distinctio dolor, dolore totam neque officiis eos dolorum enim labore magnam quod nobis dolores! Omnis, rerum.</p>
        <img width={300} src={maisPedidos} alt="Mais Pedidos" />
      </div>
      <div className="infoItem">
        <h2>Nossa Unidade</h2>
        <hr color="orange" />
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235523.0378001579!2d-43.66193841643177!3d-22.726477081445097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x995d694889f955%3A0x23ff502568217834!2sNova%20Igua%C3%A7u%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1680620192673!5m2!1spt-BR!2sbr" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Info