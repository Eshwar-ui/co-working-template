/* ============================================
   CoWork Hub - Dashboard JavaScript
   ============================================ */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // ---------- Sidebar Toggle ----------
  const sidebarToggle = document.querySelector("#sidebarToggle");
  const sidebar =
    document.querySelector("#sidebar") ||
    document.querySelector("#dashboardSidebar");
  const overlay = document.querySelector("#sidebarOverlay");

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      if (overlay) overlay.classList.toggle("hidden");
    });
  }
  if (overlay) {
    overlay.addEventListener("click", () => {
      sidebar.classList.remove("open");
      overlay.classList.add("hidden");
    });
  }

  // ---------- Notification Dropdown ----------
  const notifBtn =
    document.querySelector("#notifBtn") ||
    document.querySelector(".notification-toggle");
  const notifDropdown =
    document.querySelector("#notifDropdown") ||
    document.querySelector(".notification-dropdown");
  if (notifBtn && notifDropdown) {
    notifBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      notifDropdown.classList.toggle("hidden");
      // Close profile dropdown
      const profileDD =
        document.querySelector("#profileDropdown") ||
        document.querySelector(".profile-dropdown");
      if (profileDD) profileDD.classList.add("hidden");
    });
  }

  // ---------- Profile Dropdown ----------
  const profileBtn =
    document.querySelector("#profileBtn") ||
    document.querySelector(".profile-toggle");
  const profileDropdown =
    document.querySelector("#profileDropdown") ||
    document.querySelector(".profile-dropdown");
  if (profileBtn && profileDropdown) {
    profileBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      profileDropdown.classList.toggle("hidden");
      if (notifDropdown) notifDropdown.classList.add("hidden");
    });
  }

  // Close dropdowns on outside click
  document.addEventListener("click", () => {
    if (notifDropdown) notifDropdown.classList.add("hidden");
    if (profileDropdown) profileDropdown.classList.add("hidden");
  });

  // ---------- Dark Mode Toggle ----------
  const darkToggle = document.getElementById("darkToggle");
  const html = document.documentElement;

  if (darkToggle) {
    const isDark =
      localStorage.getItem("darkMode") === "true" ||
      localStorage.getItem("theme") === "dark";
    if (isDark) {
      html.classList.add("dark");
      const icon = darkToggle.querySelector("i");
      if (icon) {
        icon.classList.replace("fa-moon", "fa-sun");
      }
    }

    darkToggle.addEventListener("click", function () {
      const currentlyDark = html.classList.toggle("dark");
      localStorage.setItem("darkMode", currentlyDark);
      localStorage.setItem("theme", currentlyDark ? "dark" : "light");

      const icon = darkToggle.querySelector("i");
      if (icon) {
        if (currentlyDark) {
          icon.classList.replace("fa-moon", "fa-sun");
        } else {
          icon.classList.replace("fa-sun", "fa-moon");
        }
      }
    });
  }

  // ---------- RTL Toggle ----------
  const rtlToggle = document.getElementById("rtlToggle");
  const savedRTL = localStorage.getItem("rtl");

  if (savedRTL === "true") {
    html.setAttribute("dir", "rtl");
    if (rtlToggle) {
      rtlToggle.classList.add("active");
      rtlToggle.textContent = "LTR";
    }
  }

  if (rtlToggle) {
    rtlToggle.addEventListener("click", () => {
      const isRTL = html.getAttribute("dir") === "rtl";
      if (isRTL) {
        html.removeAttribute("dir");
        localStorage.setItem("rtl", "false");
        rtlToggle.classList.remove("active");
        rtlToggle.textContent = "RTL";
      } else {
        html.setAttribute("dir", "rtl");
        localStorage.setItem("rtl", "true");
        rtlToggle.classList.add("active");
        rtlToggle.textContent = "LTR";
      }
      // Re-render charts or other RTL-sensitive elements if needed
    });
  }

  // ---------- Logout Simulation ----------
  document.querySelectorAll('a[href="#"]').forEach((link) => {
    if (link.textContent.trim().toLowerCase() === "logout") {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        if (confirm("Are you sure you want to logout?")) {
          // Determine path back to login/index
          const isDeep =
            window.location.pathname.includes("/admin/") ||
            window.location.pathname.includes("/dashboard/");
          window.location.href = isDeep ? "../login.html" : "login.html";
        }
      });
    }
  });

  // ---------- Booking Slot Selection ----------
  document
    .querySelectorAll(".booking-slot:not(.unavailable)")
    .forEach((slot) => {
      slot.addEventListener("click", function () {
        document
          .querySelectorAll(".booking-slot")
          .forEach((s) =>
            s.classList.remove("selected", "border-primary", "bg-primary/5"),
          );
        this.classList.add("selected", "border-primary", "bg-primary/5");
      });
    });

  // ---------- Date Picker Simulation ----------
  const dateInputs = document.querySelectorAll(".date-picker");
  dateInputs.forEach((input) => {
    input.type = "date";
    if (!input.value) {
      const today = new Date().toISOString().split("T")[0];
      input.value = today;
    }
  });

  // ---------- Dashboard Charts Placeholder ----------
  const revenueChartEl = document.querySelector("#revenueChart");
  if (revenueChartEl && typeof ApexCharts !== "undefined") {
    const isDark = document.documentElement.classList.contains("dark");
    const options = {
      series: [
        {
          name: "Revenue",
          data: [
            45000, 52000, 38000, 65000, 48000, 56000, 70000, 62000, 85000,
            78000, 92000, 105000,
          ],
        },
      ],
      chart: {
        type: "area",
        height: 288,
        toolbar: { show: false },
        fontFamily: "Inter, sans-serif",
        background: "transparent",
      },
      colors: ["#3F4E3F"],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.05,
          stops: [0, 100],
        },
      },
      dataLabels: { enabled: false },
      stroke: { curve: "smooth", width: 3 },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: { style: { colors: isDark ? "#9ca3af" : "#6b7280" } },
      },
      yaxis: {
        labels: {
          style: { colors: isDark ? "#9ca3af" : "#6b7280" },
          formatter: (value) => "$" + value / 1000 + "k",
        },
      },
      grid: {
        borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
        strokeDashArray: 4,
        yaxis: { lines: { show: true } },
      },
      theme: { mode: isDark ? "dark" : "light" },
      tooltip: { theme: isDark ? "dark" : "light" },
    };

    const chart = new ApexCharts(revenueChartEl, options);
    chart.render();

    // Re-render chart gracefully on dark mode switch
    const darkToggleBtn = document.getElementById("darkToggle");
    if (darkToggleBtn) {
      darkToggleBtn.addEventListener("click", () => {
        setTimeout(() => {
          const dark = document.documentElement.classList.contains("dark");
          chart.updateOptions({
            theme: { mode: dark ? "dark" : "light" },
            tooltip: { theme: dark ? "dark" : "light" },
            xaxis: {
              labels: { style: { colors: dark ? "#9ca3af" : "#6b7280" } },
            },
            yaxis: {
              labels: { style: { colors: dark ? "#9ca3af" : "#6b7280" } },
            },
            grid: {
              borderColor: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
            },
          });
        }, 50);
      });
    }
  }

  // ---------- Table Search Filter ----------
  const tableSearch = document.querySelector("#tableSearch");
  if (tableSearch) {
    tableSearch.addEventListener("input", function () {
      const query = this.value.toLowerCase();
      const table = this.closest(".widget")?.querySelector("table");
      if (!table) return;
      table.querySelectorAll("tbody tr").forEach((row) => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(query) ? "" : "none";
      });
    });
  }

  // ---------- Select All Checkbox ----------
  const selectAll = document.querySelector("#selectAll");
  if (selectAll) {
    selectAll.addEventListener("change", function () {
      const checkboxes = this.closest("table").querySelectorAll(
        'tbody input[type="checkbox"]',
      );
      checkboxes.forEach((cb) => (cb.checked = this.checked));
    });
  }

  // ---------- Form Validation ----------
  const forms = document.querySelectorAll("form[data-validate]");
  forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;
      const inputs = form.querySelectorAll("[required]");
      inputs.forEach(function (input) {
        const error = input.parentElement.querySelector(".form-error");
        if (!input.value.trim()) {
          valid = false;
          input.classList.add("border-red-400");
          if (error) error.classList.remove("hidden");
        } else {
          input.classList.remove("border-red-400");
          if (error) error.classList.add("hidden");
        }
      });
      if (valid) {
        showToast("Changes saved successfully!", "success");
      }
    });
  });

  // ---------- Toast Notification ----------
  window.showToast = function (message, type = "success") {
    const toast = document.createElement("div");
    const colors = {
      success: "bg-primary",
      error: "bg-red-500",
      warning: "bg-secondary",
      info: "bg-primary",
    };
    toast.className = `fixed top-4 right-4 z-50 flex items-center gap-3 px-6 py-3 rounded-xl text-white font-medium shadow-2xl transform translate-x-full transition-transform duration-300 ${colors[type] || colors.success}`;
    toast.innerHTML = `<i class="fas fa-${type === "success" ? "check-circle" : type === "error" ? "times-circle" : type === "warning" ? "exclamation-triangle" : "info-circle"}"></i> ${message}`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => {
      toast.style.transform = "translateX(0)";
    });
    setTimeout(() => {
      toast.style.transform = "translateX(120%)";
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  };

  // ---------- Delete Confirmation ----------
  document.querySelectorAll("[data-delete]").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      if (confirm("Are you sure you want to delete this item?")) {
        const row = this.closest("tr");
        if (row) {
          row.style.opacity = "0";
          row.style.transform = "translateX(20px)";
          row.style.transition = "0.3s ease";
          setTimeout(() => row.remove(), 300);
          showToast("Item deleted successfully");
        }
      }
    });
  });
});
