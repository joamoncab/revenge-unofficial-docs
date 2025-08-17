# Preguntas Frecuentes

Preguntas comunes y soluciones para usar el cliente modificado Revenge.

## Tabla de Contenidos

1. [¿Cómo instalo un plugin?](#como-instalo-un-plugin)
2. [¿Dónde puedo encontrar plugins para instalar?](#donde-puedo-encontrar-plugins-para-instalar)
3. [¡Quiero el plugin 'x'!](#quiero-el-plugin-x)
4. [¿Por qué no puedo habilitar algunos plugins?](#por-que-no-puedo-habilitar-algunos-plugins)
5. [¡Mi Revenge no inicia! ¡Se queda atascado en el logo!](#mi-revenge-no-inicia-se-queda-atascado-en-el-logo-ayuda)
6. [¿Dónde consigo fuentes?](#donde-consigo-fuentes)
7. [¿Cómo uso mi propia fuente personal?](#como-uso-mi-propia-fuente-personal)
8. [¿Cómo instalo esas fuentes?](#como-instalo-esas-fuentes)

---

## Plugins

### ¿Cómo instalo un plugin?

Para instalar un plugin, sigue estos pasos:

1. **Copia el enlace del plugin**
2. **Ve a Configuración** en Discord
3. **Busca la sección de Revenge**
4. **Haz clic en Plugins**
5. **Haz clic en el botón '+'**
6. **Haz clic en 'Import from clipboard'**
7. **Haz clic en 'Install'**

::: warning Nota de Seguridad
Ten en cuenta que estos enlaces no están protegidos. Para una instalación más segura de plugins, instala el **'Plugin Browser'** siguiendo los pasos anteriores, luego instala todos los plugins desde ahí para mejor seguridad.
:::

### ¿Dónde puedo encontrar plugins para instalar?

Puedes encontrar plugins en varios lugares:

- **[Lista de Plugins de la Comunidad](https://purple-eyez.github.io/Plugins-List/)** - Lista completa mantenida por la comunidad
- **Plugin Browser** - Instala este plugin primero para una experiencia de navegación segura
- **Motores de búsqueda** - Busca plugins específicos en línea

### ¡Quiero el plugin 'x'!

Para encontrar un plugin específico:

1. **Busca en la [lista mantenida por la comunidad](https://purple-eyez.github.io/Plugins-List/)**
2. **Usa el Plugin Browser** dentro de Revenge
3. **Busca en línea** usando motores de búsqueda
4. **Si no lo encuentras** - Probablemente no existe o no está disponible aún

### ¿Por qué no puedo habilitar algunos plugins?

Si no puedes habilitar ciertos plugins, probablemente están **rotos o son incompatibles**. Estas son tus opciones:

- ✅ **Busca alternativas** - Busca plugins similares que funcionen
- ✅ **Crea el tuyo propio** - Si tienes habilidades de programación
- ❌ **Espera correcciones** - Algunos plugins pueden actualizarse más tarde

---

## Solución de Problemas

### ¡Mi Revenge no inicia! ¡Se queda atascado en el logo! ¡Ayuda!

Este es un problema común con varias soluciones:

#### Solución Rápida (Recomendada)
**Actualiza a la versión beta o alfa** - Esto a menudo resuelve problemas de inicio.

*Gracias a rusk y waffle por este consejo*

#### Para Instalaciones Xposed

::: danger Advertencia de Pérdida de Datos
**ESTO BORRARÁ TUS PLUGINS SI NO TIENES GUARDADO EN LA NUBE.** Desafortunadamente, no hay otra forma de arreglar este problema por el momento.
:::

**Solución:** Limpiar datos de la aplicación
1. Ve a **Configuración de Android**
2. Navega a **Aplicaciones** → **Discord (Revenge)**
3. Selecciona **Limpiar Datos de la Aplicación**

*Nota: Los pasos pueden variar según el fabricante de tu dispositivo*

::: tip Usuarios de Cloud Sync
Si tienes habilitada la sincronización en la nube, puedes reinstalar y restaurar todo. De lo contrario, tendrás que reinstalar los plugins manualmente.
:::

#### Para Instalaciones de Revenge Manager

1. **Desinstala Discord** completamente
2. **Limpia caché de Revenge Manager:**
   - Ve a Configuración de Android → Aplicaciones → Revenge Manager
   - Selecciona "Limpiar Caché de la Aplicación"
3. **Reinstala Discord**

*Gracias a catinette por esta solución*

---

## Fuentes y Personalización

### ¿Dónde consigo fuentes?

Hay varias fuentes para fuentes compatibles con Revenge:

#### 1. Repositorio de Rairof
**Vista previa disponible:** [Vista previa de Theme-Fonts](https://github.com/Rairof/Theme-Fonts?tab=readme-ov-file#fonts-for-discord)

Fuentes populares incluyen:
- [Gantari](https://raw.githubusercontent.com/Rairof/Theme-Fonts/main/Gantari/Gantari-font-snippet.json)
- [GoogleSans](https://raw.githubusercontent.com/Rairof/Theme-Fonts/main/GoogleSans/GoogleSans-font-snippet.json)
- [JetBrains Mono](https://raw.githubusercontent.com/Rairof/Theme-Fonts/main/JetBrainsMono/JetBrainsMono-font-snippet.json)
- [Inter](https://raw.githubusercontent.com/Rairof/Theme-Fonts/main/SF-Pro-Display/SF-Pro-Display-font-snippet.json)

#### 2. Repositorio de Purple-EyeZ
**Vista previa disponible:** [Lista Bunny-Fonts](https://github.com/Purple-EyeZ/Bunny-Fonts?tab=readme-ov-file#fonts-list)

Fuentes disponibles:
- [Poppins](https://raw.githubusercontent.com/Purple-EyeZ/Bunny-Fonts/main/Poppins/Poppins-font-snippet.json)
- [Urbanist](https://raw.githubusercontent.com/Purple-EyeZ/Bunny-Fonts/main/Urbanist/Urbanist-font-snippet.json)
- [Plus Jakarta Sans](https://raw.githubusercontent.com/Purple-EyeZ/Bunny-Fonts/main/Plus-Jakarta-Sans/Plus-Jakarta-Sans-font-snippet.json)

#### 3. Colección de AetheralMeowstic
- [Inter Alia](https://raw.githubusercontent.com/AetheralMeowstic/Discord-Inter-Alia/refs/heads/main/Inter%20Alia.json)

#### 4. Integración con Google Fonts
Usa la **[Herramienta de Google Fonts de Foxfire](https://bunny-google-fonts.vercel.app/)** para convertir cualquier fuente de Google Fonts para usar con Revenge.

### ¿Cómo uso mi propia fuente personal?

Para crear tu propia configuración de fuente:

1. **Estudia los archivos JSON existentes** del FAQ anterior para entender el formato
2. **Crea tu propio archivo JSON** siguiendo la misma estructura
3. **Alójalo en línea:**
   - **Opción gratuita:** Usa GitHub (como las fuentes existentes)
   - **Opción privada:** Usa tu propio servidor si prefieres privacidad

### ¿Cómo instalo esas fuentes?

La instalación de fuentes es sencilla:

1. **Copia el enlace JSON de la fuente**
2. **Abre Configuración de Discord**
3. **Navega a la sección Revenge**
4. **Haz clic en 'Fonts'**
5. **Haz clic en 'Install a font'**
6. **Haz clic en 'Import font entries from a link'**
7. **Pega el enlace**
8. **Haz clic en el botón 'Import'**

::: tip Consejo de Instalación
Puedes importar fuentes manualmente sin usar un archivo JSON, pero usar el método JSON es mucho más rápido y asegura que no configures mal nada.
:::

---

## ¿Necesitas Más Ayuda?

Si tu pregunta no está respondida aquí:

1. **Revisa la [guía de instalación](/es/xposed/)** para problemas de configuración
2. **Busca en los foros de la comunidad** para problemas similares
3. **Revisa los prerrequisitos** para asegurar que tu configuración sea correcta
4. **Considera contribuir** para mejorar este FAQ

*Este FAQ es mantenido por la comunidad y se actualiza continuamente basado en comentarios de usuarios.*