// --- Explanatory Notes ---
// Demonstrates the use of switch statements for multi-branch selection in JavaScript.
// switch evaluates an expression and executes code blocks based on matching case values.
// Useful for replacing multiple if-else statements when checking the same variable against different values.
//
// --- Definitions & Usage ---
/**********
 * SWITCH *
 **********/

// switch (key) {
//     case value:
//         
//         break;
//
//     default:
//         break;
// }

const Month = 3
switch (Month) {
    case 1:
        console.log("january");
        
        break;
    case 2:
        console.log("Feb");
        
        break;
    case 3:
        console.log("mar");
        
        break;
    case 4:
        console.log("apr");
        
        break;

    default:
    console.log("defult");
    
        break;
}
// --- Advantages ---
// - switch statements simplify code when handling multiple possible values for a variable.
// - Improves readability over long chains of if-else statements.
// - Each case is clearly separated, reducing logic errors.