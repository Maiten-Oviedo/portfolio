# Composition Pattern

La idea es evitar el envío de props a componentes hijos y, a su vez, a sus hijos, etc. Para esto existen varios métodos, como por ejemplo [context](/blog/react-context-api). Sin embargo, esta idea es para situaciones más simples y se basa en utilizar la propiedad **children** de los componentes en ReactJS, permitiéndonos trasladar el componente al que le queremos pasar la información al nivel del padre.

Esta idea simple pero potente se utiliza para evitar tanto el _prop-drilling_ como para optimizar el código, ya que separamos las responsabilidades de los componentes.

## Una solución antigua

Una solución antigua era utilizar una clase como la siguiente:

- _/src/services/sharedValueChildren.service.ts_

```ts
export class SharedValueChildren {
  private value: string

  constructor(value: string) {
    this.value = value
  }

  getValue() {
    return this.value
  }

  setValue(value: string) {
    if (typeof value !== 'string') {
      throw new Error('The value must be a string')
    }
    this.value = value
  }
}

export const valueChildren = new SharedValueChildren('')
```

Pero esto ocasiona un error llamado _race condition_ (Aprender más [aquí](https://medium.com/@pedro_sfg/how-to-avoid-race-condition-in-react-pt-1-07284cb93376)), ya que al intentar leer este atributo, aún sigue vacío.

### Ejemplo de uso

- _/src/App.tsx_

```tsx
import { useEffect } from 'react'
import { valueChildren } from './services/sharedValueChildren.service'
import Button from './components/Button'

function App() {
  const service = valueChildren

  const handleClick = () => {
    console.log('Me hicieron click')
  }

  useEffect(() => {
    service.setValue('Maitén')
  }, [])

  return (
    <>
      <Button parentMethod={handleClick} />
    </>
  )
}

export default App
```

- _/src/components/Button.tsx_

```tsx
interface ButtonProps {
  parentMethod: () => void
}

export default function Button({ parentMethod }: ButtonProps) {
  return (
    <button onClick={parentMethod}>
      <ChildrenButton />
    </button>
  )
}
```

- _ChildrenButton.tsx_

```tsx
import { useState } from 'react'
import { valueChildren } from '../services/sharedValueChildren.service'

export default function ChildrenButton() {
  const service = valueChildren
  const [labelState] = useState<string>(service.getValue())

  return <div>{labelState}</div>
}
```

`service.getValue()` nos devolvería el string `''`, ya que al llamarlo aún no ha sido seteado con la cadena `'Maitén'`.

Para comprobarlo, añade este bloque de código a _ChildrenButton_:

```tsx
const [labelState, setLabelState] = useState<string>(service.getValue())

useEffect(() => {
  setTimeout(() => {
    setLabelState(service.getValue())
  }, 1000)
}, [service])
```

## Solución con Composition Pattern

La recomendación ante este tipo de problemas es tratar de evitar este tipo de código y, en su lugar, utilizar **Composition Pattern**.

Empezamos redefiniendo _Button.tsx_:

```tsx
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  parentMethod: () => void
}

export default function Button({ children, parentMethod }: ButtonProps) {
  return <button onClick={parentMethod}>{children}</button>
}
```

Luego, _ChildrenButton.tsx_:

```tsx
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function ChildrenButton({ children }: Props) {
  return <>{children}</>
}
```

Y ahora, en _App.tsx_ queda de la siguiente manera:

```tsx
function App() {
  const handleClick = () => {
    console.log('Me hicieron click')
  }

  return (
    <Button parentMethod={handleClick}>
      <ChildrenButton>My Label</ChildrenButton>
    </Button>
  )
}

export default App
```

## Conclusión

Esta técnica no solo nos permite evitar el _prop-drilling_, sino que también nos proporciona una mejor separación de la lógica. Por ejemplo, si quisiéramos que nuestro _ChildrenButton_ cambiara el color de texto al ejecutar el método **handleClick()**, no dependeríamos de nuestro componente padre _App_, como ocurriría si pasáramos la prop de "hijo" a "nieto".
