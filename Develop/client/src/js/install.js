const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    //Prevent default browser events
    event.preventDefault();
    //Saves event for later/deferred
    window.deferredPrompt = event;
    //Update UI and prompt to install
    butInstall.style.display = 'block'
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (window.deferredPrompt) {
        // Shows the installation prompt
        window.deferredPrompt.prompt();
        // Waits for the user to respond to the prompt
        const choiceResult = await window.deferredPrompt.userChoice;
        // Check the user's choice with if statement
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        // Clears the deferredPrompt
        window.deferredPrompt = null;
        // Hide the install button
        butInstall.style.display = 'none';
      }
});


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
