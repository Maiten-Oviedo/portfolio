# useApi-with-axios

En este post tratare el desarrollo de un sistema CRUD utilizando axios y basandome en los conceptos que ofrece React Query.

El objetivo es simplificar la lógica de manejo de solicitudes HTTP y errores, centralizando el control en un custom hook reutilizable.

## Contamos con dos archivos principales

- ### **1.** _"/src/services/api.service.ts"_:

  ```ts
  import axios from 'axios'
  import { Character } from '../models/Character'
  import { loadAbort } from '../utilities'
  import { UseApiCall } from '../models'

  const BASE_URL = 'https://rickandmortyapi.com/api'

  export const getCharacter = (id: number): UseApiCall<Character> => {
    const controller = loadAbort()
    return {
      call: axios.get<Character>(`${BASE_URL}/character/${id}`, {
        signal: controller.signal,
      }),
      controller,
    }
  }

  export const newCharacter = (character: Character): UseApiCall<null> => {
    const controller = loadAbort()
    return {
      call: axios.post<null>(`${BASE_URL}/character/`, character, {
        signal: controller.signal,
      }),
      controller,
    }
  }
  ```

- ### **2.** _"/src/hooks/useApi.ts"_:

  ```ts
  import { useCallback, useEffect, useState } from 'react'
  import { UseApiCall } from '../models'

  type useApiOptions = {
    autoFetch?: boolean
  }

  type Data<T> = T | null

  type ErrorType = Error | null

  interface useApiResult<T> {
    loading: boolean
    data: Data<T>
    error: ErrorType
    fetch: () => void
  }

  export const useApi = <T>(
    apiCall: UseApiCall<T>,
    options?: useApiOptions
  ): useApiResult<T> => {
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<Data<T>>(null)
    const [error, setError] = useState<ErrorType>(null)

    const fetch = useCallback(() => {
      const { call, controller } = apiCall
      setLoading(true)

      call
        .then(response => {
          setData(response.data)
          setError(null)
        })
        .catch(err => {
          setError(err)
        })
        .finally(() => {
          setLoading(false)
        })
      return () => controller.abort()
    }, [apiCall])

    useEffect(() => {
      if (options && options.autoFetch) {
        return fetch()
      }
    }, [fetch, options])

    return { loading, data, error, fetch }
  }
  ```

## Como utilizarlo

- _App.tsx_:

  ```tsx
  import { getCharacter } from './services/api.service'
  import { Character } from './models'
  import { useApi } from './hooks/useApi'

  function App() {
    const { data, loading, error, fetch } = useApi<Character>(getCharacter(1), {
      autoFetch: false,
    })

    if (loading) {
      return <div>Loading...</div>
    }

    if (error) {
      return <div>Ups: {error.message}</div>
    }
    return (
      <>
        <h1>Data</h1>
        {JSON.stringify(data)}
        <button onClick={fetch}>Fetch</button>
      </>
    )
  }

  export default App
  ```

## **Primeros pasos para el entendimiento del desarrollo**

### **1.** Como primera instancia crearemos un servicio en _"/src/services/api.service.ts"_:

```cmd
Copia el código del mísmo que te proporcione mas arríba
```

Éste utiliza dos elementos

- _loadAbort_

  ```ts
  export const loadAbort = () => {
    return new AbortController()
  }
  ```

  > Utilizamos AbortController para cancelar solicitudes HTTP en caso de que el componente se desmonte antes de que la respuesta llegue, lo que previene errores de memoria.

- _Character_

  ```ts
  export interface Character {
    name: string
    gender: string
    status: string
  }
  ```

### **2.** Luego nos centraremos en crear un custom hook en _"/src/hooks/useApi.ts"_

Su primer instancia luce así:

```tsx
import { AxiosResponse } from 'axios'
import { useCallback, useEffect, useState } from 'react'

type useApiOptions = {
  autoFetch?: boolean
}

type Data<T> = T | null

type ErrorType = Error | null

interface useApiResult<T> {
  loading: boolean
  data: Data<T>
  error: ErrorType
  fetch: () => void
}

export const useApi = <T,>(
  apiCall: Promise<AxiosResponse<T>>,
  options?: useApiOptions
): useApiResult<T> => {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<Data<T>>(null)
  const [error, setError] = useState<ErrorType>(null)

  const fetch = useCallback(() => {
    const call = apiCall
    setLoading(true)

    call
      .then(response => {
        setData(response.data)
        setError(null)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [apiCall])

  useEffect(() => {
    if (options && options.autoFetch) {
      return fetch()
    }
  }, [fetch, options])

  return { loading, data, error, fetch }
}
```

### Analicemos esta porción ⬇

```tsx
export const useApi = <T,>(
  apiCall: () => Promise<AxiosResponse<T>>,
  options?: useApiOptions
): useApiResult<T> => {...}
```

_useApi_ es una funcion que recibe un tipo genérico **<T>**.Esto permite que el hook trabaje con cualquier tipo de dato.

Por otro lado también recibe 2 parámetros

_1._ apiCall:

- es una función que no recibe parámetros (), y retorna una promesa _Promise_ que se resolverá con una respuesta de Axios _AxiosResponse<T>_
- _AxiosResponse<T>_ significa que el cuerpo de la respuesta (_response.data_) tendrá el tipo _T_. Esto hace que _useApi_ sea flexible para trabajar con diferentes estructuras de datos.

_2._ options:

- cuenta con una sola propiedad opcional:
  ```tsx
  type useApiOptions = {
    autoFetch?: boolean
  }
  ```
  Esto permite que, si _autoFetch_ es _true_, la API se llame automáticamente cuando el componente se monte.

Por último tenemos el tipo que retorna

- La función devuelve un objeto con la forma de _useApiResult<T>_

  ```tsx
  interface useApiResult<T> {
    loading: boolean
    data: Data<T>
    error: ErrorType
    fetch: () => void
  }
  ```

  - _loading_ indica si la solicitud está en curso.
  - _data_ el resultado de la API, del tipo T o null.
  - _error_ un error si ocurre, del tipo Error o null.
  - _fetch_ una función para volver a realizar la solicitud manualmente.

### useCallback() en método fetch()

> useCallback(), permite memorizar una función, lo que significa que si la función que se le pasa como parámetro no ha cambiado, no se ejecuta de nuevo y se devuelve la función que ya se había calculado.

```tsx
const fetch = useCallback(() => {...})
```

Esto significa que mientras que apiCall no cambie, la referencia entre la funcion _fetch()_ será la misma.

También, vemos que fetch, es dependencia del _useEffect(...,[fetch])_, por ende si no se creara la referencia utilizando useCallback(), esto podría causar rerenders.

```tsx
useEffect(() => {
  if (options && options.autoFetch) {
    return fetch()
  }
}, [fetch, options])
```

Este useEffect asegura que si autoFetch está activado, la API se llame automáticamente al montar el componente. La dependencia fetch se memoriza con useCallback para evitar llamadas infinitas.

## **Segunda etapa del desarrollo**

Si prestamos atención al servicio, vemos que las peticiones retornan dos elementos

```tsx
return {
  call: axios.post<Character>(`${BASE_URL}/character/`, character, {
    signal: controller.signal,
  }),
  controller,
}
```

Pero si queremos implementar nuestro _useApi()_ con nuestro servicio, este debe cambiar su primer parámetro.

Para esto, crearemos un nuevo modelo para nuestro parámetro _apiCall_ que contemple este objeto:

> /src/models/useApi.model.ts

```ts
import { AxiosResponse } from 'axios'

export interface UseApiCall<T> {
  call: Promise<AxiosResponse<T>>
  controller: AbortController
}
```

Y ahora la cabecera de nuestro hook cambia así ⬇

- Primer instancia

  ```tsx
  export const useApi = <T,>(
    apiCall: Promise<AxiosResponse<T>>,
    options?: useApiOptions
  ): useApiResult<T> => {...}
  ```

- Instancia actulizada
  ```tsx
  export const useApi = <T,>(
    apiCall: UseApiCall<T>,
    options?: useApiOptions
  ): useApiResult<T> => {...}
  ```

Por ende, también tenemos que modificar nuestro fetch agregando el elemento controller

```tsx
const fetch = useCallback(() => {
  const {call, controller} = apiCall
  {...}
  return () => controller.abort()
})
```

Por último, podemos utilizar el nuevo modelo en nuestro service:

```ts
export const getCharacter  = (id: number) : UseApiCall<Character> => {...}
```

```ts
export const newCharacter = (character : Character) : UseApiCall<null> => {...}
```

## Conclusión

Con este patrón, simplificamos la gestión de llamadas API y el manejo de estados en nuestros componentes. En el futuro, podríamos extender este hook para soportar operaciones más complejas como PUT y DELETE o agregar manejo avanzado de errores.
