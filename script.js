document.getElementById('checkButton').addEventListener('click', function () {
    const selectedSymptom = document.getElementById('symptomDropdown').value.toLowerCase();
    let matchingDiseases = [];

    // Basic disease and symptom data (for demonstration only)
    const diseases = [
        { name: "Common Cold", symptoms: ["runny nose", "sneezing", "cough"] },
        { name: "Flu", symptoms: ["fever", "body aches", "fatigue"] },
        { name: "Allergies", symptoms: ["itchy eyes", "sneezing", "nasal congestion"] }
        // Add more diseases and symptoms here
    ];

    // Iterate through diseases and check for matching symptom
    for (const disease of diseases) {
        if (disease.symptoms.includes(selectedSymptom)) {
            matchingDiseases.push(disease.name);
        }
    }

    let diagnosisResult = "";
    if (matchingDiseases.length > 0) {
        diagnosisResult = `Diseases related to the symptom you selected: ${matchingDiseases.join(', ')}.`;
    } else {
        diagnosisResult = "No specific diseases found related to the symptom you selected.";
    }

    document.getElementById('diagnosisResult').textContent = diagnosisResult;
});
