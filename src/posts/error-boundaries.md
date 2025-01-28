# error-boundaries

Se utiliza para capturar errores que podrían provocar crasheos, evitando que toda la aplicación se detenga.

Los límites de errores capturan errores durante el renderizado, en métodos del ciclo de vida, y en constructores de todo el árbol bajo ellos.

### Un componente de clase ErrorBoundary luce así:

```tsx
import { Component, ErrorInfo, ReactNode } from 'react'

interface ErrorBoundaryState {
  hasError: boolean
}

interface ErrorBoundaryProps {
  children: ReactNode
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.log('Derived Error: ', error)
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error)
    console.log('Error info:', errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops, I did it again...</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
```

Un componente de clase (class component) se convierte en límite de errores si define uno (o ambos) de los métodos del ciclo de vida static **getDerivedStateFromError()** o **componentDidCatch()**.

- _static getDerivedStateFromError()_ para renderizar una interfaz de repuesto cuando se lance un error.

- _componentDidCatch()_ para registrar información de los errores.

## Como utilizarlo

Funciona de manera similar a un **Provider**, ya que envuelve componentes y captura errores en su interior.

```tsx
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
)
```

## Cuando utilizarlo

**Aplicaciones grandes**

- Si tienes múltiples componentes y algunos pueden fallar sin afectar a toda la app.
- Un _ErrorBoundary_ permite que el usuario siga navegando sin que toda la aplicación se rompa.

**En aplicaciones críticas (producción, dashboards, admin panels, etc.)**

- Evita que un error en una parte de la interfaz haga que toda la app se quede en blanco.
- Puedes mostrar un mensaje amigable o un fallback en lugar de que la app crashee.

**En componentes de terceros o con lógica compleja**

- Si usas bibliotecas externas que pueden fallar, como gráficos _(react-chartjs-2)_, mapas _(leaflet)_, o renderizado condicional complicado.

**En layouts o secciones clave de la UI**

- Puedes colocar un _ErrorBoundary_ en el _Navbar_, _Sidebar_ o secciones importantes para evitar que la app entera se rompa.

## Ejemplos de errores en React y su manejo con ErrorBoundary

### Promesas

⚠️ Nota: ErrorBoundary no captura errores en promesas directamente. En este ejemplo, lanzamos el error en el renderizado (if (error) { throw error }) para que lo capture.

```tsx
import { useEffect, useState } from 'react'

export const PromiseExample = () => {
  const [data, setData] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = () => {
      try {
        throw new Error('Error de tipo Promesa')
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        }
      }
    }

    fetchData()
  }, [])

  if (error) {
    throw error
  }

  return <div>{data}</div>
}
```

### Undefined

```tsx
import { useState } from 'react'

const UndefinedExample = () => {
  const [obj] = useState<{ prop?: string }>({})

  return <div>{obj.prop!.length}</div>
}

export default UndefinedExample
```

### useEffect()

```tsx
import { useEffect } from 'react'

export const EffectExample = () => {
  useEffect(() => {
    throw new Error('Error de Tipo Effect')
  })

  return <div></div>
}
```
