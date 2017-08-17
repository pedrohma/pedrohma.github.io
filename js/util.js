function collapseTab(text){
	
	switch(text){
		case "graduation":
			var data = checkClass(graduation);
			$("#graduation").collapse("toggle");
			if(data){
				$('html, body').animate({
				scrollTop: $("#rowGraduation").offset().top -40
				}, 800);
			}
			else{
				$('html, body').animate({
				scrollTop: $("#rowGraduation").offset().top -40
				}, 800);
			}
			break;
		case "professional":
			var data = checkClass(professional);
			$("#professional").collapse("toggle");
			if(data){
				$('html, body').animate({
				scrollTop: $("#rowProfessional").offset().top -45
				}, 800);
			}
			else{
				$('html, body').animate({
				scrollTop: $("#rowProfessional").offset().top -40
				}, 800);
			}
			break;
		case "knowledge":
			var data = checkClass(knowledge);
			$("#knowledge").collapse("toggle");
			if(data){
				$('html, body').animate({
				scrollTop: $("#rowKnowledge").offset().top -45
				}, 800);
			}
			else{
				$('html, body').animate({
				scrollTop: $("#rowKnowledge").offset().top -40
				}, 800);
			}
			break;
		case "certifications":
			var data = checkClass(certifications);
			$("#certifications").collapse("toggle");
			if(data){
				$('html, body').animate({
				scrollTop: $("#rowCertifications").offset().top -45
				}, 800);
			}
			else{
				$('html, body').animate({
				scrollTop: $("#rowCertifications").offset().top -40
				}, 800);
			}
			break;
		case "honor":
			var data = checkClass(honor);
			$("#honor").collapse("toggle");
			if(data){
				$('html, body').animate({
				scrollTop: $("#rowHonor").offset().top -45
				}, 800);
			}
			else{
				$('html, body').animate({
				scrollTop: $("#rowHonor").offset().top -40
				}, 800);
			}
			break;
		default:
			break;
	}
	
}

function checkClass(id){
	var className = $(id).attr('class');
	if(className == 'collapse'){
		// When it open
		return true;
	}
	else{
		return false;
	}
}
