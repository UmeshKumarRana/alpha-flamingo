var mongoose   = require("mongoose"),
    Image      = require("./models/images"),
    Monument   = require("./models/monuments");

var data = [
    {
        name: "Taj Mahal, India",
        image: "https://images.unsplash.com/photo-1567255097545-018d2b9c414c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        desc1: "<ul><li><strong>Feature1: </strong>Value</li><li><strong>Feature2: </strong>Value</li><li><strong>Feature3: </strong>Value</li><li><strong>Feature4: </strong>Value</li><li><strong>Feature5: </strong>Value</li><li><strong>Feature6: </strong>Value</li><li><strong>Feature7: </strong>Value</li><li><strong>Feature8: </strong>Value</li><li><strong>Feature9: </strong>Value</li></ul>",
        desc2: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text </p>ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</p>"
    },
    {
        name: "Great Wall Of China, China",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        desc1: "<ul><li><strong>Feature1: </strong>Value</li><li><strong>Feature2: </strong>Value</li><li><strong>Feature3: </strong>Value</li><li><strong>Feature4: </strong>Value</li><li><strong>Feature5: </strong>Value</li><li><strong>Feature6: </strong>Value</li><li><strong>Feature7: </strong>Value</li><li><strong>Feature8: </strong>Value</li><li><strong>Feature9: </strong>Value</li></ul>",
        desc2: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text </p>ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</p>"
    },
    {   name: "Chichén Itza, Mexico",
        image: "https://images.unsplash.com/photo-1561577101-aa749bffbb70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        desc1: "<ul><li><strong>Feature1: </strong>Value</li><li><strong>Feature2: </strong>Value</li><li><strong>Feature3: </strong>Value</li><li><strong>Feature4: </strong>Value</li><li><strong>Feature5: </strong>Value</li><li><strong>Feature6: </strong>Value</li><li><strong>Feature7: </strong>Value</li><li><strong>Feature8: </strong>Value</li><li><strong>Feature9: </strong>Value</li></ul>",
        desc2: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text </p>ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</p>"
    },
    {   name: "Christ The Redeemer, Brazil",
        image: "https://images.unsplash.com/photo-1539053197169-395aea7a3bc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        desc1: "<ul><li><strong>Feature1: </strong>Value</li><li><strong>Feature2: </strong>Value</li><li><strong>Feature3: </strong>Value</li><li><strong>Feature4: </strong>Value</li><li><strong>Feature5: </strong>Value</li><li><strong>Feature6: </strong>Value</li><li><strong>Feature7: </strong>Value</li><li><strong>Feature8: </strong>Value</li><li><strong>Feature9: </strong>Value</li></ul>",
        desc2: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text </p>ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</p>"
    },
    {   name: "Petra, Jordan",
        image: "https://images.unsplash.com/photo-1548786811-dd6e453ccca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        desc1: "<ul><li><strong>Feature1: </strong>Value</li><li><strong>Feature2: </strong>Value</li><li><strong>Feature3: </strong>Value</li><li><strong>Feature4: </strong>Value</li><li><strong>Feature5: </strong>Value</li><li><strong>Feature6: </strong>Value</li><li><strong>Feature7: </strong>Value</li><li><strong>Feature8: </strong>Value</li><li><strong>Feature9: </strong>Value</li></ul>",
        desc2: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text </p>ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</p>"
    },
    {   name: "Colosseum, Italy",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        desc1: "<ul><li><strong>Feature1: </strong>Value</li><li><strong>Feature2: </strong>Value</li><li><strong>Feature3: </strong>Value</li><li><strong>Feature4: </strong>Value</li><li><strong>Feature5: </strong>Value</li><li><strong>Feature6: </strong>Value</li><li><strong>Feature7: </strong>Value</li><li><strong>Feature8: </strong>Value</li><li><strong>Feature9: </strong>Value</li></ul>",
        desc2: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text </p>ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</p>"
    },
    {   name: "Machu Picchu, Peru", 
        image: "https://images.unsplash.com/photo-1445795916031-db3f62e22328?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        desc1: "<ul><li><strong>Feature1: </strong>Value</li><li><strong>Feature2: </strong>Value</li><li><strong>Feature3: </strong>Value</li><li><strong>Feature4: </strong>Value</li><li><strong>Feature5: </strong>Value</li><li><strong>Feature6: </strong>Value</li><li><strong>Feature7: </strong>Value</li><li><strong>Feature8: </strong>Value</li><li><strong>Feature9: </strong>Value</li></ul>",
        desc2: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text </p>ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</p>"
    }
   
    
]

var imagine ={
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
    };

function seedDB(){

    //remove all the monuments
    Monument.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("all monuments removed");
        //remove all images
        Image.remove({}, function(err){
            if(err){
                console.log(err);
            }
            
            console.log("removed images");
            //add monuments
            data.forEach(function(monument){
                Monument.create(monument, function(err, structure){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a monument")
                        //create image
                        Image.create(imagine, function(err, picture){
                            if(err){
                                console.log(err);
                            } else {
                                structure.images.push(picture);
                                structure.save();
                            }
                        });
                    }
                })
            })
        })
                
    });
}

module.exports = seedDB;