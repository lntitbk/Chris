var width = 800, height = 1200, updating = 0;
/**-----------------------------------------------------------------------------
 * Assets
 -----------------------------------------------------------------------------*/

Crafty.sprite(800, 1280, "assets/bg-manchoi.png", {
	bgr_land:[0, 0]
});
Crafty.sprite(800, 1280, "assets/sky_h.jpg", {
	sky_h:[0, 0]
});
Crafty.sprite(800, 1280, "assets/sky_m.jpg", {
	sky_m:[0, 0]
});

Crafty.sprite(395, 714, "assets/char.png", {
	witchI:[0, 0]
});

Crafty.sprite(299, 80, "assets/batdau.png", {
	intrBtn:[0, 0]
});

Crafty.sprite(299, 80, "assets/tieptuc.png", {
	htp0:[0, 0]
});

Crafty.sprite(299, 80, "assets/cach-choi.png", {
	htp5:[0, 0]
});

Crafty.sprite(349, 81, "assets/GOstar.png", {
	restartB:[0, 0]
});

Crafty.sprite(847, 351, "assets/gname.png", {
	gname:[0, 0]
});

Crafty.sprite(502, 364, "assets/text1.png", {
	textIntr:[0, 0]
});

Crafty.sprite(638, 177, "assets/text2.png", {
	textHlp:[0, 0]
});

Crafty.sprite(527, 74, "assets/htp.png", {
	htpl:[0, 0]
});

Crafty.sprite(214, 199, "assets/witch_mvg.png", {
	witchAnim:[0, 0]
});

//Crafty.sprite(227, 94, "assets/rock.png", {
////	rock1:[0, 0],
//	rock2:[1, 0],
//	rock3:[2, 0],
//	rock4:[3, 0],
//	rock5:[4, 0],
//	rock6:[5, 0]
//});
Crafty.sprite(271, 94,  "assets/goi.png", {
    rock1:[0, 0]
});
Crafty.sprite(271, 94,  "assets/goi1.png", {
    rock2:[0, 0]
});
Crafty.sprite(271, 94,  "assets/goi2.png", {
    rock3:[0, 0]
});
Crafty.sprite(271, 94,  "assets/goi3.png", {
    rock4:[0, 0]
});
Crafty.sprite(271, 94,  "assets/goi4.png", {
    rock5:[0, 0]
});
Crafty.sprite(271, 94,  "assets/goi5.png", {
    rock6:[0, 0]
});



Crafty.sprite(146, 120, "assets/qua.png", {
	amulet:[0, 0]
});

Crafty.sprite(37, 40, "assets/nums.png", {
	nums0:[0, 0],
	nums1:[1, 0],
	nums2:[2, 0],
	nums3:[3, 0],
	nums4:[4, 0],
	nums5:[5, 0],
	nums6:[6, 0],
	nums7:[7, 0],
	nums8:[8, 0],
	nums9:[9, 0]
});

Crafty.sprite(155, 41, "assets/score.png", {
	score_letter:[0, 0]
});

Crafty.sprite(513, 151, "assets/clear.png", {
	clear:[0, 0]
});

Crafty.sprite(567, 380, "assets/gmov.png", {
	gmov:[0, 0]
});

Crafty.sprite(252, 77, "assets/start.png", {
	start:[0, 0]
});

Crafty.sprite(120, 120, "assets/nav.png", {
	nav:[0, 0]
});

Crafty.sprite(320, 320, "assets/moon.png", {
	moon:[0, 0]
});

Crafty.sprite(78, 134, "assets/bk_wk.png", {
	bkwk:[0, 0]
});

Crafty.sprite(380, 112, "assets/score2.png", {
	score2:[0, 0]
});

Crafty.sprite(119, 63, "assets/Diem.png", {
	scorefinal:[0, 0]
});

Crafty.sprite(34, 57, "assets/so.png", {
	nf0:[0, 0],
	nf1:[1, 0],
	nf2:[2, 0],
	nf3:[3, 0],
	nf4:[4, 0],
	nf5:[5, 0],
	nf6:[6, 0],
	nf7:[7, 0],
	nf8:[8, 0],
	nf9:[9, 0]
});

Crafty.sprite(76, 103, "assets/numsf2.png", {
	f0:[0, 0],
	f1:[1, 0],
	f2:[2, 0],
	f3:[3, 0],
	f4:[4, 0],
	f5:[5, 0],
	f6:[6, 0],
	f7:[7, 0],
	f8:[8, 0],
	f9:[9, 0]
});


/**-----------------------------------------------------------------------------
 * Stage define
 *----------------------------------------------------------------------------*/

var stage;

function createStage() {
	//[x, y, rockType(=1..4), dx, hasAmulet(=0;1), amuletDx]
	return [
	[60, 140, 1, 0, 0, 0],
	[120, 55, 1, 0, 1, 0],
	[40, -40, 1, 0, 1, 0],
	[120, -125, 1, 0, 1, 0],
	[50, -205, 1, 0, 1, 0],
	[130, -290, 1, 0, 1, 0],
	[20, -380, 1, 0, 0, 0],
	[170, -500, 1, 0, 1, 0],
	[100, -580, 1, 0, 0, 0],
	[0, -700, 1, 0, 1, 0],
	[60, -780, 1, 0, 1, 0],
	[150, -910, 1, 0, 1, 0],
	[0, -1010, 1, 0, 0, 0],
	[180, -1115, 1, 0, 1, 0],
	[40, -1220, 1, 0, 1, 0],
	[30, -1320, 1, 0, 1, 0],
	[140, -1420, 1, 0, 0, 0],
	[30, -1525, 1, 0, 1, 0],
	[160, -1630, 1, 0, 1, 0],
	/***********************
	* Stage 2
	**********************/
	[160, -1730, 2, 0.3, 0, 0.3],
	[20, -1830, 2, 0.4, 1, 0.4],
	[120, -1935, 2, 0.5, 1, 0.5],
	[40, -2035, 2, 0.6, 1, 0.6],
	[110, -2140, 2, 0.7, 1, 0.7],
	[50, -2240, 2, 0.8, 0, 0],
	[180, -2340, 2, 0.9, 1, 0.9],
	[60, -2445, 2, 1, 1, 1],
	[130, -2545, 2, 1.1, 1, 1.1],
	[10, -2650, 2, 1.2, 0, 0],
	[180, -2760, 2, 1.3, 1, 1.3],
	[60, -2870, 2, 1.4, 1, 1.4],
	[170, -2980, 2, 1.5, 0, 0],
	[10, -3080, 2, 1.6, 0, 0],
	[160, -3190, 2, 1.7, 1, 1.7],
	[40, -3295, 2, 1.8, 0, 0],
	[130, -3400, 2, 1.9, 1, 1.9],
	[20, -3505, 2, 2, 0, 0],
	[150, -3610, 2, 2.1, 1, 2.1],
	[40, -3715, 2, 2.2, 0, 0],
	[160, -3820, 2, 2.3, 1, 2.3],
	/***********************
	* Stage 3
	**********************/
	[0, -3920, 3, 0, 0, 0],
	[60, -3920, 3, 0, 0, 0],
	[120, -3920, 3, 0, 0, 0],
	[180, -3920, 3, 0, 0, 0],
	[20, -4030, 3, 0, 1, 0],
	[80, -4140, 3, 0, 1, 0],
	[180, -4250, 3, 0, 1, 0],
	[110, -4365, 3, 0, 0, 0],
	[50, -4470, 3, 0, 0, 0],
	[10, -4580, 3, 0, 1, 0],
	[90, -4690, 3, 0, 1, 0],
	[20, -4800, 3, 0, 0, 0],
	[110, -4900, 3, 0, 0, 0],
	[180, -5010, 3, 0, 1, 0],
	[20, -5120, 3, 0, 0, 0],
	[90, -5220, 3, 0, 0, 0],
	[170, -5330, 3, 0, 1, 0],
	[110, -5435, 3, 0, 1, 0],
	[180, -5545, 3, 0, 0, 0],
	[90, -5655, 3, 0, 0, 0],
	[10, -5770, 3, 0, 1, 0],
	[0, -5890, 3, 0, 0, 0],
	[60, -5890, 3, 0, 0, 0],
	[120, -5890, 3, 0, 0, 0],
	[180, -5890, 3, 0, 0, 0],
	/***********************
	* Stage 4
	**********************/
	[110, -5990, 4, 1.0, 0, 0],
	[20, -6100, 4, 1.0, 1, 0],
	[120, -6200, 4, 1.1, 0, 0],
	[40, -6310, 4, 1.1, 0, 0],
	[110, -6420, 4, 1.2, 1, 0],
	[50, -6520, 4, 1.2, 0, 0],
	[180, -6630, 4, 1.3, 0, 0],
	[60, -6730, 4, 1.3, 0, 0],
	[130, -6830, 4, 1.4, 1, 0],
	[10, -6940, 4, 1.5, 0, 0],
	[180, -7050, 4, 1.6, 1, 0],
	[60, -7150, 4, 1.7, 0, 0],
	[170, -7260, 4, 1.8, 0, 0],
	[10, -7370, 4, 1.9, 0, 0],
	[160, -7480, 4, 2, 1, 0],
	[40, -7590, 4, 2, 0, 0],
	[130, -7700, 4, 2.1, 0, 0],
	[20, -7800, 4, 2.2, 0, 0],
	[150, -7910, 4, 2.2, 0, 0],
	[40, -8010, 4, 2.3, 1, 0],
	[160, -8120, 4, 2.4, 0, 0],
	/***********************
	* Stage 5
	**********************/
	[60, -8250, 5, 1.0, 0, 0],
	[20, -8370, 5, 1.0, 1, 1.0],
	[120, -8500, 5, 1.1, 0, 0],
	[40, -8630, 5, 1.1, 0, 0],
	[110, -8770, 5, 1.2, 0, 0],
	[50, -8900, 5, 1.2, 0, 0],
	[180, -9020, 5, 1.3, 0, 0],
	[60, -9140, 5, 1.3, 0, 0],
	[130, -9270, 5, 1.4, 1, 1.4],
	[10, -9400, 5, 1.5, 0, 0],
	[180, -9530, 5, 1.6, 0, 0],
	[60, -9660, 5, 1.6, 0, 0],
	[170, -9800, 5, 1.7, 0, 0],
	[10, -9930, 5, 1.7, 1, 1.7],
	[160, -10060, 5, 1.8, 0, 0],
	[40, -10190, 5, 1.8, 0, 0],
	[130, -10320, 5, 1.9, 0, 0],
	[20, -10450, 5, 1.9, 0, 0],
	[150, -10580, 5, 2.0, 1, 2.0],
	[40, -10710, 5, 2.0, 0, 2.0],
	[0, -10840, 5, 0, 0, 0],
	[60, -10840, 5, 0, 0, 0],
	[120, -10840, 5, 0, 0, 0],
	[180, -10840, 5, 0, 0, 0]
	];
};

/**-----------------------------------------------------------------------------
 * Vars
 *----------------------------------------------------------------------------*/

var is5Prd = function (e) {
	return e.keyCode === Crafty.keys['5']
	|| e.keyCode === Crafty.keys['NUMPAD_5'];
},

is0Prd = function (e) {
	return e.keyCode === Crafty.keys['0']
	|| e.keyCode === Crafty.keys['NUMPAD_0'];
},

isStarPrd = function (e, kb) {
	return e.keyCode === Crafty.keys['MULTIPLY']
	|| (kb.isDown('8') && kb.isDown('SHIFT'));
},

isLeftMouseClk = function (e) {
	return e.mouseButton === Crafty.mouseButtons.LEFT;
};

/**-----------------------------------------------------------------------------
 * Entities
 -----------------------------------------------------------------------------*/
Crafty.c("witchIntro", {
	init:function () {
		var hitMax = false;
		this.addComponent("2D,DOM,witchI")
		.attr({
			x:202,
			y:1300
		})
		.bind("EnterFrame", function () {
			var y = this.y;
			if (!hitMax && y > 500) {
				y -= 15;
			} else {
				hitMax = true;
				y = 530;
			}
			this.y = y;
		});
	}
});

Crafty.c("gNameC", {
	_played: false,
	init:function () {
		this.addComponent("2D,DOM,gname,SpriteAnimation")
		.attr({
			x:800,
			y:250
		})
		.animate("gName", [[1, 0], [2, 0], [1, 0], [0, 0]])
		.bind("EnterFrame", function(f) {
			this.x -= 12;
			if (this.x < -23) {
				this.x = -23;
				if (!this._played)
					this.animate("gName", 10);
				this._played = true;
			}
		});
	}
});

Crafty.c("Btn", {
	init:function () {
		this.addComponent("2D,DOM,Keyboard,Mouse");
	},
	btn:function (onFired) {
		return this.bind('Click', onFired).bind('KeyDown', onFired);
	}
});

Crafty.c("Witch", {
	dirY:0,
	dirX:-3,
	deltaY:0,
	starting:true,
	jumpStep:0,
	_updating:true,
	_updated:0,
	_clear: 0,
	init:function () {
		var t = this;
		t.requires("SpriteAnimation,Collision,Multiway,Delay,witchAnim")
		.multiway(1, {
			'4':180,
			'5':-90,
			'6':0,
			NUMPAD_4:180,
			NUMPAD_5:-90,
			NUMPAD_6:0,
			UP_ARROW:-90,
			RIGHT_ARROW:0,
			LEFT_ARROW:180
		})
		.animate("walk_left", 0, 0, 1)
		.animate("walk_right", 3, 0, 4)
		.animate("fly1_left", 7, 0, 8)
		.animate("fly2_left", 6, 0, 7)
		.animate("fly1_right", [[10, 0], [9, 0]])
		.animate("fly2_right", [[11, 0], [10, 0]])
		.bind("EnterFrame", function (frame) {
			if (t.starting) {
				return;
			}
			if (t._clear && t.x > 140 && t.x < 160) {
				Crafty.e("2D,DOM,SpriteAnimation,bkwk").attr({x:t.x, y:t.y+24})
				.animate("walk", 0,0,11)
				.bind("AnimationEnd", function() {
					this.destroy();
					Crafty.trigger("Cleared");
				})
				.animate("walk", 60);
				t.destroy();
			}
			var x = t.x, y = t.y, dx = t.dirX, dy = t.dirY;
			switch (t.jumpStep) {
				case 0:
					y += 12;
					x = Crafty.math.clamp(x + dx, -53, 800 - t.w + 53);
					break;
				default:
					dy += 0.7;
					if (dy > 0) {
						dy -= 0.2;
					}
					y += dy;
					if (x < 0) {
						x += 2;
					} else if (x > 800 - t.w) {
						x -= 2;
					} else {
						x = Crafty.math.clamp(x + dx, 0, 800 - t.w);
					}
					break;
			}
			t.x = x;
			t.y = y;
			t.dirX = dx;
			t.dirY = dy;
			if (y < 470 && !updating) {
				Crafty.trigger("UpdateWorld");
				console.log("updater:" + Crafty("Updater").length);
			}
			if (y > height) {
				Crafty.trigger("GameOver");
				t.destroy();
			}
		})
		.bind("Moved", function (from) {
			t.x = from.x;
			t.y = from.y;
		})
		.bind("NewDirection", function (dir) {
			if (t._clear || t.starting) {
				return;
			}
			var action = "fly", left = "_left", right = "_right";
			if (dir.y < 0 && t.jumpStep < 2) {
				t.jumpStep++;
				t.dirY = -21;
			}
			if (t.jumpStep) {
				if (dir.x < 0 || (t.dirX < 0 && dir.y)) {
					t._anim(action + t.jumpStep + left, 2, 0);
					t.dirX = -3;
				} else if (dir.x > 0 || (t.dirX > 0 && dir.y)) {
					t._anim(action + t.jumpStep + right, 2, 0);
					t.dirX = 3;
				}
			} else {
				action = "walk";
				if (dir.x < 0) {
					t._anim(action + left, 7, -1);
					t.dirX = -3;
				} else if (dir.x > 0) {
					t._anim(action + right, 7, -1);
					t.dirX = 3;
				}
			}
		})
		.bind("Clear", function() {
			this.clear_();
		})
		.onHit("transPlatform", function (ent) {
			t._onHit_(ent);
		})
		.onHit("platform", function (ent) {
			if (t.dirY >= 0) {
				t._onHit_(ent);
				t.x += ent[0].obj.dx;
				ent[0].obj.trigger("hitWitch", t);
			}
		}, function () {
			if (t.dirY >= 0) {
				if (t.dirX < 0) {
					t._anim("fly1_left", 2, 0);
				} else {
					t._anim("fly1_right", 2, 0);
				}
			}
		})
		.collision([60, 151], [153, 151], [153, 198], [60, 198])
		.animate("walk_left", 7, -1)
		.delay(function () {
			t.starting = false;
		}, 2000);
	},
	clear_: function() {
		this._clear = true;
		if (this.x > 150)
			this.dirX = -3;
		else
			this.dirX = 3;
	},
	_onHit_:function (ent) {
		var t = this;
		t.y = ent[0].obj.y - t.h + 15;
		t.jumpStep = 0;
		if (t.dirX < 0) {
			t._anim("walk_left", 7, -1);
			t.dirX = -3;
		} else {
			t._anim("walk_right", 7, -1);
			t.dirX = 3;
		}
	},
	_anim:function (reel, frameTime, repeat) {
		if (!this.isPlaying(reel))
			this.stop().animate(reel, frameTime, repeat);
	}
});

Crafty.c("platform", {
	rock:0,
	dx:0,
	dxVib:0,
	dy:0,
	fall:false,
	shake:false,
	time:0,
	_fix: 0,
	init:function () {
		this.requires("2D,DOM,Collision")
		.collision([0, 15], [226, 15], [226, 40], [0, 40]);
		console.log("create platform");
	},
	platform:function (rock, dx) {
		var t = this.unbind("EnterFrame").unbind("hitWitch")
			.removeComponent("rock1,rock2,rock3,rock4,rock5"),
			state = 0, time = 0;
		t.requires("rock" + rock).rock = rock;
		t.dx = dx;
		t.dy = 0;
		return t.bind("EnterFrame", function (f) {
			t.x += t.dx;
			if (t.x < 0) {
				t.dx = -t.dx;
				t.x = 0;
			}
			if (t.x > 800 - t.w) {
				t.dx = -t.dx;
				t.x = 800 - t.w;
			}
			t.y += t.dy;

			if ((t.rock == 3 || t.rock == 5) && state) {
				switch (state) {
					case 1:// Vibrate
						if (!t.dxVib) {
							t.dxVib = 4;
						} else if (t.dxVib < 15 && f.frame % 2 == 0){
							t.dxVib += t.dxVib > 0 ? 1 : -1;
							t.dxVib = -t.dxVib;
						}
						time++;
						if (time > 100) {
							state = 2;
							t.dxVib = 0;
							t.dx = 0;
						}
						t.x += t.dxVib;
						break;
					case 2:
						t.dy = 10;
						state = 3;
						break;
				}
			}
		})
		.bind("hitWitch", function (witch) {
			if (t._fix) {
				if (!time) {
					Crafty.trigger("Clear");
				}
				time++;
				return;
			}
			time++;
			if (!state && time > 50) {
				state = 1;
				time--;
			}
		});
	}
});

Crafty.c("transPlatform", {
	init:function () {
		this.addComponent("2D,DOM,Collision")
		.attr({
			x:0,
			y:1113,
			w:800,
			h:50
		})
		.collision([0, 15], [0, 50], [799, 50], [799, 15]);
	}
});

Crafty.c("TouchControl", {
	hdls: {},
	init:function () {
		this.requires("2D,Mouse,DOM")
		.attr({
			w:800,
			h:1200,
			z:5
		});
		var distance = 20,
			element = 0,
			touchX = 0,
			touchY = 0,
			fired,
			distaince = function (x1, y1, x2, y2) {
				return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
			};

		this.bind("MouseMove", function(e) {
			var x = e.clientX, y = e.clientY;
			var delta = distaince(x, y, touchX, touchY);
			if (delta > distance) {
				var dir, cosin = (x - touchX) / delta,
					sin = (y - touchY) / delta,
					l = 0.707;
				if (cosin > l) dir = 'e';
				else if (cosin < -l) dir = 'w';
				else if (sin > l) dir = 's';
				else dir = 'n';
				if (!fired && this.hdls['ondrag']) {
					fired = 1;
					this.hdls['ondrag'].call(this, dir);
				}
			}
		}).bind("MouseDown", function (e) {
			var x = e.clientX, y = e.clientY;
			touchX = x;
			touchY = y;
			fired = 0;

			if (this.hdls['ontouch']) {
				this.hdls['ontouch'].call(element, x, y);
			}
		}).bind("MouseUp", function() {
			fired = 0;
		});

		this.addTouchEvent("ondrag", function(dir) {
			if (dir === 'e') {
				Crafty.trigger("NewDirection", {x:1, y:0})
			} else if (dir === 'w') {
				Crafty.trigger("NewDirection", {x:-11, y:0})
			} else if (dir === 'n') {
				Crafty.trigger("NewDirection", {x:0, y:-1})
			}
		})
	},
	addTouchEvent: function (eventName, callback) {
		this.hdls[eventName] = callback;
		return this;
	}
});

Crafty.c("Charm", {
	_hit:0,
	dx:0,
	retrieve: 0,
	init:function () {
		var t = this;
		console.log("create charm");
		t.addComponent("2D,DOM,Collision,SpriteAnimation,amulet")
		//		.requires("WiredHitBox")
		.onHit("Witch", function (ent) {
			if (!t._hit) {
				t._hit = 1;
				t.animate("disappear", 24);
				Crafty.trigger("NewScore", {
					x:t.x - 60,
					y:t.y - 30
				});
			}
		})
		.animate("disappear", 0, 0, 2)
		.collision([0, 0], [t.w, 0], [t.w, t.h + 120], [0, t.h + 120]);
	},
	charm:function (dx) {
		var t = this.bind("AnimationEnd", function () {
			t.retrieve = 1;
			t.x = -999;
			t.y = -999;
		});
		t.retrieve = 0;
		if (dx) {
			t.dx = dx;
			return  t.bind("EnterFrame", t._enterFrame);
		}
		return t;
	},
	_enterFrame: function(f) {
		var t = this;
		t.x += t.dx;
		if (t.x < 62) {
			t.x = 62;
			t.dx = -t.dx;
		}
		if (t.x > 592) {
			t.x = 592;
			t.dx = -t.dx;
		}
	},
	resetCharm: function() {
		this._hit = 0;
		this.__coord[0] = 0;
		this.unbind("EnterFrame", this._enterFrame);
		return this;
	}
});

Crafty.c("Score", {
	life:0,
	score:function (score, x, y, flyAway) {
		var t = this;
		if (flyAway) {
			t.requires("2D,DOM,nums" + score)
			.bind("EnterFrame", function () {
				t.y -= 4;
				t.life++;
				if (t.life > 30) {
					t.destroy();
				}
			});
		} else
			t.requires("2D,DOM,nf" + score);
		t.x = x;
		t.y = y;
		t.z = 1;
		return t;
	},
	init:function () {}
});

Crafty.c("Updater", {
	world:null,
	counter:30,
	init:function () {
		var t = this;
		t.bind("EnterFrame", function (f) {
			updating = 1;
			t.counter++;
			var i = 0, comps, stage = t.world.map, dy = 7;
			if (t.counter > 30) {
				updating = 0;
				t.counter = 30;
				return;
			}
			t.world.witch.y += dy;

			comps = t.world.platforms;
			for (; i < comps.length; i++) {
				comps[i].y += dy;
			}
			if (comps[0].y > height) {
				getPlatformBack(t.world.precreateObjs, comps.shift());
			}

			comps = t.world.charms;
			for (i = 0; i < comps.length; i++) {
				comps[i].y += dy;
			}
			if (comps.length && (comps[0].retrieve || comps[0].y > height)) {
				t.world.precreateObjs.charms.push(comps.shift().attr({x:-999, y:-999}).resetCharm());
			}
			var dd = dy * 0.3;
			for (i = 0; i < stage.length; i++) {
				stage[i][1] += dd;
			}
			if (stage.length && stage[0][1] > -152) {
				var p = stage.shift(), plt = platformPool(t.world.precreateObjs, p[2])
				.platform(p[2], p[3] * 3.3)
				.attr({
					x:p[0] * 3.3,
					y:p[1] * 3.3 + 400
				});

				t.world.platforms.push(plt);
				if (stage.length < 4) {
					//make it fix in CLEAR stage
					plt._fix = 1;
				}
				if (p[4]) {
					t.world.charms.push(charmPool(t.world.precreateObjs)
					.attr({
						x:p[0] * 3.3 + 62,
						y:p[1] * 3.3 + 320
					}).charm(p[5] * 3.3));
				}
			}
			t.world.platform.y += dy;
			for (i = 0; i < t.world.scores.length; i++) {
				t.world.scores[i].y += dy;
			}
			for (i = 0; i < 3; i++) {
				t.world.background[i].y += 0.333;
			}
		});
	},
	updater: function (map) {
		this.world = map;
		return this;
	},
	restart: function() {
		updating = 1;
		this.counter = 0;
	}
});

/**-----------------------------------------------------------------------------
 * Scenes
 -----------------------------------------------------------------------------*/

Crafty.scene("LoadingScene", function () {
	var toLoad = [];
	for (var i in Crafty.assets) {
		toLoad.push(i);
	}
	var percent = Crafty.e("2D,Text,DOM,Color").text("0%")
	.attr({
		x:200,
		y:640
	})
	.textColor("#ffffff",1)
	.textFont({
		weight:'100',
		size:'40px',
		family:'"Arial",sans-serif'
	});

	Crafty.load(toLoad, function () {
		Crafty.scene("Intro");
	},
	function (d) {
		percent.text(Math.floor(d.percent) + "%");
	});

	Crafty.e("2D,Text,DOM,Color").text("Loading...")
	.attr({
		x:200,
		y:600
	})
	.textColor("#ffffff")
	.textFont({
		weight:'100',
		size:'40px',
		family:'"Arial",sans-serif'
	})
	.bind('EnterFrame', function (frame) {
		var f = frame.frame % 48;
		if (f % 12 == 0) {
			this.text("Loading" + "....".substr(0, f / 12));
		}
	});
});

Crafty.scene("Intro", function () {
	Crafty.e("2D,DOM,sky_m").attr({
		y:-695
	});
	Crafty.e("2D,DOM,bgr_land").attr({
		y:0
	});
	Crafty.e("witchIntro");

	Crafty.e("Btn,intrBtn")
	.btn(function (e) {
		if (is5Prd(e) || isLeftMouseClk(e)) {
			Crafty.scene("HowToPlay1");
		}
	})
	.attr({
		x:225,
		y:1070
	});

	Crafty.e("gNameC");

	Crafty.e("2D,Color,DOM").color('rgba(255,255,255,0.6)')
	.attr({
		x:0,
		y:1151,
		w:800,
		h:49
	});
	Crafty.e("2D,Text,DOM")
	.textColor("#000000").text("(C)RS").attr({
		x:340,
		y:1145
	})
	.textFont({
		weight:'100',
		size:'40px',
		family:'"Arial",sans-serif'
	});
});

Crafty.scene("HowToPlay1",
	function () {
		Crafty.e("2D,DOM,sky_h").attr({
			x:0,
			y:-80
		});
		Crafty.e("2D,DOM,Color").color('rgba(1,1,1,0.54)')
		.attr({
			x:0,
			y:0,
			w:800,
			h:1200
		});
		Crafty.e("2D,DOM,textIntr").attr({
			x:150,
			y:410
		});
		Crafty.e("2D,DOM,htpl").attr({
			x:136,
			y:270
		});
		Crafty.e("Btn,htp0").attr({
			x:30,
			y:1100
		})
		.btn(function (e) {
			if (isLeftMouseClk(e) || is0Prd(e)) {
				Crafty.scene("GamePlay");
			}
		});
		Crafty.e("Btn,htp5").attr({
			x:410,
			y:1100
		})
		.btn(function (e) {
			if (isLeftMouseClk(e) || is5Prd(e) || isStarPrd(e, this)) {
				Crafty.scene("HowToPlay2");
			}
		});

		Crafty.e("2D,Text,DOM").text(".");
	});

Crafty.scene("HowToPlay2",
	function () {
		Crafty.e("2D,Text,DOM").text(".");
		Crafty.e("2D,DOM,sky_m").attr({
			x:0,
			y:0
		});
		Crafty.e("2D,DOM,Color").color('rgba(1,1,1,0.54)')
		.attr({
			x:0,
			y:0,
			w:800,
			h:1200
		});
		Crafty.e("2D,DOM,htpl").attr({
			x:136,
			y:270
		});
		Crafty.e("2D,DOM,textHlp").attr({
			x:81,
			y:500
		});

		Crafty.e("Btn,intrBtn").attr({
			x:225,
			y:1100
		})
		.btn(function (e) {
			if (isLeftMouseClk(e) || is5Prd(e)) {
				Crafty.scene("GamePlay");
			}
		});
	});


Crafty.scene("GamePlay", function () {
	Crafty.e("2D,Text,DOM").text(".");
	var score = 0, scores = [], i,
	amulet = 0,
	stage = createStage();

//	stage.splice(0, 94);
//	for (var i = 0; i < stage.length; i++) {
//		stage[i][1] += 9500;
//	}
	var createScore = function (score, x, y, fly) {
		var s = "" + score, ents = [], i;
		if (!fly) {
			for (i = 0; i < scores.length; i++) {
				scores[i].destroy();
			}
		}
		for (i = 0; i < s.length; i++) {
			var ent = Crafty.e("Score").score(s[i].valueOf(), x + i * 37, y, fly);
			if (fly) {
				ents.push(ent);
			} else {
				scores.push(ent);
			}
		}
		return ents;
	};

	createScore(0, 173, 20, false);
	var _scores = [];
	var newScore = function (params) {
		amulet += 100;
		score += amulet;
		createScore(score, 173, 20, false);
		_scores = createScore(amulet, params.x, params.y, true);
	};
	Crafty.bind("NewScore", newScore);

	var _backgrounds = [Crafty.e("2D,DOM,bgr_land").attr({y:-80}),
			Crafty.e("2D,DOM,sky_m").attr({y:-1279}),
			Crafty.e("2D,DOM,sky_h").attr({y:-2558}),
			Crafty.e("2D,DOM,moon,SpriteAnimation")
			.animate("light", 0, 0, 5)
			.attr({x:70, y:-1500})
			.bind("Clear", function() {
				this.animate("light", 20);
			})],
		plat = Crafty.e("transPlatform"),
		_platforms = [],
		_charms = [],
		precreateObjs = precreateObjects();

	for (i = 0; i < 4; i++) {
		var p = stage.shift();
		_platforms.push(platformPool(precreateObjs, p[2])
		.platform(p[2], p[3] * 3.33)
		.attr({
			x:p[0] * 3.33,
			y:p[1] * 3.33 + 400
		}));
		if (p[4]) {
			_charms.push(charmPool(precreateObjs).attr({
				x:p[0] * 3.33 + 62,//86
				y:p[1] * 3.33 + 320
			}).charm(p[5] * 3.33));
		}
	}
	var _witch = Crafty.e("2D,DOM,Witch").attr({
		x:310,
		y:950,
		z:1
	});

	var updater = Crafty.e("Updater").updater({
		platform:plat,
		platforms:_platforms,
		witch:_witch,
		charms:_charms,
		background:_backgrounds,
		scores:_scores,
		map: stage,
		precreateObjs: precreateObjs
	});

	var updateWorld = function () {
		updater.restart();
	};
	Crafty.bind("UpdateWorld", updateWorld);

	var clearedScore = function() {
		Crafty.e("2D,DOM,SpriteAnimation,clear,Delay").attr({x:800, y:140})
		.animate("plSc2", [[0, 0], [1, 0], [0, 0], [1, 0], [0, 0]])
		.bind("EnterFrame", function() {
			this.x -= 15;
			if (this.x < 144 && this.x != 144) {
				this.x = 144;
				this.animate("plSc2", 6);
			}
		})
		.bind("AnimationEnd", function(reel) {
			Crafty.e("2D,DOM,clear").attr({x:144, y: 140});
			this.destroy();
			setTimeout(function() {
				Crafty.e("2D,DOM,score2").attr({x:210, y:300});
				var scr = "" + score, x = (800 - scr.length * 80) / 2;
				for (var i = 0; i < scr.length; i++) {
					Crafty.e("2D,DOM,f" + scr[i]).attr({x:x + i*80, y:420});
				}
				Crafty.e("Btn,restartB").attr({
					x:225,
					y:690
				})
				.btn(function (e) {
					if (isLeftMouseClk(e) || is0Prd(e)) {
						Crafty.scene("Intro");
					}
				});
				var j = 260;
				Crafty.e("2D,DOM,Color").attr({w:800, h:800})
				.color('rgb(255,255,255)')
				.bind("EnterFrame", function(f) {
					j -= 5;
					this.alpha = j / 255;
					if (j <= 0) {
						this.destroy();
					}
				});
			}, 500);
		});

		Crafty.unbind("GameOver", gameOver);
		Crafty.unbind("UpdateWorld", updateWorld);
		Crafty.unbind("NewScore", newScore);
		Crafty.unbind("Cleared", clearedScore);
	};
	Crafty.bind("Cleared", clearedScore);


	if (Crafty.mobile) {
		var t1 = Crafty.e("TouchControl").attr({
			x:0, y:0, w: 800, h: 1200, z: 8
		});
	}

	var gameOver = function () {
		Crafty.e("2D,DOM,SpriteAnimation,gmov")
		.bind("EnterFrame", function() {
			this.y -= 2;
			if (this.y < 400) {
				this.y = 400;
			}
			this.alpha = (450 - this.y) / 50.0;
		})
		.attr({x:100, y:450})
		.alpha = 0.1;
		Crafty.e("Btn,htp0").attr({
			x:225,
			y:1090
		})
		.btn(function (e) {
			if (isLeftMouseClk(e) || is0Prd(e) || isStarPrd(e)) {
				Crafty.scene("Intro");
			}
		});
		updater.destroy();
		Crafty.unbind("GameOver", gameOver);
		Crafty.unbind("UpdateWorld", updateWorld);
		Crafty.unbind("NewScore", newScore);
		Crafty.unbind("Cleared", clearedScore);
		if (Crafty.mobile) {
			t1.destroy();
			t2.destroy();
			t3.destroy();
		}
	};
	Crafty.bind("GameOver", gameOver);

	var ani = 1;
	Crafty.e("2D,DOM,start,SpriteAnimation")
	.animate("start", [[1, 0], [2, 0], [1, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])
	.attr({x:1000, y:350})
	.bind("EnterFrame", function() {
		var t = this;
		t.x -= 20;
		if (t.x < 274 && ani) {
			t.x = 274;
			t.animate("start", 20);
			ani = 0;
		}
		if (t.isPlaying("start")) {
			t.x = 274;
		}
		if (t.x < -1000) t.destroy();
	});

	Crafty.e("2D,DOM,scorefinal").attr({x:15, y:20, z: 3});
});
var zzz = 9999;
function precreateObjects() {
	var platforms = [], charms = [], i, j;
	for (i = 1; i <= 5; i++) {
		platforms[i] = [];
		platforms[1][i-1] = Crafty.e('platform').attr({x:zzz, y:zzz});
	}
	return {platforms: platforms, charms: charms};
}

function platformPool(precreateObjs, type) {
	var plats = precreateObjs.platforms;
	if (type > 1) {
		for (var i = 0; i < plats[type-1].length; i++) {
			plats[type-1].shift().destroy();
			plats[type].push(Crafty.e('platform').attr({x:zzz, y:zzz}));
		}
	}
	if (plats[type].length === 0) {
		return Crafty.e("platform");
	} else {
		return plats[type].shift();
	}
}

function charmPool(precreateObjs) {
	var charms = precreateObjs.charms;
	if (charms.length === 0) {
		return Crafty.e("Charm").attr({x:zzz, y:zzz});
	} else {
		return charms.pop();
	}
}

function getPlatformBack(precreateObjs, plf) {
	precreateObjs.platforms[plf.rock].push(plf.attr({x:9999, y:9999}));
}

/**-----------------------------------------------------------------------------
 * Main
 -----------------------------------------------------------------------------*/
//window.onload = function () {
$(function() {
	$('meta[name=viewport]').remove();
	Crafty.gameId = "chrisnomagicstep";
	Crafty.init(800, 1200);
	Crafty.background("rgb(0, 0, 0)");

	Crafty.scene("LoadingScene");
});

