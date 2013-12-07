$(document).ready(function() {
	var pieces = ["King", "Queen", "Bishop", "Knight", "Rook", "Pawn"];

	$('.board').html(createBoard());
});

function createBoard() {
	var board = '';

	var count = 0;
	for (var row = 0; row < 8; row++) {
		var rowID = 8 - row;
		board += '<tr>';

		for (var col = 0; col < 8; col++) {
			var colID = String.fromCharCode('a'.charCodeAt(0) + col);

			if (count % 2 === 0) {
				board += '<td id="' + colID + rowID + '" class="tile light">' + colID + rowID + '</td>';
			} else {
				board += '<td id="' + colID + rowID + '" class="tile dark">' + colID + rowID + '</td>';
			}

			count += 1;
		}

		board += "</tr>";
		count += 1;
	}

	return board;
}

function populateBoard() {

}