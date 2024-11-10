extends CanvasLayer

@onready var meditationUI: Control = $MeditationChoice
@onready var simonUI: Control = $SimonChoice
@onready var player: Player = $"/root/CalmHaven/Player"

func _show_meditation_ui() -> void:
	meditationUI.visible = true
	var tween = get_tree().create_tween()
	tween.tween_property(meditationUI, "modulate:a", 1.0, 1).set_trans(Tween.TRANS_LINEAR)

func _on_meditation_area_body_entered(body: Node2D) -> void:
	if body.is_in_group("player"):
		body.set_blocked()
		self._show_meditation_ui()

func _start_meditation() -> void:
	var scene = load("res://scenes/minigames/breathing_minigame.tscn")
	var ins = scene.instantiate()
	get_tree().current_scene.add_child(ins)
	ins.connect("finished", self._finish_meditation)
	self._hide_meditation_ui()

func _finish_meditation() -> void:
	player.set_unblocked()

func _hide_meditation_ui() -> void:
	var tween = get_tree().create_tween()
	tween.tween_property(meditationUI, "modulate:a", 0.0, 1).set_trans(Tween.TRANS_LINEAR)
	await tween.finished
	meditationUI.visible = true
	player.set_unblocked()

func _on_simon_body_entered(body: Node2D) -> void:
	if body.is_in_group("player"):
		body.set_blocked()
		self._show_simon_ui()

func _show_simon_ui() -> void:
	simonUI.visible = true
	var tween = get_tree().create_tween()
	tween.tween_property(simonUI, "modulate:a", 1.0, 1).set_trans(Tween.TRANS_LINEAR)

func _start_simon() -> void:
	var scene = load("res://scenes/minigames/simon_says_minigame.tscn")
	var ins = scene.instantiate()
	get_tree().current_scene.add_child(ins)
	ins.connect("finished", self._finish_simon)
	self._hide_simon_ui()

func _hide_simon_ui() -> void:
	var tween = get_tree().create_tween()
	tween.tween_property(simonUI, "modulate:a", 0.0, 1).set_trans(Tween.TRANS_LINEAR)
	await tween.finished
	simonUI.visible = false
	player.set_unblocked()

func _finish_simon() -> void:
	player.set_unblocked()
