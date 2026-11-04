
const apiUrl = "https://2k6ktwcsz2.execute-api.ap-southeast-2.amazonaws.com/";

document.addEventListener("DOMContentLoaded", async () => {
    const visitorElement = document.getElementById("visitor-count");

    if (!visitorElement) return;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const data = await response.json();
        visitorElement.textContent = data.visitorCount;

    } catch (error) {
        console.error("Visitor counter error:", error);
        visitorElement.textContent = "Unavailable";
    }
});
