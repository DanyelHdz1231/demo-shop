import { useMemo, useState } from 'react'
import './App.css'

const WHATSAPP_PHONE = '5212361178257'

const products = [
  {
    id: 1,
    name: 'Sudadera Basica Negra',
    price: 429,
    size: 'M',
    category: 'sudaderas',
    top: true,
    lowStock: true,
    description: 'Interior afelpado, fit relajado y tela premium para uso diario.',
    image:
      'https://images.pexels.com/photos/6311604/pexels-photo-6311604.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 2,
    name: 'Playera Oversize Arena',
    price: 259,
    size: 'L',
    category: 'playeras',
    top: true,
    lowStock: false,
    description: 'Corte amplio, caida suave y color neutro facil de combinar.',
    image:
      'https://images.pexels.com/photos/9558713/pexels-photo-9558713.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 3,
    name: 'Vestido Midi Terracota',
    price: 549,
    size: 'S',
    category: 'vestidos',
    top: false,
    lowStock: true,
    description: 'Tela fresca y silueta fluida ideal para clima calido.',
    image:
      'https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 4,
    name: 'Sudadera Crop Beige',
    price: 469,
    size: 'S',
    category: 'sudaderas',
    top: true,
    lowStock: true,
    description: 'Corte corto con gorro amplio y punos reforzados.',
    image:
      'https://images.pexels.com/photos/9558601/pexels-photo-9558601.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 5,
    name: 'Playera Blanca Basica',
    price: 229,
    size: 'M',
    category: 'playeras',
    top: false,
    lowStock: false,
    description: 'Algodon peinado de alto gramaje para mayor durabilidad.',
    image:
      'https://images.pexels.com/photos/9558770/pexels-photo-9558770.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 6,
    name: 'Vestido Negro Noche',
    price: 629,
    size: 'M',
    category: 'vestidos',
    top: false,
    lowStock: true,
    description: 'Diseno minimalista con caida elegante para eventos.',
    image:
      'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
]

const categories = [
  { key: 'all', label: 'Todo' },
  { key: 'sudaderas', label: 'Sudaderas' },
  { key: 'playeras', label: 'Playeras' },
  { key: 'vestidos', label: 'Vestidos' },
]

function buildWhatsAppUrl(product) {
  const message = `Hola, quiero ${product.name} talla ${product.size} de $${product.price}`
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
}

function App() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState(products[0])

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products
    return products.filter((product) => product.category === activeCategory)
  }, [activeCategory])

  const topProducts = products.filter((product) => product.top)

  const genericWhatsAppUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    'Hola, vengo del catalogo y quiero mas informacion.',
  )}`

  return (
    <div className="page-shell">
      <section className="weekly-best" aria-labelledby="weekly-best-title">
        <div className="section-head">
          <h2 id="weekly-best-title">Mas vendidos de la semana</h2>
          <p>3 productos destacados</p>
        </div>
        <div className="top-strip">
          {topProducts.slice(0, 3).map((product) => (
            <article key={product.id} className="top-card">
              <img src={product.image} alt={product.name} loading="lazy" />
              <div>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <header className="hero-header">
        <p className="kicker">Nube Moda Studio | Tienda de ropa casual</p>
        <h1>Vende mas por WhatsApp sin responder lo mismo 50 veces</h1>
        <p className="hero-copy">
          Recibe pedidos por WhatsApp con mensaje prearmado en 1 clic. Catalogo
          listo, cero apps complejas y menos tiempo perdido en chat.
        </p>
        <div className="promise-list" aria-label="Diferenciadores clave">
          <p>Implementacion en 48 horas</p>
          <p>Sin apps complicadas</p>
          <p>Funciona con tu WhatsApp actual</p>
        </div>
        <a href="#catalogo" className="cta-main">
          Ver como recibir pedidos mas facil
        </a>
      </header>

      <main>
        <section className="how-it-works" aria-labelledby="how-title">
          <div className="section-head">
            <h2 id="how-title">Como funciona</h2>
            <p>Sin curva tecnica. Solo 3 pasos.</p>
          </div>
          <div className="steps-grid">
            <article className="step-card">
              <span>1</span>
              <h3>Cliente entra al catalogo</h3>
              <p>Ve productos, precios y tallas desde su celular.</p>
            </article>
            <article className="step-card">
              <span>2</span>
              <h3>Elige producto</h3>
              <p>Toca el boton y no tiene que escribir desde cero.</p>
            </article>
            <article className="step-card">
              <span>3</span>
              <h3>Te llega mensaje listo</h3>
              <p>Recibes pedido directo en WhatsApp y cierras mas rapido.</p>
            </article>
          </div>
        </section>

        <section id="catalogo" className="catalog-section" aria-labelledby="catalog-title">
          <div className="section-head">
            <h2 id="catalog-title">Catalogo</h2>
            <p>Selecciona y pide directo por WhatsApp</p>
          </div>

          <div className="filters" role="tablist" aria-label="Filtrar por categoria">
            {categories.map((category) => (
              <button
                key={category.key}
                type="button"
                role="tab"
                aria-selected={activeCategory === category.key}
                className={activeCategory === category.key ? 'filter active' : 'filter'}
                onClick={() => setActiveCategory(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="catalog-grid">
            {filteredProducts.map((product) => (
              <article key={product.id} className="product-card">
                <img src={product.image} alt={product.name} loading="lazy" />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="price">${product.price}</p>
                  <p className="size">Talla {product.size}</p>
                  {product.lowStock && (
                    <p className="stock-warning">Quedan pocas unidades</p>
                  )}
                  <div className="actions">
                    <a
                      className="whatsapp-btn"
                      href={buildWhatsAppUrl(product)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Pedir por WhatsApp en 1 click
                    </a>
                    <button
                      type="button"
                      className="secondary-btn"
                      onClick={() => setSelectedProduct(product)}
                    >
                      Ver producto
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="product-detail" aria-labelledby="detail-title">
          <img src={selectedProduct.image} alt={selectedProduct.name} />
          <div className="detail-copy">
            <p className="kicker">Vista de producto</p>
            <h2 id="detail-title">{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <p className="detail-meta">
              Talla {selectedProduct.size} | ${selectedProduct.price}
            </p>
            {selectedProduct.lowStock && (
              <p className="stock-warning">Quedan pocas unidades</p>
            )}
            <a
              className="cta-main"
              href={buildWhatsAppUrl(selectedProduct)}
              target="_blank"
              rel="noreferrer"
            >
              Pedir por WhatsApp en 1 click
            </a>
          </div>
        </section>
      </main>

      <a
        className="floating-wa"
        href={genericWhatsAppUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir WhatsApp"
      >
        WhatsApp
      </a>
    </div>
  )
}

export default App
