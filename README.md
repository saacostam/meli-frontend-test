# Mercado Libre - Prueba Técnica Frontend

**Node Version:** v22.16.0

## Estructura del Proyecto

### Backend
- App de **Express** que provee la data.
- La integración con la API de Mercado Libre fue **mockeada** en:
  `backend/src/infra/repositories/meli-item.repository/meli-item.mock.ts`
- Endpoints disponibles:
  - `GET /api/items?q=query`
  - `GET /api/items/:id`
- Arquitectura **Clean Architecture** con capas:
  - `domain`
  - `app`
  - `infra`
  - `presentation`

### Frontend
- App de **Next.js**.
- Se utilizó este framework para realizar **SSR (Server-Side Rendering)** de los productos, logrando mejor SEO.
- Vistas disponibles:
  - `/` → **Home**
    Incluye el *search box*. El contenido está mockeado como esqueleto.
  - `/items?search=h` → **Resultados de Búsqueda**
  - `/items/6` → **Vista de Producto**
    > Nota: dado que la información se encuentra mockeada, el **breadcrumb** no refleja un flujo real de navegación y puede no tener mucho sentido en este estado.
- Arquitectura/Organización modular:
  - `client` → componentes cliente
  - `server` → componentes servidor
  - `shared` → elementos compartidos

## Instalación y Ejecución (en Dev Mode)

El proyecto está compuesto por dos aplicaciones independientes (frontend y backend), ambas manejadas con **npm**.

### 1. Clonar el repositorio
```bash
git clone <url-del-repo>
cd <root-del-proyecto>
```

### 2. Backend
```bash
cd backend
npm install
```

Variables de entorno (archivo ".env"):
```bash
PORT=4000
NODE_ENV=development
```

Ejecutar:
```bash
npm run dev
```

El backend quedará disponible en: **http://localhost:4000** (o el puerto configurado)

---

### 3. Frontend
```bash
cd frontend
npm install
```

Variables de entorno (archivo ".env.local"):
```bash
BACKEND_BASE_URL=http://localhost:4000
```

Ejecutar:
```bash
npm run dev
```

El frontend quedará disponible en: **http://localhost:3000**

---

### Relación de Puertos
- El **backend** corre en el puerto "4000".
- El **frontend** corre en el puerto "3000" y necesita comunicarse con el backend.
- La variable "BACKEND_BASE_URL" en el frontend debe apuntar al mismo puerto donde corre el backend.
  Ejemplo: "http://localhost:4000"
