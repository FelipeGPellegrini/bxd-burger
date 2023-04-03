import "./Info.css"
import maisPedidos from "../assets/most-orders.jpg"

const Info = () => {
  return (
    <div className="containerInfo">
      <div className="infoItem">
        <h2>Nossa História</h2>
        <hr color="orange"/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur laborum et blanditiis a libero nesciunt ipsa recusandae, perferendis quo accusantium itaque quod nostrum quos corrupti natus sit soluta nemo optio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero reiciendis perferendis nisi mollitia voluptas eius magni itaque atque obcaecati eos, ipsum nostrum soluta cupiditate voluptatem dolorum adipisci ducimus. Officia, aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laborum sit mollitia, quod cum dolore repudiandae doloribus vitae ea impedit iusto eos non amet minima iste quas magni dignissimos porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque esse reprehenderit, atque similique porro odit repudiandae fugit dicta? Praesentium dolorum enim eveniet sunt officiis reprehenderit reiciendis quidem quos, voluptate est.</p>
      </div>
      <div className="infoItem">
        <h2>Mais Pedidos</h2>
        <hr color="orange"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, reprehenderit voluptate? Alias, possimus suscipit distinctio dolor, dolore totam neque officiis eos dolorum enim labore magnam quod nobis dolores! Omnis, rerum.</p>
        <img width={300} src={maisPedidos} alt="Mais Pedidos" />
      </div>
    </div>
  )
}

export default Info