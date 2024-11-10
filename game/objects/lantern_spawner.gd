extends Node2D

const LanternScene: PackedScene = preload("res://objects/message_lantern.tscn")

@export var spawn_range: int = 64
@export var spawn_delay: float = 4

@onready var childrenHolder: Node2D = $Children
@onready var timer: Timer = $Timer

func _ready() -> void:
	self.timer.wait_time = spawn_delay
	self.timer.connect("timeout", self._spawn)

func _spawn() -> void:
	var lantern = LanternScene.instantiate()
	var offset: Vector2 = Vector2(randf_range(-spawn_range, spawn_range), randf_range(-spawn_range, spawn_range))
	lantern.position = Vector2.ZERO # + offset
	childrenHolder.add_child(lantern)
