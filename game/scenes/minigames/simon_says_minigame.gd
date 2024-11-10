extends Node2D

signal finished

@onready var animationPlayer: AnimationPlayer = $AnimationPlayer

func _ready():
	for i in range(button_nodes.size()):
		button_nodes[i].connect("pressed", self._on_button_pressed.bind(i))

func _play_instructions_anim() -> void:
	animationPlayer.play("instructions")

func _on_start_pressed() -> void:
	animationPlayer.play("instructionsCleanup")

# Game
@export var colors := [Color.RED, Color.BLUE, Color.GREEN, Color.YELLOW]
@export var button_nodes : Array[Button] = []
@export var show_sequence_delay := 1.0
@export var player_input_delay := 0.5

var simon_sequence = []
var player_sequence = []
var is_player_turn = false
var current_step = 0

func start_game():
	simon_sequence.clear()
	player_sequence.clear()
	current_step = 0
	is_player_turn = false
	add_new_step()

func add_new_step():
	simon_sequence.append(randi() % button_nodes.size())
	show_simon_sequence()

func show_simon_sequence():
	is_player_turn = false
	current_step = 0
	for i in range(simon_sequence.size()):
		var button_index = simon_sequence[i]
		await get_tree().create_timer(show_sequence_delay * i).timeout
		flash_button(button_index)
		await get_tree().create_timer(show_sequence_delay * simon_sequence.size()).timeout
	is_player_turn = true

func flash_button(button_index):
	var button = button_nodes[button_index]
	button.modulate = colors[button_index].lightened(0.9)
	await get_tree().create_timer(0.5).timeout
	button.modulate = colors[button_index]

func _on_button_pressed(button_index):
	if not is_player_turn:
		return

	player_sequence.append(button_index)
	flash_button(button_index)

	if player_sequence[current_step] != simon_sequence[current_step]:
		game_over()
		return

	current_step += 1

	if current_step >= simon_sequence.size():
		is_player_turn = false
		player_sequence.clear()
		add_new_step()

func game_over():
	print("Game Over! You reached step:", simon_sequence.size() - 1)
	$CanvasLayer/Game.visible = false
	animationPlayer.play("exit")

func delete_self() -> void:
	emit_signal("finished")
	self.queue_free()
