$(document).ready(function() {
	var board = '';

	var count = 0;
	for (var row = 0; row < 8; row++) {
		board += '<tr>';

		for (var col = 0; col < 8; col++) {
			if (count % 2 === 0) {
				board += '<td class="tile light"></td>';
			} else {
				board += '<td class="tile dark"></td>';
			}

			count += 1;
		}

		board += "</tr>";
		count += 1;
	}
	
	$('.board').html(board);
});