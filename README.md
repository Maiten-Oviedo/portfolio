# Portfolio de Maiten

## Descripción

Este portfolio es un proyecto web desarrollado con el objetivo de mostrar mis habilidades, proyectos y experiencia profesional de manera creativa y funcional. Incluye secciones dinámicas y elementos interactivos diseñados para captar la atención del usuario.

### Contacto

- [LinkedIn](https://www.linkedin.com/in/Maiten-Oviedo)
- [Instagram](https://www.instagram.com/maiten_oviedo)

---

## Tecnologías utilizadas

### **Frontend:**

- **React**: Librería principal para construir la interfaz de usuario.
- **Tailwind CSS**: Framework de CSS para estilizar los componentes de manera eficiente.
- **React Router**: Para manejar la navegación entre páginas y secciones.
- **React Intersection Observer**: Para detectar cuando elementos entran o salen de la vista y activar animaciones.
- **Prop Types**: Para tipar props en componentes.

### **Otras herramientas:**

- **Git & GitHub**: Para el control de versiones y pruebas de desarollo.
- **Vercel**: Para el despliegue de mi web.

---

## Estructura del proyecto

### Componentes principales:

1. **Header y Footer:**

   - Elementos no estáticos dado que queria el uso de toda la pantalla.

2. **Hero:**

   - Diseño personal, simple y minimalista

3. **Sección de proyectos:**

   - Uso del componente `ProjectItem` para renderizar proyectos.
   - Cada proyecto incluye:
     - Nombre y descripción.
     - Tecnologías utilizadas (íconos representativos).
     - Imágenes y mockups relevantes.
     - Enlace para ver la página dedicada al proyecto.

4. **Proceso:**

   - Lista de puntos claves en el desarrollo de aplicaciones web.
   - Animaciones personalizadas para cada item.

5. **Sobre Mí:**

   - Slider personalizado con animaciones entre imágenes.
   - Breve descripción de mis primeros pasos e intereses.

6. **Contacto:**

   - Fondo con efecto parallax.
   - Botones simples que redirigen a Correo o, a WhatsApp.

7. **Página particular para cada proyecto:**

   - Descripciones breves pero consisas y enlaces.
   - Imágenes y mockups relevantes.

8. **Animaciones:**

   - Implementadas usando `react-intersection-observer` para activar efectos al entrar en vista.
   - Efectos como "slide up" aplicados a múltiples elementos visuales.

9. **Diseño responsivo:**
   - Adaptado para diferentes dispositivos usando Tailwind CSS.

---

## Configuración del proyecto

### Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Maiten-Oviedo/portfolio.git
   ```

2. Instalar las dependencias:

   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre el portfolio en tu navegador:

```bash
http://localhost:5173/
```

---

## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama:
   ```bash
   git checkout -b feature/nueva-feature
   ```
3. Realiza los cambios y haz commit:
   ```bash
   git commit -m "Descripción de los cambios"
   ```
4. Sube los cambios a tu rama:
   ```bash
   git push origin feature/nueva-feature
   ```
5. Abre un pull request en el repositorio principal.

---

## Despliegue

El proyecto está preparado para ser desplegado en como Vercel.

Para esto configure el arcivo 'vercel.json', para por ejemplo, lograr que las rutas funcionen,
ya que que vercel no detecta las rutas de react-router-dom por defecto.

---

## Gracias por visitarlo :)
````
