/**
 * Usage:
 * Create
 *
 */

/**
 *
 * @param minDistance
 * @param target
 * @return {Object}
 */
var touch = function (minDistance, target) {

	var distance = 0,
		element = 0,
		touched = 0,
		touchX = 0,
		touchY = 0,
		hdls = {},
		fired,
		distaince = function (x1, y1, x2, y2) {
			return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
		},

		touchStart = function (x, y) {
			touchX = x;
			touchY = y;

			if (hdls['ontouch']) {
				hdls['ontouch'].call(element, x, y);
			}
		},
		touchMove = function (x, y) {
			var delta = distaince(x, y, touchX, touchY);
			if (delta > distance) {
				var dir, cosin = (x - touchX) / delta,
					sin = (y - touchY) / delta,
					l = 0.707;
				if (cosin > l) dir = 'e';
				else if (cosin < -l) dir = 'w';
				else if (sin > l) dir = 's';
				else dir = 'n';
				if (!fired && hdls['ondrag']) {
					fired = 1;
					hdls['ondrag'].call(element, dir);
				}
			}
		};

	distance = minDistance;
	element = target;
	element.addEventListener("touchstart", function (evt) {
		evt.preventDefault();
		var touches = evt.changedTouches;
		fired = 0;
		console.log("touch start");
		if (touches.length === 1) {
			touchStart(touches[0].clientX, touches[0].clientY);
		}
	}, false);
	element.addEventListener("touchend", function (evt) {
		evt.preventDefault();
		console.log("touch end");
	}, false);
	element.addEventListener("touchmove", function (evt) {
		evt.preventDefault();
		var touches = evt.changedTouches;
		console.log("touch move");
		if (touches.length === 1) {
			touchMove(touches[0].clientX, touches[0].clientY);
		}
	}, false);

	return {
		bind: function (evtName, callback) {
			hdls[evtName] = callback;
			return this;
		}
	};
};

