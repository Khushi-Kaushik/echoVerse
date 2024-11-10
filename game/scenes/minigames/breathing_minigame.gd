extends Node2D

signal finished

var duration: float = 120

@onready var timeBtnContainer: HBoxContainer = $CanvasLayer/Instructions/HBoxContainer
@onready var animationPlayer: AnimationPlayer = $AnimationPlayer

@onready var circle: Ring2D = $CanvasLayer/Game/Circle
@onready var gameLabel: Label = $CanvasLayer/Game/Label

func _play_instructions_anim() -> void:
	animationPlayer.play("Instructions")

func _start_minigame(dur: float = 120) -> void:
	self.duration = dur
	
	for child in timeBtnContainer.get_children():
		child.disabled = true
	
	animationPlayer.play("InstructionsCleanup")

func _run_game_loop(count: int) -> void:
	# 1. Grow the ring
	gameLabel.set_text("Breathe In")
	var tween = get_tree().create_tween()
	tween.tween_property(circle, "ring_radius_outer", 60, 4).set_trans(Tween.TRANS_LINEAR)
	await tween.finished
	
	# 2. Wait
	gameLabel.set_text("Hold")
	await get_tree().create_timer(4.0).timeout
	
	# 3. Shrink the ring
	gameLabel.set_text("Breathe Out")
	var tween2 = get_tree().create_tween()
	tween2.tween_property(circle, "ring_radius_outer", 0, 4).set_trans(Tween.TRANS_LINEAR)
	await tween2.finished
	
	if count > 1:
		_run_game_loop(count - 1)
	else:
		# Stop the minigame and move to the next page
		$CanvasLayer/Game.visible = false
		animationPlayer.play("exit")

func _start_game() -> void:
	$CanvasLayer/Game.visible = true
	var count = round(duration / 12)
	_run_game_loop(count)

func _delete_self() -> void:
	self.emit_signal("finished")
	self.queue_free()
