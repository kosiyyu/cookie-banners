import dummyCall from "../dummy.js";

document.querySelector(".cookie-button-right").addEventListener('click', async () => {
    const button = document.getElementById("cookie-banner");
    if (button) {
        button.style.display = "none";
        const date = new Date(Date.now() + 1000 * 3600 * 24 * 14);
        document.cookie = `cookie_policy=true; expires=${date.toUTCString()}`;

        try {
            await dummyCall();
        } catch (e) {
            console.error(`Error, cookie data can't be send. | ${e}`)
        }
    }
})

document.querySelector(".cookie-button-left").addEventListener('click', () => {
    const cookieButtons = document.getElementById("cookie-buttons");
    const cookieOptionButtons = document.getElementById("cookie-option-buttons");
    const cookieOptions = document.getElementById("cookie-option");

    if (cookieButtons && cookieOptionButtons && cookieOptions) {
        cookieButtons.style.display = "none";
        cookieOptionButtons.style.display = "flex"
        cookieOptions.style.display = "block";
    }
})