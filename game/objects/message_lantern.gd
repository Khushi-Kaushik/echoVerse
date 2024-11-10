extends Node2D

@export var SPEED: int = 20
@export var XOFFSET: int = 50

var initial_x: float
var time: float = 0
var message: String = "Hum jeetenge CBS"

@onready var label: Label = $Label

func _ready() -> void:
	self.initial_x = self.global_position.x
	self.label.text = self.message

func _physics_process(delta: float) -> void:
	self.global_position.y -= SPEED * delta
	
	self.global_position.x = self.initial_x + (cos(time * 2) * XOFFSET)
	time += delta

func _off_screen() -> void:
	self.queue_free()
