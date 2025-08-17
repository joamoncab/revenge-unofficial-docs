# Prerequisites for Xposed Installation

Before proceeding with the Revenge installation via Xposed, you **must** have all the following components properly installed and configured.

::: danger STOP - Read This First
**BEFORE YOU CONTINUE:** If you don't know what any of these terms mean, then this method is **NOT** suitable for you. This installation requires advanced Android knowledge and can potentially brick your device if done incorrectly.
:::

## Required Components

### 1. Latest Discord Version
- **Requirement:** Discord app must be installed and updated to the latest version
- **Why:** Ensures compatibility with the Revenge module
- **How to verify:** Check Play Store for updates

### 2. Android Device with Unlocked Bootloader
- **Requirement:** Your Android device must have an unlocked bootloader
- **Why:** Required for root access and custom modifications
- **Risk:** ⚠️ Unlocking bootloader voids warranty and can brick device if done wrong

### 3. Root Access

You need root access through one of these methods:

**Option A: Magisk (Recommended)**
- **Link:** [Magisk GitHub](https://github.com/topjohnwu/Magisk)
- **Benefits:** Most popular, well-supported, regular updates
- **Compatibility:** Works with most devices

**Option B: KernelSU**
- **Link:** [KernelSU](https://github.com/tiann/KernelSU) or [KernelSUNext](https://github.com/KernelSU-Next/KernelSU-Next)
- **Benefits:** Kernel-based root solution
- **Note:** Newer alternative to Magisk

### 4. Zygisk Support

Zygisk is required for LSPosed to work properly:

**For Magisk users:**
- **Built-in Zygisk:** Enable in Magisk settings
- **Alternative:** [ReZygisk](https://github.com/PerformanC/ReZygisk) module

**For KernelSU users:**
- **Required:** [ReZygisk](https://github.com/PerformanC/ReZygisk) module
- **Installation:** Install as a KernelSU module

### 5. LSPosed Framework

You need a working LSPosed installation:

**Recommended: Jing Matrix Fork**
- **Link:** [LSPosed by Jing Matrix](https://github.com/JingMatrix/LSPosed)
- **Why recommended:** Actively maintained and most compatible
- **Installation:** Install as a Magisk/KernelSU module

::: warning About ZygiskNext
**ZygiskNext is NOT recommended** because it's not open source. Always prefer open-source alternatives for security and transparency.
:::

## Verification Checklist

Before proceeding to installation, verify you have:

- [ ] **Discord** - Latest version installed
- [ ] **Unlocked bootloader** - Device bootloader is unlocked
- [ ] **Root access** - Magisk or KernelSU working properly
- [ ] **Zygisk** - Enabled and working (test with other Xposed modules)
- [ ] **LSPosed** - Installed and accessible through notifications/apps
- [ ] **Basic knowledge** - Understanding of Android modifications and risks

## Testing Your Setup

To verify your setup is working:

1. **Open LSPosed** from your app drawer or notification
2. **Check the status** - Should show "Active" or similar
3. **Try installing a test module** - Install a simple Xposed module to verify functionality
4. **Verify Zygisk** - Check that Zygisk is working in Magisk/KernelSU settings

## Important Warnings

::: danger Data Loss Risk
- **Always backup your device** before proceeding
- **Custom recovery recommended** (TWRP, OrangeFox, etc.)
- **Know how to unbrick** your specific device model
:::

::: warning Support Limitations
- **This method requires technical expertise**
- **Community support is limited** for basic setup issues
- **You assume all risks** for device modifications
:::

## Next Steps

✅ **All prerequisites met?** → Proceed to [Installation Guide](/en/xposed/install)

❌ **Missing requirements?** → Set up missing components first

❓ **Unsure about something?** → Check our [FAQ](/en/misc/faq) or consider alternative methods

---

**Next:** [Installation Guide →](/en/xposed/install)