const inquirer = require('inquirer');
var katana = `
         />_________________________________
[########[]_________________________________>
         \\>
`
var shield = `
  |\\-._/\\_.-/|
  |    ||    |
  |___o()o___|
  |__((<>))__|
  \\   o\\/o   /
   \\   ||   /
    \\  ||  /
     '.||.'
`
var gun = `
,________________________________       
|__________,----------._ [____]  ""-,__  __...-----==="
        (_(||||||||||||)___________/   ""             |
           \\----------'       [ ))"-,                 |
                                ""    \\,  _,--...___  |
                                        \\/          """
`
var bow = `
   \\
    \\
     )
##-------->        
     )
    /
   /
`
var axe = `
  ,  /\\  .  
 //'-||-'\\\\ 
(| -=||=- |)
 \\\\,-||-.// 
  '  ||  '  
     ||     
     ||     
     ||     
     ||     
     ||     
     ()
`

while (true) {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What do you want to do?',
            choices: [
            'Battle Players',
            'Buy Weapons',
            'Buy Armour',
            'Check Piggy Bank'
            ]
        }
    ])
    .then((answers) => {
        if (answers['action'] === 'Battle Players') {

        }
        if (answers['action'] === 'Buy Weapons') {
            
        }
        if (answers['action'] === 'Buy Armour') {
            
        }
        if (answers['action'] === 'Check Piggy Bank') {
            
        }
    })
    .catch((error) => {
        if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment")
        } else {
        console.log("Something else went wrong")
        }
    });
}