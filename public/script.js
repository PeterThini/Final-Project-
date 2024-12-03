// Populate Subcounties based on County selection
// Data for counties and subcounties
const countyToSubcounties = {
    "Baringo": ["Baringo Central", "Baringo North", "Baringo South", "Mochongoi", "Tenges"],
    "Bomet": ["Bomet Central", "Bomet East", "Bomet West", "Chepalungu", "Konoin"],
    "Bungoma": ["Bungoma Central", "Bungoma South", "Bungoma North", "Kanduyi", "Tongaren"],
    // Add the rest of the counties and their subcounties here...
};

// Function to populate subcounties based on selected county
function populateSubcounties() {
    const countySelect = document.getElementById("county");
    const subcountySelect = document.getElementById("subcounty");

    // Clear existing subcounty options
    subcountySelect.innerHTML = '<option value="" selected disabled>Select Subcounty</option>';

    const county = countySelect.value;
    console.log('Selected County:', county);  // Debugging log

    // If a valid county is selected, populate subcounty dropdown
    if (county && countyToSubcounties[county]) {
        countyToSubcounties[county].forEach(function(subcounty) {
            const option = document.createElement("option");
            option.value = subcounty;
            option.textContent = subcounty;
            subcountySelect.appendChild(option);
        });
    } else {
        console.log('No subcounties found for the selected county.');
    }
}

// Event listener for county selection
document.getElementById("county").addEventListener("change", function() {
    console.log('County Changed');
    populateSubcounties();
});

// Function to populate wards based on selected subcounty
function populateWards() {
    const subcountySelect = document.getElementById("subcounty");
    const wardSelect = document.getElementById("ward");

    // Clear existing ward options
    wardSelect.innerHTML = '<option value="" selected disabled>Select Ward</option>';

    const subcounty = subcountySelect.value;
    console.log('Selected Subcounty:', subcounty);  // Debugging log

    // Assuming subcountyToWards is defined with wards for each subcounty
    if (subcounty && subcountyToWards[subcounty]) {
        subcountyToWards[subcounty].forEach(function(ward) {
            const option = document.createElement("option");
            option.value = ward;
            option.textContent = ward;
            wardSelect.appendChild(option);
        });
    } else {
        console.log('No wards found for the selected subcounty.');
    }
}

// Event listener for subcounty selection
document.getElementById("subcounty").addEventListener("change", function() {
    console.log('Subcounty Changed');
    populateWards();
});

const subcountyData = {
    "Baringo": ["Baringo Central", "Baringo North", "Baringo South", "Mochongoi", "Tenges"],
    "Bomet": ["Bomet Central", "Bomet East", "Bomet West", "Chepalungu", "Konoin"],
    "Bungoma": ["Bungoma Central", "Bungoma South", "Bungoma North", "Kanduyi", "Tongaren"],
    "Busia": ["Busia Township", "Matayos", "Bunyala", "Teso South", "Teso North"],
    "Elgeyo-Marakwet": ["Keiyo South", "Keiyo North", "Marakwet East", "Marakwet West", "Elgeyo North"],
    "Embu": ["Embu North", "Embu South", "Mbeere North", "Mbeere South"],
    "Garissa": ["Garissa Township", "Balambala", "Ijara", "Lagdera", "Fafi"],
    "Homa Bay": ["Homa Bay Town", "Ndhiwa", "Rachuonyo East", "Rachuonyo North", "Rachuonyo South", "Kisumu West"],
    "Isiolo": ["Isiolo Town", "Garbatulla", "Merti", "Oldonyiro"],
    "Kajiado": ["Kajiado Central", "Kajiado East", "Kajiado North", "Kajiado South", "Kajiado West"],
    "Kakamega": ["Kakamega Central", "Kakamega East", "Kakamega North", "Kakamega South", "Kakamega West", "Lurambi"],
    "Kericho": ["Kericho Town", "Ainamoi", "Buret", "Kipkelion East", "Kipkelion West", "Sotik"],
    "Kiambu": ["Kiambu Town", "Gikambura", "Kikuyu", "Kabete", "Lari", "Thika", "Ruiru", "Juja"],
    "Kilifi": ["Kilifi North", "Kilifi South", "Kaloleni", "Magarini", "Ganze", "Malindi"],
    "Kirinyaga": ["Kirinyaga Central", "Kirinyaga East", "Kirinyaga West", "Mwea"],
    "Kisii": ["Gucha", "Nyaribari Chache", "Nyaribari Masaba", "Bobasi", "Bomachoge", "Manga", "Kitutu Chache", "Masaba South"],
    "Kisumu": ["Kisumu East", "Kisumu West", "Kisumu Central", "Nyando", "Nyakach", "Seme"],
    "Kitui": ["Kitui South", "Kitui North", "Kitui West", "Mwingi Central", "Mwingi North", "Mwingi West"],
    "Kwale": ["Kwale Town", "Kinango", "Lunga Lunga", "Matuga", "Msambweni"],
    "Laikipia": ["Laikipia East", "Laikipia North", "Laikipia West"],
    "Lamu": ["Lamu East", "Lamu West", "Mpeketoni", "Witu"],
    "Machakos": ["Machakos Town", "Masinga", "Kangundo", "Matungulu", "Mavoko", "Yatta", "Kangundo", "Matuu"],
    "Makueni": ["Makueni Town", "Kangundo", "Matungulu", "Mavoko", "Yatta"],
    "Mandera": ["Mandera East", "Mandera North", "Mandera South", "Banisa", "Lafey"],
    "Marsabit": ["Marsabit Central", "Moyale", "North Horr", "Saku"],
    "Meru": ["Meru Town", "Imenti North", "Imenti South", "Tigania East", "Tigania West", "Buuri", "Igembe North", "Igembe South"],
    "Migori": ["Migori Town", "Rongo", "Awendo", "Kuria West", "Kuria East", "Nyatike"],
    "Mombasa": ["Mombasa Town", "Likoni", "Mvita", "Changamwe", "Jomvu", "Kisauni"],
    "Murang'a": ["Murang'a Town", "Kangema", "Kiharu", "Mathioya", "Kandara", "Maragua"],
    "Nairobi": ["Nairobi Central", "Westlands", "Starehe", "Lang'ata", "Dagoreti North", "Dagoreti South", "Kasarani", "Embakasi", "Njiru", "Ruai", "Kamukunji", "Makadara", "Pangani"],
    "Nakuru": ["Nakuru Town", "Njoro", "Kuresoi North", "Kuresoi South", "Gilgil", "Naivasha", "Molo", "Subukia", "Rongai", "Bahati", "Lanet", "Kabarak", "Nakuru South"],
    "Nandi": ["Nandi Hills", "Chesumei", "Aldai", "Emgwen", "Mosop"],
    "Narok": ["Narok North", "Narok East", "Narok West", "Transmara East", "Transmara West"],
    "Nyamira": ["Nyamira Town", "Borabu", "Manga", "Nyamira South", "Nyamira East"],
    "Nyandarua": ["Nyandarua Central", "Nyandarua North", "Nyandarua South", "Ol Kalou", "Karatina"],
    "Nyeri": ["Nyeri Town", "Nyeri Central", "Nyeri East", "Nyeri West", "Mathira", "Kieni"],
    "Samburu": ["Samburu East", "Samburu North", "Samburu West"],
    "Siaya": ["Siaya Town", "Bondo", "Ugenya", "Ugunja", "Rarieda"],
    "Taita-Taveta": ["Taveta", "Voi", "Mwatate", "Wundanyi", "Taita"],
    "Tana River": ["Tana River North", "Tana River South", "Tana Delta"],
    "Tharaka-Nithi": ["Chuka", "Igoji", "Maara", "Tharaka"],
    "Trans-Nzoia": ["Kitale", "Saboti", "Kwanza", "Endebess", "Trans-Nzoia East", "Trans-Nzoia West"],
    "Turkana": ["Turkana Central", "Turkana East", "Turkana North", "Turkana South", "Turkana West", "Turkana South"],
    "Uasin Gishu": ["Eldoret North", "Eldoret South", "Kapseret", "Ziwa", "Moiben", "Kesses"],
    "Vihiga": ["Vihiga Town", "Sabatia", "Hamisi", "Luanda", "Wamuluma"],
    "Wajir": ["Wajir Town", "Wajir East", "Wajir North", "Wajir South", "Wajir West"],
    "West Pokot": ["Pokot Central", "Pokot North", "Pokot South", "Kapenguria", "Kacheliba"]
};


function populateSubCounties() {
    const countySelect = document.getElementById("county");
    const subcountySelect = document.getElementById("subcounty");
    
    // Clear existing subcounty options
    subcountySelect.innerHTML = '<option value="" selected disabled>Select Subcounty</option>';
    
    const county = countySelect.value;
    
    // If a valid county is selected, populate subcounty dropdown
    if (county && countyToSubcounties[county]) {
        countyToSubcounties[county].forEach(function(subcounty) {
            const option = document.createElement("option");
            option.value = subcounty;
            option.textContent = subcounty;
            subcountySelect.appendChild(option);
        });
    }
}


    // Subcounties and their respective wards
    const subcountyToWards = {
        "Baringo Central": ["Kabarak", "Kabarnet Town", "Rongai"],
        "Baringo North": ["Barpello", "Baringo North Town", "Churo"],
        "Bomet Central": ["Bomet Town", "Cheplanget", "Tegat"],
        "Bomet East": ["Cheptalal", "Chepyuk", "Kapletundo"],
        "Bungoma": ["Bumula", "Kabuchai", "Kanduyi", "Kimilili", "Mt Elgon", "Sirisia", "Tongaren", "Webuye East", "Webuye West"],
        "Busia": ["Budalangi", "Butula", "Funyula", "Nambele", "Teso North", "Teso South"],
        "Elgeyo-Marakwet": ["Keiyo North", "Keiyo South", "Marakwet East", "Marakwet West"],
        "Embu": ["Manyatta", "Mbeere North", "Mbeere South", "Runyenjes"],
        "Garissa": ["Daadab", "Fafi", "Garissa Township", "Hulugho", "Ijara", "Lagdera", "Balambala"],
        "Homa Bay": ["Homabay Town", "Kabondo", "Karachwonyo", "Kasipul", "Mbita", "Ndhiwa", "Rangwe", "Suba"],
        "Isiolo": ["Isiolo", "Merti", "Garbatulla"],
        "Kajiado": ["Kajiado North", "Kajiado East", "Kajiado West", "Kajiado Central", "Loitokitok", "Magadi"],
        "Kakamega": ["Butere", "Khwisero", "Lurambi", "Malava", "Mumias East", "Mumias West", "Navakholo", "Shinyalu", "Tongaren", "Vihiga"],
        "Kericho": ["Ainamoi", "Belgut", "Bureti", "Kapsoit", "Kipkelion", "Sotik"],
        "Kiambu": ["Gatundu North", "Gatundu South", "Kiambaa", "Kikuyu", "Lari", "Limuru", "Ruiru", "Thika", "Kiambu Town"],
        "Kilifi": ["Kilifi North", "Kilifi South", "Malindi", "Gede", "Garsen", "Ribe", "Bahari"],
        "Kirinyaga": ["Gichugu", "Kutus", "Mwea", "Kerugoya", "Kianyaga"],
        "Kisii": ["Gucha", "Bomachoge", "Bobasi", "Nyaribari", "Migori", "Masaba", "Kenya"],
        "Kisumu": ["Kisumu East", "Kisumu West", "Nyando", "Nyakach", "Seme", "Muhoroni", "Kisumu Central"],
        "Kitui": ["Kitui Central", "Kitui East", "Kitui South", "Kitui West", "Mwingi East", "Mwingi North", "Mwingi West"],
        "Kwale": ["Matuga", "Kinango", "Lungalunga", "Msambweni"],
        "Laikipia": ["Laikipia East", "Laikipia West", "Laikipia North", "Nyahururu", "Nanyuki"],
        "Lamu": ["Lamu West", "Lamu East", "Lamu Central", "Faza"],
        "Machakos": ["Machakos Town", "Mavoko", "Athi River", "Mwala", "Kangundo", "Matungulu"],
        "Makueni": ["Makueni", "Kangundo", "Mbooni", "Makueni West", "Kilungu", "Makindu", "Kaiti"],
        "Mandera": ["Mandera East", "Mandera North", "Mandera South", "Mandera Town"],
        "Marsabit": ["Marsabit Central", "Moyale", "Laisamis", "North Horr", "Saku"],
        "Meru": ["Imenti North", "Imenti Central", "Imenti South", "Tigania East", "Tigania West", "Buuri", "Central", "Kiegoi"],
        "Migori": ["Rongo", "Migori", "Kuria East", "Kuria West", "Nyatike", "Suna East", "Suna West"],
        "Mombasa": ["Mombasa Island", "Mvita", "Nyali", "Kisauni", "Changamwe", "Jomvu", "Likoni", "Shimanzi"],
        "Murang'a": ["Murang'a Town", "Kiharu", "Kangema", "Kahuro", "Maragua", "Mathioya"],
        "Nairobi": ["Westlands", "Starehe", "Lang'ata", "Kamukunji", "Kasarani", "Roysambu", "Njiru", "Embakasi", "Juja", "Mathare", "Dagoreti", "Makadara", "Pangani"],
        "Nakuru": ["Nakuru Town", "Njoro", "Molo", "Subukia", "Gilgil", "Naivasha", "Bahati"],
        "Nandi": ["Nandi Hills", "Chesumei", "Ainabkoi", "Alderstone", "Kaptumo", "Mosop", "Tinderet"],
        "Narok": ["Narok East", "Narok South", "Narok West", "Transmara", "Ngong", "Oloitoktok"],
        "Nyamira": ["Nyamira", "Manga", "Bokeira", "Gucha", "Masaba", "Bomachoge", "Rongai"],
        "Nyandarua": ["Ol Kalou", "Nyahururu", "Karatina", "Ruiru", "Kiganjo", "Naro Moru"],
        "Nyeri": ["Nyeri Town", "Kieni", "Othaya", "Tetu", "Mathira", "Mukurwe-ini", "Chinga", "Karatina"],
        "Samburu": ["Samburu North", "Samburu South", "Samburu Central", "Maralal", "Baragoi"],
        "Siaya": ["Bondo", "Ugenya", "Ugunja", "Rarieda", "Gem", "Suna", "Yala"],
        "Taita-Taveta": ["Taveta", "Voi", "Mwatate", "Wundanyi", "Bura"],
        "Tana River": ["Tana Delta", "Bura", "Garsen", "Tana North", "Tana South"],
        "Tharaka-Nithi": ["Chuka", "Maara", "Tharaka", "Igembe", "Meru South"],
        "Trans-Nzoia": ["Kiminini", "Endebess", "Saboti", "Trans-Nzoia", "Kwanza", "Wabukhoni"],
        "Turkana": ["Turkana South", "Turkana West", "Turkana North", "Turkana Central", "Loima", "Lokichoggio", "Kainuk", "Kalapata"],
        "Uasin Gishu": ["Kesses", "Turbo", "Moi University", "Ainabkoi", "Langas", "Ngeria"],
        "Vihiga": ["Vihiga", "Sabatia", "Emuhaya", "Luanda", "Mbale", "Kakamega"],
        "Wajir": ["Wajir East", "Wajir South", "Wajir North", "Wajir West", "Tarbaj", "Bute", "Habaswein"],
        "West Pokot": ["West Pokot", "Kapenguria", "Makutano", "Kacheliba", "Koitaleel", "Sigor"]
    };

// Function to populate the subcounties based on the selected county
function populateSubCounties() 
{
    const countySelect = document.getElementById("county");
    const subcountySelect = document.getElementById("subcounty");

    // Clear existing subcounty options
    subcountySelect.innerHTML = '<option value="" selected disabled>Select Subcounty</option>';

    const county = countySelect.value;

    // If a valid county is selected, populate subcounty dropdown
    if (county && countyToSubcounties[county]) {
        countyToSubcounties[county].forEach(function(subcounty) {
            const option = document.createElement("option");
            option.value = subcounty;
            option.textContent = subcounty;
            subcountySelect.appendChild(option);
        });
    }
}

// Event listener to populate subcounties when a county is selected
document.getElementById("county").addEventListener("change", function() {
    populateSubCounties();
    // Reset ward options when a new county is selected
    document.getElementById("ward").innerHTML = '<option value="" selected disabled>Select Ward</option>';
});

// Event listener to populate wards when a subcounty is selected
document.getElementById("subcounty").addEventListener("change", function() {
    populateWards();
});

// Example script.js
console.log("Script is working!");

// Add more interactivity if needed
document.querySelector('.cta-button').addEventListener('click', function() {
  alert("CTA button clicked!");
});



// Form Validation
function validateRegistrationForm() {
    alert('Registration successful!');
    return true;
}

function validateLoginForm() {
    alert('Login successful!');
    return true;
}


document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/weather');
        const weatherData = await response.json();
        
        // Ensure the DOM elements exist before updating
        if (weatherData) {
          document.getElementById('location').innerText = weatherData.location;
          document.getElementById('temperature').innerText = weatherData.temperature + '°C';
          document.getElementById('humidity').innerText = weatherData.humidity + '%';
          document.getElementById('wind-speed').innerText = weatherData.windSpeed + ' m/s';
          
          // You can add mock or additional weather data here as needed
          document.getElementById('rainfall').innerText = '10 mm'; // Example rainfall data
          document.getElementById('forecast-data').innerText = 'Sunny with chances of rain'; // Example forecast data
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
  });
  document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/weather');  // Fetch data from the server
        const weatherData = await response.json();
  
        // Ensure the DOM elements exist before updating
        if (weatherData) {
          document.getElementById('location').innerText = weatherData.location;
          document.getElementById('temperature').innerText = weatherData.temperature + '°C';
          document.getElementById('humidity').innerText = weatherData.humidity + '%';
          document.getElementById('wind-speed').innerText = weatherData.windSpeed + ' m/s';
          
          // You can add mock or additional weather data here as needed
          document.getElementById('rainfall').innerText = '10 mm'; // Example rainfall data
          document.getElementById('forecast-data').innerText = 'Sunny with chances of rain'; // Example forecast data
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
  });
  