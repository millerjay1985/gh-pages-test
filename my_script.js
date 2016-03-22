
$(document).ready(function() {
	$("#getMessage").click(function()){
		$.getJSON("json_data.json", function(obj)){
			$.each(obj, function(key, value){
				$(".message").html(value.name)
			});
		}
	}
}