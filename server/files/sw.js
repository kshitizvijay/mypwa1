self.addEventListener('install', function(event) {
  // Perform install steps
});

self.addEventListener('push', function(event) {
    
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Push Codelab';
  const options = {
    body: event.data.text(),
    icon: 'http://static.toiimg.com/thumb/msid-58745641/58745641.jpg?resizemode=1&width=375&height=281',
    badge: 'http://static.toiimg.com/thumb/msid-58745641/58745641.jpg?resizemode=1&width=375&height=281'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});