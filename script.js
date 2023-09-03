// Keep track of selected symptoms
const selectedSymptoms = [];

document.getElementById('symptomInput').addEventListener('input', function () {
    const inputSymptoms = this.value.toLowerCase().split(','); // Split input by commas
    const lastInputSymptom = inputSymptoms[inputSymptoms.length - 1].trim(); // Get the last input symptom
    const symptomSuggestions = document.getElementById('symptomSuggestions');
    symptomSuggestions.innerHTML = "";

    // Basic symptom data (for demonstration only)
    const symptoms = [
        "runny nose", "sneezing", "cough", "fever", "body aches",
        "fatigue", "itchy eyes", "nasal congestion"
        // Add more symptoms here
    ];

    // Find matching symptoms and display suggestions
    const matchingSymptoms = symptoms.filter(symptom =>
        symptom.toLowerCase().includes(lastInputSymptom)
    );

    matchingSymptoms.forEach(matchingSymptom => {
        const suggestionItem = document.createElement('div');
        suggestionItem.classList.add('suggestion-item');
        suggestionItem.textContent = matchingSymptom;
        suggestionItem.addEventListener('click', function () {
            addSymptom(matchingSymptom);
        });
        symptomSuggestions.appendChild(suggestionItem);
    });
});

function addSymptom(symptom) {
    const symptomInput =


// Close the suggestions when clicking outside the input and suggestions
document.addEventListener('click', function (e) {
    const symptomSuggestions = document.getElementById('symptomSuggestions');
    if (!e.target.closest('.autocomplete')) {
        symptomSuggestions.innerHTML = "";
    }
});
