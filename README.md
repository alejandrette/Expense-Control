# 💸 Expense Control

Bienvenido a Expense Control, una aplicación diseñada para ayudarte a gestionar y controlar tus gastos de manera eficiente. Esta aplicación es completamente responsive y utiliza diversas tecnologías modernas para ofrecer una experiencia de usuario óptima.

## 🚀 Demo en Vivo

Prueba la aplicación en vivo haciendo clic en el siguiente enlace:

🔗 Demo en vivo

## ⚙️ Tecnologías Utilizadas

- **React ⚛️**: Biblioteca principal para construir interfaces de usuario interactivas y dinámicas.
- **TypeScript 📝**: Tipado estático para mejorar la mantenibilidad y robustez del código.
- **Context API 🎯**: Manejo de estado global para compartir información entre componentes.
- **Tailwind CSS 🎨**: Framework de estilos para diseñar una interfaz moderna y responsive.
- **React Swipeable List 📱**: Implementación de listas deslizables para mejorar la interacción con los gastos.

## 🌍 Características

- **Gestor de Gastos 💰**:
  Permite agregar, editar y eliminar gastos.
  Muestra los gastos con su categoría e icono correspondiente.
- **Filtrado por Categoría 🔍**:
  Filtra los gastos según la categoría seleccionada.
- **Interacción mediante Gestos 📲**:
  Desliza los elementos para editarlos o eliminarlos.
- **Responsive Design 📱💻**:
  Adaptado para funcionar en móviles, tabletas y escritorios.

## 📦 Instalación y Uso

Clona el repositorio:

```bash
git clone https://github.com/alejandrette/Expense-Control.git
```

Accede al directorio del proyecto:

```bash
cd Expense-Control
```

Instala las dependencias:

```bash
npm install
```

Ejecuta la aplicación:

```bash
npm start
```

La aplicación se ejecutará en `http://localhost:3000` 🚀

## 📑 Funcionamiento del Gestor de Gastos

1. **Agregar Gastos**: Ingresa el nombre, la cantidad y selecciona una categoría.
2. **Visualización**: Se muestran los gastos con su categoría e icono.
3. **Editar y Eliminar**: Desliza un gasto a la derecha para editarlo o a la izquierda para eliminarlo.
4. **Filtrar por Categoría**: Usa el selector de categorías para ver solo los gastos de un tipo específico.

## 🧰 Hooks Personalizados

`useBudget`: Hook personalizado para manejar el estado del presupuesto y los gastos en el contexto global.

```js
const { state, dispatch } = useBudget();
```

## 🚀 Desarrollo Futuro

- **Gráficos de Gastos 📊**: Implementación de gráficas para visualizar los gastos de manera más intuitiva.
- **Autenticación de Usuarios 🔑**: Permitir a los usuarios registrar su cuenta y guardar su información.
- **Exportación de Datos 📜**: Opcion para exportar los gastos en formatos como CSV o PDF.

## 👥 Contribuciones

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
3. Realiza tus cambios y haz commit (git commit -am 'Añadir nueva funcionalidad').
4. Haz push a tu rama (git push origin feature/nueva-funcionalidad).
5. Abre un Pull Request.

¡Gracias por visitar el proyecto! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue. 💬
