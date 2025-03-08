import dummyCall from "../dummy.js";

document.getElementById("cookie-button-agree-and-continue").addEventListener('click', async () => {
    const banner = document.getElementById("cookie-banner");
    if (!banner) {
        console.error("Error, no cookie banner.");
    }

    const options = { ...defaultOptions };
    options.preferences = true;
    options.statistics = true;
    options.marketing = true;

    // when call is faulty, i should not block website access
    closeBanner(banner);

    try {
        await dummyCall(options);
    } catch (e) {
        console.error(`Error, cookie data can't be send. | ${e}`)
    }

})

document.getElementById("cookie-button-more-options").addEventListener('click', () => {
    const cookieButtons = document.getElementById("cookie-buttons");
    const cookieOptionButtons = document.getElementById("cookie-option-buttons");
    const cookieOptions = document.getElementById("cookie-option");

    if (cookieButtons && cookieOptionButtons && cookieOptions) {
        cookieButtons.style.display = "none";
        cookieOptionButtons.style.display = "flex"
        cookieOptions.style.display = "block";
    }
})

document.getElementById("cookie-button-reject").addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = "https://www.google.com"
    }, 0);
})

document.getElementById("cookie-button-accept-selected").addEventListener('click', async () => {
    const banner = document.getElementById("cookie-banner");
    if (!banner) {
        console.error("Error, no cookie banner.");
    }
    const isOp1 = document.getElementById("cookie-op1").checked;
    const isOp2 = document.getElementById("cookie-op2").checked;
    const isOp3 = document.getElementById("cookie-op3").checked;
    const isOp4 = document.getElementById("cookie-op4").checked;

    const options = { ...defaultOptions };
    options.necessary = isOp1;
    options.preferences = isOp2;
    options.statistics = isOp3;
    options.marketing = isOp4;

    const processedOptions = processOptions(options);

    createCookie();

    // when call is faulty, i should not block website access
    closeBanner(banner);

    try {
        await dummyCall(processedOptions);
    } catch (e) {
        console.error(`Error, cookie data can't be send. | ${e}`)
    }

})

const defaultOptions = {
    necessary: true,
    preferences: false,
    statistics: false,
    marketing: false,
}

const processOptions = (obj) => {
    if (!obj) return null;

    const options = { ...defaultOptions };
    if (obj.necessary) {
        options.necessary = obj.necessary;
    }
    if (obj.preferences) {
        options.preferences = obj.preferences;
    }
    if (obj.statistics) {
        options.statistics = obj.statistics;
    }
    if (obj.marketing) {
        options.marketing = obj.marketing;
    }

    return options;
}

const createCookie = () => {
    const date = new Date(Date.now() + 1000 * 3600 * 24 * 14);
    document.cookie = `cookie_policy=true; expires=${date.toUTCString()}`;
}

const closeBanner = (banner) => {
    banner.style.display = "none";
}

