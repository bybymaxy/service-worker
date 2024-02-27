const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default behavior of the event
  event.preventDefault();
  // Save the event for later use
  deferredPrompt = event;
  // Show the install button
  butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  // Check if the deferredPrompt is available
  if (deferredPrompt) {
    // Show the prompt to install the PWA
    deferredPrompt.prompt();
    // Wait for the user's response
    const result = await deferredPrompt.userChoice;
    // Reset the deferredPrompt variable
    deferredPrompt = null;
    // Hide the install button
    butInstall.style.display = 'none';
    // Log the user's choice
    console.log('User choice:', result.outcome);
  }
});

// TODO: Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // Log the installation event
  console.log('App installed:', event);
});