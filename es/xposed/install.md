# Guía de Instalación

Esta guía te llevará a través de la instalación de Revenge vía el framework Xposed. Asegúrate de haber completado todos los [prerrequisitos](/es/xposed/prerequisites) antes de continuar.

::: tip Antes de Empezar
- **Tiempo estimado:** 10-15 minutos
- **Dificultad:** Avanzada
- **Prerrequisitos:** [Todos los requisitos cumplidos](/es/xposed/prerequisites)
:::

## Instalación Paso a Paso

### Paso 1: Descargar el Módulo Revenge-Xposed

1. **Visita la página de releases:** Ve a [Revenge-Xposed Releases](https://github.com/revenge-mod/revenge-xposed/releases/latest)

2. **Descarga el APK:** Busca la última versión y descarga el archivo `.apk`

   ![Página de descarga de GitHub](/images/installation_1.png)

### Paso 2: Instalar el Módulo

3. **Abre el archivo descargado:** Una vez que se complete la descarga, toca "Abrir" para comenzar la instalación

   ![Abrir archivo](/images/installation_2.png)

4. **Instala la aplicación:** Sigue el proceso estándar de instalación de aplicaciones Android

   ![Instalarlo](/images/installation_3.png)

   ::: warning Nota de Instalación
   Es posible que necesites habilitar "Instalar desde fuentes desconocidas" en la configuración de tu dispositivo si no lo has hecho ya.
   :::

### Paso 3: Configurar LSPosed

5. **Abre LSPosed:** Después de la instalación, deberías ver una notificación de LSPosed. Tócala para abrir la interfaz LSPosed

   ![Notificaciones](/images/installation_4.png)

   ::: tip Acceso Alternativo
   Si no ves la notificación, puedes acceder a LSPosed a través de:
   - Aplicación LSPosed en tu cajón de aplicaciones
   - Magisk Manager → Módulos → LSPosed
   :::

6. **Habilita el módulo Revenge:** En LSPosed, encuentra el módulo Revenge y habilítalo

7. **Configura el ámbito de Discord:** **¡Muy Importante!** Asegúrate de que Discord esté seleccionado en el ámbito del módulo

   ![Habilitando](/images/installation_5.png)

   ::: danger Paso Crítico
   **El módulo DEBE estar habilitado específicamente para Discord.** Si Discord no está en el ámbito, Revenge no funcionará.
   :::

### Paso 4: Verificar Instalación

8. **Reinicia Discord:** Fuerza el cierre completo de Discord y vuelve a abrirlo

9. **Revisa la configuración de Revenge:** Abre Discord y navega a Configuración. Deberías ver una nueva sección "Revenge"

   ![Verificándolo](/images/installation_6.png)

   ::: tip Indicador de Éxito
   Si ves la sección Revenge en la configuración de Discord, ¡felicidades! La instalación fue exitosa.
   :::

## Solución de Problemas

### El Módulo No Aparece en LSPosed
- **Reinicia LSPosed:** Fuerza el cierre y vuelve a abrir LSPosed
- **Verifica instalación:** Confirma que el APK se instaló correctamente
- **Vuelve a descargar:** Intenta descargar e instalar el módulo nuevamente

### La Sección Revenge No Está en Discord
- **Verifica ámbito:** Asegúrate de que Discord esté seleccionado en el ámbito del módulo LSPosed
- **Reinicia Discord:** Fuerza el cierre de Discord y vuelve a abrirlo (¡importante!)
- **Verifica Xposed:** Asegúrate de que LSPosed esté funcionando con otros módulos
- **Revisa logs:** Mira los logs de LSPosed para mensajes de error

### Discord Se Cierra al Iniciar
- **Deshabilita módulo temporalmente:** Apaga Revenge en LSPosed para aislar el problema
- **Actualiza Discord:** Asegúrate de tener la última versión de Discord
- **Borra caché de Discord:** Limpia los datos/caché de la aplicación Discord
- **Verifica compatibilidad:** Confirma que tu configuración cumple todos los prerrequisitos

## Consejos Post-Instalación

### Explora las Funciones de Revenge
Una vez instalado, explora la configuración de Revenge para:
- **Personalizar apariencia** con temas y fuentes
- **Instalar plugins** para funcionalidad adicional
- **Configurar ajustes** según tus preferencias

### Mantente Actualizado
- **Revisa actualizaciones** regularmente en la página de releases de GitHub
- **Actualiza Discord** cuando haya nuevas versiones disponibles
- **Mantén LSPosed actualizado** para mejor compatibilidad

## Próximos Pasos

🎉 **¡Instalación Completa!** 

Ahora puedes:
- **[Revisar el FAQ](/es/misc/faq)** para consejos sobre el uso de Revenge
- **Explorar plugins** y opciones de personalización
- **Unirte a la comunidad** para soporte y actualizaciones

## ¿Necesitas Ayuda?

Si encuentras problemas:

1. **Revisa nuestro [FAQ](/es/misc/faq)** para soluciones comunes
2. **Revisa los [prerrequisitos](/es/xposed/prerequisites)** para asegurar que todo esté configurado correctamente
3. **Busca problemas similares** en los foros de la comunidad o GitHub

---

**¡Eso es todo! ¡Disfruta usando Revenge! 🎉**

*¿Tienes problemas? Revisa nuestra [sección de FAQ](/es/misc/faq) para problemas comunes y soluciones.*