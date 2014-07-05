var floorHeight = 30;
var floorWidth = 200;
var elevatorWidth = 50;
var elevatorPadding = 10;

$(document).ready(function() {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.font = "Arial";
	console.log(ctx);

	drawState(canvas, ctx, timeline.pop());
});

function getMaxFloors(state) {
	return _.max(_.map(state.elevators, function(item) {
		return item.floorCount;
	}));
}

function getFloorY(state, floor) {
	var maxFloors = getMaxFloors(state);
	return maxFloors * floorHeight - floorHeight * floor;
}

function drawElevators(canvas, ctx, state) {
	var maxFloors = getMaxFloors(state);
	_.each(_.range(maxFloors), function(index) {
		var y = getFloorY(state, index);
		ctx.strokeText("Floor " + index, 10, y - 5);
		ctx.beginPath();
		ctx.moveTo(0, y);
		ctx.lineTo(floorWidth, y);
		ctx.stroke();
	});
	_.each(state.elevators, function(item, index) {
		var x1 = floorWidth + elevatorWidth * index + elevatorPadding * (index + 1);
		var y1 = getFloorY(state, 0);
		var y2 = getFloorY(state, item.floorCount);

		// Draw elevator outline
		ctx.beginPath();
		ctx.rect(x1, y1, elevatorWidth, y2 - y1);
		ctx.stroke();

		// Draw elevator floor
		ctx.beginPath();
		ctx.rect(x1 + 2, getFloorY(state, item.floor) - floorHeight, elevatorWidth - 4, floorHeight);
		ctx.fill();
	});
}

function drawCallingFloors(canvas, ctx, state) {
	var maxFloors = getMaxFloors(state);
	_.each(_.range(maxFloors), function(index))
		//var 
	});
}

function drawState(canvas, ctx, state) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	drawElevators(canvas, ctx, state);
	drawCallingFloors(canvas, ctx, state);

	setTimeout(function() {
		drawState(canvas, ctx, timeline.pop());
	}, 1000);
}

var timeline = [
    {
        "callingFloors": [],
        "elevators": [
            {
                "floor": 2,
                "floorCount": 12,
                "ticksLeft": 0,
                "state": "still",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": null,
                "pushedButtons": [],
                "travelers": []
            },
            {
                "floor": 2,
                "floorCount": 12,
                "ticksLeft": 0,
                "state": "still",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": null,
                "pushedButtons": [],
                "travelers": []
            }
        ]
    },
    {
        "callingFloors": [
            0
        ],
        "elevators": [
            {
                "floor": 2,
                "floorCount": 12,
                "ticksLeft": 0,
                "state": "still",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": null,
                "pushedButtons": [],
                "travelers": []
            },
            {
                "floor": 2,
                "floorCount": 12,
                "ticksLeft": 1,
                "state": "moving",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 0,
                "pushedButtons": [],
                "travelers": []
            }
        ]
    },
    {
        "callingFloors": [
            0,
            0
        ],
        "elevators": [
            {
                "floor": 2,
                "floorCount": 12,
                "ticksLeft": 0,
                "state": "still",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": null,
                "pushedButtons": [],
                "travelers": []
            },
            {
                "floor": 1,
                "floorCount": 12,
                "ticksLeft": 1,
                "state": "moving",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 0,
                "pushedButtons": [],
                "travelers": []
            }
        ]
    },
    {
        "callingFloors": [
            0,
            0,
            3
        ],
        "elevators": [
            {
                "floor": 2,
                "floorCount": 12,
                "ticksLeft": 1,
                "state": "moving",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 3,
                "pushedButtons": [],
                "travelers": []
            },
            {
                "floor": 0,
                "floorCount": 12,
                "ticksLeft": 1,
                "state": "moving",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 0,
                "pushedButtons": [],
                "travelers": []
            }
        ]
    },
    {
        "callingFloors": [
            0,
            0,
            3
        ],
        "elevators": [
            {
                "floor": 3,
                "floorCount": 12,
                "ticksLeft": 1,
                "state": "moving",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 3,
                "pushedButtons": [],
                "travelers": []
            },
            {
                "floor": 0,
                "floorCount": 12,
                "ticksLeft": 6,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 0,
                "pushedButtons": [],
                "travelers": []
            }
        ]
    },
    {
        "callingFloors": [
            0,
            0,
            3
        ],
        "elevators": [
            {
                "floor": 3,
                "floorCount": 12,
                "ticksLeft": 6,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 3,
                "pushedButtons": [],
                "travelers": []
            },
            {
                "floor": 0,
                "floorCount": 12,
                "ticksLeft": 5,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 0,
                "pushedButtons": [],
                "travelers": []
            }
        ]
    },
    {
        "callingFloors": [
            0,
            0,
            3
        ],
        "elevators": [
            {
                "floor": 3,
                "floorCount": 12,
                "ticksLeft": 5,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 3,
                "pushedButtons": [],
                "travelers": []
            },
            {
                "floor": 0,
                "floorCount": 12,
                "ticksLeft": 4,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 0,
                "pushedButtons": [],
                "travelers": []
            }
        ]
    },
    {
        "callingFloors": [
            0,
            0,
            3
        ],
        "elevators": [
            {
                "floor": 3,
                "floorCount": 12,
                "ticksLeft": 4,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 3,
                "pushedButtons": [],
                "travelers": []
            },
            {
                "floor": 0,
                "floorCount": 12,
                "ticksLeft": 3,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 0,
                "pushedButtons": [],
                "travelers": []
            }
        ]
    },
    {
        "callingFloors": [
            0,
            0,
            3
        ],
        "elevators": [
            {
                "floor": 3,
                "floorCount": 12,
                "ticksLeft": 3,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 3,
                "pushedButtons": [],
                "travelers": []
            },
            {
                "floor": 0,
                "floorCount": 12,
                "ticksLeft": 2,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 0,
                "pushedButtons": [],
                "travelers": []
            }
        ]
    },
    {
        "callingFloors": [
            0,
            0,
            3
        ],
        "elevators": [
            {
                "floor": 3,
                "floorCount": 12,
                "ticksLeft": 2,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 3,
                "pushedButtons": [],
                "travelers": []
            },
            {
                "floor": 0,
                "floorCount": 12,
                "ticksLeft": 1,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 0,
                "pushedButtons": [],
                "travelers": []
            }
        ]
    },
    {
        "callingFloors": [
            3
        ],
        "elevators": [
            {
                "floor": 3,
                "floorCount": 12,
                "ticksLeft": 1,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 3,
                "pushedButtons": [],
                "travelers": []
            },
            {
                "floor": 0,
                "floorCount": 12,
                "ticksLeft": 1,
                "state": "moving",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 4,
                "pushedButtons": [
                    5,
                    4
                ],
                "travelers": [
                    {
                        "to": 5,
                        "from": 0,
                        "id": "Dr. Landon Glover (1)"
                    },
                    {
                        "to": 4,
                        "from": 0,
                        "id": "Dr. Nicholas Mills (2)"
                    }
                ]
            }
        ]
    },
    {
        "callingFloors": [],
        "elevators": [
            {
                "floor": 3,
                "floorCount": 12,
                "ticksLeft": 1,
                "state": "moving",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 6,
                "pushedButtons": [
                    6
                ],
                "travelers": [
                    {
                        "to": 6,
                        "from": 3,
                        "id": "Dr. Arthur Parker (3)"
                    }
                ]
            },
            {
                "floor": 1,
                "floorCount": 12,
                "ticksLeft": 1,
                "state": "moving",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 4,
                "pushedButtons": [
                    5,
                    4
                ],
                "travelers": [
                    {
                        "to": 5,
                        "from": 0,
                        "id": "Dr. Landon Glover (1)"
                    },
                    {
                        "to": 4,
                        "from": 0,
                        "id": "Dr. Nicholas Mills (2)"
                    }
                ]
            }
        ]
    },
    {
        "callingFloors": [],
        "elevators": [
            {
                "floor": 4,
                "floorCount": 12,
                "ticksLeft": 1,
                "state": "moving",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 6,
                "pushedButtons": [
                    6
                ],
                "travelers": [
                    {
                        "to": 6,
                        "from": 3,
                        "id": "Dr. Arthur Parker (3)"
                    }
                ]
            },
            {
                "floor": 2,
                "floorCount": 12,
                "ticksLeft": 1,
                "state": "moving",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 4,
                "pushedButtons": [
                    5,
                    4
                ],
                "travelers": [
                    {
                        "to": 5,
                        "from": 0,
                        "id": "Dr. Landon Glover (1)"
                    },
                    {
                        "to": 4,
                        "from": 0,
                        "id": "Dr. Nicholas Mills (2)"
                    }
                ]
            }
        ]
    },
    {
        "callingFloors": [],
        "elevators": [
            {
                "floor": 5,
                "floorCount": 12,
                "ticksLeft": 1,
                "state": "moving",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 6,
                "pushedButtons": [
                    6
                ],
                "travelers": [
                    {
                        "to": 6,
                        "from": 3,
                        "id": "Dr. Arthur Parker (3)"
                    }
                ]
            },
            {
                "floor": 3,
                "floorCount": 12,
                "ticksLeft": 1,
                "state": "moving",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 4,
                "pushedButtons": [
                    5,
                    4
                ],
                "travelers": [
                    {
                        "to": 5,
                        "from": 0,
                        "id": "Dr. Landon Glover (1)"
                    },
                    {
                        "to": 4,
                        "from": 0,
                        "id": "Dr. Nicholas Mills (2)"
                    }
                ]
            }
        ]
    },
    {
        "callingFloors": [],
        "elevators": [
            {
                "floor": 6,
                "floorCount": 12,
                "ticksLeft": 1,
                "state": "moving",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 6,
                "pushedButtons": [
                    6
                ],
                "travelers": [
                    {
                        "to": 6,
                        "from": 3,
                        "id": "Dr. Arthur Parker (3)"
                    }
                ]
            },
            {
                "floor": 4,
                "floorCount": 12,
                "ticksLeft": 1,
                "state": "moving",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 4,
                "pushedButtons": [
                    5,
                    4
                ],
                "travelers": [
                    {
                        "to": 5,
                        "from": 0,
                        "id": "Dr. Landon Glover (1)"
                    },
                    {
                        "to": 4,
                        "from": 0,
                        "id": "Dr. Nicholas Mills (2)"
                    }
                ]
            }
        ]
    },
    {
        "callingFloors": [],
        "elevators": [
            {
                "floor": 6,
                "floorCount": 12,
                "ticksLeft": 6,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 6,
                "pushedButtons": [],
                "travelers": [
                    {
                        "to": 6,
                        "from": 3,
                        "id": "Dr. Arthur Parker (3)"
                    }
                ]
            },
            {
                "floor": 4,
                "floorCount": 12,
                "ticksLeft": 6,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 4,
                "pushedButtons": [
                    5
                ],
                "travelers": [
                    {
                        "to": 5,
                        "from": 0,
                        "id": "Dr. Landon Glover (1)"
                    },
                    {
                        "to": 4,
                        "from": 0,
                        "id": "Dr. Nicholas Mills (2)"
                    }
                ]
            }
        ]
    },
    {
        "callingFloors": [],
        "elevators": [
            {
                "floor": 6,
                "floorCount": 12,
                "ticksLeft": 5,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 6,
                "pushedButtons": [],
                "travelers": [
                    {
                        "to": 6,
                        "from": 3,
                        "id": "Dr. Arthur Parker (3)"
                    }
                ]
            },
            {
                "floor": 4,
                "floorCount": 12,
                "ticksLeft": 5,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 4,
                "pushedButtons": [
                    5
                ],
                "travelers": [
                    {
                        "to": 5,
                        "from": 0,
                        "id": "Dr. Landon Glover (1)"
                    },
                    {
                        "to": 4,
                        "from": 0,
                        "id": "Dr. Nicholas Mills (2)"
                    }
                ]
            }
        ]
    },
    {
        "callingFloors": [],
        "elevators": [
            {
                "floor": 6,
                "floorCount": 12,
                "ticksLeft": 4,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 6,
                "pushedButtons": [],
                "travelers": [
                    {
                        "to": 6,
                        "from": 3,
                        "id": "Dr. Arthur Parker (3)"
                    }
                ]
            },
            {
                "floor": 4,
                "floorCount": 12,
                "ticksLeft": 4,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 4,
                "pushedButtons": [
                    5
                ],
                "travelers": [
                    {
                        "to": 5,
                        "from": 0,
                        "id": "Dr. Landon Glover (1)"
                    },
                    {
                        "to": 4,
                        "from": 0,
                        "id": "Dr. Nicholas Mills (2)"
                    }
                ]
            }
        ]
    },
    {
        "callingFloors": [],
        "elevators": [
            {
                "floor": 6,
                "floorCount": 12,
                "ticksLeft": 3,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 6,
                "pushedButtons": [],
                "travelers": [
                    {
                        "to": 6,
                        "from": 3,
                        "id": "Dr. Arthur Parker (3)"
                    }
                ]
            },
            {
                "floor": 4,
                "floorCount": 12,
                "ticksLeft": 3,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 4,
                "pushedButtons": [
                    5
                ],
                "travelers": [
                    {
                        "to": 5,
                        "from": 0,
                        "id": "Dr. Landon Glover (1)"
                    },
                    {
                        "to": 4,
                        "from": 0,
                        "id": "Dr. Nicholas Mills (2)"
                    }
                ]
            }
        ]
    },
    {
        "callingFloors": [],
        "elevators": [
            {
                "floor": 6,
                "floorCount": 12,
                "ticksLeft": 2,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 6,
                "pushedButtons": [],
                "travelers": [
                    {
                        "to": 6,
                        "from": 3,
                        "id": "Dr. Arthur Parker (3)"
                    }
                ]
            },
            {
                "floor": 4,
                "floorCount": 12,
                "ticksLeft": 2,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 4,
                "pushedButtons": [
                    5
                ],
                "travelers": [
                    {
                        "to": 5,
                        "from": 0,
                        "id": "Dr. Landon Glover (1)"
                    },
                    {
                        "to": 4,
                        "from": 0,
                        "id": "Dr. Nicholas Mills (2)"
                    }
                ]
            }
        ]
    },
    {
        "callingFloors": [],
        "elevators": [
            {
                "floor": 6,
                "floorCount": 12,
                "ticksLeft": 1,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 6,
                "pushedButtons": [],
                "travelers": [
                    {
                        "to": 6,
                        "from": 3,
                        "id": "Dr. Arthur Parker (3)"
                    }
                ]
            },
            {
                "floor": 4,
                "floorCount": 12,
                "ticksLeft": 1,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 4,
                "pushedButtons": [
                    5
                ],
                "travelers": [
                    {
                        "to": 5,
                        "from": 0,
                        "id": "Dr. Landon Glover (1)"
                    },
                    {
                        "to": 4,
                        "from": 0,
                        "id": "Dr. Nicholas Mills (2)"
                    }
                ]
            }
        ]
    },
    {
        "callingFloors": [],
        "elevators": [
            {
                "floor": 6,
                "floorCount": 12,
                "ticksLeft": 0,
                "state": "still",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 6,
                "pushedButtons": [],
                "travelers": []
            },
            {
                "floor": 4,
                "floorCount": 12,
                "ticksLeft": 1,
                "state": "moving",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 5,
                "pushedButtons": [
                    5
                ],
                "travelers": [
                    {
                        "to": 5,
                        "from": 0,
                        "id": "Dr. Landon Glover (1)"
                    }
                ]
            }
        ]
    },
    {
        "callingFloors": [],
        "elevators": [
            {
                "floor": 6,
                "floorCount": 12,
                "ticksLeft": 0,
                "state": "still",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 6,
                "pushedButtons": [],
                "travelers": []
            },
            {
                "floor": 5,
                "floorCount": 12,
                "ticksLeft": 1,
                "state": "moving",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 5,
                "pushedButtons": [
                    5
                ],
                "travelers": [
                    {
                        "to": 5,
                        "from": 0,
                        "id": "Dr. Landon Glover (1)"
                    }
                ]
            }
        ]
    },
    {
        "callingFloors": [],
        "elevators": [
            {
                "floor": 6,
                "floorCount": 12,
                "ticksLeft": 0,
                "state": "still",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 6,
                "pushedButtons": [],
                "travelers": []
            },
            {
                "floor": 5,
                "floorCount": 12,
                "ticksLeft": 6,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 5,
                "pushedButtons": [],
                "travelers": [
                    {
                        "to": 5,
                        "from": 0,
                        "id": "Dr. Landon Glover (1)"
                    }
                ]
            }
        ]
    },
    {
        "callingFloors": [],
        "elevators": [
            {
                "floor": 6,
                "floorCount": 12,
                "ticksLeft": 0,
                "state": "still",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 6,
                "pushedButtons": [],
                "travelers": []
            },
            {
                "floor": 5,
                "floorCount": 12,
                "ticksLeft": 5,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 5,
                "pushedButtons": [],
                "travelers": [
                    {
                        "to": 5,
                        "from": 0,
                        "id": "Dr. Landon Glover (1)"
                    }
                ]
            }
        ]
    },
    {
        "callingFloors": [],
        "elevators": [
            {
                "floor": 6,
                "floorCount": 12,
                "ticksLeft": 0,
                "state": "still",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 6,
                "pushedButtons": [],
                "travelers": []
            },
            {
                "floor": 5,
                "floorCount": 12,
                "ticksLeft": 4,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 5,
                "pushedButtons": [],
                "travelers": [
                    {
                        "to": 5,
                        "from": 0,
                        "id": "Dr. Landon Glover (1)"
                    }
                ]
            }
        ]
    },
    {
        "callingFloors": [],
        "elevators": [
            {
                "floor": 6,
                "floorCount": 12,
                "ticksLeft": 0,
                "state": "still",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 6,
                "pushedButtons": [],
                "travelers": []
            },
            {
                "floor": 5,
                "floorCount": 12,
                "ticksLeft": 3,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 5,
                "pushedButtons": [],
                "travelers": [
                    {
                        "to": 5,
                        "from": 0,
                        "id": "Dr. Landon Glover (1)"
                    }
                ]
            }
        ]
    },
    {
        "callingFloors": [],
        "elevators": [
            {
                "floor": 6,
                "floorCount": 12,
                "ticksLeft": 0,
                "state": "still",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 6,
                "pushedButtons": [],
                "travelers": []
            },
            {
                "floor": 5,
                "floorCount": 12,
                "ticksLeft": 2,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 5,
                "pushedButtons": [],
                "travelers": [
                    {
                        "to": 5,
                        "from": 0,
                        "id": "Dr. Landon Glover (1)"
                    }
                ]
            }
        ]
    },
    {
        "callingFloors": [],
        "elevators": [
            {
                "floor": 6,
                "floorCount": 12,
                "ticksLeft": 0,
                "state": "still",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 6,
                "pushedButtons": [],
                "travelers": []
            },
            {
                "floor": 5,
                "floorCount": 12,
                "ticksLeft": 1,
                "state": "openclose",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 5,
                "pushedButtons": [],
                "travelers": [
                    {
                        "to": 5,
                        "from": 0,
                        "id": "Dr. Landon Glover (1)"
                    }
                ]
            }
        ]
    },
    {
        "callingFloors": [],
        "elevators": [
            {
                "floor": 6,
                "floorCount": 12,
                "ticksLeft": 0,
                "state": "still",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 6,
                "pushedButtons": [],
                "travelers": []
            },
            {
                "floor": 5,
                "floorCount": 12,
                "ticksLeft": 0,
                "state": "still",
                "timePerFloor": 1,
                "timeOpenClose": 6,
                "movingToFloor": 5,
                "pushedButtons": [],
                "travelers": []
            }
        ]
    }
];