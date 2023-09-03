$(document).ready(function() {
    $('#checkButton').click(function() {
        const selectedSymptoms = Array.from($('#symptomDropdown').find('option:selected')).map(option => option.value);

        if (selectedSymptoms.length === 0) {
            $('#diagnosisResult').text("Please select at least one symptom.");
            return;
        }

        // Create a query string from selected symptoms
        const symptomQuery = selectedSymptoms.join(',');

        // Make a request to the Symptoma API
        $.ajax({
            url: `https://www.symptoma.com/api/v2/conditions?lang=en&includeSimplifiedResults=false&symptoms=${symptomQuery}`,
            type: 'GET',
            success: function(response) {
                const conditions = response.conditions;

                if (conditions.length === 0) {
                    $('#diagnosisResult').text("No specific diseases found related to the selected symptoms.");
                } else {
                    const topCondition = conditions[0];
                    const diagnosisResult = `Likely disease: ${topCondition.name}.`;
                    $('#diagnosisResult').text(diagnosisResult);
                }
            },
            error: function(error) {
                console.error(error);
                $('#diagnosisResult').text("An error occurred while fetching diagnosis data.");
            }
        });
    });
});
