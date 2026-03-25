const downloadCvBtn = document.getElementById("download-cv-btn");

if (downloadCvBtn) {
    downloadCvBtn.addEventListener("click", function() {
        const link = document.createElement("a");
        link.href = "Dahoomy-CV.pdf";
        link.download = "Dahoomy-CV.pdf";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

const dropdown = document.querySelector(".dropdown");

function hamburg() {
    if (dropdown) {
        dropdown.classList.add("show");
    }
}

function cancel() {
    if (dropdown) {
        dropdown.classList.remove("show");
    }
}

if (dropdown) {
    const links = dropdown.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            dropdown.classList.remove("show");
        });
    });
}
