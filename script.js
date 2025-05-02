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
  "Faith comes from hearing, and hearing through the word of Christ. – Romans 10:17",
  "Do not let your hearts be troubled. – John 14:1",
  "I am the good shepherd. The good shepherd lays down his life for the sheep. – John 10:11",
  "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness. – Galatians 5:22",
  "And we know that in all things God works for the good of those who love him, who have been called according to his purpose. – Romans 8:28",
  "The Lord is near to the brokenhearted and saves the crushed in spirit. – Psalm 34:18",
  "But the Lord stood by me and gave me strength. – 2 Timothy 4:17",
  "I have come that they may have life, and have it to the full. – John 10:10",
  "But those who hope in the Lord will renew their strength. – Isaiah 40:31",
  "No weapon forged against you will prevail. – Isaiah 54:17",
  "The Lord is my strength and my defense; he has become my salvation. – Exodus 15:2",
  "I can do all this through him who gives me strength. – Philippians 4:13",
  "The Lord is my light and my salvation—whom shall I fear? – Psalm 27:1",
  "The Lord will fight for you; you need only to be still. – Exodus 14:14",
  "Do not be afraid, for I am with you. – Isaiah 43:5",
  "And we know that in all things God works for the good of those who love him. – Romans 8:28",
  "For God so loved the world that he gave his one and only Son. – John 3:16",
  "The Lord is good and his love endures forever. – Psalm 100:5",
  "The Lord is my shepherd; I lack nothing. – Psalm 23:1",
  "You will keep in perfect peace those whose minds are steadfast, because they trust in you. – Isaiah 26:3",
  "Cast all your anxiety on him because he cares for you. – 1 Peter 5:7",
  "Do not be overcome by evil, but overcome evil with good. – Romans 12:21",
  "And we know that in all things God works for the good of those who love him. – Romans 8:28",
  "The Lord is my light and my salvation—whom shall I fear? – Psalm 27:1",
  "Peace I leave with you; my peace I give you. – John 14:27",
  "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness. – Galatians 5:22",
  "Let everything that has breath praise the Lord. – Psalm 150:6",
  "The Lord will fight for you; you need only to be still. – Exodus 14:14",
  "Do not be afraid, for I am with you. – Isaiah 43:5",
  "And we know that in all things God works for the good of those who love him. – Romans 8:28",
  "The Lord is near to the brokenhearted and saves the crushed in spirit. – Psalm 34:18",
  "For I know the plans I have for you, declares the Lord. – Jeremiah 29:11",
  "We love because he first loved us. – 1 John 4:19",
  "I am the way, the truth, and the life. – John 14:6",
  "God is within her, she will not fall. – Psalm 46:5",
  "My grace is sufficient for you. – 2 Corinthians 12:9",
  "You are the light of the world. – Matthew 5:14",
  "But those who hope in the Lord will renew their strength. – Isaiah 40:31",
  "Do not be afraid, for I am with you. – Isaiah 41:10",
  "The Lord is my shepherd; I shall not want. – Psalm 23:1",
  "The Lord is my light and my salvation—whom shall I fear? – Psalm 27:1",
  "For God so loved the world that he gave his one and only Son. – John 3:16",
  "Let everything that has breath praise the Lord. – Psalm 150:6",
  "Cast your cares on the Lord and he will sustain you. – Psalm 55:22",
  "The Lord is my light and my salvation—whom shall I fear? – Psalm 27:1",
  "For I know the plans I have for you, declares the Lord. – Jeremiah 29:11",
  "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness. – Galatians 5:22",
  "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. – Philippians 4:6",
  "For I know the plans I have for you, declares the Lord. – Jeremiah 29:11",
  "The Lord is near to the brokenhearted and saves the crushed in spirit. – Psalm 34:18",
  "In the beginning God created the heavens and the earth. – Genesis 1:1",
  "But those who hope in the Lord will renew their strength. – Isaiah 40:31",
  "The Lord is my shepherd; I shall not want. – Psalm 23:1",
  "Do not be afraid, for I am with you. – Isaiah 43:5",
  "And we know that in all things God works for the good of those who love him. – Romans 8:28",
  "The joy of the Lord is your strength. – Nehemiah 8:10",
  "God is within her, she will not fall. – Psalm 46:5",
  "The Lord is my light and my salvation—whom shall I fear? – Psalm 27:1",
  "Do not be anxious about anything. – Philippians 4:6",
  "Let all that you do be done in love. – 1 Corinthians 16:14",
  "Your word is a lamp to my feet and a light to my path. – Psalm 119:105",
  "The Lord is my strength and my defense; he has become my salvation. – Exodus 15:2",
  "Be strong and courageous. Do not be afraid. – Joshua 1:9",
  "With God all things are possible. – Matthew 19:26",
  "I can do all things through Christ who strengthens me. – Philippians 4:13",
  "Trust in the Lord with all your heart. – Proverbs 3:5",
  "The name of the Lord is a strong tower. – Proverbs 18:10",
  "For I know the plans I have for you, declares the Lord. – Jeremiah 29:11",
  "My grace is sufficient for you. – 2 Corinthians 12:9",
  "Faith comes from hearing, and hearing through the word of Christ. – Romans 10:17",
  "Blessed are the peacemakers. – Matthew 5:9",
  "I am the good shepherd. The good shepherd lays down his life for the sheep. – John 10:11",
  "Even though I walk through the valley of the shadow of death, I will fear no evil. – Psalm 23:4",
  "The Lord is my light and my salvation—whom shall I fear? – Psalm 27:1",
  "Do not be afraid, for I am with you. – Isaiah 43:5",
  "The joy of the Lord is your strength. – Nehemiah 8:10",
  "And we know that in all things God works for the good of those who love him. – Romans 8:28",
  "The Lord is near to the brokenhearted and saves the crushed in spirit. – Psalm 34:18",
  "For I know the plans I have for you, declares the Lord. – Jeremiah 29:11"
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
