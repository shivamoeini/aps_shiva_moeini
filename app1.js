// One of the reasons this function is awkward to read is that we have a binding pointing at our array, but we’d much prefer to have bindings for the elements of the array, that is, let n00 = table[0] and so on. Fortunately, there is a succinct way to do this in JavaScript.

function phi([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) /
        Math.sqrt((n10 + n11) * (n00 + n01) *
            (n01 + n11) * (n00 + n10));
}