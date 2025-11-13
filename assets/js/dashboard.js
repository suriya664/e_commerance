/* The Gild Store – Dashboard Scripts */

const dashboardInit = () => {
  const sidebarToggle = document.querySelector("[data-toggle='sidebar']");
  const sidebar = document.querySelector(".rm-sidebar");

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }

  if (typeof Chart !== "undefined") {
    const ordersCtx = document.getElementById("ordersChart");
    if (ordersCtx) {
      new Chart(ordersCtx, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [
            {
              label: "Revenue",
              data: [42, 60, 48, 72, 90, 110, 150],
              borderColor: "#cba135",
              backgroundColor: "rgba(203, 161, 53, 0.12)",
              borderWidth: 2,
              tension: 0.4,
              fill: true,
            },
            {
              label: "Orders",
              data: [35, 55, 47, 65, 82, 101, 128],
              borderColor: "#0c0c0c",
              backgroundColor: "rgba(12, 12, 12, 0.12)",
              borderWidth: 2,
              tension: 0.4,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              labels: {
                color: "#0c0c0c",
              },
            },
          },
          scales: {
            x: {
              grid: { color: "rgba(12, 12, 12, 0.08)" },
              ticks: { color: "#0c0c0c" },
            },
            y: {
              grid: { color: "rgba(12, 12, 12, 0.08)" },
              ticks: { color: "#0c0c0c" },
            },
          },
        },
      });
    }

    const segmentsCtx = document.getElementById("segmentsChart");
    if (segmentsCtx) {
      new Chart(segmentsCtx, {
        type: "doughnut",
        data: {
          labels: ["VIP", "Gold", "Standard", "Guests"],
          datasets: [
            {
              label: "Customer segments",
              data: [32, 46, 58, 22],
              backgroundColor: ["#cba135", "#0c0c0c", "#d7d7d7", "#f9f7f3"],
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                color: "#0c0c0c",
                boxWidth: 12,
              },
            },
          },
        },
      });
    }
  } else {
    console.warn("Chart.js is not loaded. Dashboard charts will not render.");
  }
};

document.addEventListener("DOMContentLoaded", dashboardInit);
/* The Gild Store – Dashboard Scripts */

const dashboardInit = () => {
  const sidebarToggle = document.querySelector("[data-toggle='sidebar']");
  const sidebar = document.querySelector(".rm-sidebar");

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }

  if (typeof Chart !== "undefined") {
    const ordersCtx = document.getElementById("ordersChart");
    if (ordersCtx) {
      new Chart(ordersCtx, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [
            {
              label: "Revenue",
              data: [42, 60, 48, 72, 90, 110, 150],
              borderColor: "#cba135",
              backgroundColor: "rgba(203, 161, 53, 0.12)",
              borderWidth: 2,
              tension: 0.4,
              fill: true,
            },
            {
              label: "Orders",
              data: [35, 55, 47, 65, 82, 101, 128],
              borderColor: "#0c0c0c",
              backgroundColor: "rgba(12, 12, 12, 0.12)",
              borderWidth: 2,
              tension: 0.4,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              labels: {
                color: "#0c0c0c",
              },
            },
          },
          scales: {
            x: {
              grid: { color: "rgba(12, 12, 12, 0.08)" },
              ticks: { color: "#0c0c0c" },
            },
            y: {
              grid: { color: "rgba(12, 12, 12, 0.08)" },
              ticks: { color: "#0c0c0c" },
            },
          },
        },
      });
    }

    const segmentsCtx = document.getElementById("segmentsChart");
    if (segmentsCtx) {
      new Chart(segmentsCtx, {
        type: "doughnut",
        data: {
          labels: ["VIP", "Gold", "Standard", "Guests"],
          datasets: [
            {
              label: "Customer segments",
              data: [32, 46, 58, 22],
              backgroundColor: ["#cba135", "#0c0c0c", "#d7d7d7", "#f9f7f3"],
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                color: "#0c0c0c",
                boxWidth: 12,
              },
            },
          },
        },
      });
    }
  } else {
    console.warn("Chart.js is not loaded. Dashboard charts will not render.");
  }
};

document.addEventListener("DOMContentLoaded", dashboardInit);


