document.getElementById('checkButton').addEventListener('click', function () {
    const symptom = document.getElementById('symptoms').value.toLowerCase();
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
        if (disease.symptoms.includes(symptom)) {
            matchingDiseases.push(disease.name);
        }
    }

    let diagnosisResult = "";
    if (matchingDiseases.length > 0) {
        diagnosisResult = `Diseases related to the symptom you entered: ${matchingDiseases.join(', ')}.`;
    } else {
        diagnosisResult = "No specific diseases found related to the symptom you entered.";
    }

    document.getElementById('diagnosisResult').textContent = diagnosisResult;
});
