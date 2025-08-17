# Prerrequisitos para Instalación Xposed

Antes de proceder con la instalación de Revenge vía Xposed, **debes** tener todos los siguientes componentes instalados y configurados correctamente.

::: danger DETENTE - Lee Esto Primero
**ANTES DE CONTINUAR:** Si no sabes qué significan alguno de estos términos, entonces este método **NO** es adecuado para ti. Esta instalación requiere conocimientos avanzados de Android y puede potencialmente dañar tu dispositivo si se hace incorrectamente.
:::

## Componentes Requeridos

### 1. Última Versión de Discord
- **Requisito:** La aplicación Discord debe estar instalada y actualizada a la última versión
- **Por qué:** Asegura compatibilidad con el módulo Revenge
- **Cómo verificar:** Revisa Play Store para actualizaciones

### 2. Dispositivo Android con Bootloader Desbloqueado
- **Requisito:** Tu dispositivo Android debe tener el bootloader desbloqueado
- **Por qué:** Requerido para acceso root y modificaciones personalizadas
- **Riesgo:** ⚠️ Desbloquear bootloader anula garantía y puede dañar el dispositivo si se hace mal

### 3. Acceso Root

Necesitas acceso root a través de uno de estos métodos:

**Opción A: Magisk (Recomendado)**
- **Enlace:** [Magisk GitHub](https://github.com/topjohnwu/Magisk)
- **Beneficios:** Más popular, bien soportado, actualizaciones regulares
- **Compatibilidad:** Funciona con la mayoría de dispositivos

**Opción B: KernelSU**
- **Enlace:** [KernelSU](https://github.com/tiann/KernelSU) o [KernelSUNext](https://github.com/KernelSU-Next/KernelSU-Next)
- **Beneficios:** Solución root basada en kernel
- **Nota:** Alternativa más nueva a Magisk

### 4. Soporte Zygisk

Zygisk es requerido para que LSPosed funcione correctamente:

**Para usuarios de Magisk:**
- **Zygisk integrado:** Habilitar en configuración de Magisk
- **Alternativa:** Módulo [ReZygisk](https://github.com/PerformanC/ReZygisk)

**Para usuarios de KernelSU:**
- **Requerido:** Módulo [ReZygisk](https://github.com/PerformanC/ReZygisk)
- **Instalación:** Instalar como módulo KernelSU

### 5. Framework LSPosed

Necesitas una instalación funcional de LSPosed:

**Recomendado: Fork de Jing Matrix**
- **Enlace:** [LSPosed por Jing Matrix](https://github.com/JingMatrix/LSPosed)
- **Por qué recomendado:** Mantenido activamente y más compatible
- **Instalación:** Instalar como módulo Magisk/KernelSU

::: warning Sobre ZygiskNext
**ZygiskNext NO está recomendado** porque no es código abierto. Siempre prefiere alternativas de código abierto para seguridad y transparencia.
:::

## Lista de Verificación

Antes de proceder a la instalación, verifica que tienes:

- [ ] **Discord** - Última versión instalada
- [ ] **Bootloader desbloqueado** - Bootloader del dispositivo está desbloqueado
- [ ] **Acceso root** - Magisk o KernelSU funcionando correctamente
- [ ] **Zygisk** - Habilitado y funcionando
- [ ] **LSPosed** - Instalado y accesible
- [ ] **Conocimientos básicos** - Comprensión de modificaciones Android y riesgos

## Próximos Pasos

✅ **¿Todos los prerrequisitos cumplidos?** → Procede a la [Guía de Instalación](/es/xposed/install)

❌ **¿Faltan requisitos?** → Configura primero los componentes faltantes

❓ **¿No estás seguro de algo?** → Revisa nuestro [FAQ](/es/misc/faq) o considera métodos alternativos

---

**Siguiente:** [Guía de Instalación →](/es/xposed/install)