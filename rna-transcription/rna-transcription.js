export const toRna = (nucleotide) => {
    let n = nucleotide.toUpperCase();
    switch (n) {
        case "G":
            return "C"
        case "C":
            return "G"  
        case "T":
            return "A"
        case "A":
            return "U"
        default:
        return ""
            break;
    }
}