const quotes = [
  "I can do all things through Christ who strengthens me. – Philippians 4:13",
  "For I know the plans I have for you, declares the Lord. – Jeremiah 29:11",
  "The Lord is my shepherd; I shall not want. – Psalm 23:1",
  "Be strong and courageous. Do not be afraid. – Joshua 1:9",
  "With God all things are possible. – Matthew 19:26",
  "Let all that you do be done in love. – 1 Corinthians 16:14",
  "God is within her, she will not fall. – Psalm 46:5",
  "The joy of the Lord is your strength. – Nehemiah 8:10",
  "Trust in the Lord with all your heart. – Proverbs 3:5",
  "You are fearfully and wonderfully made. – Psalm 139:14",
  "Cast all your anxiety on Him because He cares for you. – 1 Peter 5:7",
  "Do not be anxious about anything. – Philippians 4:6",
  "Love is patient, love is kind. – 1 Corinthians 13:4",
  "In the beginning God created the heavens and the earth. – Genesis 1:1",
  "Jesus Christ is the same yesterday and today and forever. – Hebrews 13:8",
  "Blessed are the peacemakers. – Matthew 5:9",
  "Your word is a lamp to my feet and a light to my path. – Psalm 119:105",
  "The Lord is my light and my salvation—whom shall I fear? – Psalm 27:1",
  "If God is for us, who can be against us? – Romans 8:31",
  "Even though I walk through the valley, I will fear no evil. – Psalm 23:4",
  "The steadfast love of the Lord never ceases. – Lamentations 3:22",
  "Rejoice in the Lord always. – Philippians 4:4",
  "Delight yourself in the Lord, and he will give you the desires of your heart. – Psalm 37:4",
  "My grace is sufficient for you. – 2 Corinthians 12:9",
  "I am the way, and the truth, and the life. – John 14:6",
  "Create in me a clean heart, O God. – Psalm 51:10",
  "He must increase, but I must decrease. – John 3:30",
  "The name of the Lord is a strong tower. – Proverbs 18:10",
  "We love because he first loved us. – 1 John 4:19",
  "Faith comes from hearing, and hearing through the word of Christ. – Romans 10:17"
];

function getDailyQuote() {
  const day = new Date().getDate();
  return quotes[day % quotes.length];
}

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}

function toggleReminder() {
  const btn = document.getElementById('reminderBtn');
  const isEnabled = localStorage.getItem('dailyReminder') === 'true';

  if (isEnabled) {
    localStorage.setItem('dailyReminder', 'false');
    btn.classList.remove('enabled');
    btn.textContent = '🔔 Enable Daily Reminder';
  } else {
    localStorage.setItem('dailyReminder', 'true');
    btn.classList.add('enabled');
    btn.textContent = '🔕 Disable Daily Reminder';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("quote").textContent = getDailyQuote();

  const btn = document.getElementById('reminderBtn');
  const isEnabled = localStorage.getItem('dailyReminder') === 'true';

  if (isEnabled) {
    btn.classList.add('enabled');
    btn.textContent = '🔕 Disable Daily Reminder';
  }
});
