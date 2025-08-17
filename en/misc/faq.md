# Frequently Asked Questions

Common questions and solutions for using Revenge modded client.

## Table of Contents

1. [How do I install a plugin?](#how-do-i-install-a-plugin)
2. [Where can I find plugins to install?](#where-can-i-find-plugins-to-install)
3. [I want 'x' plugin!](#i-want-x-plugin)
4. [Why can't I enable some plugins?](#why-cant-i-enable-some-plugins)
5. [My Revenge doesn't boot! It's stuck on the logo! Help!](#my-revenge-doesnt-boot-its-stuck-on-the-logo-help)
6. [Where do I get fonts?](#where-do-i-get-fonts)
7. [How do I use my own personal font?](#how-do-i-use-my-own-personal-font)
8. [How do I install those fonts?](#how-do-i-install-those-fonts)

---

## Plugins

### How do I install a plugin?

To install a plugin, follow these steps:

1. **Copy the plugin link**
2. **Go to Settings** in Discord
3. **Find the Revenge section**
4. **Click on Plugins**
5. **Click the '+' button**
6. **Click 'Import from clipboard'**
7. **Click 'Install'**

::: warning Security Note
Keep in mind that direct links are unproxied. For safer plugin installation, install the **'Plugin Browser'** following the steps above, then install all plugins from there for better security.
:::

### Where can I find plugins to install?

You can find plugins in several places:

- **[Community Plugin List](https://purple-eyez.github.io/Plugins-List/)** - Comprehensive list maintained by the community
- **Plugin Browser** - Install this plugin first for a safe browsing experience
- **Search engines** - Look for specific plugins online

### I want 'x' plugin!

To find a specific plugin:

1. **Search the [community maintained list](https://purple-eyez.github.io/Plugins-List/)**
2. **Use the Plugin Browser** within Revenge
3. **Search online** using search engines
4. **If you can't find it** - It likely doesn't exist or isn't available yet

### Why can't I enable some plugins?

If you can't enable certain plugins, they are likely **broken or incompatible**. Here are your options:

- ✅ **Look for alternatives** - Search for similar plugins that work
- ✅ **Create your own** - If you have coding skills
- ❌ **Wait for fixes** - Some plugins may be updated later

---

## Troubleshooting

### My Revenge doesn't boot! It's stuck on the logo! Help!

This is a common issue with several solutions:

#### Quick Fix (Recommended)
**Update to beta or alpha version** - This often resolves boot issues.

*Thanks to rusk and waffle for this tip*

#### For Xposed Installations

::: danger Data Loss Warning
**THIS WILL DELETE YOUR PLUGINS IF YOU DON'T HAVE CLOUD SAVE.** Unfortunately, there's no other way to fix this issue at the moment.
:::

**Solution:** Clear app data
1. Go to **Android Settings**
2. Navigate to **Apps** → **Discord (Revenge)**
3. Select **Clear App Data**

*Note: Steps may vary depending on your device manufacturer*

::: tip Cloud Sync Users
If you have cloud sync enabled, you can reinstall and restore everything. Otherwise, you'll need to reinstall plugins manually.
:::

#### For Revenge Manager Installations

1. **Uninstall Discord** completely
2. **Clear Revenge Manager cache:**
   - Go to Android Settings → Apps → Revenge Manager
   - Select "Clear App Cache"
3. **Reinstall Discord**

*Thanks to catinette for this solution*

---

## Fonts & Customization

### Where do I get fonts?

There are several sources for Revenge-compatible fonts:

#### 1. Rairof's Repository
**Preview available:** [Theme-Fonts Preview](https://github.com/Rairof/Theme-Fonts?tab=readme-ov-file#fonts-for-discord)

Popular fonts include:
- [Almarai](https://raw.githubusercontent.com/Rairof/Theme-Fonts/main/Almarai/Almarai-font-snippet.json)
- [Cabin](https://raw.githubusercontent.com/Rairof/Theme-Fonts/main/Cabin/Cabin-font-snippet.json)
- [Comic Sans](https://raw.githubusercontent.com/Rairof/Theme-Fonts/main/ComicSans/ComicSans-font-snippet.json)
- [Fira Code](https://raw.githubusercontent.com/Rairof/Theme-Fonts/main/Fira-Code/Fira-Code-font-snippet.json)
- [Gantari](https://raw.githubusercontent.com/Rairof/Theme-Fonts/main/Gantari/Gantari-font-snippet.json)
- [GoogleSans](https://raw.githubusercontent.com/Rairof/Theme-Fonts/main/GoogleSans/GoogleSans-font-snippet.json)
- [JetBrains Mono](https://raw.githubusercontent.com/Rairof/Theme-Fonts/main/JetBrainsMono/JetBrainsMono-font-snippet.json)
- [Inter](https://raw.githubusercontent.com/Rairof/Theme-Fonts/main/SF-Pro-Display/SF-Pro-Display-font-snippet.json)

#### 2. Purple-EyeZ Repository
**Preview available:** [Bunny-Fonts List](https://github.com/Purple-EyeZ/Bunny-Fonts?tab=readme-ov-file#fonts-list)

Available fonts:
- [Poppins](https://raw.githubusercontent.com/Purple-EyeZ/Bunny-Fonts/main/Poppins/Poppins-font-snippet.json)
- [Poppins Light](https://raw.githubusercontent.com/Purple-EyeZ/Bunny-Fonts/main/PoppinsLight/Poppins-Light-font-snippet.json)
- [Urbanist](https://raw.githubusercontent.com/Purple-EyeZ/Bunny-Fonts/main/Urbanist/Urbanist-font-snippet.json)
- [Plus Jakarta Sans](https://raw.githubusercontent.com/Purple-EyeZ/Bunny-Fonts/main/Plus-Jakarta-Sans/Plus-Jakarta-Sans-font-snippet.json)

#### 3. AetheralMeowstic's Collection
- [Inter Alia](https://raw.githubusercontent.com/AetheralMeowstic/Discord-Inter-Alia/refs/heads/main/Inter%20Alia.json)

#### 4. Google Fonts Integration
Use **[Foxfire's Google Fonts Tool](https://bunny-google-fonts.vercel.app/)** to convert any Google Fonts font for use with Revenge.

### How do I use my own personal font?

To create your own font configuration:

1. **Study existing JSON files** from the FAQ above to understand the format
2. **Create your own JSON file** following the same structure
3. **Host it online:**
   - **Free option:** Use GitHub (like the existing fonts)
   - **Private option:** Use your own server if you prefer privacy

### How do I install those fonts?

Font installation is straightforward:

1. **Copy the font JSON link**
2. **Open Discord Settings**
3. **Navigate to the Revenge section**
4. **Click on 'Fonts'**
5. **Click 'Install a font' button**
6. **Click 'Import font entries from a link'**
7. **Paste the link**
8. **Click the 'Import' button**

::: tip Installation Tip
You can import fonts manually without using a JSON file, but using the JSON method is much faster and ensures you won't misconfigure anything.
:::

---

## Need More Help?

If your question isn't answered here:

1. **Check the [installation guide](/en/xposed/)** for setup issues
2. **Search the community forums** for similar problems  
3. **Review the prerequisites** to ensure your setup is correct
4. **Consider contributing** to improve this FAQ

*This FAQ is community-maintained and continuously updated based on user feedback.*