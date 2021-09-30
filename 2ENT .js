let fs = require('fs');
let argv = process.argv;
let alph = new Array();
let data;
let i = 0 , n = 0;
let entropy = 0;

data = fs.readFileSync(argv[2],'utf8');
data.toString();
for (i = 0; i < data.length; i++) {
	alph[data.charAt(i)] = 0;
}
for (i = 0; i < data.length; i++) {
	alph[data.charAt(i)]++;
}
for (i in alph) {
	alph[i] /= data.length;
	n++;
}
if (n > 1) {
	for (i in alph) {
		entropy -= alph[i] * (Math.log(alph[i]));
	}
	entropy /= Math.log(n) ;
}
console.log(entropy);

