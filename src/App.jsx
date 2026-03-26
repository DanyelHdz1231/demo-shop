import { useMemo, useState } from 'react'
import './App.css'

const WHATSAPP_PHONE = '5212361178257'

const products = [
  {
    id: 1,
    name: 'Sudadera Essentials Negra',
    price: 350,
    size: 'M',
    category: 'sudaderas',
    top: true,
    description: 'Interior afelpado, fit relajado y tela premium para uso diario.',
    image:
      'https://images.pexels.com/photos/6311604/pexels-photo-6311604.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 2,
    name: 'Playera Oversize Arena',
    price: 220,
    size: 'L',
    category: 'playeras',
    top: true,
    description: 'Corte amplio, caida suave y color neutro facil de combinar.',
    image:
      'https://images.pexels.com/photos/9558713/pexels-photo-9558713.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 3,
    name: 'Vestido Midi Terracota',
    price: 480,
    size: 'S',
    category: 'vestidos',
    top: false,
    description: 'Tela fresca y silueta fluida ideal para clima calido.',
    image:
      'https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 4,
    name: 'Sudadera Crop Beige',
    price: 390,
    size: 'S',
    category: 'sudaderas',
    top: true,
    description: 'Corte corto con gorro amplio y punos reforzados.',
    image:
      'https://images.pexels.com/photos/9558601/pexels-photo-9558601.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 5,
    name: 'Playera Blanca Basica',
    price: 190,
    size: 'M',
    category: 'playeras',
    top: false,
    description: 'Algodon peinado de alto gramaje para mayor durabilidad.',
    image:
      'https://images.pexels.com/photos/9558770/pexels-photo-9558770.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 6,
    name: 'Vestido Negro Noche',
    price: 520,
    size: 'M',
    category: 'vestidos',
    top: false,
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
      <header className="hero-header">
        <p className="kicker">Tienda demo</p>
        <h1>Compra en 3 clics y cierra por WhatsApp</h1>
        <p className="hero-copy">
          Selecciona producto, revisa talla y manda mensaje listo. Sin carrito,
          sin pasos extra.
        </p>
        <a href="#catalogo" className="cta-main">
          Ver catalogo
        </a>
      </header>

      <main>
        <section className="top-products" aria-labelledby="top-title">
          <div className="section-head">
            <h2 id="top-title">Top productos</h2>
            <p>Los mas pedidos esta semana</p>
          </div>
          <div className="top-strip">
            {topProducts.map((product) => (
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
                  <div className="actions">
                    <a
                      className="whatsapp-btn"
                      href={buildWhatsAppUrl(product)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Pedir por WhatsApp
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
            <a
              className="cta-main"
              href={buildWhatsAppUrl(selectedProduct)}
              target="_blank"
              rel="noreferrer"
            >
              Pedir este producto
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
