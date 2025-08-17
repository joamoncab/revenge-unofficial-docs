# Installation Guide

This guide will walk you through installing Revenge via the Xposed framework. Make sure you've completed all [prerequisites](/en/xposed/prerequisites) before continuing.

::: tip Before Starting
- **Estimated time:** 10-15 minutes
- **Difficulty:** Advanced
- **Prerequisites:** [All requirements met](/en/xposed/prerequisites)
:::

## Step-by-Step Installation

### Step 1: Download Revenge-Xposed Module

1. **Visit the releases page:** Go to [Revenge-Xposed Releases](https://github.com/revenge-mod/revenge-xposed/releases/latest)

2. **Download the APK:** Look for the latest release and download the `.apk` file

   ![GitHub download page](/images/installation_1.png)

### Step 2: Install the Module

3. **Open the downloaded file:** Once the download completes, tap "Open" to begin installation

   ![Open file](/images/installation_2.png)

4. **Install the application:** Follow the standard Android app installation process

   ![Install it](/images/installation_3.png)

   ::: warning Installation Note
   You may need to enable "Install from unknown sources" in your device settings if you haven't already.
   :::

### Step 3: Configure LSPosed

5. **Open LSPosed:** After installation, you should see a notification from LSPosed. Tap it to open LSPosed interface

   ![Notifications](/images/installation_4.png)

   ::: tip Alternative Access
   If you don't see the notification, you can access LSPosed through:
   - LSPosed app in your app drawer
   - Magisk Manager → Modules → LSPosed
   :::

6. **Enable the Revenge module:** In LSPosed, find the Revenge module and enable it

7. **Configure Discord scope:** **Very Important!** Make sure Discord is selected in the module scope

   ![Enabling](/images/installation_5.png)

   ::: danger Critical Step
   **The module MUST be enabled for Discord specifically.** If Discord is not in the scope, Revenge will not work.
   :::

### Step 4: Verify Installation

8. **Restart Discord:** Force close Discord completely and reopen it

9. **Check for Revenge settings:** Open Discord and navigate to Settings. You should see a new "Revenge" section

   ![Checking it](/images/installation_6.png)

   ::: tip Success Indicator
   If you see the Revenge section in Discord settings, congratulations! The installation was successful.
   :::

## Troubleshooting

### Module Not Appearing in LSPosed
- **Restart LSPosed:** Force close and reopen LSPosed
- **Check installation:** Verify the APK was installed correctly
- **Re-download:** Try downloading and installing the module again

### Revenge Section Not in Discord
- **Check scope:** Ensure Discord is selected in LSPosed module scope
- **Restart Discord:** Force close Discord and reopen (important!)
- **Verify Xposed:** Make sure LSPosed is working with other modules
- **Check logs:** Look at LSPosed logs for any error messages

### Discord Crashes on Startup
- **Disable module temporarily:** Turn off Revenge in LSPosed to isolate the issue
- **Update Discord:** Ensure you have the latest Discord version
- **Clear Discord cache:** Clear Discord's app data/cache
- **Check compatibility:** Verify your setup meets all prerequisites

## Post-Installation Tips

### Explore Revenge Features
Once installed, explore the Revenge settings to:
- **Customize appearance** with themes and fonts
- **Install plugins** for additional functionality
- **Configure settings** to your preferences

### Stay Updated
- **Check for updates** regularly on the GitHub releases page
- **Update Discord** when new versions are available
- **Keep LSPosed updated** for best compatibility

### Safety Reminders
- **Backup regularly** - Always maintain device backups
- **Test carefully** - Try new features in safe environments first
- **Monitor stability** - Watch for any unusual behavior

## Next Steps

🎉 **Installation Complete!** 

Now you can:
- **[Check the FAQ](/en/misc/faq)** for tips on using Revenge
- **Explore plugins** and customization options
- **Join the community** for support and updates

## Need Help?

If you encounter issues:

1. **Check our [FAQ](/en/misc/faq)** for common solutions
2. **Review the [prerequisites](/en/xposed/prerequisites)** to ensure everything is set up correctly
3. **Look for similar issues** in the community forums or GitHub

---

**That's it! Enjoy using Revenge! 🎉**

*Having issues? Check our [FAQ section](/en/misc/faq) for common problems and solutions.*