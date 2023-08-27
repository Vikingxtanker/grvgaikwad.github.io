document.getElementById('checkButton').addEventListener('click', function () {
    const inputSymptoms = document.getElementById('symptoms').value.toLowerCase().split(',');
    const symptoms = inputSymptoms.map(symptom => symptom.trim());
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
        const matchingSymptoms = disease.symptoms.filter(symptom => symptoms.includes(symptom));
        if (matchingSymptoms.length > 0) {
            matchingDiseases.push(disease.name);
        }
    }

    let diagnosisResult = "";
    if (matchingDiseases.length > 0) {
        diagnosisResult = `Diseases related to the symptoms you entered: ${matchingDiseases.join(', ')}.`;
    } else {
        diagnosisResult = "No specific diseases found related to the symptoms you entered.";
    }

    document.getElementById('diagnosisResult').textContent = diagnosisResult;
});
