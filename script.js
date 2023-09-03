// Keep track of selected symptoms
const selectedSymptoms = [];

document.getElementById('symptomInput').addEventListener('input', function () {
    const inputSymptom = this.value.toLowerCase();
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
        symptom.toLowerCase().includes(inputSymptom)
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
    // Prevent adding duplicate symptoms
    if (!selectedSymptoms.includes(symptom)) {
        selectedSymptoms.push(symptom);
        const selectedSymptomsContainer = document.getElementById('selectedSymptoms');
        const symptomTag = document.createElement('span');
        symptomTag.classList.add('symptom-tag');
        symptomTag.textContent = symptom;
        selectedSymptomsContainer.appendChild(symptomTag);
        document.getElementById('symptomInput').value = ""; // Clear the input
        document.getElementById('symptomSuggestions').innerHTML = ""; // Clear suggestions
    }
}

document.getElementById('checkButton').addEventListener('click', function () {
    const matchingDiseases = findMatchingDiseases(selectedSymptoms);

    let diagnosisResult = "";
    if (matchingDiseases.length > 0) {
        diagnosisResult = `Diseases related to the selected symptoms: ${matchingDiseases.join(', ')}.`;
    } else {
        diagnosisResult = "No specific diseases found related to the selected symptoms.";
    }

    document.getElementById('diagnosisResult').textContent = diagnosisResult;
});


// Close the suggestions when clicking outside the input and suggestions
document.addEventListener('click', function (e) {
    const symptomSuggestions = document.getElementById('symptomSuggestions');
    if (!e.target.closest('.autocomplete')) {
        symptomSuggestions.innerHTML = "";
    }
});
