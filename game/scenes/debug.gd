extends Node2D

func _ready() -> void:
	print("Start")
	await get_tree().create_timer(10.0).timeout
	print("Stop")
