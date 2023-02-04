function StringRotation(s1: string, s2: string): boolean {
    if (s1.length !== s2.length) return false;

    return isSubString(s1, s2);
}

function isSubString(s1: string, s2: string): boolean {
    return (s2 + s2).includes(s1);
}

console.log(StringRotation("waterbottle", "erbottlewat"));
console.log(StringRotation("itakistakis", "erbtotlewat"));
