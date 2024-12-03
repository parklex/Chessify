// ==== Profile Dropdown ====
function toggleDropdown() {
    var dropdown = document.getElementById('dropdownMenu');
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

// ==== XP Bar ====
let currentXP = 0;
let totalXP = 100;
let level = 1;


function updateXPBar() {
    let xpProgress = (currentXP / totalXP) * 100;
    document.querySelector('.xp-progress').style.width = xpProgress + '%';
    document.querySelector('.xp-text').textContent = currentXP + '/' + totalXP + ' XP';
    document.querySelector('.level').textContent = 'Level: ' + level;
}

// ==== Adding XP and Leveling Up ====
function addXP(amount) {
    currentXP += amount;
    while (currentXP >= totalXP) {
        currentXP -= totalXP; 
        level++; 
        totalXP = Math.floor( 100 + (Math.pow(level,2)) * 2);   // Increase the XP required for the next level
    }
    updateXPBar();
}


updateXPBar();

// ==== DEBUG  ====

