function tinggiSiswa(){

	var siswaSatu=175;
	var siswaDua=170;
	var siswaTiga=165;

	// siswaSatu

	if (siswaSatu>siswaDua ) {
		console.log("siswa pertama tingginya 175 cm");
	}
	else if (siswaSatu>siswaTiga ) {
		console.log("siswa pertama tingginya 170 cm");
	}
	else{
		console.log("siswa pertama tingginya 165 cm");
	}

	// siswaDua

	if (siswaDua>siswaSatu ) {
		console.log("siswa kedua tingginya 175 cm");
	}
	else if (siswaDua>siswaTiga ) {
		console.log("siswa kedua tingginya 170 cm");
	}
	else{
		console.log("siswa kedua tingginya 165 cm");
	}

	// siswaTiga

	if (siswaTiga>siswaSatu ) {
		console.log("siswa ketiga tingginya 175 cm");
	}
	else if (siswaTiga>siswaDua ) {
		console.log("siswa ketiga tingginya 170 cm");
	}
	else{
		console.log("siswa ketiga tingginya 165 cm");
	}


}

tinggiSiswa();