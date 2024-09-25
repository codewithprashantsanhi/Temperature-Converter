document.getElementById('convert-btn').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;

    if (isNaN(temperature)) {
        alert('Please enter a valid temperature value.');
        return;
    }

    let result;
    switch (fromUnit) {
        case 'celsius':
            result = convertCelsius(temperature, toUnit);
            break;
        case 'fahrenheit':
            result = convertFahrenheit(temperature, toUnit);
            break;
        case 'kelvin':
            result = convertKelvin(temperature, toUnit);
            break;
    }

    document.getElementById('result-temperature').value = result.toFixed(2);
});

function convertCelsius(celsius, toUnit) {
    switch (toUnit) {
        case 'celsius':
            return celsius;
        case 'fahrenheit':
            return (celsius * 9/5) + 32;
        case 'kelvin':
            return celsius + 273.15;
    }
}

function convertFahrenheit(fahrenheit, toUnit) {
    switch (toUnit) {
        case 'celsius':
            return (fahrenheit - 32) * 5/9;
        case 'fahrenheit':
            return fahrenheit;
        case 'kelvin':
            return (fahrenheit - 32) * 5/9 + 273.15;
    }
}

function convertKelvin(kelvin, toUnit) {
    switch (toUnit) {
        case 'celsius':
            return kelvin - 273.15;
        case 'fahrenheit':
            return (kelvin - 273.15) * 9/5 + 32;
        case 'kelvin':
            return kelvin;
    }
}