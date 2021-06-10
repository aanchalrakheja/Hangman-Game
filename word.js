const arr=[
    {
        word:"happy",
        hint:"Its the antonym of sad"
    },
    {
        word:"ethics",
        hint:"Deciding what is morally right or wrong"
    },
    {
        word:"media",
        hint:"It includes images,videos and is shared across all social sites"
    },
    {
        word:"duet",
        hint:"Group of two"
    },
    {
        word:"google",
        hint:"Search-Engine"
    },
    {
        word:"Sequence",
        hint:"Analogous to order"
    },
    {
        word:"repeat",
        hint:"Doing same things again and again"
    },
    {
        word:"integer",
        hint:"A data type"
    },
    {
        word:"binary",
        hint:"Numbers expressed in base 2"
    },
    {
        word:"octal",
        hint:"Numbers expressed in base 8"
    },
    {
        word:"decimal",
        hint:"Numbers expressed in base 10"
    },
    {
        word:"hexadecimal",
        hint:"Numbers expressed in base 16"
    },
    {
        word:"source",
        hint:"Analogous to origin"
    },
    {
        word:"byte",
        hint:"Group of 8 bits"
    },
    {
        word:"subtract",
        hint:"A mathematical operation"
    },
];

function randomWord()
{
    var random=Math.trunc(Math.random()*15);
    var word=arr[random];
    return word;
}

// randomWord();
export {randomWord};