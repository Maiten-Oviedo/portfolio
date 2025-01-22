# react-context-api

Para aprender mejor a utilizar React JS con Typescript, decidí elegir esta herramienta para practicar no solo el tipado sino también los estados globales utilizando el contexto que proporciona React.

### Un contexto tipado con Typescript luce así:

```tsx
import { createContext, ReactNode, useContext, useState } from 'react'

const initialState: number = 0

interface GlobalContextType {
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

interface GLobalProps {
  children: ReactNode
}

export const GlobalProvider = ({ children }: GLobalProps) => {
  const [value, setValue] = useState<number>(initialState)

  return (
    <GlobalContext.Provider value={{ value, setValue }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)

  if (!context) {
    throw new Error(
      'GlobalContext must be used whithin the GlobalContextProvider.'
    )
  }

  return context
}
```

### Tipado del contexto

```tsx
interface GlobalContextType {
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
}
```

En este ejemplo, el contexto tiene un tipo de _GlobalContextType_ que define dos propiedades:

- _value:_ el valor actual del estado
- _setValue:_ una función para actualizar el estado

Desglosemos esto ⬇

```tsx
React.Dispatch<React.SetStateAction<T>>
```

_Dispatch_ es un tipo de función que React utiliza para despachar acciones. En este caso, significa que setState es una función que "despacha" un cambio de estado.

_SetStateAction<T>_ es un tipo proporcionado por React. Define lo que puedes pasar a una función de actualización de estado (setState). **T** representa un valor genérico.

**¿Por qué éstas dos propiedades?**

Para saber como debe ser el objeto que tipa nuestro contexto debemos tener en cuenta lo que proveemos.
En nuestro GlobalContext.Provider, devolvemos _state_ y el _setState_ en la propiedad _value_:

```tsx
<GlobalContext.Provider value={{ value, setValue }}>
  {children}
</GlobalContext.Provider>
```

### Mini hook personalizado

```tsx
export const useGlobalContext = () => {
  const context = useContext(GlobalContext)

  if (!context) {
    throw new Error(
      'GlobalContext must be used whithin the GlobalContextProvider.'
    )
  }

  return context
}
```

Este hook es una forma de acceder a nuestro contexto de manera más fácil y segura. Si
el contexto no está disponible, se lanza una excepción. Si lo está, devuelve el contexto.

### Como utilizarlo

```tsx
import { useGlobalContext } from '../src/context/GLobalContext'
```

```tsx
const { state, setState } = useGlobalContext()
```
