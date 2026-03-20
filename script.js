const projects = {
    insect: {
        title: "Multi Insect Classifier",
        subtitle: "MSc Dissertation · Flask · TensorFlow · Docker · AWS EC2",
        image: "images/insect_ai.png",
        tags: ["TensorFlow", "Flask", "Docker", "AWS EC2", "Computer Vision", "MLOps"],
        description: [
            "This started as my dissertation project, where I trained multiple insect classifiers in Keras to distinguish between eight visually similar species. I did not want it to remain another local-only model, so I turned it into a public product people can actually test.",
            "The live version now includes a Flask API, a cleaner front end, Docker-based packaging, EC2 deployment, health checks, and model switching so visitors can compare predictions across architectures."
        ],
        live: "http://16.171.241.135",
        github: "https://github.com/Patric-1613/MultiInsectClassifier"
    },
    urbanroll: {
        title: "UrbanRoll Bike Analysis",
        subtitle: "Google BigQuery · SQL · Tableau Public",
        image: "images/urbanroll_dashboard.png",
        embed: "https://public.tableau.com/views/BikeSharingNetwork/Dashboard1?:showVizHome=no",
        tags: ["BigQuery", "SQL", "Tableau", "Operational Analytics"],
        description: [
            "This project analysed 15,000 bike-sharing rides across ride, station, and user datasets. The work focused on membership behaviour, peak demand windows, net bike flow, and station-level imbalance.",
            "The standout findings were operationally useful: Jennifer Land St was losing 66 bikes daily, Amy Park St was gaining 66, and casual riders were generating most trips while riding much longer than subscribers."
        ],
        live: "https://public.tableau.com/views/BikeSharingNetwork/Dashboard1",
        github: "https://github.com/Patric-1613/UrbanRoll-bike-analysis"
    },
    ecommerce: {
        title: "E-commerce Funnel Analysis",
        subtitle: "BigQuery · SQL · Tableau Public",
        image: "images/ecommerce_dashboard.png",
        embed: "https://public.tableau.com/views/EcommerceFunnelAnalysisDashboard/Dashboard1?:showVizHome=no",
        tags: ["BigQuery", "Tableau", "Conversion Analysis", "Revenue Analytics"],
        description: [
            "This was an end-to-end funnel study of 5,000 unique visitors across a full year, looking at behaviour from page view to purchase. I used SQL in BigQuery and built a Tableau dashboard to make the drop-off stages easy to interpret.",
            "The key business finding was simple and actionable: the biggest issue was product discovery and add-to-cart behaviour, while email significantly outperformed social traffic on conversion rate."
        ],
        live: "https://public.tableau.com/views/EcommerceFunnelAnalysisDashboard/Dashboard1",
        github: "https://github.com/Patric-1613/ecommerce-funnel-analysis"
    },
    permitting: {
        title: "Environment Agency Permitting Analytics",
        subtitle: "Python · Power BI · Public Sector Operations",
        image: "images/permitting_analytics.png",
        embed: "docs/environment-agency-dashboard.pdf",
        embedType: "pdf",
        tags: ["Power BI", "Python", "EDA", "Government Data"],
        description: [
            "This project analysed three years of permit application data from the Environment Agency's Centralised Services Team. The aim was to understand application mix, refusal rates, turnaround time, and operational friction points.",
            "I used Python for cleaning and exploratory analysis, then Power BI for the presentation layer. The resulting dashboard highlights determination-time patterns, refusal hotspots, and additional-information request trends."
        ],
        live: "docs/environment-agency-dashboard.pdf",
        github: "https://github.com/Patric-1613/Permitting-Service-Data-Analysis-project"
    },
    sensibee: {
        title: "Sensibee Ecological Monitor",
        subtitle: "Research Assistant Work · YOLOv11 · Ecological Monitoring",
        image: "images/analytics_dashboard.png",
        tags: ["YOLOv11", "Computer Vision", "Research", "Ecology"],
        description: [
            "This work sits inside my research role at Kingston University. The goal is real-time ecological monitoring using computer vision, with particular focus on reliable insect detection in field conditions.",
            "The project achieved 95 percent mAP@50 and substantially reduced false detections, which matters because research value only appears when models behave consistently outside the lab."
        ],
        github: "https://github.com/Patric-1613"
    },
    chatbot: {
        title: "PDF Chatbot with Retrieval Augmented Generation",
        subtitle: "LangChain · FAISS · LLM Workflow",
        image: "images/chatbot_ai.png",
        tags: ["LangChain", "FAISS", "LLM", "Streamlit"],
        description: [
            "I built this to let users ask questions against PDF content without relying on generic model memory. The system creates embeddings, stores vectors, retrieves relevant chunks, and feeds only document-grounded context into the LLM.",
            "It was one of the projects that pushed me from experimentation into thinking about usability, retrieval quality, and trust in model outputs."
        ],
        github: "https://github.com/Patric-1613"
    }
};

function renderVisual(project) {
    if (project.embed) {
        const embedSrc = project.embedType === "pdf" ? project.embed : project.embed;
        return `<iframe src="${embedSrc}" title="${project.title} preview" loading="lazy"></iframe>`;
    }

    if (project.image) {
        return `<img src="${project.image}" alt="${project.title} visual">`;
    }

    return `<div class="modal-placeholder">Preview available from the external project links.</div>`;
}

function renderLinks(project) {
    const links = [];

    if (project.live) {
        const label = project.embedType === "pdf" ? "Open PDF" : "Open Live";
        links.push(`<a class="btn btn-primary" href="${project.live}" target="_blank" rel="noreferrer">${label}</a>`);
    }

    if (project.github) {
        links.push(`<a class="btn btn-secondary" href="${project.github}" target="_blank" rel="noreferrer">View on GitHub</a>`);
    }

    return links.join("");
}

function openProjectModal(key) {
    const project = projects[key];
    if (!project) return;

    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalSubtitle").textContent = project.subtitle || "";
    document.getElementById("modalVisual").innerHTML = renderVisual(project);
    document.getElementById("modalTags").innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join("");
    document.getElementById("modalDescription").innerHTML = project.description
        .map((paragraph) => `<p>${paragraph}</p>`)
        .join("");
    document.getElementById("modalLinks").innerHTML = renderLinks(project);

    document.getElementById("projectModal").classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeProjectModal() {
    document.getElementById("projectModal").classList.remove("open");
    document.body.style.overflow = "";
}

function openResumeModal(event) {
    event.preventDefault();
    document.getElementById("resumeModal").classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeResumeModal() {
    document.getElementById("resumeModal").classList.remove("open");
    document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll(".fade-in").forEach((element) => observer.observe(element));

    document.querySelectorAll("a[href^='#']").forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");
            if (!targetId || targetId === "#") return;
            const target = document.querySelector(targetId);
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    document.querySelectorAll("[data-project-open]").forEach((button) => {
        button.addEventListener("click", () => openProjectModal(button.dataset.projectOpen));
    });

    document.querySelectorAll(".project-card[data-project]").forEach((card) => {
        card.addEventListener("click", (event) => {
            if (event.target.closest("a") || event.target.closest("button")) return;
            openProjectModal(card.dataset.project);
        });
    });

    document.querySelectorAll("[data-open-resume]").forEach((trigger) => {
        trigger.addEventListener("click", openResumeModal);
    });

    document.querySelectorAll("[data-close-project]").forEach((button) => {
        button.addEventListener("click", closeProjectModal);
    });

    document.querySelectorAll("[data-close-resume]").forEach((button) => {
        button.addEventListener("click", closeResumeModal);
    });

    document.getElementById("projectModal").addEventListener("click", (event) => {
        if (event.target.id === "projectModal") closeProjectModal();
    });

    document.getElementById("resumeModal").addEventListener("click", (event) => {
        if (event.target.id === "resumeModal") closeResumeModal();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        closeProjectModal();
        closeResumeModal();
    });
});
