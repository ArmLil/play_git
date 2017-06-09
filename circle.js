function circle(x, y, r, angle,dir) {
	if (dir == 'right') {
		goto(x - r, y);
		for (var i = 0; i < angle; i++) {
			forward(2 * 3.14 * r / 360);
			if (dir == 'left') left(1);
			if (dir == 'right') right(1);
		}
	}
	if (dir == 'left') {
		right(180);
		goto(x - r, y);
		for (var i = 0; i < angle; i++) {
			forward(2 * 3.14 * r / 360);
			left(1);
		}
	}
}


circle(10, 20, 30, 90, 'left');
