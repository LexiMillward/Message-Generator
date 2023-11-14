// Returns a random number from 0 - 1
const randNum = num => {
    return Math.floor(Math.random() * num);
};


// Function to run the program
const jediGenerator = () => {
    const choices = {
        rank: ['Padawan', 'Knight', 'Master', 'Grand Master'],
        lightsaberType: ['single-blade', 'double-blade', 'switch-blade', 'crossguard-blade'],
        lightsaberColour: ['blue', 'green', 'yellow', 'white', 'purple'],
        assignmentPlanet: ['Tatooine', 'Coruscant', 'Naboo', 'Alderaan', 'Kashyyyk'],
    };
    
    // A place to store the randomly selected choices.
    let generatedJedi = [];

    // Iterate over the objects and store random choices to generatedJedi
    for (let choice in choices) {
        let choiceIndx = randNum(choices[choice].length);
    
    switch (choice) {
        case "rank":
            generatedJedi.push(`You have been granted the rank of ${choices[choice][choiceIndx]}.`);
            break;
        case "lightsaberType":
            generatedJedi.push(`You weild a ${choices[choice][choiceIndx]} lightsaber,`);
            break;
        case "lightsaberColour":
            generatedJedi.push(`with a ${choices[choice][choiceIndx]} kyber-crystal.`);
            break;
        case "assignmentPlanet": 
            generatedJedi.push(`You are needed on ${choices[choice][choiceIndx]} for an urgent diplomatic peace keeping mission. May the force be with you!`)
            break;
        default:
            generatedJedi.push("These are not the droids you are looking for.")
            break;
        }
    }

    // Format the output 
    let formatGeneratedJedi = generatedJedi.join("\n");
    return formatGeneratedJedi;
}

// Call the function
console.log(jediGenerator());



