export default function formattedCurency(num) {
    return Number(num.toFixed(1)).toLocaleString() + " €";
}