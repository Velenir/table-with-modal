export default function(num, currency) {
	return num.toLocaleString("ru-RU", {style: "currency", currency, minimumFractionDigits:0});
}