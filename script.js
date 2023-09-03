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
    const symptomDropdown = document.getElementById('symptomDropdown');
    const newOption = document.createElement('option');
    newOption.value = symptom;
    newOption.text = symptom;
    symptomDropdown.appendChild(newOption);
    document.getElementById('symptomInput').value = ""; // Clear the input
    document.getElementById('symptomSuggestions').innerHTML = ""; // Clear suggestions
}

document.getElementById('checkButton').addEventListener('click', function () {
    const selectedSymptoms = Array.from(document.getElementById('symptomDropdown').selectedOptions).map(option => option.value.toLowerCase());
    let matchingDiseases = [];

    // Basic disease and symptom data (for demonstration only)
    const diseases = [
        { name: "Common Cold", symptoms: ["runny nose", "sneezing", "cough"] },
        { name: "Flu", symptoms: ["fever", "body aches", "fatigue"] },
        { name: "Allergies", symptoms: ["itchy eyes", "sneezing", "nasal congestion"] }
        // Add more diseases and symptoms here
    ];

    // Iterate through diseases and check for matching symptoms
    for (const disease of diseases) {
        if (selectedSymptoms.every(symptom => disease.symptoms.includes(symptom))) {
            matchingDiseases.push(disease.name);
        }
    }

    let diagnosisResult = "";
    if (matchingDiseases.length > 0) {
        diagnosisResult = `Diseases related to the selected symptoms: ${matchingDiseases.join(', ')}.`;
    } else {
        diagnosisResult = "No specific diseases found related to the selected symptoms.";
    }

    document.getElementById('diagnosisResult').textContent = diagnosisResult;
});
