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
  "I am the good shepherd. The good shepherd lays down his life for the sheep. – John 10:11",
  "Even though I walk through the valley of the shadow of death, I will fear no evil. – Psalm 23:4",
  "The Lord is my light and my salvation—whom shall I fear? – Psalm 27:1",
  "Do not be afraid, for I am with you. – Isaiah 43:5",
  "The joy of the Lord is your strength. – Nehemiah 8:10",
  "And we know that in all things God works for the good of those who love him. – Romans 8:28",
  "The Lord is near to the brokenhearted and saves the crushed in spirit. – Psalm 34:18",
  "For I know the plans I have for you, declares the Lord. – Jeremiah 29:11",
  "God is our refuge and strength, an ever-present help in trouble. – Psalm 46:1",
  "He gives strength to the weary and increases the power of the weak. – Isaiah 40:29",
  "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness. – Galatians 5:22",
  "But the Lord stood with me and gave me strength. – 2 Timothy 4:17",
  "Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken. – Psalm 55:22",
  "So do not fear, for I am with you; do not be dismayed, for I am your God. – Isaiah 41:10",
  "You are my hiding place; you will protect me from trouble and surround me with songs of deliverance. – Psalm 32:7",
  "And we know that in all things God works for the good of those who love him, who have been called according to his purpose. – Romans 8:28",
  "The Lord is good to those whose hope is in him, to the one who seeks him. – Lamentations 3:25",
  "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven. – Matthew 5:16",
  "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint. – Isaiah 40:31",
  "The Lord is my shepherd; I lack nothing. – Psalm 23:1",
  "I can do all this through him who gives me strength. – Philippians 4:13",
  "For God gave us a spirit not of fear but of power and love and self-control. – 2 Timothy 1:7",
  "He will cover you with his feathers, and under his wings you will find refuge; his faithfulness will be your shield and rampart. – Psalm 91:4",
  "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus. – Philippians 4:7",
  "The Lord will fight for you; you need only to be still. – Exodus 14:14",
  "God is our refuge and strength, an ever-present help in trouble. – Psalm 46:1",
  "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness. – Galatians 5:22",
  "Be still, and know that I am God. – Psalm 46:10",
  "The Lord is my shepherd, I shall not want. – Psalm 23:1",
  "I will never leave you nor forsake you. – Hebrews 13:5",
  "You are more than a conqueror through him who loved us. – Romans 8:37",
  "Therefore encourage one another and build each other up, just as in fact you are doing. – 1 Thessalonians 5:11",
  "The Lord is my shepherd, I shall not want. – Psalm 23:1",
  "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. – Philippians 4:6",
  "But the one who stands firm to the end will be saved. – Matthew 24:13",
  "Your word is a lamp to my feet and a light to my path. – Psalm 119:105",
  "Blessed is she who has believed that the Lord would fulfill his promises to her. – Luke 1:45",
  "The Lord is my strength and my shield; my heart trusts in him, and he helps me. – Psalm 28:7",
  "The Lord gives strength to his people; the Lord blesses his people with peace. – Psalm 29:11",
  "But the Lord is faithful, and he will strengthen you and protect you from the evil one. – 2 Thessalonians 3:3",
  "Do not fear, for I have redeemed you; I have summoned you by name; you are mine. – Isaiah 43:1",
  "Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you. – Deuteronomy 31:6",
  "God is within her, she will not fall. – Psalm 46:5",
  "Trust in the Lord with all your heart and lean not on your own understanding. – Proverbs 3:5",
  "The Lord is near to the brokenhearted and saves the crushed in spirit. – Psalm 34:18",
  "But those who hope in the Lord will renew their strength. – Isaiah 40:31",
  "The Lord will fight for you; you need only to be still. – Exodus 14:14",
  "But the Lord stood with me and gave me strength. – 2 Timothy 4:17",
  "Do not fear, for I am with you. – Isaiah 43:5",
  "The Lord is my light and my salvation—whom shall I fear? – Psalm 27:1",
  "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go. – Joshua 1:9",
  "I have told you these things, so that in me you may have peace. In this world, you will have trouble. But take heart! I have overcome the world. – John 16:33",
  "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up. – Galatians 6:9",
  "And we know that in all things God works for the good of those who love him, who have been called according to his purpose. – Romans 8:28",
  "You are the light of the world. A town built on a hill cannot be hidden. – Matthew 5:14",
  "For the Spirit God gave us does not make us timid, but gives us power, love, and self-discipline. – 2 Timothy 1:7",
  "I will give you a new heart and put a new spirit in you. – Ezekiel 36:26",
  "We are more than conquerors through him who loved us. – Romans 8:37",
  "The Lord is my light and my salvation—whom shall I fear? – Psalm 27:1",
  "No weapon forged against you will prevail, and you will refute every tongue that accuses you. – Isaiah 54:17",
  "Therefore encourage one another and build each other up. – 1 Thessalonians 5:11",
  "The Lord is close to the brokenhearted and saves those who are crushed in spirit. – Psalm 34:18",
  "We can do all things through Christ who strengthens us. – Philippians 4:13"
  const quotes = [
  "The Lord is my shepherd; I shall not want. – Psalm 23:1",
  "For I know the plans I have for you, declares the Lord. – Jeremiah 29:11",
  "I can do all things through Christ who strengthens me. – Philippians 4:13",
  "With God all things are possible. – Matthew 19:26",
  "Be strong and courageous. Do not be afraid or discouraged. – Joshua 1:9",
  "Let all that you do be done in love. – 1 Corinthians 16:14",
  "The joy of the Lord is your strength. – Nehemiah 8:10",
  "God is within her, she will not fall. – Psalm 46:5",
  "The Lord is my light and my salvation; whom shall I fear? – Psalm 27:1",
  "He gives strength to the weary and increases the power of the weak. – Isaiah 40:29",
  "Trust in the Lord with all your heart and lean not on your own understanding. – Proverbs 3:5",
  "I have fought the good fight, I have finished the race, I have kept the faith. – 2 Timothy 4:7",
  "Blessed is she who has believed that the Lord would fulfill his promises to her. – Luke 1:45",
  "The Lord will fight for you; you need only to be still. – Exodus 14:14",
  "Cast all your anxiety on him because he cares for you. – 1 Peter 5:7",
  "For God did not give us a spirit of timidity, but a spirit of power, of love and of self-discipline. – 2 Timothy 1:7",
  "The righteous cry out, and the Lord hears them; he delivers them from all their troubles. – Psalm 34:17",
  "For we are God’s workmanship, created in Christ Jesus to do good works, which God prepared in advance for us to do. – Ephesians 2:10",
  "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness, and self-control. – Galatians 5:22-23",
  "We are more than conquerors through him who loved us. – Romans 8:37",
  "The Lord is close to the brokenhearted and saves those who are crushed in spirit. – Psalm 34:18",
  "If God is for us, who can be against us? – Romans 8:31",
  "But those who hope in the Lord will renew their strength. – Isaiah 40:31",
  "Do not be afraid, for I am with you. – Isaiah 43:5",
  "The name of the Lord is a strong tower; the righteous run to it and are safe. – Proverbs 18:10",
  "I will never leave you nor forsake you. – Hebrews 13:5",
  "The Lord makes firm the steps of the one who delights in him. – Psalm 37:23",
  "I will strengthen you and help you; I will uphold you with my righteous right hand. – Isaiah 41:10",
  "Rejoice in the Lord always. I will say it again: Rejoice! – Philippians 4:4",
  "The Lord is my strength and my shield; my heart trusts in him, and he helps me. – Psalm 28:7",
  "If any of you lacks wisdom, let him ask of God, who gives to all liberally and without reproach. – James 1:5",
  "But the Lord stood at my side and gave me strength. – 2 Timothy 4:17",
  "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline. – 2 Timothy 1:7",
  "Let us run with perseverance the race marked out for us. – Hebrews 12:1",
  "And we know that in all things God works for the good of those who love him, who have been called according to his purpose. – Romans 8:28",
  "You are the light of the world. A town built on a hill cannot be hidden. – Matthew 5:14",
  "For I know the plans I have for you, declares the Lord. – Jeremiah 29:11",
  "I will give you a new heart and put a new spirit in you. – Ezekiel 36:26",
  "We are more than conquerors through him who loved us. – Romans 8:37",
  "The Lord is my light and my salvation—whom shall I fear? – Psalm 27:1",
  "No weapon forged against you will prevail, and you will refute every tongue that accuses you. – Isaiah 54:17",
  "Therefore encourage one another and build each other up. – 1 Thessalonians 5:11",
  "The Lord is close to the brokenhearted and saves those who are crushed in spirit. – Psalm 34:18",
  "We can do all things through Christ who strengthens us. – Philippians 4:13",
  "The Lord is my shepherd; I shall not want. – Psalm 23:1",
  "The Lord is my light and my salvation—whom shall I fear? – Psalm 27:1",
  "The joy of the Lord is your strength. – Nehemiah 8:10",
  "He will cover you with his feathers, and under his wings you will find refuge. – Psalm 91:4",
  "And God is able to bless you abundantly, so that in all things at all times, having all that you need, you will abound in every good work. – 2 Corinthians 9:8",
  "The Lord is my shepherd, I lack nothing. – Psalm 23:1",
  "Blessed are the peacemakers, for they will be called children of God. – Matthew 5:9",
  "You are a chosen people, a royal priesthood, a holy nation, God’s special possession. – 1 Peter 2:9",
  "Do not be afraid of them; the Lord your God himself will fight for you. – Deuteronomy 3:22",
  "But the Lord stood at my side and gave me strength. – 2 Timothy 4:17",
  "The Lord is my shepherd, I shall not want. – Psalm 23:1",
  "And we know that in all things God works for the good of those who love him, who have been called according to his purpose. – Romans 8:28",
  "You are the light of the world. A town built on a hill cannot be hidden. – Matthew 5:14",
  "For the Spirit God gave us does not make us timid, but gives us power, love, and self-discipline. – 2 Timothy 1:7",
  "I will give you a new heart and put a new spirit in you. – Ezekiel 36:26",
  "We are more than conquerors through him who loved us. – Romans 8:37",
  "The Lord is my light and my salvation—whom shall I fear? – Psalm 27:1",
  "No weapon forged against you will prevail, and you will refute every tongue that accuses you. – Isaiah 54:17",
  "Therefore encourage one another and build each other up. – 1 Thessalonians 5:11",
  "The Lord is close to the brokenhearted and saves those who are crushed in spirit. – Psalm 34:18",
  "We can do all things through Christ who strengthens us. – Philippians 4:13"  
 
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
