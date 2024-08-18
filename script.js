let balance = 0;
let level = 1;
let perClickCoins = 1;
let dailyLimit = 1000;
let earnedToday = 0;
let botBought = false;

// Click event for coin
document.getElementById('coin').addEventListener('click', function() {
    if (earnedToday < dailyLimit) {
        balance += perClickCoins;
        earnedToday += perClickCoins;
        document.getElementById('balance').textContent = balance;
    } else {
        alert("Daily limit reached!");
    }
});

// Task button to open modal
document.getElementById('tasks').addEventListener('click', function() {
    document.getElementById('task-modal').style.display = "block";
});

// Boost button to open modal
document.getElementById('boost').addEventListener('click', function() {
    document.getElementById('boost-modal').style.display = "block";
});

// Withdrawal button
document.getElementById('withdrawal').addEventListener('click', function() {
    alert("Coin listed on October 25, 2024");
});

// Close modals
let modals = document.getElementsByClassName('close');
for (let i = 0; i < modals.length; i++) {
    modals[i].addEventListener('click', function() {
        this.parentElement.parentElement.style.display = 'none';
    });
}

// Claim reward for joining channel
document.getElementById('claim-reward').addEventListener('click', function() {
    if (!botBought) {
        balance += 1000;
        document.getElementById('balance').textContent = balance;
        document.getElementById('task-modal').style.display = "none";
        alert("1000 coins added for joining the channel!");
    } else {
        alert("Daily reward already claimed!");
    }
});

// Upgrade level
document.getElementById('upgrade').addEventListener('click', function() {
    let upgradeCost = level * 500;
    if (balance >= upgradeCost) {
        balance -= upgradeCost;
        level++;
        perClickCoins++;
        document.getElementById('balance').textContent = balance;
        document.getElementById('level').textContent = level;
        document.getElementById('upgrade-cost').textContent = level * 500;
        alert("Level upgraded!");
    } else {
        alert("Not enough coins to upgrade!");
    }
});

// Upgrade daily limit
document.getElementById('upgrade-limit').addEventListener('click', function() {
    let limitUpgradeCost = dailyLimit * 1.5;
    if (balance >= limitUpgradeCost) {
        balance -= limitUpgradeCost;
        dailyLimit += 1000;
        document.getElementById('balance').textContent = balance;
        document.getElementById('limit').textContent = dailyLimit;
        document.getElementById('limit-cost').textContent = dailyLimit * 1.5;
        alert("Daily limit upgraded!");
    } else {
        alert("Not enough coins to upgrade the daily limit!");
    }
});

// Buy bot
document.getElementById('buy-bot').addEventListener('click', function() {
    if (balance >= 5000) {
        balance -= 5000;
        botBought = true;
        document.getElementById('balance').textContent = balance;
        alert("Bot purchased! You will receive 1500 coins daily.");
    } else {
        alert("Not enough coins to buy the bot!");
    }
});

// Claim daily coins from bot
document.getElementById('claim-bot').addEventListener('click', function() {
    if (botBought) {
        balance += 1500;
        document.getElementById('balance').textContent = balance;
        alert("1500 coins added to your account!");
    } else {
        alert("You need to buy the bot first!");
    }
});
