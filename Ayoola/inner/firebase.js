// Import and configure Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Firebase configuration (replace with your Firebase project credentials)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Handle form submission
export function submitExeatForm(formData) {
  const exeatRef = ref(database, "exeat_requests");
  return push(exeatRef, formData)
    .then(() => {
      alert("Your exeat request has been submitted!");
    })
    .catch((error) => {
      console.error("Failed to submit exeat request:", error);
      alert("An error occurred while submitting your request. Please try again.");
    });
}
