document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;

    themeSwitch.addEventListener('change', function() {
        body.classList.toggle('dark-mode', this.checked);
    });
});

$(".wrapper").click(function () {
    $(".wrapper").removeClass("active");
    $(this).addClass("active");
  });

  function showTooltip() {
    tooltip.style.display = 'block';
}

// Function to hide tooltip
function hideTooltip() {
    tooltip.style.display = 'none';
}

// Event listeners for dark mode toggle and tooltip
darkModeTooltip.addEventListener('click', toggleDarkMode);
darkModeTooltip.addEventListener('mouseover', showTooltip);
darkModeTooltip.addEventListener('mouseout', hideTooltip);
