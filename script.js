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
    const symptomInput = document.getElementById('symptomInput');

    // Close the suggestions when a symptom is added
    const symptomSuggestions = document.getElementById('symptomSuggestions');
    symptomSuggestions.innerHTML = "";

    // Prevent adding duplicate symptoms and empty values
    if (symptom.trim() !== "" && !selectedSymptoms.includes(symptom)) {
        selectedSymptoms.push(symptom);
        const selectedSymptomsContainer = document.getElementById('selectedSymptoms');
        const symptomTag = document.createElement('span');
        symptomTag.classList.add('symptom-tag');
        symptomTag.textContent = symptom;
        selectedSymptomsContainer.appendChild(symptomTag);
        symptomInput.value = ""; // Clear the input
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

// ... (previous JavaScript code) ...
