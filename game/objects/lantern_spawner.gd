extends Node2D

const LanternScene: PackedScene = preload("res://objects/message_lantern.tscn")

@export var spawn_range: int = 64
@export var spawn_delay: float = 4

@onready var childrenHolder: Node2D = $Children
@onready var timer: Timer = $Timer
@onready var http_request = $HTTPRequest

var msg = []
var idx = 0

func _ready() -> void:
	self.timer.wait_time = spawn_delay
	self.timer.connect("timeout", self._spawn)

func _spawn() -> void:
	if idx >= msg.length:
		return
	
	var lantern = LanternScene.instantiate()
	var offset: Vector2 = Vector2(randf_range(-spawn_range, spawn_range), randf_range(-spawn_range, spawn_range))
	lantern.position = Vector2.ZERO # + offset
	lantern.message = msg[idx].message
	childrenHolder.add_child(lantern)
	
	idx += 1

func fetch_messages():
	# Connect the request_completed signal if not already connected
	if not http_request.is_connected("request_completed", self._on_request_completed):
		http_request.connect("request_completed", self._on_request_completed)
		
	# Make a GET request to the specified URL
	var error = http_request.request("http://localhost")
	if error != OK:
		print("Failed to send request: ", error)

func _on_request_completed(result: int, response_code: int, headers: Array, body: PackedByteArray):
	if response_code == 200:
		var message_data = body.get_string_from_utf8()  # Convert response to string
		var json = JSON.new()
		var messages = json.parse(message_data)
		if messages.error == OK:
			print("Fetched Messages:", messages.result)  # Process or display messages here
			msg = messages.result
		else:
			print("Failed to parse JSON response")
	else:
		print("Error fetching messages. HTTP Response Code:", response_code)
		
