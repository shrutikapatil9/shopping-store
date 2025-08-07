// src/services/notification-service.js

// src/services/notifications-service.js

let observers = {};

class NotificationService {
  addObserver(notificationName, callback) {
    if (!observers[notificationName]) {
      observers[notificationName] = [];
    }
    observers[notificationName].push(callback);
    console.log(`✅ Observer added for ${notificationName}`);
  }

  removeObserver(notificationName, callback) {
    let obs = observers[notificationName];
    if (!obs) return;
    observers[notificationName] = obs.filter(cb => cb !== callback);
    console.log(`🗑️ Observer removed for ${notificationName}`);
  }

  postNotification(notificationName, data) {
    console.log(`📢 Posting notification: ${notificationName}`, data);
    let obs = observers[notificationName];
    if (obs) {
      obs.forEach(callback => {
        console.log("📬 Notifying observer...");
        callback(data);
      });
    }
  }
}

export default new NotificationService();
