function StringRotation(s1, s2) {
    if (s1.length !== s2.length) return false;

    return isSubString(s1, s2);
}

function isSubString(s1, s2) {
    return (s2 + s2).includes(s1);
}

console.log(StringRotation("waterbottle", "erbottlewat"));
console.log(StringRotation("itakistakis", "erbtotlewat"));
